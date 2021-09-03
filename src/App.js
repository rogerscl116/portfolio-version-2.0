import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import About from './components/About';
import Header from './components/Header';


function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Header} />
          <Route path="/about" component={About} />
          {/* <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} /> */}
          <Nav />
        </Switch>
      </Router>
    </div>
  );
}

export default App;