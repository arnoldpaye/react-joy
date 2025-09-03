import React from "react";

function TextInput({ id, label, ...delegated }) {
  let generatedId = React.useId();
  let appliedId = id || generatedId;

  return (
    <div className="text-input">
      <label htmlFor={appliedId}>{label}</label>
      <input id={appliedId} {...delegated} />
    </div>
  );
}

export default TextInput;
