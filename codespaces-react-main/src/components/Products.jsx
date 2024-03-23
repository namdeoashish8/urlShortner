import React from 'react'
import Productcards from './Productcards'
import {ProductList} from '../data/productList'


const Products = () => {

    return (
        <div className='products-container'>
            {
                ProductList.map((prod, idx) => 
                (<Productcards 
                    id={prod.id}
                    img={prod.img} 
                    name={prod.name} 
                    desc={prod.description} 
                    price={prod.price} 
                    discount={prod.discountPercent} 
                /> ))
            }
        </div>

    )
}

export default Products