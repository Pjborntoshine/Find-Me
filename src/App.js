import "./styles.css";
import React from "react";
import List from "./components/List"; // Import the List component

function App() {
  return (
    <div className="App">
      <h1>Reach me</h1>
      <List /> {/* Render the List component */}
    </div>
  );
}

export default App;
