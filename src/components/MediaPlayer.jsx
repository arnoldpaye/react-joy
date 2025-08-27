import React from "react";
import VisuallyHidden from "./VisuallyHidden";

function MediaPlayer({ src }) {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const audioRef = React.useRef();

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === "Space") {
        setIsPlaying((currentValue) => {
          return !currentValue;
        });
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  React.useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="wrapper">
      <div className="media-player">
        <img src="" alt="" />
        <div className="summary">
          <h2>Take It Easy</h2>
          <p>Bvrnout ft. Mia Vaile</p>
        </div>
        <button
          onClick={() => {
            if (isPlaying) {
              audioRef.current.pause();
            } else {
              audioRef.current.play();
            }

            setIsPlaying(!isPlaying);
          }}
        >
          {isPlaying ? "Pause" : "Play"}
          <VisuallyHidden>Toggle playing</VisuallyHidden>
        </button>

        <audio
          src="//samplelib.com/lib/preview/mp3/sample-3s.mp3"
          ref={audioRef}
        ></audio>
      </div>
    </div>
  );
}

export default MediaPlayer;
