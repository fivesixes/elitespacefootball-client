import { AUTH, LOGOUT } from "../constants/actionTypes";

export default ( entries = { authData: null }, action ) => {

  switch (action.type) {
    case AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...entries, authData: action?.data };
  
    default:
      return entries;
  }
}