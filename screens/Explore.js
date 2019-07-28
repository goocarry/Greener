import React, { Component } from 'react';
import { Dimensions, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons';

import { Block, Text, Input } from '../components';
import { theme, mocks } from '../constants';

const { width } = Dimensions.get('window');

export default class Explore extends Component {
  state = {
    searchString: null
  }


  renderSearch() {
    const { searchString } = this.state;

    return (
      <Block middle flex={0.6} style={styles.search}>
        <Input
          placeholder="Search"
          placeholderTextColor={theme.colors.gray}
          style={styles.searchInput}
          onChangeText={text => this.setState({ searchString: text })}
          value={searchString}
          rightStyle={styles.searchRight}
          rightLabel={
            <Icon.FontAwesome
              name="search"
              size={theme.sizes.base / 1.6}
              color={theme.colors.gray}
              style={styles.searchIcon}
            />
          }
        />
      </Block>
    );
  }

  render() {
    return (
      <Block>
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold>Explore</Text>
          {this.renderSearch()}
        </Block>
      </Block>
    )
  }
}


const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
  },
  search: {
    height: theme.sizes.base * 2,
    width: width - theme.sizes.base * 2,
  },
  searchInput: {
    fontSize: theme.sizes.caption,
    height: theme.sizes.base * 2,
    backgroundColor: theme.colors.gray2,
    borderColor: theme.colors.gray2,
    paddingLeft: theme.sizes.base / 1.333,
    paddingRight: theme.sizes.base * 1.5,
  },
  searchRight: {
    top: 0,
    marginVertical: 0,
    backgroundColor: 'transparent',
  },
  searchIcon: {
    position: 'absolute',
    right: theme.sizes.base / 1.333,
    top: theme.sizes.base / 1.6,
  },
})
