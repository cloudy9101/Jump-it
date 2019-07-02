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
import DatePicker from 'react-native-datepicker';

import HeightAndWeightPicker from '../components/HeightAndWeightPicker';

export default class SignUpPage2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  render() {
    return (
      <Container>
        {/* <Content> */}
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

            <HeightAndWeightPicker value="175cm" data={UserHeightData} />
          </Item>

          <Item stackedLabel style={{ margin: 10 }}>
            <Label>Your Weight</Label>
            <HeightAndWeightPicker value="75kg" data={UserWeightData} />
          </Item>

          <View style={{ marginTop: 40, marginLeft: 10, marginRight: 10 }}>
            <Button
              block
              rounded
              bordered
              warning
              onPress={() => this.props.navigation.navigate('SignIn')}
            >
              <Text>Conform</Text>
            </Button>
          </View>
        </Form>
        {/* </Content> */}
      </Container>
    );
  }
}
