import React from 'react';

const Instruction = () => {
    return (
        <div className="container mt-5">
            <div className="text-center">
                <h4>Travel with confidence</h4>
                <p>Many properties have updated us about their enhanced health and safety measures. <br/> So, during your search, you may find details like:</p>
            </div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center align-items-center">
                    <div className="border border-secondary p-2 me-2">
                        <h6 className="text-center">Official health standards</h6>
                        <p>Properties adhering to corporate/organisational sanitisation guidelines.</p>
                    </div>
                    <div className="border border-secondary p-2">
                        <h6 className="text-center">Social distancing</h6>
                        <p>Contactless check-in and check-out along with other social distancing measures.</p>
                    </div>
                </div>
                <div className="col-md-12 d-flex justify-content-center align-items-center">
                    <div className="border border-secondary p-2 me-2 mt-3 mb-3">
                        <h6 className="text-center">Hygiene and sanitisation</h6>
                        <p>The use of disinfectant and whether properties enforce a gap period between stays.</p>
                    </div>
                    <div className="border border-secondary p-2">
                        <h6 className="text-center">Essentials at the property</h6>
                        <p>Free hand sanitiser for guests and individually wrapped food options.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instruction;