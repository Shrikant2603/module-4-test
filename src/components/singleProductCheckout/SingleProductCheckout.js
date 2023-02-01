import React from 'react'
import "./SingleProductCheckout.css";
const SingleProductCheckout = ({
    prop,
    id,
    image,
    title,
    price,
    removeFromCartHandler
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
        <button id='btn' onClick={() => removeFromCartHandler({ id, title, price, image })}>Remove from Cart</button>
      </div>
    </div>
  )
}

export default SingleProductCheckout