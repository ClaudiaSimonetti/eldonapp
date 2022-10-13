import productsTypes from "../types/products.types";

const { SELECTED_PRODUCT, FILTERED_PRODUCT }= productsTypes;

export const selectedProduct=(id)=>({
    type: SELECTED_PRODUCT,
    productId: id
});

export const filteredProducts=(id)=>({
    type: FILTERED_PRODUCT,
    categoryId: id
});
