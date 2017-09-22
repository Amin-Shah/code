import ActionTypes from '../actions/ActionTypes';

const initial_state = {};
export function AppReducer(state = initial_state, action) {
    switch (action.type) {
        case ActionTypes.LoginRequestSuccess: {
            var newState = Object.assign({}, state, { user: action.data });
            state = newState;
            return state;
        }
        case ActionTypes.SignUpRequestSuccess: {
          var newState = Object.assign({}, state, { user: action.data });
          state = newState;
          return state;
        }
        case ActionTypes.Add_PatientSuccess: {
            var newState = Object.assign({}, state, { addPatient: action.data });
            state = newState;
            return state;
        }
        case ActionTypes.SearchByDateSuccess: {
            var newState = Object.assign({}, state, { searchByDate: action.data });
            state = newState;
            return state;
        }
        case ActionTypes.SearchByNameSuccess: {
            var newState = Object.assign({}, state, { searchByName: action.data });
            state = newState;
            return state;
        }
        case ActionTypes.View_PatientSuccess: {
            var newState = Object.assign({}, state, { viewPatient: action.data });
            state = newState;
            return state;
        }
        default:
            return state;
    }
}