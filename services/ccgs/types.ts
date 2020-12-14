// Types
import { Response } from '../types';

export interface ICcgsService {
  getAll: () => Promise<Response<Ccg[]>>;
}

export interface Ccg {
  alliance: string;
  contractSigned: boolean;
  hidden: null;
  id: string;
  name: string;
  signedAt: null | string;
  signedTill: null | string;
  stp: string;
  territory: string;
}