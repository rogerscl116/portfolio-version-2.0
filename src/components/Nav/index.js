
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// react fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Header from "../Home";
import About from "../About";
import Portfolio from "../Portfolio";
import ContactForm from "../Contact";
import Resume from "../Resume";

function Nav() {
  return (
<Router>
<nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
  <Link to="/" className="navbar-brand">Charity Rogers</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{ color: 'lightgray'}} />
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <Link to="/about" className="nav-link">About Me</Link>
      </li>
      <li className="nav-item active">
        <Link to="/portfolio" className="nav-link">Portfolio</Link>
      </li>
      <li className="nav-item active">
        <Link to="/contact" className="nav-link">Contact</Link>
      </li>
      <li className="nav-item active">
        <Link to="/resume" className="nav-link">Resume</Link>
      </li>
    </ul>
  </div>
</nav>

  <Switch>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/portfolio">
      <Portfolio />
    </Route>
    <Route path="/contact">
      <ContactForm />
    </Route>
    <Route path="/resume">
      <Resume />
    </Route>
    <Route path="/">
      <Header />
    </Route>
  </Switch>
</Router>
  )
}

export default Nav;
