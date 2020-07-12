import React, { useState } from 'react';
import { Stack, Text, Collapse, Button } from '@chakra-ui/core';
import QuotesList from './QuotesList';

function FlightsListCollapse({ title, buttonLabel, quote }) {
  const [show, setShow] = useState(false);

  return (
    <Stack mt={8}>
      <Text fontSize='24px' justifyContent='center' d='flex'>
        {title}
      </Text>
      <Collapse mb={4} isOpen={show} startingHeight={210}>
        <QuotesList quotes={quote} />
      </Collapse>
      <Button variantColor='primary' onClick={() => setShow(!show)}>
        {buttonLabel}
      </Button>
    </Stack>
  );
}

export default FlightsListCollapse;
