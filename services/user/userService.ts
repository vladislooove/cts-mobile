// Libs
import { Buffer } from 'buffer';

// Constants
import { BASE_URL } from '../constants';

// Types
import { IUserService, LoginPayload } from './types';

export default class UserService implements IUserService {
  public async login({ email, password }: LoginPayload) {
    const response = await fetch(`${BASE_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${Buffer.from(`${email}:${password}`).toString('base64')}`,
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
