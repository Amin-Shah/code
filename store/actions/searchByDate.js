import ActionTypes from './ActionTypes';
import * as fb from '../../database/firebase'


function searchByDateRequest(data) {
    const arr = []
    let currentUser = fb.auth.currentUser.uid;
    return dispatch => {
        dispatch(searchDateRequest());
        return fb.database.ref(`patientTracker/PatientData/${currentUser}`).orderByChild('date').startAt(data).endAt(data + "\uf8ff").on('value', (snap) => {
            let date = snap.val()
            if (date === null) {
                alert('There is no record in this date')
            }
            arr.push(date)
            dispatch(searchByDateRequestSuccess(arr));
        })
    }
}


function searchDateRequest() {
    return {
        type: ActionTypes.SearchByDate
    }
}
function searchByDateRequestSuccess(data) {
    return {
        type: ActionTypes.SearchByDateSuccess,
        data
    }
}

export default searchByDateRequest;