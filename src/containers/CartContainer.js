import Cart from '../components/Cart'
import { connect } from 'react-redux'
import { checkout, removeFromCart } from '../services/actions/action'

const mapStateToProps = (state) => ({
  cartItems: state.cart,
})

const mapDispatchToProps = dispatch => ({
    checkoutHandler: () => dispatch(checkout()),
    removeFromCartHandler: data => dispatch(removeFromCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
