import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { ListItem, Text, Icon, Button, Left, Body, Right } from 'native-base';

class FoodItem extends Component {
  constructor(props) {
    super(props);
    this.state = { name: props.name, value: props.value, valueText: props.value + "" }
    this.nameChangeHandler = this.nameChangeHandler.bind(this);
    this.valueChangeHandler = this.valueChangeHandler.bind(this);
  }

  nameChangeHandler(text) {
    this.props.nameChangeHandler(text);
    this.setState({ name: text })
  }

  valueChangeHandler(value) {
    if(value < 0) { return; }
    this.props.valueChangeHandler(value);
    const valueText = isNaN(value) ? "" : value + "";
    this.setState({ value: isNaN(value) ? 0 : value, valueText: valueText })
  }

  render() {
    return(
      <ListItem icon>
        <Left>
          <Icon
            style={{ color: '#ffffff' }}
            type="MaterialCommunityIcons"
            name="food-variant"
          />
        </Left>
        <Body>
          <TextInput style={{ color: '#ffffff' }} value={this.state.name} onChangeText={(text) => this.nameChangeHandler(text)} />
        </Body>
        <Right>
          <Button onPress={() => this.valueChangeHandler(this.state.value + 1)} iconLeft transparent style={{ marginRight: 5 }}>
            <Icon name='plus' type="EvilIcons" style={{ color: "#ffffff" }} />
          </Button>
          <TextInput style={{ color: '#ffffff' }} value={this.state.valueText} onChangeText={(text) => this.valueChangeHandler(parseInt(text, 0))} />
          <Button onPress={() => this.valueChangeHandler(this.state.value - 1)} iconRight transparent style={{ marginLeft: 5 }}>
            <Icon name='minus' type="EvilIcons" style={{ color: "#ffffff" }} />
          </Button>
        </Right>
      </ListItem>
    );
  }
}

export default FoodItem;
