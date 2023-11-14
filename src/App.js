import React from 'react';

// Add the necessary code in function App to build a page with a Title named "Computer Vision", a text input with prompt "Enter URL to analyze or textual prompt to generate an image" and two buttons below with will be "Analyze" and "Generate".
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Computer Vision</h1>
        <p>
          Enter URL to analyze or textual prompt to generate an image
        </p>
        <input type="text" id="input" />
        <button id="analyze" onClick={() => {}}>Analyze</button>
        <button id="generate" onClick={() => {}}>Generate</button>
      </header>
    </div>
  );
}

export default App;
