import { Box, Text } from '@chakra-ui/core';
import React from 'react';
import FlightsListCollapse from './FlightsListCollapse';

function Suggestions({ quotes, error }) {
  // const [show, setShow] = useState([]);
  // const handleToggle = (index) => {
  //   let tempShow = show;
  //   tempShow[index] = !!show[index];
  //   setShow(tempShow);
  // };

  return (
    <>
      <Box
        fontSize='24px'
        justifyContent='center'
        d='flex'
        mt='2em'
        bg='teal.50'
        p='1em'
        rounded='2'
        border='1px'>
        Check out alternative destinations in neighbouring countries that have
        fewer Covid cases per one million population.
      </Box>
      {quotes &&
        quotes.map((quote, index) => {
          const destination = quote.Places.find(
            (place) =>
              place.PlaceId === quote.Quotes[0].OutboundLeg.DestinationId
          );

          return (
            <FlightsListCollapse
              key={index}
              title={
                destination
                  ? destination.Name +
                    ' (' +
                    destination.IataCode +
                    '), ' +
                    destination.CountryName
                  : ''
              }
              buttonLabel={` Click to see more ${destination.Name} flights`}
              quote={quote}
            />
          );
        })}
      {!quotes && (
        <Text
          fontSize='24px'
          justifyContent='center'
          d='flex'
          mt='2em'
          bg='pink'>
          {error}
        </Text>
      )}
    </>
  );
}

export default Suggestions;
