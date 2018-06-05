import React, { Component } from 'react';
import { Text, View, Button, NativeModules } from 'react-native';

export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: '2. Get Navigation (without Preview)',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Go" onPress={() => NativeModules.TallyGoNativeBridge.runExample2()} />
      </View>
    );
  }
}
