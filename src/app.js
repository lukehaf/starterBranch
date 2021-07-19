import './style.scss';

import React from 'react';

import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';

import Counter from './features/counter/Counter';

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/test/id1">test id1</NavLink></li>
        <li><NavLink to="/test/id2">test id2</NavLink></li>
      </ul>
    </nav>
  );
};

const Welcome = () => {
  return (
    <div>
      <div>Welcome</div>
      <Counter />
    </div>
  );
};

const About = () => {
  return <div> All there is to know about me </div>;
};

const Test = (props) => {
  return <div> ID: {props.match.params.id} </div>;
}; // the match prop is given to us by react router for every path

const FallBack = () => {
  return <div>URL Not Found</div>;
};

const App = () => {
  return (
    <Router>
      <div>
        <Nav />

        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/about" component={About} />
          <Route exact path="/test/:id" component={Test} />
          <Route component={FallBack} />

        </Switch>
      </div>
    </Router>
  );
};

export default App;
