import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Block, Button, Text } from '../components';
import { theme } from '../constants';
//import ViewShot from 'react-native-view-shot';

export default class Welcome extends Component {

  static navigationOptions = {
    header: null,
  }

  renderIllustrations() {
    return (
      <Block>
        <Text>Image</Text>
      </Block>
    )
  }

  renderSteps() {
    return (
      <Block>
        <Text>* * *</Text>
      </Block>
    )
  }

  render() {
    return (
      <Block>
        <Block center middle flex={0.3}>
          <Text h1 center bold>
            Your Home.
            <Text h1 primary>Greener.</Text>
          </Text>
          <Text h3 gray2 style={{ marginTop: theme.sizes.padding / 2 }}>
            Enjoy the experience.
          </Text>
        </Block>
        <Block center middle>
          {this.renderIllustrations()}
          {this.renderSteps()}
        </Block>
        <Block middle flex={0.5} margin={[0, theme.sizes.padding * 2]}>
          <Button gradient onPress={() => { }} style={styles.shadow}>
            <Text center semibold white>Login</Text>
          </Button>
          <Button style={styles.shadow} onPress={() => { }}>
            <Text center semibold>Signup</Text>
          </Button>
          <Button onPress={() => { }}>
            <Text center semibold gray>Terms of service</Text>
          </Button>
        </Block>
      </Block>
    );
  }
}


const styles = StyleSheet.create({
  button: {
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    backgroundColor: '#ccc',
  },
  shadow: {
    //for ios
    //shadowOffset: { width: 10, height: 10 },
    //shadowColor: 'black',
    //shadowOpacity: 1,
    elevation: 5,
    // background color must be set
    //backgroundColor : "#0000" // invisible color
  }
})