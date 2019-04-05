import axios from "axios";
import { SIGN_IN, SIGN_UP } from "../types";
export function signUp() {
  return {
    type: SIGN_IN,
    payload: {
      email: "tns@gmail.com",
      token: "12323"
    }
  };
}

export function signIn() {
  return {
    type: SIGN_UP,
    payload: {
      email: "tns2@gmail.com",
      token: "12323"
    }
  };
}
