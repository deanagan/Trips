import axios from 'axios';

export const READ_ALL_TRIPS_REQUEST = 'READ_ALL_TRIPS_REQUEST';
export const READ_ALL_TRIPS_SUCCESS = 'READ_ALL_TRIPS_SUCCESS';
export const READ_ALL_TRIPS_ERROR = 'READ_ALL_TRIPS_ERROR';

const readSuccess = payload => ({
    type: READ_ALL_TRIPS_SUCCESS,
    payload // same as payload: payload
});


const readError = payload => ({
    type: READ_ALL_TRIPS_ERROR,
    payload // same as payload: payload
});

export const readAll = () => async dispatch => {
    dispatch({
        type: READ_ALL_TRIPS_REQUEST
    });
    try {
        const res = await axios.get('api/Trips/ReadAll');
        const response = res.data;
        dispatch(readSuccess(response));
    }
    catch (error) {
        dispatch(readError("Error reading trips."));
        return Promise.reject({});
    }
    
}