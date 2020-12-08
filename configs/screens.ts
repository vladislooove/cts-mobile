// Screen names
export const HOME_SCREEN = 'HOME_SCREEN';
export const SIGNUP_SCREEN = 'SIGNUP_SCREEN';
export const DASHBOARD_SCREEN = 'DASHBOARD_SCREEN';

// Screens
import Home from '../screens/Home';
import Dashboard from '../screens/Dashboard';
import Signup from '../screens/Signup';

export default {
  [HOME_SCREEN]: {
    component: Home,
    options: {
      header: () => null,
    },
  },
  [DASHBOARD_SCREEN]: {
    component: Dashboard,
  },
  [SIGNUP_SCREEN]: {
    component: Signup,
    options: {
      title: '',
    },
  },
};
