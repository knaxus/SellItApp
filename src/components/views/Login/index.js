import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import LoadTabs from '../Tabs';

class Login extends React.Component {
  render() {
    return (
      <View>
        <Text>Login</Text>
        <Button 
          title="go to home"
          onPress={() => {
            LoadTabs();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

export default Login;