import React, { useState } from 'react'
import './App.css';

import fetchData from "./api/OpenAPIService";
import useSelectedText from "./utils/Utils";
import { text } from 'stream/consumers';

function App() {
  const [completedSentence, setCompletedSentence] = useState("");

  async function useHandleClick() {
    try {
      let textToSummarize : string | undefined = undefined;
      chrome.tabs.query({active:true, windowId: chrome.windows.WINDOW_ID_CURRENT}, 
        function(tabs) {
          console.log("This is the tab" + tabs[0]);
          chrome.scripting.executeScript({
            target: {tabId: tabs[0].id!, allFrames: true},
            func: () => {
              return window.getSelection()?.toString()!;
            }
          }).then(injectionResults => {
            for (const {result} of injectionResults) {
              textToSummarize = result;
              console.log("This is the result" + result);
              fetchData(textToSummarize!).then(completedSentence => {
                setCompletedSentence(completedSentence!);
              });
            }
          });
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container">
      <h2>Text Summarizer</h2>
      <button className="button" onClick={useHandleClick}>Complete Sentence</button>
      {completedSentence && <p>Completed sentence: {completedSentence}</p>}
    </div>
    
  );
}

export default App;
