import { CSSReset, Box, Alert, AlertIcon } from '@chakra-ui/core';
import { ThemeProvider } from 'emotion-theming';
import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import Description from './components/Description';
import FlightSearch from './components/FlightSearch';
import Results from './components/Results';
import Suggestions from './components/Suggestions';
import myTheme from './utils/theme';

function App({ children }) {
  const [quotes, setQuotes] = useState(null);

  useEffect(() => {
    console.log('Got quotes fro mthe api', quotes);
  }, [quotes]);

  return (
    <ThemeProvider theme={myTheme}>
      <CSSReset />
      {children}
      <Box className={styles.container}>
        <Description />
        <FlightSearch setQuotes={(quotes) => setQuotes(quotes)} />
        {quotes && quotes.error && (
          <Alert status='error' my='1em'>
            <AlertIcon />
            {quotes.error}
          </Alert>
        )}
        {quotes && quotes.quotes && <Results quotes={quotes?.quotes} />}
        {quotes && quotes.alternativeQuotes.length > 0 && (
          <Suggestions quotes={quotes?.alternativeQuotes} />
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;
