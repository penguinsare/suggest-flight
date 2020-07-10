import React from 'react';
import { Box, Text, Tooltip } from '@chakra-ui/core';

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
        (place) => place.PlaceId == quote.OutboundLeg.OriginId
      );
      const destination = quotes.Places.find(
        (place) => place.PlaceId == quote.OutboundLeg.DestinationId
      );
      console.log('origin', origin);
      console.log('destination', destination);
      const departureTime = new Date(quote.OutboundLeg.DepartureDate)
        .toISOString()
        .slice(11, 16);
      console.log('departureTime', departureTime);

      return (
        <Box
          maxW='100%'
          borderWidth='1px'
          rounded='4px'
          justifyContent='left'
          d='flex'
          shadow='md'
          key={quote.QuoteId}>
          <Box>{airlines}</Box>
          <Box>
            <Text>
              {currency && currency.SymbolOnLeft && currency.Symbol}
              {quote.MinPrice}
              {currency && !currency.SymbolOnLeft && currency.Symbol}
            </Text>
          </Box>

          {origin && (
            <Box>
              <Tooltip label={origin.Name}>
                <Text>{origin.IataCode}</Text>
              </Tooltip>
              <Text>{departureTime}</Text>
            </Box>
          )}

          <Box>---</Box>
          <Box>
            {destination && (
              <Tooltip label={destination.Name}>
                <Text>{destination.IataCode}</Text>
              </Tooltip>
            )}
          </Box>
        </Box>
      );
    })
  );
}

export default QuotesList;
