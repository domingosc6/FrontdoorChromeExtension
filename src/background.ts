import RequestSummaryController from "./controller/RequestSummaryController"
import "regenerator-runtime/runtime.js";
import './tooltip.css';

if (chrome.contextMenus != undefined) {

    try {
        chrome.contextMenus.create({
            title: "Resume this text",
            id: 'ResumeText',
            contexts: ["selection"]
        });
    } catch (error) {
        chrome.contextMenus.update(
            "ResumeText",
            {
                title: "Resume this text",
                contexts: ["selection"]
            }
            );
    }
    
    chrome.contextMenus.onClicked.addListener( (clickData) => {
        if(clickData.menuItemId == "ResumeText"){
            RequestSummaryController.useHandleClick(true);
        }
    })
}