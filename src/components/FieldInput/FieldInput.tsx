import React, { ReactElement } from "react";
import { Field } from "formik";
import { FieldInputProps } from "./types";
import './fieldInput.scss';

const FieldInput = ({
  type,
  placeholder,
  className = '',
  value,
  label,
  error,
  required,
  name,
}: FieldInputProps): ReactElement => {
  return (
    <>
      <label className="label">{label}</label>
      <Field
        autoComplete="off"
        name={name}
        required={required}
        type={type}
        placeholder={placeholder}
        className={`field-input ${className}`}
        value={value}
      />
      {error ? <div className="error">{error}</div> : null}
    </>
  );
};

export default FieldInput;
