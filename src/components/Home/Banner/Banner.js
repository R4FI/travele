import React from 'react';
import './Banner.css';
import banner from '../../../Images/banner-1.jpg'
import { Card,Button } from 'react-bootstrap';
const Banner = () => {
    return (
        <div className="banner">
           <Card className="bg-dark text-white">
  <Card.Img src={banner} alt="Card image" />
  <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
  <Card.Text>
    <Card.Title className="text-black">EXPLORE. DISCOVER. TRAVEL</Card.Title>
   
    <h1 className="text-black">Experience The Nature's Beauty</h1>
    <p className="text-black">Traveling is one of the best ways to learn more about yourself. Every day traveling brings a new set of issues and opportunities.</p>
    <Button className="text-white" variant="dark" size="lg">Explore More</Button>
    </Card.Text>
  </Card.ImgOverlay>
</Card>
              
        </div>
    );
};

export default Banner;