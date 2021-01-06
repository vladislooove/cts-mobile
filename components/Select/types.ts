export interface SelectProps {
  onChange: (item: Option) => void;
  options: Option[];
  value?: string;
  placeholder?: string;
  title?: string;
  disabled?: boolean;
  hideLetters?: boolean;
}

export interface Option {
  value: string;
  label: string;
  key: string
}
