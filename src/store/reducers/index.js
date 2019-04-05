import { combineReducers } from "redux";
import User from "./user_reducer";

const rootReducer = combineReducers({
  User: User
});

export default rootReducer;
