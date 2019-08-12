import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextInput } from 'react-native';
import { Container, Content, View, ListItem, Text, Icon, Button, Left, Body, Right } from 'native-base';
import { SwipeListView } from 'react-native-swipe-list-view';

import HeaderComponent from '../components/HeaderComponent';
import FoodItem from '../components/FoodItem';
import { addFood, updateFoodValue, updateFoodName, deleteFood } from '../redux/actions';

class FoodPage extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.addFood = this.addFood.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.deleteFood = this.deleteFood.bind(this);
  }

  updateName(id, name) {
    this.props.updateFoodName(id, name);
  }

  addFood() {
    this.props.addFood(this.props.foods.data[this.props.foods.data.length - 1].id + 1, this.state.name, 0);
    this.setState({ name: "" })
  }

  updateValue(id, value) {
    if(value < 0) { return; }
    this.props.updateFoodValue(id, value);
  }

  deleteFood(id) {
    this.props.deleteFood(id);
  }

  render() {
    const { navigation } = this.props;
    const items = this.props.foods.data.sort((a, b) => { return a.id > b.id }).map((item) => {
      return <FoodItem key={item.id} name={item.name} value={item.value} nameChangeHandler={(name) => this.updateName(item.id, name)} valueChangeHandler={(value) => this.updateValue(item.id, value)} />;
    });
    return (
      <Container style={{ backgroundColor: '#1f3954' }}>
        <HeaderComponent title={navigation.state.routeName} {...this.props} />
        <Content>
          <SwipeListView
            data={this.props.foods.data.sort((a, b) => { return a.id > b.id })}
            renderItem={ (data) => {
              const item = data.item;
              return(
                <View style={styles.rowFront}>
                  <FoodItem key={item.id} name={item.name} value={item.value} nameChangeHandler={(name) => this.updateName(item.id, name)} valueChangeHandler={(value) => this.updateValue(item.id, value)} />
                </View>
              )
            }}
            renderHiddenItem={ (data, rowMap) => (
              <View style={styles.rowBack}>
                <Button onPress={() => this.deleteFood(data.item.id)} style={{ backgroundColor: '#ff6666' }}>
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
const mapDispatchToProps = { addFood, updateFoodValue, updateFoodName, deleteFood };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodPage);
