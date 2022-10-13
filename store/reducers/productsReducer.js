import  products  from '../../constants/data/products';
import productsTypes from '../types/products.types';

const { SELECTED_PRODUCT, FILTERED_PRODUCT }= productsTypes;

const initialState = { 
    products: products,
    filteredProducts: [],
    selected: null
}

function ProductReducer(state=initialState, action){
    switch(action.type){
        case SELECTED_PRODUCT:
            return{
                ...state,
                selected: state.products.find((product)=> product.id === action.productId)
            }
        case FILTERED_PRODUCT:
            return{
                ...state,
                filteredProducts: state.products.filter((product)=>product.sectionId === action.categoryId)
            }
        default:
            return state;
    }
    
}

export default ProductReducer;