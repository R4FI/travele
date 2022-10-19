import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Order from './Order';

const MyOrder = () => {
    const { userEmail } = useParams();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://travele-tourism.herokuapp.com/myorders/${userEmail}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, [orders])
    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        orders.map(order => <Order
                            key={order._id}
                            order={order}
                        >
                        </Order>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyOrder;