import {
    READ_ALL_TRIPS_REQUEST,
    READ_ALL_TRIPS_SUCCESS,
    READ_ALL_TRIPS_ERROR

} from '../actions/tripActions';


const INITIAL_STATE = {
    loading: false,
    hasError: false,
    error: null,
    data: []

}


export default(state=INITIAL_STATE, action) => {
    switch(action.type) {
        case READ_ALL_TRIPS_REQUEST:
            return {
                ...state,
                loading: true
            };

        case READ_ALL_TRIPS_SUCCESS:
            return {
                ...state,
                loading: false,
                hasError: false,
                data: action.payload
            };

        case READ_ALL_TRIPS_ERROR:
            return {
                ...state,
                loading: false,
                hasError: true,
                error: action.payload
            };
        default:
            return state;
    }
}