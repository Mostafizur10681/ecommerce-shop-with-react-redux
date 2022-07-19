import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
    return (
        <>
            <NavLink to='/cart' className='btn btn-outline-primary ms-2'>
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon> Cart ()
            </NavLink>
        </>
    );
};

export default Cart;