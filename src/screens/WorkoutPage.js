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
import SectionList from '../components/SectionList';
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
        date: moment().format('DD-MM-YYYY')
      },
      {
        id: 3,
        name: 'runing',
        value: '3 mins',
        date: moment().format('DD-MM-YYYY')
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
        date: moment().format('DD-MM-YYYY')
      },
      {
        id: 3,
        name: 'runing',
        value: '10 mins',
        date: moment().format('DD-MM-YYYY')
      }
    ]
  },
  {
    '03-2019': [
      {
        id: 1,
        name: 'runing',
        value: '555 mins',
        date: moment().format('DD-MM-YYYY')
      },
      {
        id: 2,
        name: 'runing',
        value: '9 mins',
        date: moment().format('DD-MM-YYYY')
      },
      {
        id: 3,
        name: 'runing',
        value: '10 mins',
        date: moment().format('DD-MM-YYYY')
      }
    ]
  },
  {
    '04-2019': [
      {
        id: 1,
        name: 'runing',
        value: '20 mins',
        date: moment().format('DD-MM-YYYY')
      },
      {
        id: 2,
        name: 'runing',
        value: '91 mins',
        date: moment().format('DD-MM-YYYY')
      },
      {
        id: 3,
        name: 'runing',
        value: '10 mins',
        date: moment().format('DD-MM-YYYY')
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
        obj[key].forEach(v => {
          arr.push(
            <SectionList
              key={v.id}
              workDate={key}
              workCounts={obj[key].length}
              name={v.name}
              duration={v.value}
              workDate={v.date}
            />
          );
        });
        //arr.push(<SectionList workDate={key} workCounts={obj[key].length} />);
      }
    }
    return arr;
  }
  render() {
    return (
      <Container>
        <Content>
          <List>
            {/* <ListItem
              itemDivider
              style={{ backgroundColor: '#121111', opacity: 0.8 }}
            >
              <Left>
                <Text
                  style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}
                >
                  {Object.entries(mockData[0])[0][0]}
                </Text>
              </Left>
              <Right>
                <View style={{ marginLeft: -50 }}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 18,
                      fontWeight: 'bold'
                    }}
                  >
                    {Object.entries(mockData[0])[0][1].length}Workouts
                  </Text>
                </View>
              </Right>
            </ListItem> */}
            {this.renderList()}
            {/* <ListItem>
              <Left>
                <Thumbnail
                  source={require('../../assets/run.png')}
                  style={{
                    marginTop: -5,
                    marginRight: 10
                  }}
                />
                <View style={{ display: 'flex', flexDirection: 'column' }}>
                  <View>
                    <Text
                      style={{
                        color: '#292828',
                        fontSize: 18,
                        fontWeight: 'bold'
                      }}
                    >
                      {Object.entries(mockData[0])[0][1][0].name}
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: '#99952c',
                        fontSize: 18,
                        fontWeight: 'bold'
                      }}
                    >
                      {Object.entries(mockData[0])[0][1][0].value}
                    </Text>
                  </View>
                </View>
              </Left>
              <Right style={{ flexDirection: 'row' }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: -22
                  }}
                >
                  <View style={{ marginRight: 5 }}>
                    <Text
                      style={{
                        color: '#99952c',
                        fontSize: 15,
                        fontWeight: 'bold'
                      }}
                    >
                      {Object.entries(mockData[0])[0][1][0].date}
                    </Text>
                  </View>
                  <View style={{ marginTop: -3 }}>
                    <Icon name="arrow-forward" style={{ color: '#292828' }} />
                  </View>
                </View>
              </Right>
            </ListItem> */}
          </List>
        </Content>
      </Container>
    );
  }
}
export default WorkoutPage;
