import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import CalendarStrip from 'react-native-calendar-strip';

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
          <CalendarStrip
            calendarAnimation={{type: 'sequence', duration: 30}}
            daySelectionAnimation={{type: 'background', duration: 200, highlightColor: '#febc42'}}
            style={{height: 100, paddingTop: 10, paddingBottom: 10}}
            calendarHeaderStyle={{color: 'black'}}
            calendarColor={'#fea742'}
            dateNumberStyle={{color: 'black'}}
            dateNameStyle={{color: 'black'}}
            highlightDateNumberStyle={{color: 'black'}}
            highlightDateNameStyle={{color: 'black'}}
            disabledDateNameStyle={{color: 'grey'}}
            disabledDateNumberStyle={{color: 'grey'}}
            iconContainer={{flex: 0.1}}
          />
          { this.state.items }
        </Content>
      </Container>
    );
  }
}
