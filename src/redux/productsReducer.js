const SET_PRODUCTS = "SET_PRODUCTS"
const SET_CATEGORY = "SET_CATEGORY"
const SET_IS_GET_PRODUCTS = "SET_IS_GET_PRODUCTS"

const initialState = {
    paginationData: {
        hasNextPage: true,
        hasPrevPage: false,
        limit: 9,
        nextPage: 0,
        page: 1,
        prevPage: null,
        totalPages: 0
    },
    isGetProducts: false,
    products: [],
    category: null
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                paginationData: {...action.paginationData},
                products: [...action.products],
                isGetProducts: true
            }

        case SET_IS_GET_PRODUCTS:
            return {
                ...state,
                isGetProducts: false
            }

        case SET_CATEGORY:
            return {
                ...state,
                category: action.category
            }
    
        default:
            return state
    }
}

export const setIsGetProducts = () => ({type: SET_IS_GET_PRODUCTS}) 

export const setProducts = (products, paginationData) => ({
    type: SET_PRODUCTS,
    products, paginationData  
})

export const setCategory = (category) => ({ 
    type: SET_CATEGORY,
    category
})


