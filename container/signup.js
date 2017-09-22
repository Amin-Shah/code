import { connect } from 'react-redux';
import SignUp from '../components/signup';
import { SignUpRequest } from '../store/actions/signup';

function mapStateToProps(state) {
    //here we are mapping the redux state to props so we can use it in our components
    return {
        application: state.App
    };
}

function mapDispatchToProps(dispatch) {
    //Those will be the actions we will be Triggerening from Components
    return {
        signUpRequest: (userData) => dispatch(SignUpRequest(userData))
    };
}

const SignUpContainer = connect(mapStateToProps, mapDispatchToProps)(SignUp);

export default SignUpContainer;