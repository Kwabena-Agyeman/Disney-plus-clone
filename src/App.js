import React from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header.component';
import Home from './components/Home/Home.component';
import DetailPage from './components/Detail-Page/Detail-Page.component.jsx';
import LoginPage from './components/Login-Page/Login-page.component.jsx';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/login'>
            <LoginPage />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/detail/:id'>
            <DetailPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
