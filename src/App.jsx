import React from "react";

import useToggle from "./hooks/use-toggle";
import Toggle from "./components/Toggle";

function App() {
  const [enableWifi, toggleEnableWifi] = useToggle(true);
  const [lowPowerMode, toggleLowPowerMode] = useToggle(false);

  return (
    <main>
      <Toggle
        label="Enable Wi-Fi"
        checked={enableWifi}
        onClick={toggleEnableWifi}
      />
      <Toggle
        className="green-toggle"
        label="Low Power Mode"
        checked={lowPowerMode}
        onClick={toggleLowPowerMode}
      />
    </main>
  );
}

export default App;
