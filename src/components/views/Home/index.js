import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { navigatorDrawer, navigatorDeepLink } from '../../utils/misc';

class Home extends Component {
  constructor(props) {
    super(props);

    this.props.navigator.setOnNavigatorEvent((event) => {
      navigatorDeepLink(event, this);
      navigatorDrawer(event, this);
    });
  }

  render() {
    return (
        <Text>Home</Text>
    );
  }
}

const styles = StyleSheet.create({

});

export default Home;