import React from "react";

function TextInput({ id, label, type }) {
  const generatedId = React.useId();
  const appliedId = id || generatedId;

  /* if (typeof appliedId === 'undefined') {
    appliedId = React.useId();
  } */

  return (
    <div className="text-input">
      <label htmlFor={appliedId}>{label}</label>
      <input id={appliedId} type={type} />
    </div>
  );
}

export default TextInput;
