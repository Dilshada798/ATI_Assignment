import React, { useState } from "react";
import Data from "./Data1.json";
import "./styles.css";

function App() {
  const [selectedTag, setSelectedTag] = useState("");

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
        <button
          className={`tag ${selectedTag === "production" ? "active" : ""}`}
          onClick={() => changeTag("production")}
        >
          Production
        </button>
        <button
          className={`tag ${selectedTag === "warehouse" ? "active" : ""}`}
          onClick={() => changeTag("warehouse")}
        >
          Warehouse
        </button>
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
