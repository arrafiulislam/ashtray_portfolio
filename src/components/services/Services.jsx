import React, { useState } from 'react';
import './Services.css';
import autoImg from '../../assets/services/auto.jpg';
import portraitImg from '../../assets/services/portrait.jpg';
import corporateImg from '../../assets/services/corporate.jpg';
import productImg from '../../assets/services/product.jpg';

const Services = () => {
    const [selectedService, setSelectedService] = useState('Portrait');
    const [openService, setOpenService] = useState('');

    const services = {
        Portrait: {
            img: portraitImg,
            details: 'Portrait photography captures more than just a face—it tells a story. At Ashtray, we specialize in creating personalized, expressive portraits that reflect each person’s unique character. With our experience and eye for detail, we ensure every session is comfortable and tailored to you, resulting in images that are genuine, memorable, and timeless.'
        },
        Automotive: {
            img: autoImg,
            details: 'Our automotive photography service highlights the beauty and performance of vehicles, capturing every detail from sleek exteriors to intricate interiors. Whether you’re showcasing a classic car or a modern masterpiece, we ensure your vehicle is presented in its best light, perfect for marketing or personal keepsakes.'
        },
        Corporate: {
            img: corporateImg,
            details: 'Capture the professionalism and energy of your corporate events with our expert photography services. From conferences to company gatherings, we focus on the key moments that highlight your brand and its people. Our corporate photography is perfect for internal communications, marketing materials, and showcasing your company’s culture and achievements.'
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
