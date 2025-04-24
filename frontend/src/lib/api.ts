import axios from 'axios';

const api = axios.create({
  baseURL: '/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle common errors here
    if (error.response?.status === 401) {
      // Handle unauthorized
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const fetchJournals = () => api.get('/journals');

export const fetchEntries = (journalId: string) => api.get(`/entries?journal_id=${journalId}`);

interface EntryPayload {
  journal_id: string;
  body: string;
}

export const postEntry = (payload: EntryPayload) => api.post('/entries', payload);

export default api;
