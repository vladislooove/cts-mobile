// Types
import { Response } from '../types';

export interface IFactorsService {
  getAll: () => Promise<Response<Practice[]>>;
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