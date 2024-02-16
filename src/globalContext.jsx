import React, { useReducer } from "react";
export const GlobalContext = React.createContext();

let initialState = {
  globalMessage: "",
  isOpen: true,
  path: "",
  openIndex:-1
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SNACKBAR":
      return {
        ...state,
        globalMessage: action.payload.message,
      };
    case "SETPATH":
      return {
        ...state,
        path: action.payload.path,
      };
    case "OPEN_SIDEBAR":
      localStorage.setItem("OPEN_SIDEBAR", action.payload.isOpen);
      return {
        ...state,
        isOpen: action.payload.isOpen,
      };
    case "OPEN_TAB_INDEX":
      localStorage.setItem("OPEN_TAB_INDEX", action.payload.openIndex);
      return {
        ...state,
        openIndex: action.payload.openIndex,
      };
    case "COMPANY_DATA":
      localStorage.setItem(
        "company_data",
        JSON.stringify(action.payload.comp_data)
      );

      return {
        ...state,
        comp_data: action.payload.comp_data,
      };
    case "STAFF_COMPANY_DATA":
      localStorage.setItem(
        "staff_comp_data",
        JSON.stringify(action.payload.staff_comp_data)
      );

      return {
        ...state,
        staff_comp_data: action.payload.staff_comp_data,
      };
    case "OPEN_TAB_NAME":
      localStorage.setItem("OPEN_TAB_NAME", action.payload.openName);
      return {
        ...state,
        openName: action.payload.openName,
      };

    case "PARTNER_NAME":
      localStorage.setItem("PARTNER_NAME", action.payload.partnerName);
      return {
        ...state,
        partnerName: action.payload.partnerName,
      };
    case "OTHER_PARTNER_NAME":
      localStorage.setItem(
        "OTHER_PARTNER_NAME",
        action.payload.otherPartnerName
      );
      return {
        ...state,
        otherPartnerName: action.payload.otherPartnerName,
      };

    case "PARTNER_ID":
      localStorage.setItem("PARTNER_ID", action.payload.partnerId);
      return {
        ...state,
        partnerId: action.payload.partnerId,
      };
    case "OTHER_PARTNER_ID":
      localStorage.setItem("OTHER_PARTNER_ID", action.payload.otherPartnerId);
      return {
        ...state,
        otherPartnerId: action.payload.otherPartnerId,
      };

    default:
      return state;
  }
};

export const showToast = (dispatch, message, timeout = 3000) => {
  dispatch({
    type: "SNACKBAR",
    payload: {
      message,
    },
  });

  setTimeout(() => {
    dispatch({
      type: "SNACKBAR",
      payload: {
        message: "",
      },
    });
  }, timeout);
};

const GlobalProvider = ({ children }) => {
  const openIndex = localStorage.getItem("OPEN_TAB_INDEX");
  const openName = localStorage.getItem("OPEN_TAB_NAME");

  const partnerName = localStorage.getItem("PARTNER_NAME");
  const partnerId = localStorage.getItem("PARTNER_ID");
  const otherPartnerName = localStorage.getItem("OTHER_PARTNER_NAME");
  const otherPartnerId = localStorage.getItem("OTHER_PARTNER_ID");

  let staff_comp_data = localStorage.getItem("staff_comp_data");
  if (staff_comp_data) staff_comp_data = JSON.parse(staff_comp_data);
  else staff_comp_data = {};

  let comp_data = localStorage.getItem("company_data");
  if (comp_data) comp_data = JSON.parse(comp_data);
  else comp_data = {};
  initialState = {
    ...initialState,
    openIndex,
    openName,
    partnerName,
    partnerId,
    otherPartnerName,
    otherPartnerId,
    staff_comp_data,
    comp_data,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  // if (openTabName) {
  //   dispatch({ type: "OPEN_TAB_NAME", payload: { openName: openTabName } });
  // }
  // if (openIndex) {
  //   dispatch({
  //     type: "OPEN_TAB_INDEX",
  //     payload: { openIndex: openIndex },
  //   });
  // }

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
