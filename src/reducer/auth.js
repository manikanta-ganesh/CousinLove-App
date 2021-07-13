import {SET_USER, IS_AUTHTHENTICATED} from '../action/action.types'

const initialState = {
    user: null,
    loading: true,
    isAuththenticated: false
}

export default (state = initialState, action) => {

    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            }

        case IS_AUTHTHENTICATED:
            return {
                ...state,
                isAuththenticated: action.payload,
                loading: false
            }
    
        default:
            return state
    }

}
