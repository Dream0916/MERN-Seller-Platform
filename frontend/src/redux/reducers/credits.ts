import types from "redux/actions/types";
import { ICreditsState, CreditsActions } from "../types/credits";
import { ICredits } from "redux/types/credits";

const initialState: ICreditsState = {
  crypto: "",
  paypal: "",
  stripe: "",
  loading: false,
};

const creditsReducer = (state = initialState, action: CreditsActions): ICreditsState => {
  switch (action.type) {
    case types.CREDIT_ADD_SUCCESS:
    case types.CREDIT_ADD_FAIL:
    default:
      return state;
  }
};

export default creditsReducer;
