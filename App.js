import { Navigation } from 'react-native-navigation';

import Login from './src/components/views/Login';
import Home from './src/components/views/Home';
import AddPost from './src/components/views/Admin/AddPost';

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