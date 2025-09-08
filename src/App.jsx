import React from "react";

function App() {
  return (
    <CaptionedImage
      alt="A meerkat looking curiously at the camera"
      src="https://sandpack-bundler.vercel.app/img/meerkat.jpg"
      caption="Photo by Manuel Capellari, shot in August 2019 and published on Unsplash."
    />
  );
}

function CaptionedImage({ alt, src, caption }) {
  return (
    <figure>
      <img alt={alt} src={src} />
      <div className={"divider"} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default App;
