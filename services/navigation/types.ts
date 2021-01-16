// Types
import { RefObject } from 'react';
import { NavigationContainerRef, NavigationState } from '@react-navigation/native';

export interface INavigation {
  ref: RefObject<NavigationContainerRef>;
  navigate: (name: string, params?: { [key: string]: any }) => void;
  reset: (state: Partial<NavigationState>) => void;
  goBack: () => void;
}