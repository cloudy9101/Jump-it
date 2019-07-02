import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  createBottomTabNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import PlanPage from '../screens/PlanPage';
import FoodPage from '../screens/FoodPage';
import WorkoutPage from '../screens/WorkoutPage';
import MonitorPage from '../screens/MeasurementPage';
import ProfilePage from '../screens/ProfilePage';
import SettingPage from '../screens/SettingPage';
import LogoutPage from '../screens/LogoutPage';
import DrawerItemsComponent from '../components/DrawerItemsComponent';
import SignInPage from '../screens/SignInPage';
import SingUpPage1 from '../screens/SingUpPage1';
import SignUpPage from '../screens/SignUpPage';
import SignUpPage2 from '../screens/SignUpPage2';

const BottomTabNavigator = createBottomTabNavigator(
  {
    Plan: {
      screen: PlanPage,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
          <MaterialIcons
            name="schedule"
            size={25}
            style={{ color: tintColor }}
          />
        )
      }
    },
    Workouts: {
      screen: WorkoutPage,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focusd }) => (
          <MaterialCommunityIcons
            name="run"
            size={25}
            style={{ color: tintColor }}
          />
        )
      }
    },
    Measurement: {
      screen: MonitorPage,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
          <FontAwesome
            name="bar-chart"
            size={23}
            style={{ color: tintColor }}
          />
        )
      }
    },
    Food: {
      screen: FoodPage,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focusd }) => (
          <MaterialCommunityIcons
            name="food"
            size={28}
            style={{ color: tintColor }}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: 'red'
    },
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName,
        headerStyle: {
          backgroundColor: '#f5a742'
        }
      };
    }
  }
);
const StackNavigator = createStackNavigator(
  {
    BottomTabNavigator: {
      screen: BottomTabNavigator
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Ionicons
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        )
      };
    }
  }
);

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: StackNavigator,
      navigationOptions: {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            name="home-outline"
            size={25}
            style={{ color: tintColor }}
          />
        )
      }
    },
    Profile: {
      screen: ProfilePage,
      navigationOptions: {
        drawerLabel: 'Profile',
        drawerIcon: ({ tintColor }) => (
          <AntDesign name="profile" size={25} style={{ color: tintColor }} />
        )
      }
    },
    Setting: {
      screen: SettingPage,
      navigationOptions: {
        drawerLabel: 'Setting',
        drawerIcon: ({ tintColor }) => (
          <AntDesign name="setting" size={25} style={{ color: tintColor }} />
        )
      }
    },
    Logout: {
      screen: LogoutPage,
      navigationOptions: {
        drawerLabel: 'Logout',
        drawerIcon: ({ tintColor }) => (
          <AntDesign name="logout" size={25} style={{ color: tintColor }} />
        )
      }
    }
  },
  {
    initialRouteName: 'Home',
    drawerWidth: 200,
    contentOptions: {
      activeTintColor: 'red'
    },
    contentComponent: DrawerItemsComponent
  }
);
const UserNavigator = createStackNavigator(
  {
    SignIn: {
      screen: SignInPage,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    SignUp: {
      screen: SignUpPage,
      navigationOptions: ({ navigation }) => ({
        title: 'New User'
      })
    },
    SignUp1: {
      screen: SingUpPage1,
      navigationOptions: ({ navigation }) => ({
        title: 'New User'
      })
    },
    SignUp2: {
      screen: SignUpPage2,
      navigationOptions: ({ navigation }) => ({
        title: 'New User'
      })
    }
  },
  {
    defaultNavigationOptions: () => ({
      headerBackTitle: null,
      headerTintColor: 'black',
      headerStyle: {
        backgroundColor: '#f5a742'
      }
    })
  }
);
export default createAppContainer(
  createSwitchNavigator({
    init: UserNavigator,
    home: DrawerNavigator
  })
);
