import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';
import img1 from '../../assets/portfolio/img1.jpg';
import img2 from '../../assets/portfolio/img2.jpg';
import img3 from '../../assets/portfolio/img3.jpg';
import img4 from '../../assets/portfolio/img4.jpg';

const Portfolio = () => {
    return (
        <div className="portfolio-container">
          
            <div className="portfolio-grid">
                <div className="first-column">
                 <div className="img-container">
                 <Link to="/gallerylayout" ><img src={img1} alt="Image 1" /> </Link>  
                        <span className="category">Automotive</span>
                    </div>
                    <div className="img-container">
                    <Link to="/gallery" >  <img src={img2} alt="Image 2" /></Link>
                        <span className="category">Product</span>
                    </div>
                </div>

                <div className="second-column">
                    <div className="img-container">
                    <Link to="/gallerylayout" > <img src={img3} alt="Large Image" /> </Link> 
                        <span className="category">Potrait</span>
                    </div>
                </div>

                <div className="third-column">
                    <div className="img-container">
                    <Link to="/gallerylayout" ><img src={img4} alt="Another Large Image" /> </Link> 
                        <span className="category">Corporate Events</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
