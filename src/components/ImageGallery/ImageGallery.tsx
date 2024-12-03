import React, { useState, useEffect } from "react";

export const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_limit=2"
      );
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error("Greška prilikom dohvaćanja slika:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Galerija slika</h1>
      {loading ? (
        <p>Učitavanje...</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "20px",
          }}
        >
          {images.map((image: { id: number; url: string; title: string }) => (
            <div key={image.id}>
              <img
                src={image.url}
                alt={image.title}
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <p>{image.title}</p>
            </div>
          ))}
        </div>
      )}
      <button
        onClick={fetchImages}
        style={{ marginTop: "20px", padding: "10px 20px" }}
      >
        Učitaj nove slike
      </button>
    </div>
  );
};
