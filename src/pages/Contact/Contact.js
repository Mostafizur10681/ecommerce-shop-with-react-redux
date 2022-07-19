import React from 'react';
import contact from '../../assets/images/contact us.png'
const Contact = () => {
    return (
        <div className='py-5 bg'>
            <div className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className='fw-bold heading text-center' >Have Any Question?</h1>
                            <hr className='mb-5' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={contact} alt="Contact Us" height='400px' width='400px' srcset="" />
                        </div>
                        <div className="col-md-6">
                            <form >
                                <div class="mb-3">
                                    <label for="exampleForm" class="form-label">Full Name</label>
                                    <input type="text" class="form-control" id="exampleForm" placeholder="John Smith" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">How can we help you?</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                                </div>
                                <button type="submit" class="btn btn-outline-primary">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;