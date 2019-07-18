import React, { Component } from 'react';
import { Container, Content, Icon, Button, ListItem, Left, Body, Right } from 'native-base';
import { TextInput } from 'react-native';

import DietPlanItem from '../components/DietPlanItem';

const planData = [
  { key: 1, name: "sugar", value: "10g" },
  { key: 2, name: "blood pressure", value: "120/80 mmHg" },
  { key: 3, name: "mediacation", value: "10g" },
]

export default class DietPlanPage extends Component {
  constructor(props) {
    super(props);
    this.state = { planData: planData, name: "", value: "" }
    this.addItem = this.addItem.bind(this);
  }

  addItem() {
    const name = this.state.name;
    const value = this.state.value;
    this.setState({planData: [...this.state.planData, { key: this.state.planData[this.state.planData.length - 1].key + 1, name: name, value: value }], name: "", value: ""});
  }

  render() {
    const items = this.state.planData.map((item) => {
      return <DietPlanItem key={item.key} name={item.name} value={item.value} />;
    });

    return (
      <Container>
        <Content>
          { items }
          <ListItem icon>
            <Left>
              <Icon style={{color: "#FF9501"}} active={false} type="MaterialCommunityIcons" name="notebook" />
            </Left>
            <Body style={{flexDirection: "row", justifyContent: 'space-between'}}>
              <TextInput
                placeholder="Item"
                editable={true}
                style={{flex: 1, fontSize: 16}}
                value={this.state.name}
                onChangeText={(text) => this.setState({name: text})}
              />
              <TextInput
                placeholder="Value"
                editable={true}
                style={{flex: 1, fontSize: 16}}
                value={this.state.value}
                onChangeText={(text) => this.setState({value: text})}
              />
            </Body>
            <Right>
              <Icon
                onPress={this.addItem}
                style={{color: "#FF9501"}}
                type="AntDesign"
                name="plus"
              />
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}
