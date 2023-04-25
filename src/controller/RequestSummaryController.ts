import APIService from "../api/APIService";
    
    export async function useHandleClick() {
        try {
        chrome.tabs.query({active:true, windowId: chrome.windows.WINDOW_ID_CURRENT}, 
            function(tabs) {
            chrome.scripting.executeScript({
                target: {tabId: tabs[0].id!, allFrames: true},
                func: () => {
                return window.getSelection()?.toString()!;
                }
            }).then(injectionResults => {
                for (const {result} of injectionResults) {
                APIService.create(result!).then(completedSentence => {
                    return completedSentence.data.newSummary.resumedText;
                });
                }
            });
        });
        } catch (error) {
        console.error(error);
        throw error;
        }
    }

const RequestSummaryController = {
    useHandleClick
    };
    
export default RequestSummaryController;