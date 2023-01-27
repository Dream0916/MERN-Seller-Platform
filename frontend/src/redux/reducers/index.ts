import { combineReducers } from "redux";
import admin from "./admin";
import user from "./user";
import alert from "./alert";
import credits from "./credits";

const rootReducer = combineReducers({
  admin,
  user,
  alert,
  credits,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
