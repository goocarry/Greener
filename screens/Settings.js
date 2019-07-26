import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

import { Block, Button, Text, Card, Badge } from '../components';
import { theme, mocks } from '../constants';
import { ScrollView } from 'react-native-gesture-handler';

class Settings extends Component {
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
            <Block row space="between" margin={[0, 0]} style={styles.inputRow}>
              <Block>
                <Text gray2 style={{ marginBottom: 10 }}>Username</Text>
                <Text bold>goocarry</Text>
              </Block>
              <Text medium secondary>
                Edit
              </Text>
            </Block>
            <Block row space="between" margin={[0, 0]} style={styles.inputRow}>
              <Block>
                <Text gray2 style={{ marginBottom: 10 }}>Location</Text>
                <Text bold>Yakutsk</Text>
              </Block>
              <Text medium secondary>
                Edit
              </Text>
            </Block>
            <Block row space="between" margin={[0, 0]} style={styles.inputRow}>
              <Block>
                <Text gray2 style={{ marginBottom: 10 }}>E-mail</Text>
                <Text bold>goocarry@gmail.com</Text>
              </Block>
              <Text medium secondary>
                Edit
              </Text>
            </Block>
          </Block>
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
    paddingHorizontal: theme.sizes.base * 2,
  },
  inputRow: {
    alignItems: 'flex-end'
  }
})
