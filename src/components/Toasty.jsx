import React from "react";

function pureJsVersion() {
  const wrapperElement = document.querySelector(".toasty-wrapper");

  const observer = new IntersectionObserver((entries) => {
    const [entry] = entries;

    if (entry.isIntersecting) {
      // Show character
    } else {
      // Hide character
    }
  });

  observer.observe(wrapperElement);

  return () => {
    observer.disconnect();
  };
}

function Toasty() {
  const [isShown, setIsShown] = React.useState(false);

  const wrapperRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      setIsShown(entry.isIntersecting);
    });

    observer.observe(wrapperRef.current);
  }, []);

  const translateX = isShown ? "0%" : "100%";

  return (
    <div
      ref={wrapperRef}
      style={{
        position: "relative",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          fontSize: "200px",
          transform: `translateX(${translateX})`,
        }}
      >
        👻
      </div>
    </div>
  );
}

export default Toasty;
