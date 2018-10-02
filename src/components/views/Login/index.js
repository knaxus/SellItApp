import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, ActivityIndicator } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { 
  getOrientation, 
  setOrientationListener, 
  removeOrientationListner,
  getPlatform,
  getTokens,
  setTokens 
} from '../../utils/misc';
import LoadTabs from '../Tabs';
import Logo from './logo';
import LoginPanel from './loginPanel';
import { autoSignIn } from '../../Store/actions/user_actions';

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
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

  componentDidMount() {
    getTokens((values) => {
      if(values[0][1] === null) {
        this.setState({ loading: false });
      } else {
        this.props.autoSignIn(values[1][1]).then(() => {
          if(!this.props.User.userData.token) {
            this.setState({ loading: false });
          } else {
              setTokens(this.props.User.userData, () => {
                LoadTabs(true);
              })
          }
        });
      }
    });
  }

  render() {

    if(this.state.loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator/>
        </View>
      )
    } else {
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  loading: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

function mapStateToProps(state) {
  return {
    User: state.User
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ autoSignIn }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);