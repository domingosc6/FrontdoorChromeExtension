import APIService from "../api/APIService";

export async function scriptingToObtainSelectedText(tabId: number) {
    return chrome.scripting.executeScript({
            target: {tabId: tabId, allFrames: true},
            func: () => {
                const selection = window.getSelection()!;
                const range = selection.getRangeAt(0);
                let span = document.createElement("span");
                span.className = "classForToolTipOfResumedText";
                span.appendChild(range.extractContents());
                range.insertNode(span);
                return selection.toString();
            }
        });
}

export async function scriptingToSetToolTip(tabId: number, summary: string) {
    return chrome.scripting.executeScript({
        target: {tabId: tabId, allFrames: true, },
        args: [summary],
        func: (summary) => {
            const elementForTooltip = document.getElementsByClassName("classForToolTipOfResumedText")[0] as HTMLElement;
            elementForTooltip.classList.remove("classForToolTipOfResumedText");
            elementForTooltip.setAttribute("data", summary);
        }
    }).then(() => chrome.scripting.executeScript({
        target: {tabId: tabId, allFrames: true, },
        files: ["js/background.js"]
    }));
}

const RequestSummaryController = {
    scriptingToObtainSelectedText,
    scriptingToSetToolTip
    };
    
export default RequestSummaryController;