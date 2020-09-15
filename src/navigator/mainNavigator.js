import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen010820Navigator from '../features/CopyOfBlankScreen010820/navigator';
import BlankScreen010819Navigator from '../features/BlankScreen010819/navigator';
import BlankScreen010694Navigator from '../features/BlankScreen010694/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen010820: { screen: CopyOfBlankScreen010820Navigator },
BlankScreen010819: { screen: BlankScreen010819Navigator },
BlankScreen010694: { screen: BlankScreen010694Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
