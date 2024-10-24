import React from 'react';
import Gallery from '../components/gallery/Gallery.jsx'
import Navbar from '../components/Navbar/Navbar.jsx';

const GalleryLayout = () => {
    return (
        <div>
           
            <div style={{ backgroundColor: '#000' }}>
            <Gallery></Gallery>
            </div>
           
        </div>
    );
};

export default GalleryLayout;