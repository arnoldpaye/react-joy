import React from "react";

import useIsOnScreen from "./hooks/use-is-on-screen";

function App() {
  const [isRedOnScreen, redElementRef] = useIsOnScreen();
  const [isPurpleOnScreen, purpleElementRef] = useIsOnScreen();

  return (
    <>
      <header>
        Red box visible: {isRedOnScreen ? "YES" : "NO"}
        <br />
        Purple box visible: {isPurpleOnScreen ? "YES" : "NO"}
      </header>
      <div className="wrapper">
        <div ref={redElementRef} className="red box" />
        <div ref={purpleElementRef} className="purple box" />
      </div>
    </>
  );
}

export default App;
