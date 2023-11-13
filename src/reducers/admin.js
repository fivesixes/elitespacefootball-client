import { AUTH, LOGOUT } from "../constants/actionTypes";
import { CREATE_ADMIN, UPDATE, DELETE, FETCH_ALL, FETCH_ENTRY, API_ERROR } from "../constants/actionTypes";

export default ( adminEntries = [], action ) => {

  switch (action.type) {
    case AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...adminEntries, authData: action?.data };
    
    case UPDATE:
      return adminEntries.map( (entry) => entry._id === action.payload._id ? action.payload : entry );

    case FETCH_ENTRY:
      return action.payload;

    case FETCH_ALL:
      return [...adminEntries, ...action.payload];

    case CREATE_ADMIN:
      console.log(`There's your admin: ${[ ...adminEntries, ...action.payload ]}`);
      return [ ...adminEntries, ...action.payload ];

    case DELETE:
      return adminEntries.filter( (entry) => entry._id !== action.payload );

    case API_ERROR:
      console.log(adminEntries);
      return [...adminEntries, action.payload];
  
    default:
      return adminEntries;
  }
}