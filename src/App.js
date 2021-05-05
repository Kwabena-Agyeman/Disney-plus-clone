import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header.component';
import Home from './components/Home/Home.component';
import DetailPage from './components/Detail-Page/Detail-Page.component.jsx';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/detail'>
            <DetailPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
