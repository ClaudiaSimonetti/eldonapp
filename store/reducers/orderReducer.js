import { ordersTypes } from "../types/order.types.js";


const { DELETE_ORDER, GET_ORDERS } = ordersTypes;

const initialState = {
    list: []
}

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS:
        return {
            ...state,
            list: action.orders
        }
        case DELETE_ORDER:
            return {
                ...state,
                list: state.list.filter(order => order.id !== action.id)
            }
        default: 
            return state;
    }
}

export default ordersReducer;