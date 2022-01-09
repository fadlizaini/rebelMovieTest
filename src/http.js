import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Content-type': 'application/json;charset=utf-8',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTg1N2ExNTNlMTYzZjFmM2I0ZDFlZWIyMjAzNDMxNiIsInN1YiI6IjVmYTRiNjNjZmZjOWRlMDAzYzg1OWVhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lwlgK0Aw_-H15FvoTaugZ0-OVlI1GEyY49Y7aVvYiVw',
  },
});
