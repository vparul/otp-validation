import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Redirect, Route, useLocation } from 'react-router-dom';

const PrivateRoute = (props: any) => {
    const location = useLocation();
    const phoneValidation = useSelector((state: RootStateOrAny) => state.isPhoneNumberValidated);
  
    return phoneValidation ? (
      <Route {...props} />
    ) : (
      <Redirect
        to={{
          pathname: "/",
          state: { from: location }
        }}
      />
    );
  };

  export default PrivateRoute;