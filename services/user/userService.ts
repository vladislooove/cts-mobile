// Types
import { IUserService, LoginPayload, LoginResponse } from './types';

export default class UserService implements IUserService {
  public async login({ email, password }: LoginPayload): LoginResponse {
    const response = await fetch('https://dev.cthesigns.co.uk/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${Buffer.from(`${email}:${password}`).toString('base64')}`,
      },
    });

    return response.json();
  }
}
