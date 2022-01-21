import React, { useState, useEffect } from "react";
import Content from "./components/content";
import Header from "./components/header";
import ImageSlider from "./components/imageSlider";
import { getImages, getThumbnails } from "./data";

function App() {
  const [images, setImages] = useState([]);

  const [thumbnail, setThumbnail] = useState([]);

  useEffect(() => {
    setImages(getImages);
  }, []);

  useEffect(() => {
    setThumbnail(getThumbnails);
  }, []);

  return (
    <div className="App">
      <Header />
      <main id="main" className="grid-container">
        <ImageSlider images={images} />
        <Content indicators={thumbnail} images={images} />
      </main>
    </div>
  );
}

export default App;
