import React from 'react';
import { Box, Text, Stack } from '@chakra-ui/core';
import QuotesList from './QuotesList';

function Suggestions({ quotes }) {
  return (
    quotes &&
    quotes.map((quote, index) => (
      <Stack mt={8} key={index}>
        <Text fontSize='24px' justifyContent='center' d='flex'>
          Suggestions
        </Text>
        <QuotesList quotes={quote} />
      </Stack>
    ))
  );
}

export default Suggestions;
