import React, { Component } from 'react';
import {
  Container,
  Content,
  Icon,
  ListItem,
  Left,
  Body,
  Right,
  Spinner
} from 'native-base';
import { TextInput } from 'react-native';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { fetchDiets, addDiet, delDiet } from '../redux/actions';
import DietPlanItem from '../components/DietPlanItem';
import HeaderComponent from '../components/HeaderComponent';

class DietPlanPage extends Component {
  constructor(props) {
    super(props);

    this.state = { name: '', value: '' };
    this.addItem = this.addItem.bind(this);
    this.delItem = this.delItem.bind(this);
  }

  componentDidMount() {
    AsyncStorage.getItem('token').then(token => {
      this.props.fetchDiets(token);
    });
  }

  addItem() {
    const name = this.state.name;
    const value = this.state.value;
    AsyncStorage.getItem('token').then(token => {
      this.props.addDiet(token, name, value);
      this.setState({ name: '', value: '' });
    });
  }

  delItem(dietId) {
    AsyncStorage.getItem('token').then(token => {
      this.props.delDiet(token, dietId);
    });
  }

  render() {
    console.log(this.props.dietPlan)
    const items = this.props.dietPlan.data.map((item, i) => {
      return <DietPlanItem key={i} name={item.name} value={item.value} del={() => this.delItem(item._id)} />;
    });

    return (
      <Container style={{ backgroundColor: '#1f3954' }}>
        <HeaderComponent
          title={this.props.navigation.state.routeName}
          {...this.props}
        />
        <Content>
          {items}

          <ListItem icon>
            <Left>
              <Icon
                style={{ color: '#ffffff' }}
                active={false}
                type="MaterialCommunityIcons"
                name="notebook"
              />
            </Left>
            <Body
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <TextInput
                placeholder="Item"
                placeholderTextColor="#888"
                editable={true}
                style={{ flex: 1, fontSize: 16, color: '#ffffff' }}
                value={this.state.name}
                onChangeText={text => this.setState({ name: text })}
              />
              <TextInput
                placeholder="Value"
                editable={true}
                placeholderTextColor="#888"
                style={{ flex: 1, fontSize: 16, color: '#ffffff' }}
                value={this.state.value}
                onChangeText={text => this.setState({ value: text })}
              />
            </Body>
            <Right>
              <Icon
                onPress={this.addItem}
                style={{ color: '#ffffff' }}
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

const mapStateToProps = state => ({
  dietPlan: state.dietPlan
});
const mapDispatchToProps = { fetchDiets, addDiet, delDiet };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DietPlanPage);
