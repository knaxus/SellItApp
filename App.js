import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import ConfigureStore from './src/components/Store/config';

import Login from './src/components/views/Login';
import Home from './src/components/views/Home';
import AddPost from './src/components/views/Admin/AddPost';
import SideDrawerComponent from './src/components/views/SideDrawer';

const store = ConfigureStore();

Navigation.registerComponent(
  "sellitApp.Login", 
  ()  => 
  Login,
  store,
  Provider
);

Navigation.registerComponent(
  "sellitApp.Home", 
  ()  => 
  Home,
  store,
  Provider
);

Navigation.registerComponent(
  "sellitApp.AddPost", 
  ()  => 
  AddPost,
  store,
  Provider
);

Navigation.registerComponent(
  "sellitApp.SideDrawerComponent", 
  ()  => 
  SideDrawerComponent,
  store,
  Provider
);

export default () => Navigation.startSingleScreenApp( {
  screen: {
    screen: "sellitApp.Login",
    title: "Login",
    navigatorStyle: {
      navBarHidden: true
    }
  }
})