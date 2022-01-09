import http from '../http';
export const getMovie = () => {
  return http.get(`/movie/now_playing`);
};
export const getGenre = () => {
  return http.get(`/genre/movie/list`);
};
