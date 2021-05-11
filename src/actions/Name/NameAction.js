import { SET_CURRENT_FIRSTNAME, SET_CURRENT_LASTNAME} from './Types'

export const setCurrentFirstName = (payload) => (dispatch) => {
    return {
        type: SET_CURRENT_FIRSTNAME,
        payload: payload
    }
}
export const setCurrentLastName = (payload) => (dispatch) => {
    return {
        type: SET_CURRENT_LASTNAME,
        payload: payload
    }
}
