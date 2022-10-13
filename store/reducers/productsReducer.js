import  products  from '../../constants/data/products';


const initialState = { 
    products: products,
    filteredProducts: [],
    selected: null
}

function ProductReducer(state=initialState, action){
    return state
}

export default ProductReducer;