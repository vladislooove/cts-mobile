// Types
import { Ref } from 'react';
import { NavigationContainerRef } from '@react-navigation/native';

export interface INavigation {
  ref: Ref<NavigationContainerRef>;
  navigate: (name: string, params: { [key: string]: any }) => void;
}