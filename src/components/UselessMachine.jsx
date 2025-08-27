import React from "react";
import VisuallyHidden from "./VisuallyHidden";

function UselessMachine() {
  const id = React.useId();
  const [isOn, setIsOn] = React.useState(true);

  React.useEffect(() => {
    if (isOn) {
      return;
    }
    const timeOutId = window.setTimeout(() => {
      setIsOn(true);
      console.log("Flip");
    }, 500);

    return () => {
      window.clearTimeout(timeOutId);
    };
  }, [isOn]);

  return (
    <>
      <input
        id={id}
        type="checkbox"
        checked={isOn}
        onChange={(event) => {
          setIsOn(event.target.checked);
        }}
      />
      <VisuallyHidden>
        <label htmlFor={id}>Toggle checkbox</label>
      </VisuallyHidden>
    </>
  );
}

export default UselessMachine;
