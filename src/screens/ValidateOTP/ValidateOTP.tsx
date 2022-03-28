import React, { ReactElement, useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "../../components/Button/Button";
import FieldInput from "../../components/FieldInput/FieldInput";
import { INVALID_OTP, OTP_MAXIMUM_LIMIT_EXCEEDED } from "../../utils/constant/constant";

const ValidateOTP = (): ReactElement => {
  const history = useHistory();
  let [trialTime, setTrialTime] = useState(0);

  const initialValues: {
    otp: string;
  } = {
    otp: "",
  };

  const validationSchema = Yup.object().shape({
    otp: Yup.string()
      .max(4, INVALID_OTP)
      .min(4, INVALID_OTP),
  });

  const onFormSubmit = (values: { otp: string }): void => {
    if (trialTime > 3) {
      toast.error(OTP_MAXIMUM_LIMIT_EXCEEDED);
    } else {
      if (values.otp === "1111") {
        history.push({ pathname: "/login" });
      } else {
        toast.error('Invalid OTP');
      }
    }
    setTrialTime((trialTime += 1));
  };

  return (
    <div className="page-content">
      <div className="form-container">
        <h2 className="heading">OTP Validation</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => onFormSubmit(values)}
        >
          {({ values, errors, touched, dirty, isValid }) => (
            <Form className="validation-form">
              <FieldInput
                required
                label="One-time password"
                name="otp"
                type="text"
                placeholder="Enter the OTP"
                error={errors.otp && !!touched.otp ? errors.otp : ""}
                value={values.otp}
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
      <ToastContainer />
    </div>
  );
};

export default ValidateOTP;
