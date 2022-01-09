import React from 'react';
import {StatusBar} from 'react-native';
import Navigation from './src/navigation/Navigation';

const App = () => {
  return (
    <>
      <StatusBar hidden/>
      <Navigation />
    </>
  );
};

export default App;
