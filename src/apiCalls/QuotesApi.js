import axios from '../libs/axios';

export async function getQuotesFromApi({
  origin,
  destination,
  destinationCountryCode,
  startDate,
  returnDate,
}) {
  let promise = axios.get(
    `/browseroutes/${origin}/${destination}/${destinationCountryCode}/${startDate}/${returnDate}`
  );
  return promise;
}
