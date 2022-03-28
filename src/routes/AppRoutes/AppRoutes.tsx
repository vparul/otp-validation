import React, { ReactElement } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../../screens/Login/Login";
import NotFound from "../../screens/NotFound/NotFound";
import PhoneValidation from "../../screens/PhoneValidation/PhoneValidation";
import ValidateOTP from "../../screens/ValidateOTP/ValidateOTP";
import PrivateRoute from "./PrivateRoutes";

const AppRoutes = (): ReactElement => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={PhoneValidation} />
      <PrivateRoute exact path="/validate-otp" component={ValidateOTP} />
      <PrivateRoute exact path="/login" component={Login} />
      <Route path="**" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default AppRoutes;
