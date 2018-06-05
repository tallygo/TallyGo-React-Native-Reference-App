import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View } from 'react-native';

// export default class MainMenu extends Component {
export default class MainMenuScreen extends React.Component {
  static navigationOptions = {
    title: 'Examples (React Native)',
  };
  
  goToExample = (index, section) => {
    let indexMap = {
      0: 1,
      1: 2,
      2: 4,
    }
    this.props.navigation.navigate('Example' + String(indexMap[index]));
  };
  
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {
              title: 'Examples',
              data: [
                '1. Get Navigation (with Preview)',
                '2. Get Navigation (without Preview)',
                '4. Basic Map w/ TGMapView',
              ],
            }
          ]}
          renderItem={({item, index, section}) => <Text style={styles.item} onPress={() => this.goToExample(index, section)}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
