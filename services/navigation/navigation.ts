// Libs
import { createRef, Ref } from 'react';

// Types
import { INavigation } from './types';
import { NavigationContainerRef } from '@react-navigation/native';

export default class Navigation implements INavigation {
  public ref: Ref<NavigationContainerRef> = createRef();

  public navigate(name, props?) {
    this.ref.current?.navigate(name, props);
  }
}