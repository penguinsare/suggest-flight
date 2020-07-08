import React from 'react';
import { Box, Text, Stack } from '@chakra-ui/core';

function BoxCustom({ children }) {
  return (
    <Box p='3' alignItems='center' d='flex'>
      {children}
    </Box>
  );
}

function BoxItems({ children }) {
  return (
    <Box borderWidth='1px' rounded='3px' p='2' ml='3'>
      {children}
    </Box>
  );
}

function Suggestions() {
  return (
    <>
      <Stack mt={8}>
        <Text fontSize='24px' justifyContent='center' d='flex'>
          Suggestions
        </Text>
        <Box
          maxW='100%'
          borderWidth='1px'
          rounded='4px'
          justifyContent='center'
          d='flex'
          shadow='md'>
          <BoxCustom>
            <Text as='span'>Company Name</Text>
            <BoxItems>
              <Text>From</Text>
              <Text>Aiport</Text>
              <Text>Time</Text>
            </BoxItems>
            <BoxItems>
              <Text>To</Text>
              <Text>Aiport</Text>
              <Text>Time</Text>
            </BoxItems>
            <BoxItems>
              <Text>Price</Text>
            </BoxItems>
          </BoxCustom>
        </Box>
      </Stack>
    </>
  );
}

export default Suggestions;
