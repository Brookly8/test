import React from "react";
import { useState } from "react";
import "./App.css";
import { Gallery } from "./components/Gallery/Gallery";
function App() {
  const [personList, setPersonList] = useState([]);

  return (
    <>
      <Gallery state={personList} setState={setPersonList}></Gallery>
    </>
  );
}

export default App;
