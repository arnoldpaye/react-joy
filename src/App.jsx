import React from "react";

import Clock from "./components/Clock";
import useToggle from "./hooks/use-toggle";

function App() {
  const [showClock, toggleClock] = useToggle(true);

  return (
    <>
      {showClock && <Clock />}
      <button className="clock-toggle" onClick={toggleClock}>
        Toggle clock
      </button>
    </>
  );
}

export default App;
