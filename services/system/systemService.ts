// Libs
import AsyncStorage from '@react-native-async-storage/async-storage';

// Constants
import { BASE_URL } from '../constants';

// Types
import { ISystemService } from './types';

export default class SystemService implements ISystemService {
  public async getFactors() {
    const token = await AsyncStorage.getItem('accessToken');
    const response = await fetch(`${BASE_URL}/api/factors`, {
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

  public async postFactors(data: { [key: string]: string | boolean }) {
    const token = await AsyncStorage.getItem('accessToken');
    const response = await fetch(`${BASE_URL}/api/system/diagnoses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(data),
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
