// Types
import { ViewProps } from 'react-native';

export interface ButtonProps extends ViewProps {
  primary?: boolean;
  disabled?: boolean;
  title?: string;
}