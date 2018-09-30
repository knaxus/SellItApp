import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import { navigatorDrawer, navigatorDeepLink, gridTwoColumns } from '../../utils/misc';
import HorizontalScrollIcons from './horizontalScrollIcons';
import { getArticles } from '../../Store/actions/articles_actions';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      articles: [],
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
      const newArticles = gridTwoColumns(this.props.Articles.list)

      this.setState({
        isLoading: false,
        articles: newArticles
      })
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
          {
            this.state.isLoading ? 
              <View style={styles.isLoading}>
                <Icon name="gears" size={30} color="lightgrey"/>
                <Text style={{ color: 'lightgrey' }}>Loading.....</Text>
              </View>
            : null
          }
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  isLoading: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  }
});

function mapStateToProps(state) {
  return {
    Articles: state.Articles
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getArticles}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);