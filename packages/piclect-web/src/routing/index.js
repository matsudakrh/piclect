import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Top from '../pages/Top';
import PageNotFound from '../pages/PageNotFound';

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>

  );
};

export default Routing;
