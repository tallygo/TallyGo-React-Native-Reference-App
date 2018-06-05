import React, { Component } from 'react';
import { Text, View, Button, NativeModules } from 'react-native';

export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: '1. Get Navigation (with Preview)',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Go" onPress={() => NativeModules.TallyGoNativeBridge.runExample1()} />
      </View>
    );
  }
}
