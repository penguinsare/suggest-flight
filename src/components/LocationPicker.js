import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Input,
  Popover,
  PopoverTrigger,
  PopoverHeader,
  PopoverContent,
  PopoverBody,
} from '@chakra-ui/core';
import { getAirportsApi } from '../apiCalls/AirportsApi';

function LocationPicker({ setLocation, placeholder }) {
  // const [close, setClose] = useState(false);
  // const [suggestions, setSuggestions] = useState(['bangkok', 'chaing mai']);
  const [placeName, setPlaceName] = useState('');
  const [locationListFromApi, setLocationListFromApi] = useState([]);
  const [locationList, setLocationList] = useState([]);
  const [locationListIsOpen, setLocationListIsOpen] = useState(false);

  const open = () => setLocationListIsOpen(true);
  const close = () => setLocationListIsOpen(false);

  const locationInputRef = useRef(null);
  useEffect(() => {
    setLocationList(locationListFromApi.filter((o) => o.CityId !== '-sky'));
  }, [locationListFromApi]);
  // useEffect(() => {}, []);
  return (
    <Popover
      initialFocusRef={locationInputRef}
      isOpen={locationListIsOpen}
      onOpen={open}
      onClose={close}
      closeOnBlur={true}
      closeOnEsc={true}>
      <PopoverTrigger>
        <Input
          mr='3px'
          w='auto'
          placeholder={placeholder}
          value={placeName}
          onChange={(e) => {
            e.preventDefault();
            if (!locationListIsOpen) {
              setLocationListIsOpen(true);
            } else {
              locationInputRef.current.focus();
            }
          }}></Input>
      </PopoverTrigger>
      <PopoverContent zIndex={4}>
        <PopoverHeader>Destinations:</PopoverHeader>
        <PopoverBody>
          <Input
            ref={locationInputRef}
            w='auto'
            mr='3px'
            marginBottom='0.5em'
            placeholder={placeholder}
            value={placeName}
            onChange={(e) => {
              e.preventDefault();
              if (e.target.value.length === 2) {
                (async () => {
                  try {
                    let placesContainer = await getAirportsApi(e.target.value);
                    setLocationListFromApi(placesContainer.data.Places);
                  } catch (err) {
                    alert(err); // TypeError: failed to fetch
                  }
                })();
              } else if (e.target.value.length > 2) {
                setLocationList(
                  locationListFromApi.filter(
                    (o) =>
                      o.PlaceName.toUpperCase().includes(
                        e.target.value.toUpperCase()
                      ) && o.CityId !== '-sky'
                  )
                );
              }
              setPlaceName(e.target.value);
            }}></Input>
          {locationList?.length > 0 &&
            locationList.map((loc, index) => {
              return (
                <Box
                  p='0.5em'
                  key={loc.PlaceId}
                  onClick={() => {
                    setLocation(loc);
                    setPlaceName(loc.PlaceName);
                    setLocationListIsOpen(false);
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = 'lightgray')
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = 'white')
                  }>
                  {loc.PlaceName}, {loc.CountryName}
                </Box>
              );
            })}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default LocationPicker;
