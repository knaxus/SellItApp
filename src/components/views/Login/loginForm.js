import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Input from '../../utils/forms/inputs';
import ValidationRules from '../../utils/forms/validationRules';
import LoadTabs from '../Tabs';
import { signUp, signIn } from '../../Store/actions/user_actions';
import { setTokens, getTokens } from '../../utils/misc';

class LoginForm extends Component {

    state = {
        type: 'Login',
        action: 'Login',
        actionMode: 'Not a user, Register',
        hasErrors: false,
        form: {
            email: {
                value: "",
                valid: false,
                type: "textinput",
                rules: {
                    isRequired: true,
                    isEmail: true,
                }
            },
            password: {
                value: "",
                valid: false,
                type: "textinput",
                rules: {
                    isRequired: true,
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

        let rules = formCopy[name].rules;
        let valid = ValidationRules(value, rules, formCopy);

        console.log(valid);

        formCopy[name].valid = valid;

        this.setState({
            form: formCopy
        })
    }

    confirmPassword = () => (
        this.state.type != 'Login' ? 
        <Input
            placeholder="Confirm your password"
            type={this.state.form.confirmPassword.type}
            value={this.state.form.confirmPassword.value}
            onChangeText={ value => this.updateInput("confirmPassword", value) }
            secureTextEntry
        />
        : null
    )

    changeFormType = () => {
        const type = this.state.type;

        this.setState({
            type: type === 'Login' ? 'Register' : 'Login',
            action: type === 'Login' ? 'Register' : 'Login',
            actionMode: type === 'Login' ? 'Login' : 'Not a user, Register'
        })
    }

    formHasErrors = () => (
        this.state.hasErrors ? 
        <View style={styles.errorContainer}>
            <Text style={styles.errorLabel}>Opps, check your info</Text>
        </View>
        : null
    )

    manageAccess = () => {
        if(!this.props.User.userData.uid) {
            this.setState({ hasErrors: true });
        } else {
            setTokens(this.props.User.userData, () => {
                // console.log('works');
                this.setState({ hasErrors: false });
                LoadTabs(true);
            })
        }
    }
    
    submitUser = () => {
        let isFormValid = true;
        let formToSubmit = {};
        const formCopy = this.state.form;

        for(let key in formCopy) {
            if(this.state.type === 'Login') {
            if(key !== 'confirmPassword') {
                isFormValid = isFormValid && formCopy[key].valid;
                formToSubmit[key] = formCopy[key].value; 
            }
            } else {
                isFormValid = isFormValid && formCopy[key].valid;
                formToSubmit[key] = formCopy[key].value; 
            }
        }

        if(isFormValid) {
            if(this.state.type === "Login") {
                this.props.signIn(formToSubmit).then(() => {
                    this.manageAccess();
                    // console.log(this.props.User);
                })
            } else {
                this.props.signUp(formToSubmit).then(() => {
                    this.manageAccess();
                    // console.log(this.props.User);
                });
            }
        } else {
            this.setState({
                hasErrors: true
            })
        }
    }

    componentDidMount() {
        getTokens((values) => {
            console.log(values);
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

            {this.confirmPassword()}
            {this.formHasErrors()}

            <View style={
                this.props.platform === "ios" ? styles.buttonStyleIos : styles.buttonStyleAndroid
            }>
                <Button
                    title={this.state.action}
                    color="#fd9727"
                    onPress={this.submitUser}
                />
            </View>
            <View style={
                this.props.platform === "ios" ? styles.buttonStyleIos : styles.buttonStyleAndroid
            }>
                <Button
                    title={this.state.actionMode}
                    color="lightgrey"
                    onPress={this.changeFormType}
                />
            </View>
            <View>
                <Button
                    title="skip"
                    color="lightgrey"
                    onPress={() => LoadTabs(false)}
                />
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    formInputContainer: {
        minHeight: 400
    },
    buttonStyleAndroid: {
        marginBottom: 10,
        marginTop: 10,
    },
    buttonStyleIos: {
        marginBottom: 0,
    },
    errorContainer: {
        marginBottom: 10,
        padding: 8,
        marginTop: 8,
        backgroundColor: 
        "#FFCDD2"
    },
    errorLabel: {
        color: '#D32F2F',
        fontFamily: 'Roboto-Black',
        textAlign: 'center',
    }
});

function mapStateToProps(state) {
    return {
        User: state.User
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({signUp, signIn}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);