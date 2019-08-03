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
import PlanPageTitle from '../components/PlanPageTitle';
import DietPlanPage from '../screens/DietPlanPage';
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
import PasswordChangePage from '../screens/PasswordChangePage';
import AuthLoading from '../screens/AuthLoading';
const PlanSwitchNavigator = createSwitchNavigator({
  Exercise: {
    screen: PlanPage
  },
  Diet: {
    screen: DietPlanPage
  }
});

// const WorkoutStackNavigator = createStackNavigator(
//   {
//     Workouts: {
//       screen: WorkoutPage,
//       navigationOptions: {
//         header: null
//       }
//     }
//     // WorkoutDetail: {
//     //   screen: WorkOutDetailPage,
//     //   navigationOptions: ({ navigation }) => ({
//     //     title: `${navigation.state.routeName}`,
//     //     headerStyle: {
//     //       backgroundColor: '#1f3954'
//     //     },

//     //     headerTintColor: '#fffff'
//     //   })
//     // }
//   },
//   {
//     defaultNavigationOptions: () => ({
//       headerBackTitle: null
//     })
//   }
// );

const BottomTabNavigator = createBottomTabNavigator(
  {
    Plan: {
      screen: PlanSwitchNavigator,
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
    lazy: true,
    tabBarOptions: {
      activeTintColor: '#ffffff',
      style: {
        backgroundColor: '#1f3954'
      }
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

const SettingNavigator = createStackNavigator(
  {
    Setting: {
      screen: SettingPage,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    PasswordChange: {
      screen: PasswordChangePage,
      navigationOptions: ({ navigation }) => ({
        title: 'Setting'
      })
    }
  },
  {
    defaultNavigationOptions: () => ({
      headerBackTitle: null,
      headerTintColor: '#ffffff',
      headerStyle: {
        backgroundColor: '#1f3954',
        color: '#ffffff'
      },

      headerTitleStyle: {
        fontFamily: 'Georgia'
      }
    })
  }
);
const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: BottomTabNavigator,
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
      screen: SettingNavigator,
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
    drawerBackgroundColor: 'transparent',
    contentOptions: {
      activeTintColor: '#ffffff',
      inactiveTintColor: '#8c8c8c',

      itemsContainerStyle: {
        backgroundColor: '#1f3954',
        flex: 1
      },
      labelStyle: {
        fontSize: 16
      },
      activeBackgroundColor: '#315574'
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
      headerTintColor: '#ffffff',
      headerStyle: {
        backgroundColor: '#1f3954',
        color: '#ffffff'
      },

      headerTitleStyle: {
        fontFamily: 'Georgia'
      }
    })
  }
);
export default createAppContainer(
  createSwitchNavigator(
    {
      auth: AuthLoading,
      login: UserNavigator,
      home: DrawerNavigator
    },
    {
      initialRouteName: 'auth'
    }
  )
);
