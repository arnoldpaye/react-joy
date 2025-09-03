import React from "react";

import VolumeSlider from "./components/VolumeSlider";

function App() {
  const [volume, setVolume] = React.useState(50);

  return <VolumeSlider volume={volume} setVolume={setVolume} />;
}

export default App;
