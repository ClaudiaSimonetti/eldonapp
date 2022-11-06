import{ createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import authReducer from "./reducers/authReducer";
import CartReducer from "./reducers/cartReducer";
import ordersReducer from "./reducers/orderReducer";
import ProductReducer from "./reducers/productsReducer";
import SectionReducer from "./reducers/sectionReducer";

const RootReducer = combineReducers({
    product: ProductReducer,
    section: SectionReducer,
    cart: CartReducer,
    orders: ordersReducer,
    auth: authReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk))

