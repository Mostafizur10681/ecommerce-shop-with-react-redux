import React from 'react';
import { NavLink } from 'react-router-dom';
import about from '../../assets/images/about us.png'

const About = () => {
    return (
        <div className='py-5 bg'>
            <div className=' py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className='heading text-primary mb-4'>About Us</h1>
                            <p className='lead pb-3'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae modi aspernatur commodi rem labore in dicta suscipit atque, voluptas pariatur! Dolor illo adipisci accusantium quisquam cumque ipsa unde dolorum laboriosam minima, repellat pariatur laudantium similique quos corrupti dicta ipsam itaque nostrum repudiandae, qui natus repellendus! Quos quaerat odio repudiandae, quas vel illum impedit eos architecto dolor hic libero deleniti voluptates sint illo, obcaecati quibusdam. Deleniti deserunt culpa quos autem incidunt quaerat veritatis impedit quisquam asperiores, provident suscipit ipsum nostrum dignissimos, laboriosam velit tempore similique ab ipsam accusantium eligendi officiis perferendis nihil. Et ab eveniet possimus! Dolorum possimus reprehenderit nemo sint?
                            </p>
                            <NavLink to='/contact' className='btn px-4 btn-outline-primary' >Contact Us</NavLink>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center">
                            <img src={about} alt='About Us' className='w-100' height='500px' srcset="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;