import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Nabvar from '../src/components/layout/Navbar'
import Dashboard from '../src/components/dashboard/Dashboard'
import ProjecDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
            <Nabvar></Nabvar>
            <Switch>
              <Route path='/' exact component={Dashboard}/>
              <Route path='/project/:id' component={ProjecDetails}/>
              <Route path='/SignIn' component={SignIn}/>
              <Route path='/SignUp' component={SignUp}/>
            </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
