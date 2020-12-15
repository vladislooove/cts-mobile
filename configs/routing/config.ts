// Constants
import { SIGNUP_SCREEN, HOME_SCREEN, DASHBOARD_SCREEN, FORGOT_PASSWORD_SCREEN, SYSTEM_SCREEN, SEARCH_SCREEN, MORE_SCREEN } from './constants';

// Screens
import Home from '../../screens/Home';
import Dashboard from '../../screens/Dashboard';
import Signup from '../../screens/Signup';
import ForgotPassword from '../../screens/ForgotPassword';
import System from '../../screens/System';
import Search from '../../screens/Search';
import More from '../../screens/More';

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
  [FORGOT_PASSWORD_SCREEN]: {
    component: ForgotPassword,
  },
  [SYSTEM_SCREEN]: {
    component: System,
  },
  [SEARCH_SCREEN]: {
    component: Search,
  },
  [MORE_SCREEN]: {
    component: More,
  }
};
