import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View } from 'react-native';

// export default class MainMenu extends Component {
export default class MainMenuScreen extends React.Component {
  goToExample = (index, section) => {
    var offset;
    if (section.key == 'nav') {
      offset = 1;
    } else if (section.key == 'ui') {
      offset = 3;
    } else if (section.key == 'data') {
      offset = 10;
    } else if (section.key == 'report') {
      offset = 13;
    }
    
    this.props.navigation.navigate('Example' + String(index + offset));
  };
  
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {
              title: 'Get Navigation In Your App',
              key: 'nav',
              data: [
                '1. Get Navigation (with Preview)',
                '2. Get Navigation (without Preview)',
              ]
            },
            {
              title: 'UI Examples',
              key: 'ui',
              data: [
                '3. Map, search, and navigation w/ TGMapViewController',
                '4. Basic Map w/ TGMapView (Storyboard)',
                '5. Basic Map w/ TGMapView (no Storyboard)',
                '6. Displaying markers on TGMapView',
                '7. Search UI',
                '8. Overview UI',
                '9. Turn List UI',
              ]
            },
            {
              title: 'Data Examples',
              key: 'data',
              data: [
                '10. Get lat/long pair from street address',
                '11. Get detailed location information from lat/long pair',
                '12. Get turn-by-turn navigation route data',
              ]
            },
            {
              title: 'Reporting Examples',
              key: 'report',
              data: [
                '13. Report Driver\'s Current Location to Server',
                '14. Report Driver\'s ETA to Server',
                '15. Report Driver\'s Route Segment to Server',
                '16. Display Driver\'s Reported Location from Server',
                '17. Report Driver Motion to Server',
                '18. Display Driver Motion from Server',
              ]
            },
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
