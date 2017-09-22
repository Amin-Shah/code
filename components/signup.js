'use strict';

import { AppRegistry, Text, TextInput, View, StyleSheet, TouchableHighlight, ToolbarAndroid, ActivityIndicator, ScrollView, Image, Button } from 'react-native';
import React, { Component } from 'react';
import { TextInputMask } from 'react-native-masked-text';
import { Actions } from 'react-native-router-flux';
import { TextField } from 'react-native-material-textfield';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', password: '', errors: '' };
        this.onFocus = this.onFocus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.onSubmitName = this.onSubmitName.bind(this);
        this.onSubmitEmail = this.onSubmitEmail.bind(this);
        this.onSubmitPassword = this.onSubmitPassword.bind(this);

        this.nameRef = this.updateRef.bind(this, 'name');
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
        ['name', 'email', 'password']
            .map((name) => ({ name, ref: this[name] }))
            .forEach(({ name, ref }) => {
                if (ref.isFocused()) {
                    this.setState({ [name]: text });
                }
            });
    }

    onSubmit = (ev) => {
        ev.preventDefault();

        let errors = {};
        if (this.nameRef && this.emailRef && this.passwordRef) {
            ['name', 'email', 'password']
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
        let { name, email, password } = this.state
        if (name  && email && password ) {
            var userObj = { email: this.state.email, password: this.state.password, name: this.state.name };
            this.props.signUpRequest(userObj);
        } else {
            alert('Please fill the Input fields')
        }
    }

    updateRef(name, ref) {
        this[name] = ref;
    }

    onSubmitName() {
        this.email.focus();
    }

    onSubmitEmail() {
        this.password.focus();
    }

    onSubmitPassword() {
        this.password.blur();
    }

    goToLogin() {
        return Actions.login();
    }

    render() {
        let { errors = {}, ...data } = this.state;
        return (
            <Image source={require('../assets/images/f.jpg')} style={styles.container}>
                <View style={styles.container}>
                    <ScrollView keyboardShouldPersistTaps='never'>
                        <View style={styles.container}>
                            <TextField
                                ref={this.nameRef}
                                value={data.name}
                                autoCorrect={false}
                                enablesReturnKeyAutomatically={true}
                                onFocus={this.onFocus}
                                onChangeText={this.onChangeText}
                                onSubmitEditing={this.onSubmitName}
                                returnKeyType='next'
                                label='Name'
                                error={errors.name}
                                autoFocus={true}
                                style={styles.input}
                            />
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
                                title='Choose wisely'
                                maxLength={30}
                                characterRestriction={20}
                                style={styles.input}
                            />
                        </View>
                        <TouchableHighlight onPress={this.onSubmit} style={styles.primaryButton}>
                            <Text style={styles.primaryButtonText}>Create an account</Text>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={this.goToLogin.bind(this)} style={styles.transparentButton}>
                            <Text style={styles.transparentButtonText}>Have an account. Login?</Text>
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
        padding: "7%"
    },
    input: {
        fontSize: 18,
        fontFamily: 'Arial'
    },
    primaryButton: {
        marginLeft: '6.4%',
        padding: '4%',
        width: '86%',
        backgroundColor: '#0091EA',
        marginTop: '10%'
    },
    primaryButtonText: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 20
    },
    transparentButton: {
        marginTop: '15%',
        padding: '6%'
    },
    transparentButtonText: {
        color: '#0091EA',
        textAlign: 'center',
        fontSize: 16
    }
});


export default SignUp