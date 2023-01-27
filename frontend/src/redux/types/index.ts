import { IAdminState, AdminActions } from "./admin";
import { IUserState, UserActions } from "./user";
import { ICreditsState, CreditsActions } from "./credits";
import { IAlertState, AlertActions } from "./alert";

export type AppState = IAdminState | IUserState | IAlertState | ICreditsState;
export type AppActions = AdminActions | UserActions | AlertActions | CreditsActions;
