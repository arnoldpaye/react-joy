import React from "react";

import styles from "./Slider.module.css";

function Slider({ label, forwardedRef, className = "", ...delegated }) {
  const id = React.useId();

  const sliderClassName = `${styles.slider} ${className}`;

  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        ref={forwardedRef}
        {...delegated}
        type="range"
        id={id}
        className={styles.slider}
      />
    </div>
  );
}

export default Slider;
