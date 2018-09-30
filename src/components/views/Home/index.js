import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { navigatorDrawer, navigatorDeepLink } from '../../utils/misc';
import HorizontalScrollIcons from './horizontalScrollIcons';
import { getArticles } from '../../Store/actions/articles_actions';

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

  componentDidMount() {
    this.props.getArticles('All').then(() => {
      console.log(this.props.Articles.list);
    })
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

function mapStateToProps(state) {
  console.log(state);
  return {
    Articles: state.Article
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getArticles}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);