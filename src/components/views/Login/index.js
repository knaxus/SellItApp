import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

import LoadTabs from '../Tabs';
import Logo from './logo';

class Login extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Logo/>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  }
});

export default Login;