import axios from '../libs/axios';

export const getAirportsApi = async (payload) => {
  let promise = axios.get(`/places?query=${payload}`);
  //console.log('promise', promise);
  return promise;
};
