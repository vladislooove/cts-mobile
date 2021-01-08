// Libs
import { Buffer } from 'buffer';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Constants
import { BASE_URL } from '../constants';

// Types
import { FeedbackPayload, IUserService, LoginPayload, SignUpPayload } from './types';

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

  public async getUser() {
    const token = await AsyncStorage.getItem('accessToken');
    const response = await fetch(`${BASE_URL}/api/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
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

  public async signUp(body: SignUpPayload) {
    const response = await fetch(`${BASE_URL}/api/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
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

  public async sendFeedback(body: FeedbackPayload) {
    const token = await AsyncStorage.getItem('accessToken');
    const response = await fetch(`${BASE_URL}/user/feedback/email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(body),
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
