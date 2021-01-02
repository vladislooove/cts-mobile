// Constants
import {
  SIGNUP_SCREEN,
  HOME_SCREEN,
  DASHBOARD_SCREEN,
  FORGOT_PASSWORD_SCREEN,
  SYSTEM_SCREEN,
  SEARCH_SCREEN,
  MORE_SCREEN,
  ABOUT_SCREEN,
  GOVERNANCE_SCREEN,
  CONTACT_SCREEN,
  RESOURCES_SCREEN,
  ACCOUNT_SCREEN,
  RISK_ASSESSMENT_SCREEN,
  RESULTS_SCREEN,
  RESOURCES_CATEGORY_SCREEN,
} from './constants';

// Screens
import Home from '../../screens/Home';
import Dashboard from '../../screens/Dashboard';
import Signup from '../../screens/Signup';
import ForgotPassword from '../../screens/ForgotPassword';
import System from '../../screens/System';
import Search from '../../screens/Search';
import More from '../../screens/More';
import About from '../../screens/About';
import Governance from '../../screens/Governance';
import Contact from '../../screens/Contact';
import Resources from '../../screens/Resources';
import ResourcesCategory from '../../screens/ResourcesCategory';
import Account from '../../screens/Account';
import RiskAssessment from '../../screens/RiskAssessment';
import Results from '../../screens/Results';

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
  },
  [ABOUT_SCREEN]: {
    component: About,
  },
  [GOVERNANCE_SCREEN]: {
    component: Governance,
  },
  [CONTACT_SCREEN]: {
    component: Contact,
  },
  [RESOURCES_SCREEN]: {
    component: Resources,
  },
  [ACCOUNT_SCREEN]: {
    component: Account,
  },
  [RISK_ASSESSMENT_SCREEN]: {
    component: RiskAssessment,
  },
  [RESULTS_SCREEN]: {
    component: Results,
  },
  [RESOURCES_CATEGORY_SCREEN]: {
    component: ResourcesCategory,
  },
};
