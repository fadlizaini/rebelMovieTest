import http from '../http';
export const getDetail = id => {
  return http.get(`/movie/${id}`);
};
