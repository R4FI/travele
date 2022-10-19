import React from 'react';
import { Link } from 'react-router-dom';
import './SingleService.css'
const SingleService = (props) => {
    const { _id, name, img, description, price,rating } = props.service;
    return (
        <div className="col-lg-3 col-md-3 col-12 m-auto">
            <div className="offer-card">
                <div className="offer-img">
                    <img src={img} alt="" />
                </div>
                <div className="offer-info">
                    <h4>{name}</h4>
                    <p>Package ${price}</p>
                    <p><small>Rating:{rating}</small></p>
                    <p>{description?.slice(0,100)}</p>
                </div>
                <div className="booking-btn">
                    <Link to={`/singledetails/${_id}`}>
                        <button className="btn btn-primary">Book Now</button>
                    </Link>

                </div>

            </div>
        </div>
    );
};

export default SingleService;
