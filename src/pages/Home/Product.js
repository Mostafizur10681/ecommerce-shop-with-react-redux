import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { img, name, description, price } = product;
    return (
        <div className='col'>
            <div class="card">
                <img src={img} class="card-img-top" height='300px' widtth='600px' alt={img} />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description}</p>
                    <p class="card-text fw-bold">Price: ${price}</p>
                </div>
                <button> <Link to="/" class="btn btn-primary w-100">Buy Now</Link></button>
            </div>
        </div>
    );
};

export default Product;