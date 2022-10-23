import{ createStore, combineReducers } from "redux";
import ProductReducer from "./reducers/productsReducer";
import SectionReducer from "./reducers/sectionReducer";

const RootReducer = combineReducers({
    product: ProductReducer,
    section: SectionReducer,
})

export default createStore(RootReducer)

