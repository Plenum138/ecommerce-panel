import ProductReducer from "./slice/Product/ProductSlice";
import CartReducer from "./slice/Cart/CartSlice";
const reducer = {
    products: ProductReducer,
    cart: CartReducer,
  }

  export default reducer