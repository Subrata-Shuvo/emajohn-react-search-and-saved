import React from 'react';
import useProducts from '../../hooks/useProducts';


const OrderReview = () => {
    const [products] = useProducts();
    return (
        <div>
            <h1>{products.length}</h1>
            <h1>This is order review</h1>
        </div>
    );
};

export default OrderReview;