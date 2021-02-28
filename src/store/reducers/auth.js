import { LOGIN, REGISTER, LOGOUT } from "../actions/auth";
const initialState = {
  user: {},
  token: "",
  isloggedIn: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      return {
        ...state,
        user: payload,
        token: payload.token,
        isloggedIn: true,
      };

    case REGISTER:
      return {
        ...state,
        user: payload,
        token: payload.token,
        isloggedIn: true,
      };

    case LOGOUT:
      return {
        ...state,
        user: {},
        token: "",
        isLoggedIn: false,
      };
    default: {
      return state;
    }
  }
};

export default authReducer;
