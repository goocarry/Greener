import React, { Component } from 'react';
import { ActivityIndicator, Keyboard, KeyboardAvoidingView, View, StyleSheet } from 'react-native';

import { Block, Button, Text, Input } from '../components';
import { theme } from '../constants';


export default class Signup extends Component {

    state = {
        email: null,
        username: null,
        password: null,
        errors: [],
        loading: false,
    }

    handleSignup() {
        const { navigation } = this.props;
        const { email, username, password } = this.state;
        const errors = [];

        Keyboard.dismiss();
        this.setState({ loading: true });

        //check with backend API or with some static data
        if (!email) errors.push('email');
        if (!username) errors.push('username');
        if (!password) errors.push('password');

        this.setState({ errors, loading: false });

        if (!errors.length) {
            //navigation.navigate("Login");
            //for ios?
            /*
            alert('Success',
                'Your account has been created', [
                    {
                        //does not work for android
                        text: 'Continue', onPress: () => {
                            navigation.navigate('Browse')
                        }
                    }
                ],
                //{ cancelables: false }
            )*/
            alert('Success');
            navigation.navigate('Browse');
        }
        else {
            alert('Error',
                'Plsease check your email address', [
                    { text: 'Try again' }
                ],
                { cancelables: false }
            )
        }
    }

    render() {

        const { navigation } = this.props;
        const { loading, errors } = this.state;
        const hasErrors = key => errors.includes(key) ? styles.hasErrors : null;
        return (
            <KeyboardAvoidingView style={styles.signup} behavior="padding">
                <Block padding={[0, theme.sizes.padding * 2]}>
                    <Text h1 bold>Sign Up</Text>
                    <Block middle margin={[40, 0, 0, 0]}>
                        <Input
                            email
                            label="Email"
                            error={hasErrors('email')}
                            style={[styles.input, hasErrors('email')]}
                            defaultValue={this.state.email}
                            onChangeText={text => this.setState({ email: text })}
                        ></Input>
                        <Input
                            label="Username"
                            error={hasErrors('username')}
                            style={[styles.input, hasErrors('username')]}
                            defaultValue={this.state.username}
                            onChangeText={text => this.setState({ username: text })}
                        ></Input>
                        <Input
                            secure
                            label="Password"
                            error={hasErrors('password')}
                            style={[styles.input, hasErrors('password')]}
                            defaultValue={this.state.password}
                            onChangeText={text => this.setState({ password: text })}
                        ></Input>

                        <Button gradient onPress={() => this.handleSignup()}>
                            {loading ? <ActivityIndicator size="small" color="white" /> :
                                <Text bold white center>Sign Up</Text>
                            }
                        </Button>

                        <Button onPress={() => navigation.goBack()}>
                            <Text gray caption center style={{ textDecorationLine: 'underline' }}>Back to Login</Text>
                        </Button>

                    </Block>
                </Block>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    signup: {
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        borderRadius: 0,
        borderWidth: 0,
        borderBottomColor: theme.colors.gray2,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    hasErrors: {
        borderBottomColor: theme.colors.accent,
    }
})
