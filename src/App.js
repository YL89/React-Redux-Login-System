import React from 'react';
import { Route, Switch} from 'react-router-dom'
import Header from './components/header';
import Home from './components/home';
import SignIn from './components/signin';
import SignUp from './components/signup';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' render={() => (
            <Home />
          )} />
          <Route exact path='/signin' render={() => (
            <SignIn />
          )} />
          <Route exact path='/signup' render={() => (
            <SignUp />
          )} />
        </Switch>
      </div>
  );
}

export default App;
