import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { navigatorDrawer, navigatorDeepLink } from '../../utils/misc';
import HorizontalScrollIcons from './horizontalScrollIcons';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: ['All', 'Sports', 'Music', 'Clothing', 'Electronics']
    }

    this.props.navigator.setOnNavigatorEvent((event) => {
      navigatorDeepLink(event, this);
      navigatorDrawer(event, this);
    });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <HorizontalScrollIcons
            categories={this.state.categories}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  }
});

export default Home;