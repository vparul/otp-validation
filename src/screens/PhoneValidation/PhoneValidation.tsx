import React, { ReactElement } from "react";
import { useHistory } from "react-router-dom";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import {
  INVALID_MOBILE_NUMBER,
  MOBILE_REGEX,
  REQUIRED_FIELD,
} from "../../utils/constant/constant";
import FieldInput from "../../components/FieldInput/FieldInput";
import Button from "../../components/Button/Button";
import { validatePhoneNumber } from "../../store/actions/validatePhone.action";
import { useDispatch } from "react-redux";

const PhoneValidation = (): ReactElement => {
  const history = useHistory();
  const dispatch = useDispatch();

  const initialValues: {
    phoneNumber: string;
  } = {
    phoneNumber: "",
  };

  const validationSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .matches(MOBILE_REGEX, INVALID_MOBILE_NUMBER)
      .required(REQUIRED_FIELD),
  });

  return (
    <div className="page-content">
      <div className="form-container">
        <h2 className="heading">Welcome</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={() => {
            dispatch(validatePhoneNumber());
            history.push({ pathname: "/validate-otp" });
          }}
        >
          {({ values, errors, touched, dirty, isValid }) => (
            <Form className="validation-form">
              <FieldInput
                required
                label="Mobile Number"
                name="phoneNumber"
                type="text"
                placeholder="Enter your mobile number"
                error={
                  errors.phoneNumber && !!touched.phoneNumber
                    ? errors.phoneNumber
                    : ""
                }
                value={values.phoneNumber}
              />
              <div className="flex items-end button-container">
                <Button
                  type="submit"
                  text="Submit"
                  disabled={!(isValid && dirty)}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default PhoneValidation;
