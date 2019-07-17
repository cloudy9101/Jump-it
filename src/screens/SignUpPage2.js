import React, { Component } from 'react';
import { View } from 'react-native';
import { UserHeightData, UserWeightData } from '../commons/UserData';
import {
  Container,
  Form,
  Item,
  Label,
  Content,
  Button,
  Text
} from 'native-base';
import moment from 'moment';
import DatePicker from 'react-native-datepicker';
import HeightAndWeightPicker from '../components/HeightAndWeightPicker';
import AsyncStorage from '@react-native-community/async-storage';

export default class SignUpPage2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment().format('DD-MM-YYYY'),
      weight: '75kg',
      height: '175cm'
    };
    this.btnHandler = this.btnHandler.bind(this);
    this.handleHeightAndWeight = this.handleHeightAndWeight.bind(this);
  }

  async btnHandler() {
    const { weight, height, date } = this.state;
    const timestamp = moment(date, 'DD-MM-YYYY').toDate();

    let payload = await AsyncStorage.getItem('payload');
    payload = Object.assign(JSON.parse(payload), {
      birthday: Date.parse(timestamp),
      weight: parseInt(weight),
      height: parseInt(height)
    });
  }
  handleHeightAndWeight(value) {
    if (value.trim().includes('cm')) {
      this.setState({
        height: value
      });
    } else {
      this.setState({
        weight: value
      });
    }
    console.log(this.state.weight, this.state.height);
  }
  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <Form style={{ marginTop: 90 }}>
          <Item stackedLabel style={{ margin: 10 }}>
            <Label>Date of Birth</Label>

            <DatePicker
              style={{ width: 200 }}
              date={this.state.date}
              mode="date"
              placeholder="select date"
              format="DD-MM-YYYY"
              minDate="01-01-1900"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              showIcon={false}
              style={{
                width: 120,
                height: 30,
                marginLeft: -270
              }}
              customStyles={{
                dateInput: {
                  borderWidth: 0
                }
              }}
              onDateChange={date => {
                this.setState({ date: date });
              }}
            />
          </Item>
          <Item stackedLabel style={{ margin: 10 }}>
            <Label>Your Height</Label>

            <HeightAndWeightPicker
              value={this.state.height}
              data={UserHeightData}
              handleHeightAndWeight={this.handleHeightAndWeight}
            />
          </Item>

          <Item stackedLabel style={{ margin: 10 }}>
            <Label>Your Weight</Label>
            <HeightAndWeightPicker
              value={this.state.weight}
              data={UserWeightData}
              handleHeightAndWeight={this.handleHeightAndWeight}
            />
          </Item>

          <View style={{ marginTop: 40, marginLeft: 10, marginRight: 10 }}>
            <Button block rounded bordered warning onPress={this.btnHandler}>
              <Text>Conform</Text>
            </Button>
          </View>
        </Form>
      </Container>
    );
  }
}
