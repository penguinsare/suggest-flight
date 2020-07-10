import Axios from 'axios';

export async function getQuotesFromApi({
  origin,
  destination,
  destinationCountryCode,
  startDate,
  returnDate,
}) {
  let promise = Axios.get(
    `http://localhost:8081/browseroutes/${origin}/${destination}/${destinationCountryCode}/${startDate}/${returnDate}`
  );
  return promise;
}
