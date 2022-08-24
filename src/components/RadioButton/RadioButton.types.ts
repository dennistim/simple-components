import { ReactNode } from "react";

export type RadioButtonProp = {
  name: string;
  label?: string | ReactNode;
  value?: string | number;
  readonly?: boolean;
  disabled?: boolean;
  checked?: boolean;
  toggle?: boolean,
  className?: string;
  onChange?: (e: React.SyntheticEvent, data?: { checked: boolean, value?: string | number }) => void;
};
