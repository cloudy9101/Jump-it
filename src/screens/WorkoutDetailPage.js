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
  Thumbnail,
  Button
} from 'native-base';
import WorkoutDetailItem from '../components/WorkoutDetailItem';
import HeaderComponent from '../components/HeaderComponent';
class WorkoutDetailPage extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem
              style={{ display: 'flex', justifyContent: 'space-around' }}
            >
              <Thumbnail large source={require('../../assets/download.jpeg')} />
              <Text
                style={{ paddingTop: 10, fontSize: 22, fontWeight: 'bold' }}
              >
                SpiderMan
              </Text>
            </ListItem>

            <View>
              <WorkoutDetailItem
                lTitle="Total Time"
                rTitle="Total Calories"
                lValue="0:20:20"
                rValue="200Cal"
              />
              <WorkoutDetailItem
                lTitle="Total Time"
                rTitle="Total Calories"
                lValue="0:20:20"
                rValue="200Cal"
              />
              <WorkoutDetailItem
                lTitle="Total Time"
                rTitle="Total Calories"
                lValue="0:20:20"
                rValue="200Cal"
              />
            </View>
          </List>
        </Content>
      </Container>
    );
  }
}

export default WorkoutDetailPage;
