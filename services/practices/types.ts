// Types
import { Response } from '../types';

export interface IPracticesService {
  getAll: () => Promise<Response<Practice[]>>;
}

export interface Practice {
  addressLine1: null | string;
  addressLine2: null | string;
  branches: Practice[];
  bypass: null | string;
  ccg: string;
  city: null | string;
  code: string;
  county: null | string;
  email: null | string;
  fax: null | string;
  id: string;
  name: string;
  phone: null | string;
  postcode: null | string;
  site: null | string;
}