import React, { useState } from 'react';
import "./Images.scss";

const Images: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);

  const fetchRandomImage = async () => {
    try {
      const response = await fetch('https://picsum.photos/200');
      const newImageURL = response.url;
      setImages([...images, newImageURL]);
    } catch (error) {
      console.error('Greška pri dohvaćanju slike:', error);
    }
  };

  return (
    <div>
      <h2>Galerija slika</h2>
      <button onClick={fetchRandomImage}>Dodaj novu sliku</button>
      <div className="images-container">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Slika ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Images;