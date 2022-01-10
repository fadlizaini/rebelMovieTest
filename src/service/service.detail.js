import http from '../http';
export const getDetail = id => {
  return http.get(`/movie/${id}`);
};
export const getSimilar = id => {
  return http.get(`/movie/${id}/similar`);
};

export const getCredits = id => {
  return http.get(`/movie/${id}/credits`);
};
