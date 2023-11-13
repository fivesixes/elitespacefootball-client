import axios from 'axios';
import * as endpoints from '../constants/endpoints';

const instance = axios.create({
  baseURL: endpoints._baseURL
});

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
}

export const fetchEntry = (id) => instance.get(`/academy/roster/${id}`);
export const fetchEntries = () => instance.get('/academy/roster');
export const createEntry = (newEntry) => instance.post('/academy/roster/create', newEntry);
export const updateEntry = (id, updatedEntry) => instance.patch(`/academy/roster/${id}`, updatedEntry);
export const deleteEntry = (id) => instance.delete(`/academy/roster/${id}`);

export const createAdminEntry = (newAdminEntry) => instance.post('/admin/create', newAdminEntry);

export const createAdmin = async (newAdminEntry) => {

  const reqBody = JSON.stringify(newAdminEntry);

  try {
    const res = await fetch(endpoints.adminCreateEndpoint, { method: 'POST', headers: headers, body: reqBody } );
  
    if (!res.ok) {
      return res;
    }
  
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}

export const adminAuth = async (adminData) => {

  const reqBody = JSON.stringify(adminData);

  const res = await fetch(`${BACKEND_URL}/admin/signin`, { method: 'POST', headers: headers, body: reqBody });

 try {
   if (!res.ok) {
     return res;
   }
 
   const data = await res.json();
   return data;
 } catch (error) {
  return error;
 }
}