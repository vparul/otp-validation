import { createStore } from "redux";
import PhoneNumberValidationState from "./store/reducers/validatePhone.reducer.ts";

function configureStore(state) {
  return createStore(PhoneNumberValidationState, state);
}

export default configureStore;
