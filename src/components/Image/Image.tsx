import React, { useState, useEffect } from 'react';
import './Image.scss';

export const Image: React.FC = () => {
  const [images, setImages] = useState<any[]>([]); 
  const [loading, setLoading] = useState(false); 
  const [page, setPage] = useState(1);  

  const apiUrl = "https://jsonplaceholder.typicode.com/photos?_limit=10";

  const fetchImages = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setImages((prevImages) => [...prevImages, ...data]);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  const loadMoreImages = () => {
    setPage(page + 1);
  };

  return (
    <div className="image-grid-container">
      <h1>Galerija Slika</h1>
      <div className="image-grid">
        {images.map((image) => (
          <div className="image-item" key={image.id}>
            <img src={image.urls.small} alt={image.alt_description} />
          </div>
        ))}
      </div>

      <div className="load-more-button">
        <button onClick={loadMoreImages} disabled={loading}>
          {loading ? 'Učitavanje...' : 'Učitaj više'}
        </button>
      </div>
    </div>
  );
};
