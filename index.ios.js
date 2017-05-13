// index.ios.js - place code in here for IOS

// Import a library to help creating a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a component
const App = () => (
  <Header headerText={'Albums'} />
);

// Render it to the device
AppRegistry.registerComponent('react_native_demo_albums', () => App);
