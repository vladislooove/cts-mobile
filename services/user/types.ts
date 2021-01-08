// Types
import { Response } from '../types';

export interface IUserService {
  login: (data: LoginPayload) => Promise<Response<LoginResponse>>;
  getUser: () => Promise<Response<User>>;
  signUp: (data: SignUpPayload) => Promise<Response<any>>;
  sendFeedback: (data: FeedbackPayload) => Promise<Response<any>>;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  expiresAt: string;
  irrelevantAgreements: string[];
  refreshToken: string;
  tokenType: string;
}

export interface SignUpPayload {
  email: string;
  password: string;
  name: string;
  surname: string;
  practiceId: string;
  practiceBranchId: string;
  jobRole: string;
  userRole: string;
  ccg: string;
  signUpInfo: {
    client: 'ANDROID',
    integration: 'NONE',
    softwareAgent: string;
  };
}

export interface FeedbackPayload {
  subject: string;
  comment: string;
}

export interface User {
  active: boolean;
  cognitoFlag: boolean;
  createdAt: string;
  deactivationDate: string | null;
  defaultHospital: null | string;
  email: string;
  emailForReferralForm: string;
  externalConfigs: any[];
  fax: string | null;
  id: string;
  jobCode: string | null;
  jobRole: string;
  name: string;
  password: string;
  phoneNumber: string | null;
  practiceBranchId: string | null;
  practiceBypass: string | null;
  practiceId: string;
  signUpInfo: {
    client: string;
    integration: string;
    softwareAgent: string;
    version: string;
  };
  surname: string;
  title: null | string;
  updatedOn: string;
  usePersonalDataForReferral: boolean;
  userRole: string;
  verificationData: {
    verified: boolean;
    verifiedDate: null | string;
    verifiedPerson: null | string;
    verificationGroupIds: null | string[]
    verifiedNotes: string | null;
  };
};
