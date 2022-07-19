import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import google from '../../assets/icon/google.png';
const Signup = () => {
    return (
        <>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-outline-primary ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
                <FontAwesomeIcon className='me-1' icon={faUserPlus}></FontAwesomeIcon> Register
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center" id="exampleModalLabel">Register</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInput" className="form-label" style={{ textAlign: 'left' }}>Username</label>
                                    <input type="email" className="form-control" id="exampleInput" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label text-start">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label text-start">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>

                                <button type="submit" className="btn btn-outline-primary w-100">Register</button>
                            </form>
                            <button className='btn btn-primary w-100 my-3 '>
                                <img className='me-2' src={google} alt={google} srcset="" />
                                Sign Up with Google
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;