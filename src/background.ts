import RequestSummaryController from "./controller/RequestSummaryController"
import "regenerator-runtime/runtime.js";
import './tooltip.css';

if (chrome.contextMenus != undefined) {

    chrome.contextMenus.create({
        title: "Resume this text",
        id: 'ResumeText',
        contexts: ["selection"]
    });
    
    chrome.contextMenus.onClicked.addListener( (clickData) => {
        if(clickData.menuItemId == "ResumeText"){
            RequestSummaryController.useHandleClick();
        }
    })
}