import React from 'react';
import { Link, Route } from 'react-router-dom';
import Users from './containers/Users';
import Pizza from './containers/Pizza';

const App = () => {
  return (
    <div>
      <div>
        <Link to="/">Users</Link> | <Link to="/pizza">Pizza</Link>
      </div>
      <div>
        <Route path="/" exact component={Users} />
        <Route path="/pizza" exact component={Pizza} />
      </div>
    </div>
  );
};

export default App;
