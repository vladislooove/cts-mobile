// Constants
import { BASE_URL } from '../constants';

// Types
import { IUserService, LoginPayload, LoginResponse } from './types';

export default class UserService implements IUserService {
  public async login({ email, password }) {
    const response = await fetch(`${BASE_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${Buffer.from(`${email}:${password}`).toString('base64')}`,
      },
    });

    return response.json();
  }
}
