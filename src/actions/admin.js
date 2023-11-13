import * as api from '../api';
import { CREATE_ADMIN, API_ERROR } from '../constants/actionTypes';

export const createAdminEntry = (adminEntry) => async (dispatch) => {

  try {
    const { data } = await api.createAdminEntry(adminEntry);

    dispatch( { type: CREATE_ADMIN, payload: data } );
  }
  catch (error) {
    dispatch( {type: API_ERROR, payload: error} );
  }
}
