import React from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css';
const AddService = () => {
    const { register, handleSubmit,formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        fetch('https://travele-tourism.herokuapp.com/addingnewServices', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Added SuccessFully');
                    reset();
                }
            });

    };
    return (
        <div className="adding-service mt-5 p-2">
            <h2 className="text-center">Please Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Service Name" className="p-2 m-2" required />
                <input  {...register("price")} placeholder="Price" className="p-2 m-2" required />
                <input  {...register("rating")} placeholder="Rating" className="p-2 m-2" required />
                <textarea {...register("description")} placeholder="Description" className="p-2 m-2" required />
                <input {...register("img")} placeholder="ImgUrl" className="p-2 m-2" required />
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;