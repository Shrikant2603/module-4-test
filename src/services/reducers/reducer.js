import { ADD_TO_CART, CHECKOUT, REMOVE_FROM_CART } from '../Constants'
const initialState = {
    cart: [],
    total: 0
};

function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
          return {
            ...state,
            cart: [...state.cart, action.payload],
            total: state.total + action.payload.price
          };
        case REMOVE_FROM_CART:
            const removedProductIndex = state.cart.findIndex(
                payload => payload.id === action.payload.id
              );
              if (removedProductIndex === -1) {
                return state;
              }
              const updatedCart = [...state.cart];
              updatedCart.splice(removedProductIndex, 1);
              return {
                ...state,
                cart: updatedCart,
              };
        case CHECKOUT:
          return {
            ...state,
            cart: [],
          };
        default:
          return state;
      }
}

export default cartReducer;