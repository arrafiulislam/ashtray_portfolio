import React, { useRef, useState } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
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
import logo from '../../assets/logowhite.png';

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
    <>
      <div className="menu-container">
        <div className="logo">
          <img className='nav-logo' src={logo} alt="" />
          <div className='logo-name1'>Ashtray <br />Photography</div>
        </div>
      </div>

      <div className="gallery-page">
        <h1 className="gallery-title">Gallery</h1>

        {/* Category Navigation */}
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

    
        <HorizontalScrollGallery images={filteredImages} />
      </div>
    </>
  );
};

const HorizontalScrollGallery = ({ images }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <section ref={targetRef} className="scroll-gallery-container">
      <div className="sticky-wrapper">
        <motion.div style={{ x }} className="horizontal-scroll">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="scroll-card"
              style={{
                backgroundImage: `url(${image.src})`,
              }}
            >
             
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
