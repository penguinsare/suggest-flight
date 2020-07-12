import {
  Alert,
  AlertIcon,
  Button,
  Link,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Stack,
} from '@chakra-ui/core';
import React from 'react';

function Description() {
  return (
    <Stack>
      <Alert status='info'>
        <AlertIcon />
        Covid flight search will search for your flight and in addition will
        provide you with alternative flights to your destinations' neighbouring
        countries that have fewer Covid cases per one million population.
      </Alert>
      <Alert status='warning'>
        <AlertIcon />
        Disclaimer - Covid flight search is a portfolio project showcasing
        programming skills and should not be used for real trip planning or
        evaluating the covid situation in different countries.
        <Popover usePortal>
          <PopoverTrigger>
            <Button minWidth='5em' bg='info.600'>
              APIs used
            </Button>
          </PopoverTrigger>
          <PopoverContent zIndex='4'>
            <PopoverBody>
              <PopoverHeader>The APIs used in this project are:</PopoverHeader>
              <PopoverBody>
                <Stack>
                  <Link href='https://rapidapi.com/skyscanner/api/skyscanner-flight-search?endpoint=5aa1eab3e4b00687d3574279'>
                    Skyscanner Flight Search API at RapidApi
                  </Link>
                  <Link href='https://rapidapi.com/api-sports/api/covid-193'>
                    Covid Stats API at RapidAPi
                  </Link>
                </Stack>
              </PopoverBody>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Alert>
    </Stack>
  );
}

export default Description;
