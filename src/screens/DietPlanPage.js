import React, { Component } from 'react';
import {
  Container,
  Content,
  Icon,
  Button,
  ListItem,
  Left,
  Body,
  Right
} from 'native-base';
import { TextInput } from 'react-native';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { fetchDiets, addDiet } from '../redux/actions';
import DietPlanItem from '../components/DietPlanItem';
import HeaderComponent from '../components/HeaderComponent';

const planData = [
  { key: 1, name: 'sugar', value: '10g' },
  { key: 2, name: 'blood pressure', value: '120/80 mmHg' },
  { key: 3, name: 'mediacation', value: '10g' }
];

class DietPlanPage extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', value: '' };
    this.addItem = this.addItem.bind(this);
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

  render() {
    const items = this.props.dietPlan.data.map((item, i) => {
      return <DietPlanItem key={i} name={item.name} value={item.value} />;
    });

    return (
      <Container>
        <HeaderComponent
          title={this.props.navigation.state.routeName}
          {...this.props}
        />
        <Content>
          {items}
          <ListItem icon>
            <Left>
              <Icon
                style={{ color: '#FF9501' }}
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
                editable={true}
                style={{ flex: 1, fontSize: 16 }}
                value={this.state.name}
                onChangeText={text => this.setState({ name: text })}
              />
              <TextInput
                placeholder="Value"
                editable={true}
                style={{ flex: 1, fontSize: 16 }}
                value={this.state.value}
                onChangeText={text => this.setState({ value: text })}
              />
            </Body>
            <Right>
              <Icon
                onPress={this.addItem}
                style={{ color: '#FF9501' }}
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
const mapDispatchToProps = { fetchDiets, addDiet };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DietPlanPage);
