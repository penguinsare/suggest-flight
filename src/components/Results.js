import React from 'react';
import { Box, Text, Stack, Tooltip } from '@chakra-ui/core';
import QuotesList from './QuotesList';

function Results({ quotes }) {
  return (
    <>
      <Stack mt={8}>
        <Text fontSize='24px' justifyContent='center' d='flex'>
          Results
        </Text>
        <QuotesList quotes={quotes} />
      </Stack>
    </>
  );
}

export default Results;
