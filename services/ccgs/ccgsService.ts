// Constants
import { BASE_URL } from '../constants';

// Types
import { ICcgsService } from './types';

export default class CcgsService implements ICcgsService {
  public async getAll() {
    const response = await fetch(`${BASE_URL}/api/ccgs`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.json();
  }
}
