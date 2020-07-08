import Axios from 'axios';

export const getAirportsApi = async (payload) => {
  let promise = Axios.get('http://localhost:8081/places?query=' + payload);
  //console.log('promise', promise);
  return promise;
};
