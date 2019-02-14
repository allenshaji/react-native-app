import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class Blink extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text style={styles.bigBlue}>{this.props.text}</Text>
    );
  }
}

export default class BlinkApp extends React.Component {
  render() {
    let pic = {
      uri: 'https://dontgetserious.com/wp-content/uploads/2018/01/happy-valentine-day-pictures.jpg'
    };
    return (
      <View style={styles.container}>
      <Blink  text='Valentines Day Wishes' />
        <Image source={pic} style={{width: 293, height: 210}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
  bigBlue: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
