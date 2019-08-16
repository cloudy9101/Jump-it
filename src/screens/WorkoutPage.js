import React, { Component } from 'react';
import { View, Platform } from 'react-native';
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
  Button,
  Spinner
} from 'native-base';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { getStepCount, getDistance, getFloor } from '../redux/actions';
import CalendarStrip from 'react-native-calendar-strip';
import HeaderComponent from '../components/HeaderComponent';
import { mockData } from '../commons/MockData';
import WorkoutCard from '../components/WorkoutCard';
import moment from 'moment';
import { initHeathKit } from '../utils/AppleHealthUtil';

Platform.OS === 'ios' ? initHeathKit() : null;
// let date = null;
// let options = {
//   date: date === null ? new Date().toISOString() : date.toISOString()
// };
let obj = {};

class WorkoutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      isToday: true
    };

    this.dateSelected = this.dateSelected.bind(this);
  }
  componentDidMount() {
    AsyncStorage.getItem('token').then(token => {
      this.props.getStepCount({ date: new Date().toISOString() }, token);
      this.props.getDistance({ date: new Date().toISOString() }, token);
      this.props.getFloor({ date: new Date().toISOString() }, token);
    });
  }
  dateSelected(date) {
    const newDate = date.toDate();
    date = newDate;
    AsyncStorage.getItem('token').then(token => {
      //console.log(Date.parse(this.props.step.endDate));
      this.props.getStepCount({ date: date.toISOString() }, token);
      this.props.getDistance({ date: date.toISOString() }, token);
      this.props.getFloor({ date: date.toISOString() }, token);
    });
    const today = new Date();

    if (newDate > today) {
      this.setState({
        isToday: false
      });
      return;
    }
    this.setState({ date: newDate, isToday: true });
    // AsyncStorage.getItem('token').then(token => {
    //   this.props.fetchExercises(newDate, token);
    // });
  }
  renderNodata() {
    return (
      <View style={{ marginTop: 30 }}>
        <Text
          style={{
            color: '#ffffff',
            fontFamily: 'Verdana',
            fontSize: 35,
            paddingLeft: 15
          }}
        >
          No data
        </Text>
      </View>
    );
  }
  renderData() {
    return (
      <>
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
            bkColor={'#6e61a8'}
            name={'Steps'}
            num={this.props.step.value}
            unit={'steps'}
            time={moment(this.props.step.endDate).format('HH:mm')}
          />
          <WorkoutCard
            bkColor={'#35652c'}
            name={'Working+Running Distance'}
            num={(parseInt(this.props.distance.value) / 1000).toFixed(1)}
            unit={'km'}
            time={moment(this.props.distance.endDate).format('HH:mm')}
          />
          <WorkoutCard
            bkColor={'#3d7ea4'}
            name={'Flights Climebed'}
            num={this.props.floor.value}
            unit={'floor'}
            time={moment(this.props.floor.endDate).format('HH:mm')}
          />
        </View>
      </>
    );
  }
  render() {
    const { navigation } = this.props;

    return (
      <Container style={{ backgroundColor: '#1f3954' }}>
        <HeaderComponent title={navigation.state.routeName} {...this.props} />
        <CalendarStrip
          //calendarAnimation={{ type: 'sequence', duration: 150 }}
          weekStripAnimation={{ Type: 'sequence', duration: 300 }}
          style={{ height: 100, paddingTop: 10, paddingBottom: 10 }}
          calendarHeaderStyle={{
            color: '#ffffff',
            fontFamily: 'Helvetica',
            fontSize: 18
          }}
          calendarColor={'#315574'}
          dateNumberStyle={{ color: '#ffffff' }}
          dateNameStyle={{ color: '#ffffff' }}
          highlightDateNumberStyle={{ color: '#1b1b1b' }}
          highlightDateNameStyle={{ color: '#1b1b1b' }}
          disabledDateNameStyle={{ color: '#ffffff' }}
          disabledDateNumberStyle={{ color: '#ffffff' }}
          iconContainer={{ flex: 0.1 }}
          onDateSelected={this.dateSelected}
        />
        <Content>
          {this.state.isToday ? this.renderData() : this.renderNodata()}
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  step: state.stepCount,
  distance: state.distance,
  floor: state.floor
});
const mapDispatchToProps = { getStepCount, getDistance, getFloor };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutPage);
