import React from "react";
import Counter from "./components/Counter";
import "./styles.css";

const INITIAL_STATE = { name: "Ivy" };
window.stateValues = [INITIAL_STATE];

function App() {
  return <Counter name={"Yuu"} />;
}

export default App;
