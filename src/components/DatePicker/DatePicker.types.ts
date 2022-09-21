import { ReactDatePickerProps } from "react-datepicker";

export type DatePickerProp = ReactDatePickerProps & {
  width?: number;
  error?: string;
};
