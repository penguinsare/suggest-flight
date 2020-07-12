import React from 'react';
import { Box, Flex, Text, Tooltip } from '@chakra-ui/core';

function QuotesList({ quotes }) {
  const currency = quotes ? quotes.Currencies[0] : '';
  return (
    quotes.Quotes &&
    quotes.Quotes.map((quote) => {
      let airlines = '';
      quote.OutboundLeg.CarrierIds.forEach((carrierId, index) => {
        let carrier = quotes.Carriers.find(
          (carrier) => carrier.CarrierId === carrierId
        );
        if (carrier) {
          airlines += index > 0 ? ' + ' : '';
          airlines += carrier.Name;
        }
      });

      const origin = quotes.Places.find(
        (place) => place.PlaceId === quote.OutboundLeg.OriginId
      );
      const destination = quotes.Places.find(
        (place) => place.PlaceId === quote.OutboundLeg.DestinationId
      );
      console.log('origin', origin);
      console.log('destination', destination);
      const departureTime = new Date(
        quote.OutboundLeg.DepartureDate
      ).toDateString();
      console.log('departureTime', departureTime);

      return (
        <Flex
          flexDirection='row'
          borderWidth='1px'
          rounded='4px'
          p='12px'
          justifyContent='center'
          align='center'
          textAlign='center'
          shadow='md'
          key={quote.QuoteId}>
          <Box flex='1'>{airlines}</Box>
          {origin && (
            <Box flex='1'>
              <Tooltip label={origin.Name}>
                <Text>{origin.IataCode}</Text>
              </Tooltip>
              <Text>{departureTime}</Text>
            </Box>
          )}
          <Box flex='1'>---</Box>
          <Box flex='1'>
            {destination && (
              <Tooltip label={destination.Name}>
                <Text>{destination.IataCode}</Text>
              </Tooltip>
            )}
          </Box>
          <Box flex='1'>
            <Text>
              {currency && currency.SymbolOnLeft && currency.Symbol}
              {quote.MinPrice}
              {currency && !currency.SymbolOnLeft && currency.Symbol}
            </Text>
          </Box>
        </Flex>
      );
    })
  );
}

export default QuotesList;
