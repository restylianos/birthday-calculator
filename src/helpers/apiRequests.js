import { from } from 'rxjs';
import axios from 'axios';

export const getFacts = () => {
  return axios.get('https://catfact.ninja/fact', {
    'X-CSRF-TOKEN': 'OgE6m1ZYU9i1jb4etWXWHIlHrEl2vqeBqDOnZdz7',
    accept: 'application/json',
  });
};
