import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Nabvar from '../src/components/layout/Navbar'
import Dashboard from '../src/components/dashboard/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
            <Nabvar></Nabvar>
            <Switch>
              <Route path='/' component={Dashboard}/>
            </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
