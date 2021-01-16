// Libs
import AsyncStorage from '@react-native-async-storage/async-storage';

// Constants
import { BASE_URL } from '../constants';

// Types
import { INotificationsService } from './types';

export default class NotificationsService implements INotificationsService {
  public async getAll() {
    const token = await AsyncStorage.getItem('accessToken');
    const response = await fetch(`${BASE_URL}/api/notifications`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Client': 'ANDROID',
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
}
