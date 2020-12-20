// Libs
import { createRef, RefObject } from 'react';

// Types
import { INavigation } from './types';
import { NavigationContainerRef, NavigationState } from '@react-navigation/native';

export default class Navigation implements INavigation {
  public ref: RefObject<NavigationContainerRef> = createRef();

  public navigate(name: string, params?: { [key: string]: any }) {
    this.ref?.current?.navigate(name, params);
  }

  public reset(state: Partial<NavigationState>) {
    this.ref?.current?.reset(state as any);
  }

  public goBack() {
    this.ref?.current?.goBack();
  }
}