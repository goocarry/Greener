import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';

import { Block, Button, Text } from '../components';
import { theme, mocks } from '../constants';


class Browse extends Component {
  render() {
    const { profile } = this.props;
    return (
      <Block>
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold> Browse </Text>
          <Button>
            <Image
              source={profile.avatar}
              style={styles.avatar}
            />
          </Button>
        </Block>
      </Block>
    );
  }
}

Browse.defaultProps = {
  profile: mocks.profile,
}

export default Browse;


const styles = StyleSheet.create({
  header: {
      paddingHorizontal: theme.sizes.base * 2,
  },
  avatar: {
      height: theme.sizes.base * 2,
      width: theme.sizes.base * 2,

  },
})
