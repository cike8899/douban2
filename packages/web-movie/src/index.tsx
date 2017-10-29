import { Switch, Route } from 'react-router-dom';
import Subject from './containers/subject/index';
import * as React from 'react-dom';

const MovieApp = function({ match, location }: { match: any; location: any }) {
  return (
    <div>
      <Switch>
        <Route path={`${match.path}/subject`} component={Subject} />
      </Switch>
    </div>
  );
};

export default MovieApp;
