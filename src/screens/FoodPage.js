import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { Container, Content, View, Icon, Button } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import { createStackNavigator } from 'react-navigation';

import FoodFormPage from '../screens/FoodFormPage';
import HeaderComponent from '../components/HeaderComponent';
import FoodItem from '../components/FoodItem';
import {
  addFood,
  updateFoodValue,
  updateFood,
  deleteFood,
  fetchFoods
} from '../redux/actions';

class FoodPage extends Component {
  constructor(props) {
    super(props);
    this.valueChangeHandler = this.valueChangeHandler.bind(this);
    this.deleteFood = this.deleteFood.bind(this);
  }

  componentDidMount() {
    AsyncStorage.getItem('token').then(token => {
      this.props.fetchFoods(token);
    });
  }

  valueChangeHandler(id, value) {
    AsyncStorage.getItem('token').then(token => {
      this.props.updateFoodValue(token, id, value);
    });
  }

  deleteFood(id) {
    AsyncStorage.getItem('token').then(token => {
      this.props.deleteFood(token, id);
    });
  }

  render() {
    const { navigation } = this.props;
    const addBtn = (
      <Button
        transparent
        onPress={() => this.props.navigation.navigate('FoodForm')}
      >
        <Icon
          name="plus-circle"
          type="FontAwesome"
          style={{ color: '#ffffff' }}
        />
      </Button>
    );

    return (
      <Container style={{ backgroundColor: '#1f3954' }}>
        <HeaderComponent
          title={navigation.state.routeName}
          {...this.props}
          right={addBtn}
        />
        <Content>
          <FlatList
            data={this.props.foods.data.sort((a, b) => {
              return a._id > b._id;
            })}
            renderItem={data => {
              const item = data.item;
              return (
                <View style={styles.rowFront}>
                  <FoodItem
                    key={item._id}
                    navigation={navigation}
                    item={item}
                    valueChangeHandler={value =>
                      this.valueChangeHandler(item._id, value)
                    }
                  />
                </View>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}

const styles = {
  rowFront: {
    backgroundColor: '#1f3954'
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#ff6666',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
};

const mapStateToProps = state => ({
  foods: state.foods
});
const mapDispatchToProps = {
  addFood,
  updateFoodValue,
  updateFood,
  deleteFood,
  fetchFoods
};
const FoodConnectedPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodPage);

const FoodsPageNavigator = createStackNavigator(
  {
    Foods: {
      screen: FoodConnectedPage,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    FoodForm: {
      screen: FoodFormPage,
      navigationOptions: ({ navigation }) => ({
        title: 'FoodForm'
      })
    }
  },
  {
    initialRouteName: 'Foods',
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

export default FoodsPageNavigator;
