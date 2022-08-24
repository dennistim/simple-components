import { ReactNode } from "react";

export type CheckboxProp = {
  label?: string | ReactNode;
  value?: string | number;
  name?: string;
  hidden?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  checked?: boolean;
  toggle?: boolean;
  className?: string;
  onChange?: (e: React.SyntheticEvent, data?: { checked: boolean, value?: string | number }) => void;
};
