import React, { useState } from "react";
import Data from "./Data1.json";
import "./styles.css";

function App() {
  const [selectedTag, setSelectedTag] = useState("");
  
  const tags = ["production", "warehouse", "others"]; // Define your tags here

  const changeTag = (tag) => {
    setSelectedTag(tag);
  };

  const filteredPlants = selectedTag
    ? Data.filter((plant) => plant.tag === selectedTag)
    : Data;

  return (
    <div className="App">
      <h1>Plant Tags</h1>
      <div className="tags">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`tag ${selectedTag === tag ? "active" : ""}`}
            onClick={() => changeTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="plants">
        {filteredPlants.map((plant, index) => (
          <button key={index} className="plant-button">
            {plant.plant_name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
