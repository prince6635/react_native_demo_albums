// index.ios.js - place code in here for IOS

// Import a library to help creating a component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import AlbumList from './src/components/album-list';
import Header from './src/components/header';

// Create a component
const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// Render it to the device
AppRegistry.registerComponent('react_native_demo_albums', () => App);
