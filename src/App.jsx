import React from "react";

import useIsOnScreen from "./hooks/use-is-on-screen";

function App() {
  const elementRef = React.useRef();
  const isOnScreen = useIsOnScreen(elementRef);

  return (
    <>
      <header>Red box visible: {isOnScreen ? "YES" : "NO"}</header>
      <div className="wrapper">
        <div ref={elementRef} className="red box" />
      </div>
    </>
  );
}

export default App;
