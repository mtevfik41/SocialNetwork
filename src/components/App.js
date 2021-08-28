import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Login from './pages/Login';

const App = () => {
  return (
      <Router>
        <div>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Login}/>
            </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;
