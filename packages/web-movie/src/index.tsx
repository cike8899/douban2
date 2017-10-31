import { Switch, Route } from 'react-router-dom';
import Subject from './containers/subject/index';
import * as React from 'react';

interface IParams {
  match: any;
  location: any;
}

const MovieApp = function({ match, location }: IParams) {
  return (
    <div>
      <Switch>
        <Route path={`${match.path}/subject`} component={Subject} />
      </Switch>
    </div>
  );
};

export default MovieApp;
