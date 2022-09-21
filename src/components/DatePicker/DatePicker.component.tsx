import React from "react";
import DatePicker from "react-datepicker";
import InputDate from "./InputDate";
import { DatePickerProp } from "./DatePicker.types";

import "react-datepicker/dist/react-datepicker.css";

const DPicker = (props: DatePickerProp) => {
  return (
    <DatePicker
      {...props}
      showPopperArrow={false}
      customInput={
        <InputDate
          value={props.selected?.toLocaleDateString() || ""}
          error={props.error}
          width={props.width}
        />
      }
    />
  );
};

export default DPicker;
