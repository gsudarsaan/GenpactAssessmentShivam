/**
 * Created by Shivam on 28-10-2018.
 */

import axios from 'axios';

export const onClickGetDetails = (eid) => {
    return (dispatch) => {

        return axios.get("http://reqres.in/api/users/" + eid).then( (res) => {
            dispatch({
                type: 'GET_DETAILS',
                value: res.data,
            })
            return false;
        }).catch((error) => {
            alert("There was an error in uploading the event. Kindly try again in sometime");
            dispatch({
                type: "global/STOP_LOADING"
            })

        });
    }
}