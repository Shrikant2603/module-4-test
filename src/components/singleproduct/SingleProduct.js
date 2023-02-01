import React from 'react'
import "./SingleProduct.css";
const SingleProduct = ({
    prop,
    id,
    image,
    title,
    price,
    addToCartHandler
}) => {
  return (
    <div className='product'>
        <div className="poster">
        <img
        src={image}
        alt={title}
      />
    </div>
        <div className="desc">
            <p >Title: {title}</p>
            <p>Price: ${price}</p>
        </div>
      <div>
        <button id='btn' onClick={() => addToCartHandler({ id, title, price, image })}>Add to Cart</button>
      </div>
    </div>
  )
}

export default SingleProduct