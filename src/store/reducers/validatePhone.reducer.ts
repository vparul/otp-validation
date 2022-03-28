import { VALIDATE_PHONE_NUMBER } from "../../utils/constant/validatePhoneNumberConstant";

interface IInitialState {
  isPhoneNumberValidated: boolean;
}

const initialState = {
  isPhoneNumberValidated: false,
};

const PhoneNumberValidationState = (
  state = initialState,
  action: { type: string; payload?: any }
): IInitialState => {
  switch (action.type) {
    case VALIDATE_PHONE_NUMBER:
      return {
        isPhoneNumberValidated: true,
      };
    default:
      return state;
  }
};

export default PhoneNumberValidationState;
