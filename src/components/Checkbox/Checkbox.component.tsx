import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { uuid } from "@utils";
import { CheckboxProp } from "./Checkbox.types";

import styles from "./Checkbox.module.scss";

const Checkbox = ({
  label,
  value,
  name,
  hidden = false,
  readonly = false,
  disabled = false,
  checked = false,
  toggle = false,
  className,
  onChange,
}: CheckboxProp) => {
  const [currentState, setCurrentState] = useState<boolean>(checked);
  const id = uuid();
  const checkboxName = name || `checkbox_${id}`;

  useEffect(() => {
    setCurrentState(checked);
  }, [checked]);

  return (
    <div
      className={classnames(styles.checkbox, { [styles.disabled]: disabled, [styles.readonly]: readonly, [styles.checked]: currentState })}
      onClick={(e: React.SyntheticEvent) => {
        !readonly && !disabled && setCurrentState(!currentState);
        !readonly && !disabled && onChange && onChange(e, { checked: !currentState, value });
      }}
    >
      {!hidden &&
        <input
          type="checkbox"
          id={id}
          name={checkboxName}
          value={value}
          disabled={disabled || readonly}
          checked={currentState}
          className={classnames(className, { [styles.toggle]: toggle, [styles.hidden]: hidden })}
          onChange={(e: React.SyntheticEvent) => {
            !readonly && !disabled && setCurrentState(!currentState);
            !readonly && !disabled && onChange && onChange(e, { checked: !currentState, value });
          }}
        />}
      <label htmlFor={checkboxName} className={classnames(styles.checkbox_label, {
        [styles.disabled]: disabled,
        [styles.readonly]: readonly,
        [styles.hidden]: hidden,
        [styles.checked]: currentState })}
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
