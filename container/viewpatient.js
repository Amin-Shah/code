import { connect } from 'react-redux'
import viewPatientRequest from '../store/actions/viewPatient'
import ViewPatient from '../components/viewPatient'


function mapStateToProps(state) {
    console.log('state', state)
    return {
        viewPat: state.App
    }
}

function mapDispatchToProps(dispatch) {
    return {
        patient: (data) => dispatch(viewPatientRequest(data))
    }
}

const viewPatient = connect(mapStateToProps, mapDispatchToProps)(ViewPatient)

export default viewPatient;