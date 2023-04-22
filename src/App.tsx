import React, { useState } from 'react'
import './App.css';

import fetchData from "./api/OpenAPIService";

function App() {
  const [input, setInput] = useState("");
  const [completedSentence, setCompletedSentence] = useState("");
  
  async function handleClick() {
    try {
      const completedSentence = await fetchData(input);
      setCompletedSentence(completedSentence!);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container">
      <h2>Text Summarizer</h2>
      <textarea
        value={input}
        onChange={(event) => setInput(event.target.value)}
        rows={5}
        placeholder=""
      />
      <button className="button" onClick={handleClick}>Complete Sentence</button>
      {completedSentence && <p>Completed sentence: {completedSentence}</p>}
    </div>
  );
}

export default App;
