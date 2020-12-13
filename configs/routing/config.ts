// Constants
import { SIGNUP_SCREEN, HOME_SCREEN, DASHBOARD_SCREEN } from './constants';

// Screens
import Home from '../../screens/Home';
import Dashboard from '../../screens/Dashboard';
import Signup from '../../screens/Signup';

export default {
  [HOME_SCREEN]: {
    component: Home,
  },
  [DASHBOARD_SCREEN]: {
    component: Dashboard,
  },
  [SIGNUP_SCREEN]: {
    component: Signup,
  },
};
