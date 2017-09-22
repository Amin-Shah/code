import ActionTypes from './ActionTypes';
import * as fb from '../../database/firebase'


function searchByNameRequest(data) {
    const arr = []
    var res = data.toLowerCase();
    let currentUser = fb.auth.currentUser.uid;
    return dispatch => {
        dispatch(searchPatientByNameRequest());
        return fb.database.ref(`patientTracker/PatientData/${currentUser}`).orderByChild('name').startAt(res).endAt(res + "\uf8ff").on('value', (snap) => {
                let name = snap.val()
                if (name === null) {
                    alert('This name is not in the List')
                }
                arr.push(name)
                dispatch(searchPatientRequestSuccess(arr));
            })
    }
}


function searchPatientByNameRequest() {
    return {
        type: ActionTypes.SearchByName
    }
}
function searchPatientRequestSuccess(data) {
    return {
        type: ActionTypes.SearchByNameSuccess,
        data
    }
}

export default searchByNameRequest;