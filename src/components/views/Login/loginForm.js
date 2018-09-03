import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import Input from '../../utils/forms/inputs';

class LoginForm extends Component {

    state = {
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

  render() {
    return (
      <View style={styles.formInputContainer}>
        <Input 
            placeholder="Enter your email"
            type={this.state.form.email.type}
            value={this.state.form.email.value}
            onChangeText={ value => () => alert('hey') }
            autoCapitalize={"none"}
            keyboardType={"email-address"}
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
