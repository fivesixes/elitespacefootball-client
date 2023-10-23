import axios from 'axios';

const url = 'https://elitespacefootball-server-3a23b2847871.herokuapp.com';

export const fetchEntry = (id) => axios.get(`${url}/academy/roster/${id}`);
export const fetchEntries = () => axios.get(url + '/academy/roster');
export const createEntry = (newEntry) => axios.post(url + '/academy/roster/create', newEntry);
export const updateEntry = (id, updatedEntry) => axios.patch(`${url}/academy/roster/${id}`, updatedEntry);
export const deleteEntry = (id) => axios.delete(`${url}/academy/roster/${id}`);