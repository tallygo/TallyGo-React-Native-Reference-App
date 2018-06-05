import React, { Component } from 'react';
import MapView from './MapView.js';

export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: '4. Basic Map w/ TGMapView',
  };
  render() {
    return <MapView style={{ flex: 1 }} zoomLevel={12} />;
  }
}
