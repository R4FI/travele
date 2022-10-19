import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './SingleDetails.css';

const SingleDetails = () => {
    const { serviceId } = useParams();
    const { user } = useAuth();
    const [bookRoom, setBookRoom] = useState({});
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            userName: user.displayName,
            userEmail: user.email,
            productName: bookRoom.name,
            imgUrl: bookRoom.img
        }
    });
    useEffect(() => {
        fetch(`https://travele-tourism.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setBookRoom(data))
    }, []);
    const onSubmit = data => {
        data.productName = bookRoom.name;
        data.imgUrl = bookRoom.img;
        fetch('https://travele-tourism.herokuapp.com/addServices', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    alert('Booked Successfully');
                    console.log(result);
                }
            })

    };
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 p-3 border shadow">
                    <img src={bookRoom.img} className="img-fluid" alt="" />
                    <h5 className="mt-2">{bookRoom.name}</h5>
                    <p className="p-2">{bookRoom.description}</p>
                </div>
                <div className="col-md-6 form">
                    <h3 className="text-center mb-2">Give Us the Information</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input  {...register("userName")} placeholder="Name" />
                        <input  {...register("productName")} defaultValue={bookRoom.name} placeholder="Room" />
                        <input  {...register("imgUrl")} defaultValue={bookRoom.img} placeholder="ImageUrl" />
                        <input  {...register("date")} type="date" placeholder="Date" required />
                        <input {...register("userEmail", { required: true })} />
                        <input  {...register("Adress")} placeholder="Adress" />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input type="submit" />
                        <Link to={`/myorders/${user.email}`}>
                            <button className="btn btn-success">My Order</button>
                        </Link>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default SingleDetails;