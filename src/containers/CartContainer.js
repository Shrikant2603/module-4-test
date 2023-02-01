import React from 'react'
import { connect } from 'react-redux'
import Cart from '../components/Cart'
import { checkout, removeFromCart } from '../services/actions/action'

const mapStateToProps = (state) => ({
  cartItems: state.cartItems,
})

const mapDispatchToProps = dispatch => ({
    checkoutHandler: () => dispatch(checkout()),
    removeFromCartHandler: id => dispatch(removeFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
