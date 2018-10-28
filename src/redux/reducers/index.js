/**
 * Created by Shivam on 28-10-2018.
 */

import * as actionTypes from '../action';

const initialState = {
    employeeDetail: ''
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_DETAILS:
            return {
                ...state,
                employeeDetail: action.value

            }
        case actionTypes.GET_DETAILS_FAILURE:
            return {
                ...state,
                employeeDetail: {
                    employeeDetail: []
                }
            }
        case actionTypes.GET_DETAILS_SUCESS:
            return {
                ...state,
                employeeDetail: action.value
            }
        default:
            return state;
    }
}
export default rootReducer;