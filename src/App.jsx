import React from "react";

import Slider from "./components/Slider";

function App() {
  const [volume, setVolume] = React.useState(50);

  const sliderRef = React.useRef();

  React.useEffect(() => {
    sliderRef.current.focus();
  }, []);

  return (
    <main>
      <span>{volume}</span>
      <Slider
        ref={sliderRef}
        label={"Volume"}
        min={0}
        max={100}
        value={volume}
        onChange={(event) => {
          setVolume(event.target.value);
        }}
      />
    </main>
  );
}

export default App;
