import { from } from 'rxjs';
import axios from 'axios';

export const getFacts = () => {
  return axios.get('https://catfact.ninja/fact');
};
