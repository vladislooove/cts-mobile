// Libs
import { createRef } from 'react';

// Types
import { INavigation } from './types';

export default class Navigation implements INavigation {
  public ref = createRef();

  public navigate(name, props) {
    this.ref.current?.navigate(name, props);
  }
}