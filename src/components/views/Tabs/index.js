import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import FalseIcon from '../../../assets/images/circle.png';
import { grey } from 'ansi-colors';

const navStyles = {
    navBarTextFontSize: 20,
    navBarTextColor: '#ffffff',
    navBarTextFontFamily: 'RobotoCondensed-Bold',
    navBarTitleTextCentered: true,     // ANDROID ONLY
    navBarBackgroundColor: '#00ADA9', 

}

const navLeftButton = (icons) => {
    return {
        title: 'Drawer',
        id: 'DrawerButton',
        icon: icons[0],
        disableIconTint: true,
        buttonColor: 'white'
    }
}

const LoadTabs = (allow) => {
    Promise.all([
        Icon.getImageSource('bars', 20, 'white'),
        Icon.getImageSource('dollar', 20, 'white'),
        Icon.getImageSource('search', 20, 'white')
    ]).then( icons => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "sellitApp.Home",
                    label: "Home",
                    title: "Home",
                    icon: icons[2],
                    navigatorStyle: navStyles,
                    navigatorButtons: {
                        leftButtons: [navLeftButton(icons)]
                    }
                },
                {
                    screen: allow ? "sellitApp.AddPost" : "sellitApp.NotAllowed",
                    label: "Sell It",
                    title: "Sell It",
                    icon: icons[1],
                    navigatorStyle: navStyles,
                    navigatorButtons: {
                        leftButtons: [navLeftButton(icons)]
                    }
                }
            ],
            tabStyle: {
                tabBarButtonColor: 'grey',
                tabBarSelectedButtonColor: '#FFC636',
                tabBarTextFontFamily: 'RobotoCondensed-Bold',
                tabBarBackgroundColor: 'white',
                tabBarTranslucent: false,
            },
            appStyle: {
                tabBarButtonColor: 'grey',
                tabBarSelectedButtonColor: '#FFC636',
                tabBarTextFontFamily: 'RobotoCondensed-Bold',
                tabBarBackgroundColor: 'white',
                navBarButtonColor: '#ffffff',
                keepStyleAcrossPush: true
            },
            drawer: {
                left: {
                    screen: "sellitApp.SideDrawerComponent",
                    fixedWidth: 900
                }
            }
        });
    });
};

export default LoadTabs;