import React, { Component } from 'react';
import { View } from 'react-native';
import {
  Container,
  Content,
  List,
  ListItem,
  Left,
  Text,
  Icon,
  Thumbnail,
  Header,
  Body,
  Right,
  Button
} from 'native-base';
import CalendarStrip from 'react-native-calendar-strip';
import HeaderComponent from '../components/HeaderComponent';
import { mockData } from '../commons/MockData';
import WorkoutCard from '../components/WorkoutCard';
// import AppleHealthKit from 'rn-apple-healthkit';
// import { HealthOptions } from '../commons/HealthOptions';

class WorkoutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };

    this.handleDateSelected = this.handleDateSelected.bind(this);
  }
  handleDateSelected(date) {
    const newDate = date.toDate();
    this.setState({ date: newDate });
    // AsyncStorage.getItem('token').then(token => {
    //   this.props.fetchExercises(newDate, token);
    // });
  }

  render() {
    const { navigation } = this.props;

    return (
      <Container style={{ backgroundColor: '#1f3954' }}>
        <HeaderComponent title={navigation.state.routeName} {...this.props} />
        <CalendarStrip
          calendarAnimation={{ type: 'sequence', duration: 30 }}
          daySelectionAnimation={{
            type: 'background',
            duration: 200,
            highlightColor: '#1f3954'
          }}
          style={{ height: 100, paddingTop: 10, paddingBottom: 10 }}
          calendarHeaderStyle={{
            color: '#ffffff',
            fontFamily: 'Helvetica',
            fontSize: 18
          }}
          calendarColor={'#315574'}
          dateNumberStyle={{ color: '#ffffff' }}
          dateNameStyle={{ color: '#ffffff' }}
          highlightDateNumberStyle={{ color: '#ffffff' }}
          highlightDateNameStyle={{ color: '#ffffff' }}
          disabledDateNameStyle={{ color: '#ffffff' }}
          disabledDateNumberStyle={{ color: '#ffffff' }}
          iconContainer={{ flex: 0.1 }}
          onDateSelected={this.handleDateSelected}
        />
        <Content>
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                color: '#ffffff',
                fontFamily: 'Verdana',
                fontSize: 22,
                paddingLeft: 8
              }}
            >
              Activity
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%'
            }}
          >
            <WorkoutCard
              bkColor={'#35652c'}
              shadowColor={'#4a8240'}
              name={'Working+Running Distance'}
              num={'6566'}
              unit={'km'}
              time={'19:00'}
              onPress={() => {
                console.log('navigate');
                props.navigation.navigate('WorkoutDetail');
              }}
            />
            <WorkoutCard
              bkColor={'#6e61a8'}
              shadowColor={'#5a5087'}
              name={'Steps'}
              num={'6566'}
              unit={'steps'}
              time={'19:00'}
            />
            <WorkoutCard
              bkColor={'#3d7ea4'}
              shadowColor={'#35596e'}
              name={'Flights Climebed'}
              num={'6566'}
              unit={'floor'}
              time={'19:00'}
            />
          </View>
        </Content>
      </Container>
    );
  }
}
export default WorkoutPage;
