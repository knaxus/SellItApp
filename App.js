import { Navigation } from 'react-native-navigation';

import Login from './src/Login';
import Home from './src/Home';
import AddPost from './src/Admin/AddPost';

Navigation.registerComponent("sellitApp.Login", ()  => Login);
Navigation.registerComponent("sellitApp.Home", ()  => Home);
Navigation.registerComponent("sellitApp.AddPost", ()  => AddPost);

export default () => Navigation.startSingleScreenApp( {
  screen: {
    screen: "sellitApp.Login",
    title: "Login",
    navigatorStyle: {
      navBarHidden: true
    }
  }
})