const initialState = {
  currentUser: {
    user: "",
    token: "",
  },
  loggedIn: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "LOGIN":
      return { loggedIn: true, currentUser: action.payload };
    case "LOGOUT":
      return { loggedIn: false, currentUser: {} };

    default:
      return { ...state };
  }
};

export default reducer;
