import React, { use } from 'react';
import Product from '../Product/Product';

const Products = ({productPromise}) => {
    const products = use(productPromise)
    // console.log(products)
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
            products.map(product =>  <Product key={product.id} product={product}/>)
        }
        

            
        </div>
    );
};

export default Products;