import React from "react";
import Clock from "./components/Clock";

function App() {
  const [isClockVisible, setIsClockVisible] = React.useState(true);

  return (
    <>
      <button onClick={() => setIsClockVisible(!isClockVisible)}>
        Clock {isClockVisible ? "ON" : "OFF"}
      </button>
      {isClockVisible && <Clock />}
    </>
  );
}

export default App;
