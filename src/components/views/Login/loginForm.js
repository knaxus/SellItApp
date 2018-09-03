import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import Input from '../../utils/forms/inputs';

class LoginForm extends Component {

    state = {
        hasErrors: false,
        form: {
            email: {
                value: "",
                valid: false,
                type: "textinput",
                rules: {
                    isEmail: true,
                }
            },
            password: {
                value: "",
                valid: false,
                type: "textinput",
                rules: {
                    minLength: 6,
                }
            },
            confirmPassword: {
                value: "",
                valid: false,
                type: "textinput",
                rules: {
                    confirmPass: "password",
                }
            }
        }
    }

    updateInput = (name, value) => {
        this.setState({
            hasErrors: false
        });

        let formCopy = this.state.form;
        formCopy[name].value = value;

        this.setState({
            form: formCopy
        })
    }

    render() {
        return (
        <View style={styles.formInputContainer}>
            <Input 
                placeholder="Enter your email"
                type={this.state.form.email.type}
                value={this.state.form.email.value}
                onChangeText={ value => this.updateInput("email", value) }
                autoCapitalize={"none"}
                keyboardType={"email-address"}
            />
            <Input 
                placeholder="Enter your password"
                type={this.state.form.password.type}
                value={this.state.form.password.value}
                onChangeText={ value => this.updateInput("password", value) }
                secureTextEntry
            />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    formInputContainer: {
        minHeight: 400
    }
});

export default LoginForm;
