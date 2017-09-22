import AddPatients from '../components/addPatients'
import { connect } from 'react-redux'
import addPatientRequest from '../store/actions/addPatient'
import ViewPatient from '../components/viewPatient'

function mapStateToProps(state) {
    console.log('state', state)
    return {
        patient: state.App
    }
}

function mapDispatchToProps(dispatch) {
    return {
        AddPatient: (data) => dispatch(addPatientRequest(data)),
    }

}

const addPatientContainer = connect(mapStateToProps, mapDispatchToProps)(AddPatients)

export default addPatientContainer;