import React from 'react';
import './About.css';
import AboutChef1 from '../utils/img/about-chef1.jpg';
import AboutChef2 from '../utils/img/about-chef2.jpg';
import { ImageGallery } from '../components/ImageGallery';
import { Reviews } from '../components/Reviews';

function About() {
    return (
        <div className='about-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>About</h1>
                </div>
            </header>

            <div className='container my-5'>
                <p>At Indian Restaurant, we are committed to bringing the authentic flavors of India right to your table. Located in the heart of the city, our restaurant offers a vibrant and inviting atmosphere where you can experience the diverse and rich culinary traditions of India. Our menu is a journey through the various regions of India, featuring everything from the spicy street foods of Mumbai to the rich curries of Punjab and the delicate, fragrant dishes of South India.</p>

                <div className='row'>
                    <div className='col-lg-6'>
                        <img src={AboutChef1} className='img-fluid my-4' alt="" />
                    </div>
                    <div className='col-lg-6'>
                        <img src={AboutChef2} className='img-fluid my-4' alt="" />
                    </div>
                </div>

                <p>Our chefs use only the freshest ingredients, traditional spices, and time-honored recipes to create a menu that captures the essence of Indian cuisine. From aromatic biryanis and creamy butter chicken to sizzling tandoori and a wide array of vegetarian options, each dish is crafted with care to provide a genuine taste of India.

Beyond the food, we pride ourselves on delivering exceptional service, ensuring that every guest feels welcomed and valued. Whether you’re dining in, taking out, or celebrating a special occasion, Indian Restaurant is your destination for an unforgettable culinary experience. Join us to explore the vibrant flavors, spices, and traditions that make Indian cuisine a favorite around the world. We look forward to serving you soon!</p>
            </div>

            <div className='bg-dark text-light'>
                <ImageGallery />
            </div>

            <div className='my-5'>
                <Reviews />
            </div>
        </div>
    )
}

export default About;