import React, { useEffect, useState } from "react";
import classnames from "classnames";
import Text from "@components/Text";
import { uuid } from "@utils";
import { InputFieldProp, InputFieldSize, inputFieldSizeClass, InputFieldType } from "./InputField.types";

import styles from "./InputField.module.scss";
import Colors from "@styles/colors.scss";

const InputField = ({
  type = InputFieldType.Text,
  size = InputFieldSize.Mini,
  name,
  placeholder,
  label,
  className,
  value,
  error,
  button,
  onChange,
}: InputFieldProp) => {
  const [currentValue, setCurrentValue] = useState(value);
  const [focus, setFocus] = useState<boolean>(false);
  const [inputType, setInputType] = useState<InputFieldType>(type);

  const id = uuid();
  const inputName = name ? name : `input_${id}`;

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  useEffect(() => {
    setInputType(type);
  }, [type]);

  return (
    <div className={classnames(styles.input_field, className, { [styles.focused]: focus })}>
      <input
        type={inputType}
        autoComplete="off"
        name={id}
        id={inputName}
        placeholder={placeholder}
        className={classnames(styles.input_field_text, inputFieldSizeClass[size], className, { [styles.focused]: focus, [styles.labeled]: label, [styles.error]: !!error })}
        value={currentValue || ""}
        onFocus={() => setFocus(true)}
        onBlur={() => !currentValue && setFocus(false)}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setCurrentValue(e.target.value);
          onChange && onChange(e, e.target.value);
        }}
      />
      <label htmlFor={inputName} className={classnames(styles.input_field_label, className, { [styles.focused]: focus, [styles.error]: !!error })}>{label}</label>
      {!!error && <Text color={Colors.red} size={12} className={classnames(styles.input_field_error, className)} >{error}</Text>}
      {button &&
      <div className={classnames(styles.input_field_button, inputFieldSizeClass[size], className)}>
        {button}
      </div>}
    </div>
  );
};

export default InputField;
