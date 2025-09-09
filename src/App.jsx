import React from "react";

import FavouriteColorProvider from "./FavouriteColorProvider";
import Counter from "./components/Counter";
import ColorPicker from "./components/ColorPicker";

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <FavouriteColorProvider>
        <Counter count={count} setCount={setCount} />
        <ColorPicker />
      </FavouriteColorProvider>
      <p>Current count: {count}</p>
    </>
  );
}

export default App;
