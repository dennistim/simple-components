import { getClasses } from "@utils";
import styles from "./InputField.module.scss";

export enum InputFieldSize {
  Large = "large",
  Mini = "mini"
}

export enum InputFieldType {
  Text = "text",
  Password = "password",
  Email = "email"
}

export const inputFieldSizeClass = getClasses(InputFieldSize, styles);

export type InputFieldProp = {
  type?: InputFieldType,
  size?: InputFieldSize;
  name?: string;
  placeholder?: string;
  className?: string;
  label?: string;
  value?: string;
  error?: string;
  button?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>,  value?: string) => void;
};
