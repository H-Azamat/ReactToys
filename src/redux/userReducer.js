const AUTH_USER = 'AUTH_USER'

const initialState = {
    id: '',
    username: '',
    purchases: [],
    isAuth: false
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_USER:
            return {
                ...state,
                id: action.id,
                username: action.username,
                isAuth: true
            }
    
        default:
            return state
    }
}

export const setUser = ({id, username}) => ({
    type: AUTH_USER, 
    id, username
})