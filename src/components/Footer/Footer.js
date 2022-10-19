import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col">
                        <div className="footer-details mt-5">
                            <div>
                                <h2 className="footer-title">Travele.</h2>
                                <p>
                                    “ We offer unique services. Our goal is to offer you what it takes to stay healthy and independent. ”
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col">
                        <div className="footer-menu">
                            <h4>Contact Us</h4>
                            <div className="contact-info">
                                <h6>Open From 10 a.m to 6 p.m</h6>
                                <p><small>Be fearless in the pursuit of what sets your soul on fire.</small></p>
                                <p>Phone: +00935847</p>
                                <p>Email: <strong>travele@info.com</strong></p>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-4 col">
                        <div className="footer-menu">
                            <img src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" className="img-fluid" alt="" />
                        </div>
                    </div>
                    <hr />
                </div>
                <p className="text-center">Copyright &copy; All Right Reserved, 2021</p>
            </div>
        </div>
    );
};

export default Footer;