import React, { Component } from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux';
import Home from '../components/home'
import addPatientContainer from '../container/addPatient'
import viewPatient from '../container/viewpatient'
import LoginContainer from '../container/login'
import searchByNameContainer from '../container/searchByName'
import searchByDate from '../container/searchByDate'
import SignUpContainer from '../container/signup'

class Routes extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="login" component={LoginContainer} hideNavBar={true} />
                    <Scene key="signup" component={SignUpContainer} hideNavBar={true} />
                    <Scene key="home" component={Home} hideNavBar={true} />
                    <Scene key="addPatient" component={addPatientContainer} title='Add Patient Detail' hideNavBar={false} />
                    <Scene key="viewpatient" component={viewPatient} title='Patient Detail' hideNavBar={false} />
                    <Scene key="searchByName" component={searchByNameContainer} title='Search By Name' hideNavBar={false} />
                    <Scene key="searchByDate" component={searchByDate} title='Search By Date' hideNavBar={false} />
                </Scene>
            </Router>

        )
    }
}



export default Routes;