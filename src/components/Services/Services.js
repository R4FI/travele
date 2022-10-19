import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://travele-tourism.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            });
    }, [])
    return (
        <div>
            <div className="container mt-5">
                <h2 className="text-center text-primary mb-2">Our Services</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        services.map(service => <SingleService
                            key={service._id}
                            service={service}
                        ></SingleService>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;