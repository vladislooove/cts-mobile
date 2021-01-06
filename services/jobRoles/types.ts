// Types
import { Response } from '../types';

export interface IJobRolesService {
  getAll: () => Promise<Response<JobRole[]>>;
}

export interface JobRole {
  id: string;
  name: string;
  order: number;
}