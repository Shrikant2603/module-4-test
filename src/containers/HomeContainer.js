import Home from '../components/Home'
import {connect} from 'react-redux'
import {addToCart} from '../services/actions/action'

const mapStateToProps=state=>({
    data:state.cart
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(Home)