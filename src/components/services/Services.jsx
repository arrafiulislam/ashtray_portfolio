import React, { useState } from 'react';
import './Services.css';
import autoImg from '../../assets/services/auto.jpg';
import portraitImg from '../../assets/services/portrait.jpg';
import weddingImg from '../../assets/services/wedding.jpg';
import productImg from '../../assets/services/product.jpg';

const Services = () => {
    const [selectedService, setSelectedService] = useState('Wedding');
    const [openService, setOpenService] = useState('Wedding');

    const services = {
        Wedding: {
            img: weddingImg,
            details: 'Capture the magic and joy of your special day with our expert wedding photography services. From intimate ceremonies to grand celebrations, we focus on the key moments that tell the story of your love and connection. Our wedding photography is perfect for preserving memories, creating stunning albums, and sharing the beautiful moments with your loved ones for years to come.'
        },
        Portrait: {
            img: portraitImg,
            details: 'Portrait photography captures more than just a face—it tells a story. At Ashtray, we specialize in creating personalized, expressive portraits that reflect each person’s unique character. With our experience and eye for detail, we ensure every session is comfortable and tailored to you, resulting in images that are genuine, memorable, and timeless.'
        },
        Automotive: {
            img: autoImg,
            details: 'Our automotive photography service highlights the beauty and performance of vehicles, capturing every detail from sleek exteriors to intricate interiors. Whether you’re showcasing a classic car or a modern masterpiece, we ensure your vehicle is presented in its best light, perfect for marketing or personal keepsakes.'
        },

        Product: {
            img: productImg,
            details: 'Showcase your products with professional-grade photography designed to enhance every detail. Whether it’s for e-commerce, advertisements, or print, our product photography brings out the unique features and quality of your merchandise, helping you attract more customers and boost sales.'
        }
    };

    const toggleDropdown = (service) => {

        if (openService === service) {
            setOpenService('');
        } else {
            setOpenService(service);
        }
        setSelectedService(service);
    };


    return (
        <div className="service-section">

            <div className="service-title">
                <h1 className="services-heading">Our Services</h1>
            </div>

            <div className="service-content">
                <div className="service-image">
                    <img src={services[selectedService].img} alt={selectedService} className="transition-image" />
                    <div className="service-name-overlay">{selectedService}</div>
                </div>

                <div className="service-titles">
                    {Object.keys(services).map(service => (
                        <div key={service} className="service-item">
                            <div className="service-header" onClick={() => toggleDropdown(service)}>
                                <h2>{service}</h2>
                                <span className="dropdown-icon">
                                    {openService === service ? '▲' : '▼'}
                                </span>
                            </div>
                            <div className={`service-details ${openService === service ? 'open' : ''}`}>
                                <p>{services[service].details}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Services;
