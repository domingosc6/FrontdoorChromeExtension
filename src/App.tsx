import React, { useState } from 'react'
import './App.css';

import APIService from "./api/APIService";

function App() {
  const [completedSentence, setCompletedSentence] = useState("");

  async function useHandleClick() {
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
                console.log(completedSentence);
                setCompletedSentence(completedSentence.data.newSummary.resumedText);
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
      <button className="button" onClick={useHandleClick}>Summarize</button>
      {completedSentence && <p>Summarized sentence: {completedSentence}</p>}
    </div>
    
  );
}

export default App;
