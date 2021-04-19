import React from 'react';
import Navigation from './components/Navigation';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Canine from './components/pages/Canine';
import Products from './components/pages/Products';
import Final from './components/pages/Final';
import Breed from './components/pages/Breed';
// import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/canine' component={Canine} />
          <Route path='/products' component={Products} />
          <Route path='/final' component={Final} />
          <Route path='/breed' component={Breed}/>

          {/* <Route path='/sign-up' component={SignUp} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
