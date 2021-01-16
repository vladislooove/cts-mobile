// Constants
import { BASE_URL } from '../constants';

// Types
import { IJobRolesService } from './types';

export default class JobRolesService implements IJobRolesService {
  public async getAll() {
    const response = await fetch(`${BASE_URL}/api/job-roles`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const status = response.status;
    let result = null;
    
    try {
      result = await response.json();
    } catch {
      result = null;
    }
    
    return {
      status,
      response: result,
    };
  }
}
