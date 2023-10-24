import * as api from '../api';
import { CREATE, UPDATE, DELETE, FETCH_ALL, FETCH_ENTRY } from '../constants/actionTypes';

export const getEntries = () => async (dispatch) => {

  try {
    const { data } = await api.fetchEntries();

    dispatch( { type: FETCH_ALL, payload: data } ) ;
  }
  catch (error) {
    console.log(error.message);
  }

}

export const getEntry = (id) => async (dispatch) => {

  try {
    const { data } = await api.fetchEntry(id);

    dispatch( { type: FETCH_ENTRY, payload: data } ) ;
  }
  catch (error) {
    console.log(error.message);
  }

}

export const createEntry = (entry) => async (dispatch) => {

  try {
    const { data } = api.createEntry(entry);

    dispatch( { type: CREATE, payload: data } ) ;
  }
  catch (error) {
    console.log(error);
  }

}

export const updateEntry = (id, entry) => async (dispatch) => {

  try {
    const { data } = await api.updateEntry(id, entry);

    dispatch({ type: UPDATE, payload: data });
  }
  catch (error) {
    console.log(error.message);
  }
}

export const deleteEntry = (id) => async (dispatch) => {

  try {
    const response = await api.deleteEntry(id);

    dispatch( { type: DELETE, payload: id } );
  }
  catch (error) {
    console.log(error.message);
  }
}