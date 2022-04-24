import React from 'react';
import {  useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function About() {

    let aboutImage = require("../Reincarnation.png");

    /* function to send user back to the homepage */
    const navigate = useNavigate();
    const sendtoHome = () => {
        navigate('/');
    }

    return (
        <div>
            <br></br>
            <h1 className='page-title'>About the Past Life Project</h1>
            <div className='about-image-container'>
                <img className='about-image' src={aboutImage} alt="Reincarnation illustration" />
            </div>
            <div className='about-page-cards'>
            <Card style={{ width: '48rem' }}>
                <Card.Body>
                    <Card.Title>About Past Life</Card.Title>
                    <Card.Text>
                    <b>Have you ever been curious about whether you have lived a past life?</b>
                    <p>Feel especially cursed or lucky?
                    What if the person who died on your birthday was your past life?
                    Could that explain the reason you think, feel and act the way you do? 
                    <b> Past Life gives you the ability to easily connect to your past life.</b>
                    This works by collecting your birthdate and birth country. 
                    We use this information to perform a search using Wikipedia's API to see who passed away on your birthday
                    and, among those, who lived their life closest to yours.</p>
                    </Card.Text>
                    <Button variant="secondary" onClick={() => {sendtoHome()}}>Find Your Past Life</Button>
                </Card.Body>
            </Card>
            </div>
            <div className='about-page-cards'>
            <Card style={{ width: '48rem' }}>
                <Card.Body>
                    <Card.Title>About Reincarnation</Card.Title>
                    <Card.Text>
                    "Reincarnation, also known as rebirth or transmigration, 
                    is the philosophical or religious concept that the non-physical essence of a 
                    living being begins a new life in a different physical form or body after 
                    biological death. Resurrection is a similar process hypothesized by some 
                    religions, in which a soul comes back to life in the same body. 
                    In most beliefs involving reincarnation, the soul is seen as immortal and 
                    the only thing that becomes perishable is the body. Upon death, 
                    the soul becomes transmigrated into a new infant (or animal) to live again. 
                    The term transmigration means passing of soul from one body to another after death.
                    <p> </p>
                    <p>Reincarnation (Punarjanma) is a central tenet of the Indian religions 
                    such as Buddhism, most Hinduism, Jainism, Sikhism and most Paganism, 
                    although there are Hindu and Pagan groups who do not believe in reincarnation, 
                    instead believing in an afterlife."</p>
                    </Card.Text>
                    <Button variant="secondary" onClick={() => window.open("https://en.wikipedia.org/wiki/Reincarnation")}>Learn More on Wikipedia</Button>
                </Card.Body>
            </Card>
            </div>
            <br></br>
        </div>
    );
}

export default About;