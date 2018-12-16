import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import TodosApp from './todos-app';

const Root = (props) => {
  return (
    <Provider store={props.store}>
      <BrowserRouter basename="/todos/">
        <Switch>
          <Route path="/:filter" component={TodosApp} />
          <Route path="/" component={TodosApp} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
};

export default Root;