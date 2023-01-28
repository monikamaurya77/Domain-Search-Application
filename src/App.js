import React, { useState } from "react";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import ResultContainer from "./components/ResultContainer";

const name = require("@rstacruz/startup-name-generator");

function App() {
  const [headerExpanded, setHeaderExpanded] = useState(true);
  const [suggestedNames, setSuggestedNames] = useState([]);

  // Animation
  const handleInputChange = (inputText) => {
    setHeaderExpanded(!(inputText.length > 0));
    setSuggestedNames(inputText.length > 0 ? name(inputText) : []);
  };

  return (
    <div className="main">
      <Header headerExpanded={headerExpanded} />
      <SearchBox onInputChange={handleInputChange} />
      <ResultContainer suggestedNames={suggestedNames} />
    </div>
  );
}

export default App;
