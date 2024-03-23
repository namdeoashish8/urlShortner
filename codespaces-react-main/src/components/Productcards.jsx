import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ id, img, name, desc, price, discount })=>{
    
    return(
        <Link to={'/product/'+ id}>
            <div className='productCard'>
                <div className="productImg">
                    <img src={img} alt="" />
                </div>
                <div className='productName' >
                {name}
                </div>
                <div className='productDesc'>
                {desc}
                </div>
                <div className="productPrice">
                    <div className="product-final">₹ {price*(100-discount)/100}</div>
                    <div className="product-original">₹ {price}</div>
                    <div className="product-discount">{discount}% off</div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard