import React from 'react';
import { MenuBtn } from '../components/MenuBtn';
import './Home.css';
import AboutImg from '../utils/img/about-img.jpg';
import { Link } from 'react-router-dom';
import { ImageGallery } from '../components/ImageGallery';
import { ContactInfo } from '../components/ContactInfo';
import ContactImage from '../utils/img/contact-img.jpg';

function Home() {
    return (
        <div className='home-page'>
            <header className='h-100 min-vh-100 d-flex align-items-center text-light shadow'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6 d-flex d-sm-block flex-column align-items-center'>
                            <h2 className='mb-0 text-black fw-bold'>Welcome To</h2>
                            <h1 className='mb-5 text-black fw-bold text-center text-sm-start'>Indian Restaurant</h1>
                            <MenuBtn />
                        </div>
                    </div>
                </div>
            </header>

            <div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
                        <img src={AboutImg} className='img-fluid w-500' alt="about img" />
                    </div>
                    <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
                        <h2 className='fs-1 mb-5 text-uppercase fw-bold'>About Us</h2>
                        <p>Indian Restaurant offers a true taste of India with a diverse menu featuring classic dishes like rich curries, flavorful biryanis, and sizzling tandoori. Our chefs use authentic recipes and fresh ingredients to create an unforgettable dining experience. Join us to enjoy the vibrant and delicious flavors of India.</p>
                        <p className='mb-5'>We pride ourselves on providing exceptional service in a warm and inviting atmosphere, making every meal memorable. Whether you’re looking to explore the spices of North India or the coastal flavors of the South, our menu has something for everyone. Come visit Indian Restaurant and embark on a culinary journey through India.</p>
                        <Link to="/about">
                            <button type='button' className='btn btn-outline-success btn-lg'>More About Us</button>
                        </Link>
                    </div>
                </div>
            </div>

            
<div className='menu-section py-5 text-light shadow'>
    <div className='container d-flex flex-column align-items-center'>
        <h2 className='fs-1 mb-5 text-uppercase fw-bold'>Our Favorites</h2>
        <div className='row mb-5 w-100'>
            <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
                <h3 className='fs-2 mb-5'>Food</h3>
                <ul className='px-0'>
                    <li className='d-flex justify-content-between'>
                        <p className='fs-3 mx-2'>Masala Dosa</p>
                        <p className='fs-3 mx-2 text-success fw-nold'>₹250</p>
                    </li>
                    <li className='d-flex justify-content-between'>
                        <p className='fs-3 mx-2'>Chicken Biryani</p>
                        <p className='fs-3 mx-2 text-success fw-nold'>₹1,100</p>
                    </li>
                    <li className='d-flex justify-content-between'>
                        <p className='fs-3 mx-2'>Butter Chicken</p>
                        <p className='fs-3 mx-2 text-success fw-nold'>₹1,300</p>
                    </li>
                </ul>
            </div>
                        <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
                <h3 className='fs-2 mb-5'>Drinks</h3>
                <ul className='px-0'>
                    <li className='d-flex justify-content-between'>
                        <p className='fs-3 mx-2'>Masala Chai</p>
                        <p className='fs-3 mx-2 text-success fw-nold'>₹100</p>
                    </li>
                    <li className='d-flex justify-content-between'>
                        <p className='fs-3 mx-2'>Lassi</p>
                        <p className='fs-3 mx-2 text-success fw-nold'>₹120</p>
                    </li>
                    <li className='d-flex justify-content-between'>
                        <p className='fs-3 mx-2'>Fresh Lime Soda</p>
                        <p className='fs-3 mx-2 text-success fw-nold'>₹90</p>
                    </li>
                </ul>
            </div>
        </div>
                    <MenuBtn />
                </div>
            </div>

            <ImageGallery />

            <div className='bg-dark text-light py-5 shadow'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0'>
                            <ContactInfo />
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={ContactImage} className='img-fluid w-50' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;