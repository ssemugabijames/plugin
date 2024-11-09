import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/documents/'
});


export const fetchDocuments = () => api.get('/');
export const createDocument = (data) => api.post('/',data);
export const deleteDocument = (id) => api.delete(`/${id}`);
