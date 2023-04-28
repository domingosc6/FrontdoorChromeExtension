import APIService from "../api/APIService";
import InjectionScripts from "../utils/InjectionScripts";
    
export async function useHandleClick(isFromBackground: boolean) {
    try {
        chrome.tabs.query(
            {
                active: true, 
                windowId: chrome.windows.WINDOW_ID_CURRENT
            }, 
            function(tabs) {
                const tabId = tabs[0].id!;
                InjectionScripts.scriptingToObtainSelectedText(tabId).then(injectionResults => {
                    for (const {result} of injectionResults) {
                        if (result != '') {
                            APIService.create(result).then(completedSentence => {
                                const summary = completedSentence.data.summary.resumedText;
                                if (isFromBackground) {
                                    InjectionScripts.scriptingToSetToolTip(tabId, summary);
                                }
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