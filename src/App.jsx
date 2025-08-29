import React from "react";

import useMousePosition from "./hooks/use-mouse-position";

function App() {
  const mousePosition = useMousePosition();

  return (
    <div className="wrapper">
      <p>
        {mousePosition.x} / {mousePosition.y}
      </p>
    </div>
  );
}

export default App;
