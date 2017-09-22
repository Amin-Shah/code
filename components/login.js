'use strict';

import { AppRegistry, Text, TextInput, View, StyleSheet, TouchableHighlight, BackHandler, ToolbarAndroid, ActivityIndicator, ScrollView, Image } from 'react-native';
import { Button, Footer, FooterTab, Left, Header, Right, Title, Icon } from 'native-base'
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { TextField } from 'react-native-material-textfield';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
        this.onFocus = this.onFocus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.onSubmitEmail = this.onSubmitEmail.bind(this);
        this.onSubmitPassword = this.onSubmitPassword.bind(this);

        this.emailRef = this.updateRef.bind(this, 'email');
        this.passwordRef = this.updateRef.bind(this, 'password');

        console.ignoredYellowBox = [
            'Setting a timer'
        ]
    }

    onFocus() {
        let { errors = {} } = this.state;

        for (let name in errors) {
            let ref = this[name];

            if (ref && ref.isFocused()) {
                delete errors[name];
            }
        }
        this.setState({ errors });
    }

    onChangeText(text) {
        ['email', 'password']
            .map((name) => ({ name, ref: this[name] }))
            .forEach(({ name, ref }) => {
                if (ref.isFocused()) {
                    this.setState({ [name]: text });
                }
            });
    }

    onSubmit(ev) {
        ev.preventDefault();
        let errors = {};
        if (this.emailRef && this.passwordRef) {
            ['email', 'password']
                .forEach((name) => {
                    let value = this[name].value();
                    if (!value) {
                        errors[name] = 'Should not be empty';
                    } else {
                        if ('password' === name && value.length < 6) {
                            errors[name] = 'Too short';
                        }
                    }
                });

            this.setState({ errors });
        }
        const { email, password } = this.state
        var userObj = { 'email': email, 'password': password };
        this.props.loginRequest(userObj);
    }

    updateRef(name, ref) {
        this[name] = ref;
    }

    onSubmitEmail() {
        this.password.focus();
    }

    onSubmitPassword() {
        this.password.blur();
    }

    goToSignup() {
        return Actions.signup()
    }

    handleClose() {
        BackHandler.exitApp();
    }

    render() {
        let { errors = {}, ...data } = this.state;
        return (
            <Image source={require('../assets/images/f.jpg')} style={styles.container}>
                <Button onPress={this.handleClose.bind(this)} transparent style={{ marginTop: '-11%', marginLeft: '-10%' }}>
                    <Icon style={{ color: '#0091EA' }} name='close-circle' />
                </Button>
                <View style={styles.container}>
                    <ScrollView keyboardShouldPersistTaps='never'>
                        <View style={styles.container}>
                            <TextField
                                ref={this.emailRef}
                                value={data.email}
                                keyboardType='email-address'
                                autoCapitalize='none'
                                autoCorrect={false}
                                enablesReturnKeyAutomatically={true}
                                onFocus={this.onFocus}
                                onChangeText={this.onChangeText}
                                onSubmitEditing={this.onSubmitEmail}
                                returnKeyType='next'
                                label='Email Address'
                                error={errors.email}
                                autoFocus={true}
                                style={styles.input}
                            />

                            <TextField
                                ref={this.passwordRef}
                                value={data.password}
                                secureTextEntry={true}
                                autoCapitalize='none'
                                autoCorrect={false}
                                enablesReturnKeyAutomatically={true}
                                onFocus={this.onFocus}
                                onChangeText={this.onChangeText}
                                onSubmitEditing={this.onSubmitPassword}
                                returnKeyType='done'
                                label='Password'
                                error={errors.password}
                                maxLength={30}
                                characterRestriction={20}
                                style={styles.input}
                            />
                        </View>
                        <TouchableHighlight onPress={this.onSubmit} style={styles.primaryButton}>
                            <Text style={styles.primaryButtonText}>Login</Text>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={this.goToSignup.bind(this)} style={styles.transparentButton}>
                            <Text style={styles.transparentButtonText}>Create Account?</Text>
                        </TouchableHighlight>
                    </ScrollView>
                </View>
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        flexDirection: 'column',
        padding: "7%",
        marginTop: '3%'
    },
    input: {
        fontSize: 18,
        fontFamily: 'Arial'
    },
    primaryButton: {
        marginLeft: '6%',
        padding: '4%',
        width: '86%',
        marginTop: '20%',
        backgroundColor: '#0091EA'
    },
    primaryButtonText: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 20
    },
    transparentButton: {
        marginTop: '28%',
        padding: '6%'
    },
    transparentButtonText: {
        color: '#0091EA',
        textAlign: 'center',
        fontSize: 16
    }
});


export default Login