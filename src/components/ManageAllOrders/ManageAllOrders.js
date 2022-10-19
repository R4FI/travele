import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [allOrder, setAllOrder] = useState([]);
    useEffect(() => {
        fetch(`https://travele-tourism.herokuapp.com/manage-all-orders`)
            .then(res => res.json())
            .then(data => {
                setAllOrder(data);;
            })
    }, []);
    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure You want to delete');
        if (proceed) {
            const url = `https://travele-tourism.herokuapp.com/manage-all-orders/${id}`;
            fetch(url, {
                method: "DELETE",
                headers: {
                    'content-type': 'application/json',
                }
            })
                .then(res => res.json())
                .then(data => {
                    const remainingItem = allOrder.filter(allItem => allItem._id !== id);
                    setAllOrder(remainingItem);
                })
        }
        // .then(res => res.json())
    }
    return (
        <div className="allOrder-container">
            <div className="container">
                <h2 className="allOrder-title pb-3">Your Orders Available: {allOrder.length}</h2>
                <div className="allOrder-table">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Email</th>
                                <th>Product Name</th>
                                <th>Date</th>
                              
                                <th>Adress</th>
                            </tr>
                        </thead>
                        {allOrder?.map((order, index) => (
                            <tbody>
                                <tr>
                                    <td>{index}</td>
                                    <td>{order?.userEmail}</td>
                                    <td>{order?.productName}</td>
                                    <td>{order?.date}</td>
                                    <td>{order?.Adress}</td>
                                    <button
                                        onClick={() => handleDelete(order._id)}
                                        className="btn btn-danger delete-btn px-3 py-2">Delete</button>
                                   
                                </tr>
                            </tbody>
                        ))}
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default ManageAllOrders;