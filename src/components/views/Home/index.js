import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import { navigatorDrawer, navigatorDeepLink, gridTwoColumns } from '../../utils/misc';
import HorizontalScrollIcons from './horizontalScrollIcons';
import { getArticles } from '../../Store/actions/articles_actions';
import BlockItem from './blockitem';

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

  showArticles = () => (
    this.state.articles.map((item, i) => (
      <BlockItem
        key={`columnHome-${i}`}
        item={item}
        iteration={i}
      />
    ))
  )

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
          <View style={styles.articleContainer}>
            <View style={{flex: 1}}>
              {this.showArticles()}
            </View>
          </View>
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
  }, 
  articleContainer: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
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