import React, { Component } from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';
import Slider from 'react-native-slider';

import { Block, Button, Text, Divider } from '../components';
import { theme, mocks } from '../constants';

class Settings extends Component {
  state = {
    budget: 850,
    monthly: 1700,
  }
  render() {
    const { profile, navigation } = this.props;

    return (
      <Block>
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold> Settings </Text>
          <Button onPress={() => navigation.navigate('Settings')}>
            <Image
              source={profile.avatar}
              style={styles.avatar}
            />
          </Button>
        </Block>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block style={styles.inputs}>
            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Text gray2 style={{ marginBottom: 10 }}>Username</Text>
                <Text bold>goocarry</Text>
              </Block>
              <Text medium secondary>
                Edit
              </Text>
            </Block>
            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Text gray2 style={{ marginBottom: 10 }}>Location</Text>
                <Text bold>Yakutsk</Text>
              </Block>
              <Text medium secondary>
                Edit
              </Text>
            </Block>
            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Text gray2 style={{ marginBottom: 10 }}>E-mail</Text>
                <Text bold>goocarry@gmail.com</Text>
              </Block>
              <Text medium secondary>
                Edit
              </Text>
            </Block>
          </Block>

          <Divider />

          <Block style={styles.sliders}>
            <Block>
              <Text gray2>Budget</Text>
              <Slider
                minimumValue={0}
                maximumValue={1000}
                style={{ height: 10 }}
                thumbStyle={styles.thumb}
                trackStyle={{ height: 6, borderRadius: 6 }}
                minimumTrackTintColor={theme.colors.secondary}
                maximumTrackTintColor="rgba(157,163,180,0.10"
                value={this.state.budget}
                onValueChange={value => this.setState({ budget: value })}
              />
              <Text caption gray2 right>$1,000</Text>
            </Block>

            <Block>
              <Text gray2>Monthly Cap</Text>
              <Slider
                minimumValue={0}
                maximumValue={1000}
                style={{ height: 10 }}
                thumbStyle={styles.thumb}
                trackStyle={{ height: 6, borderRadius: 6 }}
                minimumTrackTintColor={theme.colors.secondary}
                maximumTrackTintColor="rgba(157,163,180,0.10"
                value={this.state.monthly}
                onValueChange={value => this.setState({ monthly: value })}
              />
              <Text caption gray2 right>$5,000</Text>
            </Block>
          </Block>

          <Divider />

        </ScrollView>
      </Block>
    );
  }
}

Settings.defaultProps = {
  profile: mocks.profile,
}

export default Settings;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
  },
  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2,
  },
  inputs: {
    marginTop: theme.sizes.base * 0.7,
    paddingHorizontal: theme.sizes.base * 2,
  },
  inputRow: {
    alignItems: 'flex-end'
  },
  sliders: {
    marginTop: theme.sizes.base * 0.7,
    paddingHorizontal: theme.sizes.base * 2,
  },
  thumb: {
    width: theme.sizes.base,
    height: theme.sizes.base,
    borderRadius: theme.sizes.base,
    borderColor: 'white',
    borderWidth: 3,
    backgroundColor: theme.colors.secondary,
  }
})
