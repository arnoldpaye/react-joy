import React from "react";

import Slider from "./Slider_className";
import styles from "./VolumeSlider.module.css";

function VolumeSlider({ volume, setVolume }) {
  return (
    <Slider
      label="Volume"
      min={0}
      max={100}
      value={volume}
      className={styles.volumeSlider}
      onChange={(event) => {
        setVolume(event.target.value);
      }}
    />
  );
}

export default VolumeSlider;
