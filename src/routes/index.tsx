import { Switch } from 'react-router-dom';
import { SignIn, Dashboard } from 'src/pages';
import Route from '@/routes/Route';

function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={SignIn} />
      <Route path='/dashboard' isPrivate component={Dashboard} />
    </Switch>
  );
}

export default Routes;
