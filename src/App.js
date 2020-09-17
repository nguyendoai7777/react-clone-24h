
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './apps/components/navbar/Navbar';
import Home from './apps/pages/home/Home';

function App() {
  return (
   <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact>
          <Home/>
        </Route>
      </Switch>
   </Router>
  );
}

export default App;
