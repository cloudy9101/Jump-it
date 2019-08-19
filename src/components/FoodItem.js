import React, { Component } from 'react';
import { TouchableHighlight, View, TextInput } from 'react-native';
import { ListItem, Thumbnail, Text, Icon, Button, Left, Body, Right } from 'native-base';
import firebase from 'react-native-firebase';

let foodImgs = [];
foodImgs[0] = require('../../assets/foods/food0.jpg');
foodImgs[1] = require('../../assets/foods/food1.jpg');
foodImgs[2] = require('../../assets/foods/food2.jpg');
foodImgs[3] = require('../../assets/foods/food3.jpg');
foodImgs[4] = require('../../assets/foods/food4.jpg');
foodImgs[5] = require('../../assets/foods/food5.jpg');
foodImgs[6] = require('../../assets/foods/food6.jpg');
foodImgs[7] = require('../../assets/foods/food7.jpg');
foodImgs[8] = require('../../assets/foods/food8.jpg');
foodImgs[9] = require('../../assets/foods/food9.jpg');
foodImgs[10] = require('../../assets/foods/food10.jpg');

class FoodItem extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.item.value }
  }

  componentWillReceiveProps(props) {
    this.setState({ value: props.item.value })
  }

  valueChangeHandler(value) {
    this.setState({value: value});
    this.props.valueChangeHandler(value);
  }

  render() {
    const source = this.props.item.imgUri ? { uri: this.props.item.imgUri } : foodImgs[this.props.item.imgIndex || 0];
    const item = this.props.item;
    return(
      <TouchableHighlight onPress={() => this.props.navigation.navigate('FoodForm', { item })}>
        <View style={{
          flexDirection: 'row',
          marginTop: 10,
          justifyContent: 'flex-start',
        }}>
          <Thumbnail style={{ marginLeft: 10 }} square large source={source} />
          <View style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginLeft: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#ffffff',
            flexGrow: 1
          }}>
            <Text style={{ color: '#ffffff', marginLeft: 15, fontSize: 24 }}>{item.name}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Button iconLeft transparent
                style={{ marginRight: 5 }}
                onPress={() => this.valueChangeHandler(this.state.value + 1)}
              >
                <Icon name='plus' type="EvilIcons" style={{ color: "#ffffff" }} />
              </Button>
              <TextInput style={{ color: '#ffffff', fontSize: 18 }}
                onChangeText={(text) => this.valueChangeHandler(parseInt(text, 0))}
                value={"" + this.state.value}
                keyboardType='numeric'
              />
              <Button iconRight transparent
                style={{ marginLeft: 5 }}
                onPress={() => this.valueChangeHandler(this.state.value - 1)}
              >
                <Icon name='minus' type="EvilIcons" style={{ color: "#ffffff" }} />
              </Button>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

export default FoodItem;
