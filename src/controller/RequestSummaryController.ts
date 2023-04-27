import APIService from "../api/APIService";
    
    export async function useHandleClick() {
        try {
        chrome.tabs.query(
            {
                active:true, 
                windowId: chrome.windows.WINDOW_ID_CURRENT
            }, 
            function(tabs) {
                chrome.scripting.executeScript({
                    target: {tabId: tabs[0].id!, allFrames: true},
                    func: () => {
                        const selection = window.getSelection()!;
                        const range = selection.getRangeAt(0);
                        let span = document.createElement("span");
                        span.className = "classForToolTipOfResumedText";
                        span.appendChild(range.extractContents());
                        range.insertNode(span);
                        return selection.toString();
                    }
                }).then(injectionResults => {
                    for (const {result} of injectionResults) {
                        if (result != '') {
                            APIService.create(result).then(completedSentence => {
                                const summary = completedSentence.data.summary.resumedText;
                                chrome.scripting.executeScript({
                                    target: {tabId: tabs[0].id!, allFrames: true, },
                                    args: [summary],
                                    func: (summary) => {
                                        const elementForTooltip = document.getElementsByClassName("classForToolTipOfResumedText")[0] as HTMLElement;
                                        elementForTooltip.classList.remove("classForToolTipOfResumedText");
                                        elementForTooltip.setAttribute("data", summary);
                                        document.addEventListener('mousemove', evt => {
                                            let x = evt.clientX / innerWidth;
                                            let y = evt.clientY / innerHeight;
                                         
                                            document.documentElement.style.setProperty('--mouse-x', x.toString());
                                            document.documentElement.style.setProperty('--mouse-y', y.toString());
                                        });
                                    }
                                }).then(() => chrome.scripting.executeScript({
                                    target: {tabId: tabs[0].id!, allFrames: true, },
                                    files: ["js/background.js"]
                                }));
                                return summary;
                            });
                        }
                    }
                });
            }
        );
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

const RequestSummaryController = {
    useHandleClick
    };
    
export default RequestSummaryController;