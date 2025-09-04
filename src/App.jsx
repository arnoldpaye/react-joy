import React from "react";

import SquareSlider from "./components/SquareSlider";

function App() {
  const sliderRef = React.useRef();

  React.useState(() => {
    console.log(sliderRef.current);
  }, []);

  return <SquareSlider ref={sliderRef} label={"Intensity"} min={0} max={100} />;
}

export default App;
