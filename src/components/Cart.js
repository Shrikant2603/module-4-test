import React from 'react'
import './Cart.css'
import SingleProductCheckout from './singleProductCheckout/SingleProductCheckout'
const Cart = (props) => {
    console.log(props)
    
  return (
    <div>
      <h1 className='heading'>My Cart</h1>
      <div className="success">
            {props.cartItems.checkoutSuccessful && <p>Checkout was successful!</p>}
        </div>
      <div className="box">
        <div className="cartpage">
            {
            props.cartItems.cart.map((c) => (
                <SingleProductCheckout
                prop={props}
                id={c.id}
                image={c.image}
                title={c.title}
                price={c.price}
                checkoutHandler={props.checkoutHandler}
                removeFromCartHandler={props.removeFromCartHandler}
                />
            ))}
        </div>
        <div className="cartlist">
                <div className="cartlist2">
                    <h1 className='heading-ck'>Checkout List</h1>
                    <div className="list">
                        {props.cartItems.cart.map(product => (
                            <div className="li">
                                <span>{product.id}. {product.title}</span>
                                <span>$ {product.price}</span>
                            </div>
                        ))}
                    </div>
                    <hr />
                    <div className="total">
                        <span>Total</span>
                        <span>${props.cartItems.total}</span>
                    </div>
                    <hr />
                <button className='btn' onClick={props.checkoutHandler}>Click to Checkout</button>
                </div>
        </div>
      </div>
    </div>
  )
}

export default Cart