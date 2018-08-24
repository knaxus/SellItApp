import { Navigation } from 'react-native-navigation';

import FalseIcon from '../../../assets/images/circle.png';

const LoadTabs = () => {
    Navigation.startTabBasedApp({
        tabs: [
            {
                screen: "sellitApp.Home",
                label: "Home",
                title: "Home",
                icon: FalseIcon
            },
            {
                screen: "sellitApp.AddPost",
                label: "Sell It",
                title: "Sell It",
                icon: FalseIcon
            }
        ]
    })
};

export default LoadTabs;