import { combineReducers } from "redux";
import User from "./reducer";

const rootReducer = combineReducers({
  User: User
});

export default rootReducer;
