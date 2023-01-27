import types from "redux/actions/types";

export interface ICredits {
  crypto: string;
  paypal: string;
  stripe: string | null;
}

interface ICreditsLoaded {
  type: typeof types.CREDIT_LOADED;
  payload: ICredits;
}

interface ICreditsAddSuccess {
  type: typeof types.CREDIT_ADD_SUCCESS;
  payload: ICredits;
}

interface ICreditsAddFail {
  type: typeof types.CREDIT_ADD_FAIL;
}

export type CreditsActions =
  | ICreditsLoaded
  | ICreditsAddSuccess
  | ICreditsAddFail

export interface ICreditsState {
  crypto: string | null;
  paypal: string | null;
  stripe: string | null;
  loading: boolean;
}
