import React, { ReactElement } from "react";
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import Button from "../../components/Button/Button";
import FieldInput from "../../components/FieldInput/FieldInput";
import { REQUIRED_FIELD, INVALID_EMAIL_ID } from "../../utils/constant/constant";

const Login = (): ReactElement => {
  const initialValues: {
    email: string;
    password: string;
  } = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required(REQUIRED_FIELD).email(INVALID_EMAIL_ID),
    password:  Yup.string().required(REQUIRED_FIELD),
  });

  return (
    <div className="page-content">
    <div className="form-container">
      <h2 className="heading">Please login to continue</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={() => {}}
      >
        {({ values, errors, touched }) => (
          <Form className="validate-form">
            <FieldInput
              required
              label="Email ID"
              name="email"
              type="text"
              placeholder="Enter your email ID"
              error={
                errors.email && !!touched.email
                  ? errors.email
                  : ""
              }
              value={values.email}
            />
            <FieldInput
              required
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              error={
                errors.password && !!touched.password
                  ? errors.password
                  : ""
              }
              value={values.password}
            />
            <div className="flex items-end button-container mt-20">
              <Button
                disabled
                type="submit"
                text="Submit"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  </div>
  )
};

export default Login;
