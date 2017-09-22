import ActionTypes from './ActionTypes';
import * as fb from '../../database/firebase'

function viewPatientRequest() {
    return dispatch => {
        dispatch(viewPatRequest());
        let currentUser = fb.auth.currentUser.uid;
        return fb.database.ref(`patientTracker/PatientData/${currentUser}`).on('value', (dataSnap) => {
            const arr = [];
            arr.push(dataSnap.val())
            dispatch(viewPatientRequestSuccess(arr));
        })
    }
}


function viewPatRequest() {
    return {
        type: ActionTypes.View_Patient
    }
}
function viewPatientRequestSuccess(data) {
    return {
        type: ActionTypes.View_PatientSuccess,
        data
    }
}

export default viewPatientRequest;