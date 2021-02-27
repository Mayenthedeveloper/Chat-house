import { LOGIN } from "../actions/auth";
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

    default: {
      return state;
    }
  }
};

export default authReducer;
