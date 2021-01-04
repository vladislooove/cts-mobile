// Types
import { Response } from '../types';

export interface ISystemService {
  getFactors: () => Promise<Response<Factor[]>>;
  getResources: () => Promise<Response<Resource[]>>;
  postFactors: (data: { [key: string]: string | boolean }) => Promise<Response<Diagnosis>>;
}

export interface Factor {
  categories: string[];
  ccgs: string[];
  customizations: Customization[];
  excludedCcgs: null | string[];
  gender: null | boolean;
  id: string;
  maxAge: number;
  minAge: number;
  name: string;
  snomedCT: {
    code: string;
    description: string;
  };
  code: string;
  description: string;
  descriptionCode: string;
  type: string;
}

export interface Customization {
  categories: string[]
  ccgId: string;
  gender: null | boolean;
  maxAge: null | number;
  minAge: null | number;
  name: null | string;
}

export interface Diagnosis {
  summary: string;
  resources: any[];
  recommendations: RecommendationConsideration[];
  considerations: RecommendationConsideration[];

}

export interface RecommendationConsideration {
  additionalNote: string;
  cancer?: Cancer;
  cancerCategory: null;
  cancerId: null;
  ccgs: null;
  customizations: null;
  excludedCcgs: null;
  id: string;
  referralForms: string[];
  medicalPlanId: null;
  medicalPlan: MedicalPlan;
}

export interface MedicalPlan {
  categories: string[];
  customizations: null;
  deadlinePeriods: {
    [key: string]: string;
  };
  id: string;
  name: string;
  referralForms: null | string[];
  snomedCTTestTypes: SnomedCT[];
  types: string[]
}

export interface Cancer {
  category: string;
  id: string;
  name: string;
  snomedCt: SnomedCT;
  subTypes: null;
  suspectedSnomedCt: SnomedCT;
}

export interface SnomedCT {
  code: string;
  description: string;
  descriptionCode: string;
}

export interface Resource {
  categories: string[];
  ccgs: string[];
  description: string;
  diseaseType: string;
  excludedCcgs: string[];
  id: string;
  orgLink: string | null;
  organization: string;
  pdfLinks: {
    [key: string]: string;
  };
  results: any[];
  shortLinkKey: string;
  systemType: string;
  tags: string[];
  title: string;
}