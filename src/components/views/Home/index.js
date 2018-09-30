import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { navigatorDrawer, navigatorDeepLink } from '../../utils/misc';
import HorizontalScrollIcons from './horizontalScrollIcons';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: ['All', 'Sports', 'Music', 'Clothing', 'Electronics'],
      categorySelected: "All"
    }

    this.props.navigator.setOnNavigatorEvent((event) => {
      navigatorDeepLink(event, this);
      navigatorDrawer(event, this);
    });
  }

  upadteCategoryHandler = (value) => {
    this.setState({ 
      categorySelected: value 
    });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <HorizontalScrollIcons
            categories={this.state.categories}
            categorySelected={this.state.categorySelected}
            upadteCategoryHandler={this.upadteCategoryHandler}
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