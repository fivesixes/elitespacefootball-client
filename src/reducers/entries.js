import { CREATE, UPDATE, DELETE, FETCH_ALL, FETCH_ENTRY } from "../constants/actionTypes";

export default ( entries = [], action ) => {

  switch (action.type) {
    case UPDATE:
      return entries.map( (entry) => entry._id === action.payload._id ? action.payload : entry );

    case FETCH_ENTRY:
      return action.payload;

    case FETCH_ALL:
      return [ ...entries, action.payload ];

    case CREATE:
      return [ ...entries, action.payload ];

    case DELETE:
      return entries.filter( (entry) => entry._id !== action.payload );

    default:
      return entries;
  }

}