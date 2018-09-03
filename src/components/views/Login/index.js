import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

import { 
  getOrientation, 
  setOrientationListener, 
  removeOrientationListner,
  getPlatform 
} from '../../utils/misc';

import LoadTabs from '../Tabs';
import Logo from './logo';
import LoginPanel from './loginPanel';

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      platform: getPlatform(),
      orientation: getOrientation(500),
      logoAnimation: false
    }

    setOrientationListener(this.changeOrientation)
  }

  changeOrientation = () => {
    this.setState({
      orientation: getOrientation(500)
    })
  }

  showLogin = () => {
    this.setState({
      logoAnimation: true
    })
  }

  componentWillUnmount() {
    removeOrientationListner()
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Logo
            showLogin={this.showLogin}
            orientation={this.state.orientation}
          />
          <LoginPanel
            show={this.state.logoAnimation}
            orientation={this.state.orientation}
            platform={this.state.platform}
          />
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