import React, { Component } from 'react';
import { Animated, StyleSheet, View, FlatList, Image, Dimensions, Modal } from 'react-native';

import { Block, Button, Text } from '../components';

import { theme } from '../constants';
//import ViewShot from 'react-native-view-shot';

const { width, height } = Dimensions.get('window');

class Welcome extends Component {

  static navigationOptions = {
    header: null,
  }

  scrollX = new Animated.Value(0);

  state = {
    showTerms: false,
  }

  renderTermsService() {
    return (
      <Modal
        animationType="slide"
        visible={this.state.showTerms}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <Block padding={[theme.sizes.padding * 2, theme.sizes.padding ]} space="between">
          <Text h2 light>Terms of service</Text>
          <Text caption gray height={18}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Button gradient onPress={() => this.setState({ showTerms: false })}>
            <Text center white>I understand</Text>
          </Button>
        </Block>
      </Modal>
    )
  }

  handleLogin() {
    //auth with 3rd party service
    navigation.navigate('Login')
  }

  renderIllustrations() {
    const { illustrations } = this.props;

    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        data={illustrations}
        extraDate={this.state}
        keyExtractor={(item, index) => `${item.id}`}
        renderItem={({ item }) => (
          <Image
            source={item.source}
            resizeMode="contain"
            style={{ width, height: height / 2, overflow: 'visible' }}
          >
          </Image>
        )}
        onScroll={
          Animated.event([
            {
              nativeEvent: { contentOffset: { x: this.scrollX } }
            }
          ])
        }
      >

      </FlatList>
    )
  }

  renderSteps() {
    const { illustrations } = this.props;
    const stepPosition = Animated.divide(this.scrollX, width);
    return (
      <Block row center middle style={styles.stepsContainer}>
        {illustrations.map((item, index) => {
          const opacity = stepPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.4, 1, 0.4],
            extrapolate: 'clamp',
          });

          return (
            <Block
              animated
              flex={false}
              key={`step-${index}`}
              color="gray"
              style={[styles.steps, { opacity }]} />
          )
        })}
      </Block>
    )
  }

  render() {
    const { navigation } = this.props;

    return (
      <Block>
        <Block center bottom flex={0.4}>
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
          <Button gradient onPress={() => navigation.navigate('Login')} style={styles.shadow}>
            <Text center semibold white>Login</Text>
          </Button>
          <Button style={styles.shadow} onPress={() => navigation.navigate('Signup')}>
            <Text center semibold>Signup</Text>
          </Button>
          <Button onPress={() => this.setState({ showTerms: true })}>
            <Text center caption gray>Terms of service</Text>
          </Button>
        </Block>
        {this.renderTermsService()}
      </Block>
    );
  }
}

Welcome.defaultProps = {
  illustrations: [
    {
      id: 1, source: require('../assets/images/illustration_1.png')
    },
    {
      id: 2, source: require('../assets/images/illustration_2.png')
    },
    {
      id: 3, source: require('../assets/images/illustration_3.png')
    }
  ],
};

export default Welcome;

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
  },
  stepsContainer: {
    position: 'absolute',
    bottom: theme.sizes.base * 3,
    //paddingTop: -10,
    //bottom: 0,
    right: 0,
    left: 0,
  },
  steps: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 2.5,
  }
})