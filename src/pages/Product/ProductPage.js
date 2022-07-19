import React, { useEffect, useState } from 'react';
import ProductSingle from './ProductSingle';
// import SingleProduct from './singleProduct';

const ProductPage = () => {
    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])
    return (
        <div className='bg py-3'>
            <div className='container mt-5'>
                <div className='row text-center'>
                    <h1 className='fw-bold text-primary heading' >Products</h1>
                    <hr className='mb-3' />
                </div>
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {
                        allProducts.map(product => <ProductSingle
                            key={product._id}
                            product={product}
                        ></ProductSingle>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductPage;