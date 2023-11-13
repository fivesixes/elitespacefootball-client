import { combineReducers } from "redux";

import entries from './entries';
import admin from './admin';

export default combineReducers( { entries, admin } );