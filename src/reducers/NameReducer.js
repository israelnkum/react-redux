import { SET_CURRENT_FIRSTNAME, SET_CURRENT_LASTNAME} from '../actions/Name/Types'

const defaultName = {
    firstName: 'TechLine',
    lastName: 'Africa'

}

export default function currentNameReducer (state = defaultName, action){
    switch (action.type){
        case SET_CURRENT_FIRSTNAME:
            return {
                ...state,
                firstName: action.payload
            }
        case SET_CURRENT_LASTNAME:
            return {
                ...state,
                lastName: action.payload
            }
        default:
            return state

    }
}
