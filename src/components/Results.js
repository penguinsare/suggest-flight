import React from 'react';
import FlightsListCollapse from './FlightsListCollapse';

function Results({ quotes }) {
  return (
    <FlightsListCollapse
      title={'Flights'}
      buttonLabel={'Click to see the more flights'}
      quote={quotes}
    />
  );
}

export default Results;
