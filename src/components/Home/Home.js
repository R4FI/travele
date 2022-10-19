import React from 'react';
import About from '../About/About';
import Instruction from '../Instruction/Instruction';
import Services from '../Services/Services';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Instruction />
        </div>
    );
};

export default Home;