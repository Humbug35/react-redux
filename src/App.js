import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/index';
import MainRouter from './components/MainRouter';
import AllOrder from './components/AllOrder';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainRouter>
          <AllOrder />
        </MainRouter>
      </Provider>
    );
  }
}

export default App;
