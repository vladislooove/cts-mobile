// Constants
import { SIGNUP_SCREEN, HOME_SCREEN, DASHBOARD_SCREEN, FORGOT_PASSWORD_SCREEN } from './constants';

// Screens
import Home from '../../screens/Home';
import Dashboard from '../../screens/Dashboard';
import Signup from '../../screens/Signup';
import ForgotPassword from '../../screens/ForgotPassword';

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
};
