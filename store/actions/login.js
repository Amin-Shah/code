import ActionTypes from './ActionTypes';
import { Actions } from 'react-native-router-flux';
import * as fb from '../../database/firebase'

export function loginRequest(loginData) {
    return dispatch => {
        dispatch(LoginRequest());
        fb.auth.signInWithEmailAndPassword(
            loginData.email, loginData.password
        )
            .then((data) => {
                return fb.database.ref('patientTracker/users/' + data.uid).once('value', snap => {
                    var userobject = snap.val();
                    userobject.uid = data.uid;
                    dispatch(LoginRequestSuccess(userobject));
                    Actions.home()
                });
            })
            .catch((error) => {
                dispatch(LoginRequestFailed());
                alert(error)
            });
    }
}

function LoginRequest() {
    return {
        type: ActionTypes.LoginRequest
    };
}

function LoginRequestSuccess(data) {
    return {
        type: ActionTypes.LoginRequestSuccess,
        data
    };
}

function LoginRequestFailed() {
    return {
        type: ActionTypes.LoginRequestFailed
    };
}