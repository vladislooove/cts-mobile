// Constants
import { BASE_URL } from '../constants';

// Types
import { IPracticesService } from './types';

export default class PracticesService implements IPracticesService {
  public async getAll() {
    const response = await fetch(`${BASE_URL}/api/practices`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.json();
  }
}
