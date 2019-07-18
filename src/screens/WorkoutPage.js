import React, { Component } from 'react';
import { View } from 'react-native';
import {
  Container,
  Content,
  List,
  ListItem,
  Left,
  Right,
  Text,
  Icon,
  Thumbnail
} from 'native-base';
import moment from 'moment';
import SectionHeader from '../components/SectionHeader';
import SectionItems from '../components/SectionItems';
const mockData = [
  {
    '01-2019': [
      {
        id: 1,
        name: 'runing',
        value: '1 mins',
        date: moment().format('DD/MM/YY')
      },
      {
        id: 2,
        name: 'runing',
        value: '2 mins',
        date: moment().format('DD/MM/YY')
      },
      {
        id: 3,
        name: 'runing',
        value: '3 mins',
        date: moment().format('DD/MM/YY')
      }
    ]
  },
  {
    '02-2019': [
      {
        id: 1,
        name: 'runing',
        value: '52 mins',
        date: moment().format('DD/MM/YY')
      },
      {
        id: 2,
        name: 'runing',
        value: '91 mins',
        date: moment().format('DD/MM/YY')
      },
      {
        id: 3,
        name: 'runing',
        value: '10 mins',
        date: moment().format('DD/MM/YY')
      }
    ]
  },
  {
    '03-2019': [
      {
        id: 1,
        name: 'runing',
        value: '555 mins',
        date: moment().format('DD/MM/YY')
      },
      {
        id: 2,
        name: 'runing',
        value: '9 mins',
        date: moment().format('DD/MM/YY')
      }
    ]
  },
  {
    '04-2019': [
      {
        id: 1,
        name: 'runing',
        value: '20 mins',
        date: moment().format('DD/MM/YY')
      },
      {
        id: 2,
        name: 'runing',
        value: '91 mins',
        date: moment().format('DD/MM/YY')
      },
      {
        id: 3,
        name: 'runing',
        value: '10 mins',
        date: moment().format('DD/MM/YY')
      }
    ]
  }
];
class WorkoutPage extends Component {
  constructor(props) {
    super(props);
    this.renderList = this.renderList.bind(this);
  }
  renderList() {
    let arr = [];
    const iterator = mockData.values();
    for (const obj of iterator) {
      for (const key in obj) {
        arr.push(
          <SectionHeader
            key={key}
            workDate={key}
            workCounts={obj[key].length}
          />
        );
        obj[key].forEach(v => {
          arr.push(
            <SectionItems
              key={v.id}
              name={v.name}
              frequency={v.value}
              workDate={v.date}
            />
          );
        });
      }
    }
    return arr;
  }
  render() {
    return (
      <Container>
        <Content>
          <List>{this.renderList()}</List>
        </Content>
      </Container>
    );
  }
}
export default WorkoutPage;
