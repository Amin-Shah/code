import { connect } from 'react-redux'
import SearchByDate from '../components/searchByDate'
import searchByDateRequest from '../store/actions/searchByDate'


function mapStateToProps(state) {
    console.log('state', state)
    return {
        Search: state.App
    }
}

function mapDispatchToProps(dispatch) {
    return {
        searchbydate: (name) => dispatch(searchByDateRequest(name))
    }

}

const searchByDate = connect(mapStateToProps, mapDispatchToProps)(SearchByDate)

export default searchByDate;