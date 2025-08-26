import React from "react";
import MouseTracker from "./components/MouseTracker";

function App() {
  const [isTrackingMouse, setIsTrackingMouse] = React.useState(true);

  return <MouseTracker />;
}

export default App;
