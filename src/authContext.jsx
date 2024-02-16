import React, { useReducer } from "react";
import MkdSDK from "./utils/MkdSDK";

export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  role: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", Number(action.payload.user_id));
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("role", action.payload.role);
      return {
        ...state,
        isAuthenticated: true,
        user: Number(localStorage.getItem("user")),
        token: localStorage.getItem("token"),
        role: localStorage.getItem("role"),
      };
    case "LOGOUT":
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("OPEN_TAB_INDEX");

      localStorage.removeItem("OPEN_TAB_NAME");
      localStorage.removeItem("staff_comp_data");
      localStorage.removeItem("company_data");

      localStorage.removeItem("PARTNER_NAME");
      localStorage.removeItem("PARTNER_ID");
      localStorage.removeItem("OTHER_PARTNER_NAME");
      localStorage.removeItem("OTHER_PARTNER_ID");
      document.title = 'Card Trade Hub';
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

let sdk = new MkdSDK();

export const tokenExpireError = (dispatch, errorMessage) => {
  /**
   * either this or we pass the role as a parameter
   */
  const role = localStorage.getItem("role");
  if (errorMessage === "TOKEN_EXPIRED") {
    dispatch({
      type: "LOGOUT",
    });

    location.href = "/" + role + "/login";
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  React.useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (token) {
      (async function () {
        try {
          const result = await sdk.check(role);
          dispatch({
            type: "LOGIN",
            payload: {
              user_id: user,
              token,
              role: role,
            },
          });
        } catch (error) {
          if (role) {
            dispatch({
              type: "LOGOUT",
            });
            window.location.href = "/" + role + "/login";
          } else {
            dispatch({
              type: "LOGOUT",
            });
            window.location.href = "/";
          }
        }
      })();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
