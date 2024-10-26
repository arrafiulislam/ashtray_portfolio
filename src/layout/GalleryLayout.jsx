import React from 'react';
import Gallery from '../components/gallery/Gallery.jsx'
import Footer from '../components/footer/Footer.jsx';

const GalleryLayout = () => {
    return (
        <div>
           
            <div style={{ backgroundColor: '#000' }}>
            <Gallery></Gallery>
            <Footer></Footer>
            </div>
           
        </div>
    );
};

export default GalleryLayout;