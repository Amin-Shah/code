import { connect } from 'react-redux'
import SearchByName from '../components/searchByName'
import searchByNameRequest from '../store/actions/searchByName'


function mapStateToProps(state) {
    return {
        Search: state.App
    }
}

function mapDispatchToProps(dispatch) {
    return {
        searchByName: (name) => dispatch(searchByNameRequest(name)),
    }
}

const searchByNameContainer = connect(mapStateToProps, mapDispatchToProps)(SearchByName)

export default searchByNameContainer;