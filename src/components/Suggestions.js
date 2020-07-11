import React from 'react';
import { Box, Text, Stack } from '@chakra-ui/core';
import QuotesList from './QuotesList';

function Suggestions({ quotes }) {
  return (
    quotes &&
    quotes.map((quote, index) => {
      const destination = quote.Places.find(
        (place) => place.PlaceId === quote.Quotes[0].OutboundLeg.DestinationId
      );
      return (
        <Stack mt={8} key={index}>
          <Text fontSize='24px' justifyContent='center' d='flex'>
            {destination
              ? destination.Name +
                ' (' +
                destination.IataCode +
                '), ' +
                destination.CountryName +
                ' - an alternative destination in a neighbouring country that has fewer Covid cases per one million population.'
              : ''}
          </Text>
          <QuotesList quotes={quote} />
        </Stack>
      );
    })
  );
}

export default Suggestions;
