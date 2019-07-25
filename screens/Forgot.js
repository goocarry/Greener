import React, { Component } from 'react';
import { ActivityIndicator, Keyboard, KeyboardAvoidingView, View, StyleSheet } from 'react-native';

import { Block, Button, Text, Input } from '../components';
import { theme } from '../constants';


const VALID_EMAIL = "goocarry@gmail.com";

export default class Forgot extends Component {

    state = {
        email: VALID_EMAIL,
        errors: [],
        loading: false,
    }

    handleForgot() {
        const { navigation } = this.props;
        const { email } = this.state;
        const errors = [];

        Keyboard.dismiss();

        this.setState({ loading: true });

        //check with backend API or with some static data
        if (email !== VALID_EMAIL) {
            errors.push('email');
        }

        this.setState({ errors, loading: false });

        if (!errors.length) {
            //navigation.navigate("Login");
            alert('Password sent',
                'Plsease check your email', [
                    {
                        //does not work for android
                        text: 'OK', onPress: () => {
                            navigation.navigate('Login')
                        }
                    }
                ],
                { cancelables: false }
            )
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
            <KeyboardAvoidingView style={styles.forgot} behavior="padding">
                <Block padding={[0, theme.sizes.padding * 2]}>
                    <Text h1 bold>Forgot</Text>
                    <Block middle>
                        <Input
                            label="Email"
                            error={hasErrors('email')}
                            style={[styles.input, hasErrors('email')]}
                            defaultValue={this.state.email}
                            onChangeText={text => this.setState({ email: text })}
                        ></Input>

                        <Button gradient onPress={() => this.handleForgot()}>
                            {loading ? <ActivityIndicator size="small" color="white" /> :
                                <Text bold white center>forgot</Text>
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
    forgot: {
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
