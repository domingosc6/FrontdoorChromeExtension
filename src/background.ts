import RequestSummaryController from "./controller/RequestSummaryController"
import "regenerator-runtime/runtime.js";

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

//chrome.contextMenus.remove('ResumeText', function() {
//    chrome.contextMenus.create({
//      title: "Resume this text",
//      id: 'ResumeText',
//      contexts: ["selection"]
//    });
//  });