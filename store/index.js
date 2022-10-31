import{ createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import CartReducer from "./reducers/cartReducer";
import ProductReducer from "./reducers/productsReducer";
import SectionReducer from "./reducers/sectionReducer";

const RootReducer = combineReducers({
    product: ProductReducer,
    section: SectionReducer,
    cart: CartReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk))

