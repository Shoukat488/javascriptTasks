import React, { useState, useEffect } from 'react';
import Input from './components/input';
import List from './components/list';
import Update from './components/update';
import { Provider } from 'react-redux'
import store from './store/store';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Navigation from './components/navigation';
import logo from './logo.svg';
// import './App.css';

function App() {

  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={List} />
          <Route path="/input" component={Input} />
          <Route path="/update" component={Update} />
          {/* <Navigation /> */}

          {/* <Redirect to='/' /> */}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
