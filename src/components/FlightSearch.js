import React, { useState, useEffect, forwardRef } from 'react';
import {
  Stack,
  Box,
  Text,
  Button,
  RadioGroup,
  Radio,
  Icon,
  Spinner,
} from '@chakra-ui/core';
import LocationPicker from './LocationPicker';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getQuotesFromApi } from '../apiCalls/QuotesApi';

function BoxCustom({ children }) {
  return (
    <Box
      p='3'
      d='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection={['column', 'column', 'row', 'row']}>
      {children}
    </Box>
  );
}

function FlightSearch({ setQuotes }) {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [roundTrip, setRoundTrip] = useState(true);
  const [loading, setLoading] = useState(false);
  //const theme = useTheme();

  const CustomDatePickerInput = forwardRef(({ value, onClick }, ref) => (
    <Button onClick={onClick} mr='3px' ref={ref}>
      {value}
    </Button>
  ));

  useEffect(() => {
    console.log('Origin', origin);
    console.log('Destination', destination);
  }, [origin, destination]);

  useEffect(() => {
    console.log('Origin', origin);
    console.log('Destination', destination);
  }, [origin, destination]);

  return (
    <>
      <Stack mt={8}>
        <Text fontSize='24px' justifyContent='center' d='flex'>
          Search Flight
        </Text>
        <Box borderWidth='1px' rounded='4px' shadow='md'>
          <BoxCustom>
            <RadioGroup
              defaultValue='2'
              spacing={5}
              isInline
              onChange={(e) =>
                e.target.value === '2'
                  ? setRoundTrip(true)
                  : setRoundTrip(false)
              }>
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
              customInput={<CustomDatePickerInput />}
            />

            <ReactDatePicker
              disabled={!roundTrip}
              selected={returnDate}
              onChange={(date) => setReturnDate(date)}
              customInput={<CustomDatePickerInput />}
            />

            <Button
              variantColor='primary'
              minWidth='5em'
              onClick={() => {
                (async () => {
                  let quotes;
                  setLoading(true);
                  if (origin && destination) {
                    console.log('origin', origin);
                    console.log('destination', destination);

                    console.log(
                      'startDate',
                      startDate.toISOString().slice(0, 10)
                    );
                    console.log(
                      'returnDate',
                      returnDate.toISOString().slice(0, 10)
                    );

                    console.log(
                      `call quotes ${origin.PlaceId}/${destination.PlaceId}/${
                        origin?.CountryId
                      }/${startDate
                        .toISOString()
                        .slice(0, 10)}/${returnDate.toISOString().slice(0, 10)}`
                    );
                    try {
                      console.log('round trip', roundTrip);
                      if (roundTrip) {
                        quotes = await getQuotesFromApi({
                          origin: origin.PlaceId,
                          destination: destination.PlaceId,
                          destinationCountryCode: destination?.CountryId.substring(
                            0,
                            2
                          ),
                          startDate: startDate.toISOString().slice(0, 10),
                          returnDate: returnDate.toISOString().slice(0, 10),
                        });
                        console.log('quotes', quotes);
                        setQuotes(quotes.data);
                        setLoading(false);
                      } else {
                        quotes = await getQuotesFromApi({
                          origin: origin.PlaceId,
                          destination: destination.PlaceId,
                          destinationCountryCode: origin?.countryId?.substring(
                            0,
                            2
                          ),
                          startDate: startDate.toISOString().slice(0, 10),
                        });
                        setQuotes(quotes.data);
                        setLoading(false);
                      }
                    } catch (err) {
                      console.log('Get quotes failed: ', err);
                    }
                  }
                })();
              }}>
              {loading ? <Spinner /> : <Icon name='search' mr='4px' />}
            </Button>
          </BoxCustom>
        </Box>
      </Stack>
    </>
  );
}

export default FlightSearch;
