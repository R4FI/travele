import React from 'react';

const Order = (props) => {
    const { _id, productName, imgUrl, userEmail, Adress, userName, date } = props.order;
    console.log(props.order);
    // const [updatedOrder, setUpdatedOrder] = useState();
    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure You Want to delete');
        if (proceed) {
            const url = `https://travele-tourism.herokuapp.com/myorders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCoutn > 0) {
                        alert('Deleted Sucessfully');
                    }
                })
        }
    }
    return (
        <div>
            <div className="card mb-3 mt-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={imgUrl} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{productName}</h5>
                            <h6> Name: {userName}</h6>
                            <p className="card-text"><span className="fw-bold">Email:</span>{userEmail}</p>
                            <p>Adress:{Adress}</p>
                            <p>Order Date:{date}</p>
                            <button onClick={() => handleDelete(_id)} className="btn btn-danger">Delete the order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;