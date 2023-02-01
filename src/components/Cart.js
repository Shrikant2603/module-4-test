import React, { useEffect, useState } from 'react'
import SingleProduct from './singleproduct/SingleProduct'

const Cart = ({cartItems}) => {
    // const [items, setItems] = useState([])
    // console.log(props)
    // useEffect(() => {
    //   setItems(props)
    //   // eslint-disable-next-line
    // }, [])
    
  return (
    <div>
      {cartItems.map(item => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} />
          <p>{item.title}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  )
}

export default Cart