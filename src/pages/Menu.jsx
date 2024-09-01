import React from 'react';
import './Menu.css';
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import BreakfastImg from '../utils/img/breakfast.jpg';
import LunchImg from '../utils/img/lunch.jpg';
import DinnerImg from '../utils/img/dinner.jpg';
import DessertImg from '../utils/img/dessert.jpg';

const breakfast = [
    {
        id: 1,
        name: 'Idli',
        description: 'soft, steamed rice cakes served with sambar (lentil soup) and coconut chutney',
        price: '₹220'    },
    {
        id: 2,
        name: 'Aloo Paratha',
    description: 'flaky, stuffed flatbread with a spiced potato filling, served with plain yogurt, pickles, and butter',
    price: '₹300'
    },
    {
        id: 3,
        name: 'Poha',
        description: 'light, fluffy rice flakes cooked with onions, mustard seeds, curry leaves, and a hint of turmeric, garnished with fresh coriander and lemon',
        price: '₹200'
    }
];
const lunch = [
    {
        id: 1,
        name: 'Vegetarian Thali',
        description: 'a selection of dal (lentil curry), vegetable curry, paneer butter masala, rice, chapati, and raita (yogurt with spices)',
        price: '₹1,200'
    },
    {
        id: 2,
        name: 'Chicken Biryani',
    description: 'fragrant basmati rice cooked with spiced chicken, saffron, and a blend of aromatic spices, served with raita and salad',
    price: '₹1,100'
    },
    {
        id: 3,
        name: 'Paneer Tikka Masala',
    description: 'grilled paneer cubes simmered in a creamy, spiced tomato sauce, served with naan bread or rice',
    price: '₹1,000'
    }
];

const dinner = [
    {
        id: 1,
        name: 'Butter Chicken',
        description: 'tender chicken pieces cooked in a rich, creamy tomato-based sauce with a hint of butter, served with naan or rice',
        price: '₹1,300'
    },
    {
        id: 2,
        name: 'Lamb Rogan Josh',
        description: 'slow-cooked lamb in a flavorful curry with spices, yogurt, and a touch of saffron, served with rice or naan',
        price: '₹1,400'
    },
    {
        id: 3,
        name: 'Mixed Vegetable Curry',
    description: 'a hearty curry made with seasonal vegetables and a blend of spices, served with rice or chapati',
    price: '₹900'
    }
];

const dessert = [
    {
        id: 1,
        name: 'Gulab Jamun',
    description: 'sweet, deep-fried dough balls soaked in rose-scented sugar syrup, served warm',
    price: '₹300'
    },
    {
        id: 2,
        name: 'Rasgulla',
    description: 'light, spongy cheese balls soaked in a delicate sugar syrup, perfect for a sweet finish',
    price: '₹350'
    },
    {
        id: 3,
        name: 'Kheer',
    description: 'creamy rice pudding made with milk, sugar, and flavored with cardamom and nuts',
    price: '₹250'
    }
];

function Menu() {
    return (
        <div className='menu-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Menu</h1>
                </div>
            </header>

            <div className='breakfast my-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Breakfast</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={BreakfastImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {breakfast.map((breakfast) => (
                                <div key={breakfast.id}>
                                    <Card className='border-0'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {breakfast.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {breakfast.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {breakfast.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='lunch bg-dark text-light py-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Lunch</h2>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {lunch.map((lunch) => (
                                <div key={lunch.id}>
                                    <Card className='border-0 bg-dark text-light'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {lunch.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {lunch.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {lunch.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={LunchImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='dinner my-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Dinner</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={DinnerImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {dinner.map((dinner) => (
                                <div key={dinner.id}>
                                    <Card className='border-0'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {dinner.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {dinner.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {dinner.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='dessert bg-dark text-light py-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Dessert</h2>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {dessert.map((dessert) => (
                                <div key={dessert.id}>
                                    <Card className='border-0 bg-dark text-light'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {dessert.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {dessert.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {dessert.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={DessertImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;