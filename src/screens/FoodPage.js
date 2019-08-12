import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextInput } from 'react-native';
import { Container, Content, View, ListItem, Text, Icon, Button, Left, Body, Right } from 'native-base';
import { SwipeListView } from 'react-native-swipe-list-view';
import AsyncStorage from '@react-native-community/async-storage';

import HeaderComponent from '../components/HeaderComponent';
import FoodItem from '../components/FoodItem';
import { addFood, updateFoodValue, updateFoodName, deleteFood, fetchFoods } from '../redux/actions';

class FoodPage extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.addFood = this.addFood.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.deleteFood = this.deleteFood.bind(this);
  }

  componentDidMount() {
    AsyncStorage.getItem('token').then(token => {
      this.props.fetchFoods(token);
    });
  }

  updateName(id, name) {
    AsyncStorage.getItem('token').then(token => {
      this.props.updateFoodName(token, id, name);
    });
  }

  addFood() {
    AsyncStorage.getItem('token').then(token => {
      this.props.addFood(token, this.state.name, 0);
      this.setState({ name: "" })
    });
  }

  updateValue(id, value) {
    if(value < 0) { return; }
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
    return (
      <Container style={{ backgroundColor: '#1f3954' }}>
        <HeaderComponent title={navigation.state.routeName} {...this.props} />
        <Content>
          <SwipeListView
            data={this.props.foods.data.sort((a, b) => { return a._id > b._id })}
            renderItem={ (data) => {
              const item = data.item;
              return(
                <View style={styles.rowFront}>
                  <FoodItem key={item._id} name={item.name} value={item.value} nameChangeHandler={(name) => this.updateName(item._id, name)} valueChangeHandler={(value) => this.updateValue(item._id, value)} />
                </View>
              )
            }}
            renderHiddenItem={ (data, rowMap) => (
              <View style={styles.rowBack}>
                <Button onPress={() => this.deleteFood(data.item._id)} style={{ backgroundColor: '#ff6666' }}>
                  <Icon name="trash" />
                </Button>
              </View>
            )}
            disableRightSwipe={true}
            rightOpenValue={-50}
          />
          <ListItem icon>
            <Left>
              <Icon
                style={{ color: '#ffffff' }}
                type="MaterialCommunityIcons"
                name="food-variant"
              />
            </Left>
            <Body>
              <TextInput style={{ color: '#ffffff' }} value={this.state.name} onChangeText={(text) => this.setState({ name: text })} placeholder="New Food Name" placeholderTextColor="#888888" />
            </Body>
            <Right>
              <Button onPress={this.addFood} iconRight transparent style={{ marginLeft: 5 }}>
                <Text>Add</Text>
              </Button>
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}

const styles = {
	rowFront: {
		backgroundColor: '#1f3954',
	},
  rowBack: {
		alignItems: 'center',
		backgroundColor: '#ff6666',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
}

const mapStateToProps = state => ({
  foods: state.foods
});
const mapDispatchToProps = { addFood, updateFoodValue, updateFoodName, deleteFood, fetchFoods };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodPage);
