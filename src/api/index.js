import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://elitespacefootball-server-3a23b2847871.herokuapp.com'
});

export const fetchEntry = (id) => instance.get(`/academy/roster/${id}`);
export const fetchEntries = () => instance.get('/academy/roster');
export const createEntry = (newEntry) => instance.post('/academy/roster/create', newEntry);
export const updateEntry = (id, updatedEntry) => instance.patch(`/academy/roster/${id}`, updatedEntry);
export const deleteEntry = (id) => instance.delete(`/academy/roster/${id}`);
