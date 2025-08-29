import React from "react";

function useIsOnScreen(elementRef) {
  const [isOnScreen, setIsOnScreen] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      setIsOnScreen(entry.isIntersecting);
    });

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
  }, [elementRef]);

  return isOnScreen;
}

export default useIsOnScreen;
