import ActionTypes from './ActionTypes';
import { Actions } from 'react-native-router-flux';
import * as fb from '../../database/firebase'


function addPatientRequest(data) {
    return dispatch => {
        dispatch(PatientRequest());
        let currentUser = fb.auth.currentUser.uid;
        return fb.database.ref(`patientTracker/PatientData/${currentUser}`).push(data)
        .then((data) => {
            dispatch(PatientRequestSuccess(data));
            alert('Detail Submited successfully')
            Actions.home()
        })
        .catch((error) => {
            dispatch(Add_PatientFailed());
        });
    }
}


function PatientRequest() {
    return {
        type: ActionTypes.Add_Patient
    }
}
function PatientRequestSuccess(data) {
    return {
        type: ActionTypes.Add_PatientSuccess,
        data
    }
}

function LoginRequestFailed() {
    return {
        type: ActionTypes.LoginRequestFailed
    };
}

export default addPatientRequest;