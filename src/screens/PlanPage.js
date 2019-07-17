import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content } from 'native-base';
import DatePicker from 'react-native-datepicker'

import PlanItemComponent from '../components/PlanItemComponent';

const planData = [
  { key: 1, name: "running", value: "5 mins" },
  { key: 2, name: "running", value: "10 mins" },
  { key: 3, name: "running", value: "15 mins" },
  { key: 4, name: "running", value: "25 mins" },
  { key: 5, name: "running", value: "5 mins" },
  { key: 6, name: "running", value: "10 mins" },
  { key: 7, name: "running", value: "15 mins" },
  { key: 8, name: "running", value: "25 mins" },
  { key: 9, name: "running", value: "5 mins" },
  { key: 10, name: "running", value: "10 mins" },
  { key: 11, name: "running", value: "15 mins" },
  { key: 12, name: "running", value: "25 mins" },
  { key: 13, name: "running", value: "5 mins" },
  { key: 14, name: "running", value: "10 mins" },
  { key: 15, name: "running", value: "15 mins" },
  { key: 16, name: "running", value: "25 mins" }
]

export default class PlanPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      date: new Date()
    };
  }

  componentDidMount() {
    const items = planData.map((item) => {
      return <PlanItemComponent key={item.key} name={item.name} value={item.value} />;
    });
    this.setState({items: items})
  }

  render() {
    return (
      <Container>
        <Content>
          <View style={{ justifyContent: 'center' }}>
            <DatePicker
              date={this.state.date}
              mode="date"
              format="YYYY-MM-DD"
              minDate="2010-01-01"
              maxDate="2999-12-31"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateInput: {
                  borderWidth: 0
                }
              }}
              showIcon={false}
              onDateChange={(date) => {this.setState({date: date})}}
            />
          </View>
          { this.state.items }
        </Content>
      </Container>
    );
  }
}
