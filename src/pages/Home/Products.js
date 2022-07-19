import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className='container my-2'>
                <div className='row text-center'>
                    <h1 >Products</h1>
                    <hr />
                </div>
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {
                        products.slice(0, 6).map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Products;