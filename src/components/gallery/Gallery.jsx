import React, { useState } from 'react';
import './Gallery.css';
import img1 from '../../assets/portfolio/img1.jpg';
import img2 from '../../assets/portfolio/img2.jpg';
import img3 from '../../assets/portfolio/img3.jpg';
import img4 from '../../assets/portfolio/img4.jpg';
import img5 from '../../assets/gallery/img5.jpg';
import img6 from '../../assets/gallery/img6.jpg';
import img7 from '../../assets/gallery/img7.jpg';
import img8 from '../../assets/gallery/img8.jpg';
import img9 from '../../assets/gallery/img9.jpg';
import img10 from '../../assets/gallery/img10.jpg';

const categories = ["All", "Wedding", "Portrait", "Automotive", "Product"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const images = [
    { src: img1, category: 'Automotive' },
    { src: img2, category: 'Product' },
    { src: img3, category: 'Wedding' },
    { src: img4, category: 'Portrait' },
    { src: img5, category: 'Product' },
    { src: img6, category: 'Portrait' },
    { src: img7, category: 'Automotive' },
    { src: img8, category: 'Wedding' },
    { src: img9, category: 'Automotive' },
    { src: img10, category: 'Automotive' },
   
  ];


  const filteredImages = selectedCategory === "All"
    ? images
    : images.filter((image) => image.category === selectedCategory);

  return (
    <div className="gallery">
    
      <nav className="category-nav">
        {categories.map((category) => (
          <button 
            key={category} 
            onClick={() => setSelectedCategory(category)} 
            className={selectedCategory === category ? "active" : ""}
          >
            {category}
          </button>
        ))}
      </nav>

      {/* Gallery Title */}
      <h1 className="gallery-title">Gallery</h1>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {filteredImages.map((image, index) => (
          <img key={index} src={image.src} alt={`Gallery ${index}`} className="gallery-image" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
