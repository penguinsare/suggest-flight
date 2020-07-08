import React, { useState, useRef, useEffect, forwardRef } from 'react';
import {
  Stack,
  Box,
  Text,
  Input,
  Button,
  RadioGroup,
  Radio,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  PopoverContent,
  CloseButton,
  useTheme,
} from '@chakra-ui/core';
import LocationPicker from './LocationPicker';
import { getAirportsApi } from '../apiCalls/AirportsApi';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function BoxCustom({ children }) {
  return (
    <Box
      p='3'
      d='flex'
      justifyContent='center'
      flexDirection={['column', 'column', 'row', 'row']}>
      {children}
    </Box>
  );
}

function FlightSearch() {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const theme = useTheme();
  // const open = () => setOriginListIsOpen(true);
  // const close = () => setOriginListIsOpen(false);

  // const originInputRef = useRef(null);
  useEffect(() => {
    console.log('Origin', origin);
    console.log('Destination', destination);
  }, [origin, destination]);

  return (
    <>
      <Stack mt={8}>
        <Text fontSize='24px' justifyContent='center' d='flex'>
          Flights
        </Text>
        <Box borderWidth='1px' rounded='4px' shadow='md'>
          <BoxCustom>
            <RadioGroup defaultValue='2' spacing={5} isInline>
              <Radio variantColor='primary' value='1'>
                One Way
              </Radio>
              <Radio variantColor='primary' value='2'>
                Round Trip
              </Radio>
            </RadioGroup>
          </BoxCustom>
          <BoxCustom>
            <LocationPicker
              setLocation={(origin) => setOrigin(origin)}
              placeholder={'Where from'}
            />
            <LocationPicker
              setLocation={(destination) => setDestination(destination)}
              placeholder={'Where to'}
            />
            <ReactDatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
            <Box d='flex' borderWidth={theme.fieldBorderWidth.thin}>
              <ReactDatePicker
                m='auto'
                selected={returnDate}
                onChange={(date) => setReturnDate(date)}
              />
            </Box>

            <Button variantColor='primary'>
              <Icon name='search' mr='4px' />
              Search
            </Button>
          </BoxCustom>
        </Box>
      </Stack>
    </>
  );
}

export default FlightSearch;
