import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div>
            <Container className="text-center text-dark mb-2 border p-5">
                <h1>Why You Choose Us</h1>
                <ul className="text-center text-dark mt-3">
                    <li>We Provide the Best Service For You</li>
                    <li>You Will Find All the Details You Need</li>
                    <li>You Will Get Offer On Special Time</li>
                </ul>
            </Container>
        </div>
    );
};

export default About;