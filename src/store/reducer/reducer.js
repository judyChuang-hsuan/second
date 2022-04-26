import { Login } from "../../api";
import { Logout } from "../../api";
const initialState = {
  currentuser: {
    name: "Edward",
    token: "",
  },
  login: {
    password: "",
    user: "",
  },
  loggedIn: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //登入
    case "LOGIN":
      return {
        ...state,
        loggedIn: false,
        login: { ...state.login, [action.payload.name]: action.payload.value },
      };

    //接收token
    case "RECEIVE_TOKEN":
      const { user, password } = state.login;
      let isFormValid = false;
      if (user === "username" && password === "password") {
        isFormValid = true;
      } else {
        isFormValid = false;
      }
      return { ...state, loggedIn: isFormValid };

    //登出
    case "LOGOUT":
      return { ...state, loggedIn: false, login: { user: "", password: "" } };
    default:
      return state;
  }
};

export default reducer;
