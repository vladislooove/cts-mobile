// Constants
import { BASE_URL } from '../constants';

// Types
import { IFactorsService } from './types';

export default class FactorsService implements IFactorsService {
  public async getAll() {
    const response = await fetch(`${BASE_URL}/api/factors`, {
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
