import AuthService from "../../services/authService";
// import { LOGIN, REGISTER, LOGOUT, UPDATE_PROFILE } from '../types/index'

export const LOGIN = "LOGIN";

export const login = (params, history) => (dispatch) => {
  return AuthService.login(params)
    .then((data) => {
      console.log(data);
      dispatch({ type: LOGIN, payload: data });
      history.push("/");
    })
    .catch((err) => {});
};
