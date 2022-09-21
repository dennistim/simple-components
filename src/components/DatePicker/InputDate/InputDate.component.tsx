import React from "react";
import InputField from "@components/InputField";
import SvgIcon, { IconName } from "@components/SvgIcon";
import { InputDateProp } from "./InputDate.types";

import Colors from "@styles/colors.scss";

const InputDate = React.forwardRef(({ value, onClick, width = 186, error, className }: InputDateProp, ref: React.Ref<HTMLDivElement>) => {
  return (
    <div style={{width: `${width}px`}} className={className} ref={ref}>
      <InputField
        error={error}
        readOnly
        value={value}
        onClick={onClick}
        button={
          <SvgIcon icon={IconName.calendar} color={Colors.mainBlue} pointer onClick={onClick}/>
        }
      />
    </div>
  );
});

InputDate.displayName = "InputDate";

export default InputDate;
