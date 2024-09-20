import { Props as SelectProps } from "react-select";

export interface HeaderSelectProps extends SelectProps<SelectItem> {
  items: SelectItem[];
}

export interface SelectItem {
  value: string;
  label: string;
}
