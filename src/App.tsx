import React, { useState } from 'react'
import './App.css';

import fetchData from "./api/OpenAPIService";

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
              fetchData(result!).then(completedSentence => {
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
      <button className="button" onClick={useHandleClick}>Summarize</button>
      {completedSentence && <p>Summarized sentence: {completedSentence}</p>}
    </div>
    
  );
}

export default App;
