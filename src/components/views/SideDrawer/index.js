import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';

class SideDrawerComponent extends Component {

  state = {
    buttons: [
      {
        value: "Home",
        iconName: "home",
        shouldGoto: "sellitApp.Home",
        typeLink: "tab",
        index: 0,
        privacy: false
      },
      {
        value: "Sell",
        iconName: "dollar",
        shouldGoto: "sellitApp.AddPost",
        typeLink: "tab",
        index: 1,
        privacy: false
      },
      {
        value: "My Posts",
        iconName: "th-list",
        shouldGoto: "sellitApp.AddPost",
        typeLink: "view",
        index: null,
        privacy: true
      },
      {
        value: "Logout",
        iconName: "sign-out",
        shouldGoto: "sellitApp.AddPost",
        typeLink: "view",
        index: null,
        privacy: true
      },
    ]
  }

  button = (button) => (
    <Icon.Button
      key={button.value}
      name={button.iconName}
      backgroundColor="#474143"
      iconStyle={{width: 15}}
      color="#ffffff"
      size={20}
      onPress={() => alert('click')}
    >
      <Text style={styles.buttonText}>
        {button.value}
      </Text>
    </Icon.Button>
  )

  showButtons = (buttons) => (
    buttons.map( button => (
      !button.privacy ? 
        this.button(button)
      :
        this.props.User.userData ? 
          this.button(button)
          : null
    ))
  )

  render() {
    return (
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            {this.showButtons(this.state.buttons)}
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#474143',
  },
  buttonContainer: {
    padding: 10,
    marginTop: 20,
  },
  buttonText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    color: '#ffffff' 
  }
});

function mapStateToProps(state) {
  console.log(state);
  return {
    User: state.User
  }
}

export default connect(mapStateToProps, null)(SideDrawerComponent);