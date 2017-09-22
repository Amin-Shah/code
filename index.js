import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { rootReducer } from './store/reducers/rootReducer';
import Routes from './routes/router';
import { store } from './store/index'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Routes />
            </Provider>
        );
    };
}

export default App;