import React from "react";

import Slider from "./components/Slider";

function App() {
  const [volume, setVolume] = React.useState(50);

  return (
    <main>
      <Slider
        label="Volume"
        min={0}
        max={100}
        step={10}
        value={volume}
        onChange={(event) => {
          setVolume(event.target.value);
        }}
      />
    </main>
  );
}

export default App;
