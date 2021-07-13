import {SET_POST, ERROR_POST} from '../action/action.types'

const initialState = {
    post: null,
    loading: true,
    error: false
}

export default (state = initialState, action) =>{
    switch (action.type) {
        case SET_POST:
            return {
                ...state,
                post: action.payload,
                loading : false,
                error: false
            }
        case SET_POST:
            return {
                ...state,
                loading : false,
                error: true
            }
        default:
            return state
    }

}