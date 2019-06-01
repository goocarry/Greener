import React, { Component } from 'react';
import { KeyboardAvoidingView, View, StyleSheet } from 'react-native';

import { Block, Button, Text, Input } from '../components';

import { theme } from '../constants';

export default class Login extends Component {

  state = {
    email: "goocarry@gmail.com",
    password: "123456",
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.login} behavior="padding">
        <Block padding={[0, theme.sizes.padding * 2]}>
          <Text h1 bold>Login</Text>
          <Block middle>
            <Input
              label="Email"
              style={styles.input}
              defaultValue={this.state.email}
              onChangeText={text => this.setState({ email: text })}
            ></Input>
            <Input
              secure
              label="Password"
              style={styles.input}
              defaultValue={this.state.password}
              onChangeText={text => this.setState({ password: text })}
            ></Input>
          </Block>
        </Block>
      </KeyboardAvoidingView>
    );
  }
}


const styles = StyleSheet.create({
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  login: {
    flex: 1,
    justifyContent: 'center',
  }
})