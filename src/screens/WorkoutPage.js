import React, { Component } from 'react';
import GoogleFit, { Scopes } from 'react-native-google-fit';
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

import HeaderComponent from '../components/HeaderComponent';
import { mockData } from '../commons/MockData';
import WorkoutCard from '../components/WorkoutCard';
import moment from 'moment';
import { initHeathKit } from '../utils/AppleHealthUtil';
import MyCalendarStrip from '../components/MyCalendarStrip';
import CalendarModal from '../components/CalendarModal';
Platform.OS === 'ios' ? initHeathKit() : null;
class WorkoutPage extends Component {
  constructor(props) {
    super(props);

    // The list of available scopes inside of src/scopes.js file
    const options = {
      scopes: [
        Scopes.FITNESS_ACTIVITY_READ_WRITE,
        Scopes.FITNESS_BODY_READ_WRITE,
        Scopes.FITNESS_LOCATION_READ
      ],
    }
    GoogleFit.isAvailable((msg, res) => {
      console.log("!MSG", msg);
      console.log("!RES", res);
    })
    GoogleFit.authorize(options)
      .then(authResult => {
        console.log(authResult);
        if (authResult.success) {
          console.log(authResult);
          // dispatch("AUTH_SUCCESS");
        } else {
          console.log("AUTH_DENIED", authResult.message);
        }
      })
      .catch((error) => {
        console.log("AUTH_ERROR", error);
      })

    this.state = {
      isToday: true,
      selectedDate: new Date(),
      isCalenderVisible: false
    };
    this.dateSelected = this.dateSelected.bind(this);
    this.goBackToday = this.dateSelected.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.selectDate = this.selectDate.bind(this);
  }
  selectDate(day, flag) {
    const { selectedDate } = this.state;
    const selected = moment(day.dateString, 'YYYY-MM-DD').toDate();

    this.setState({
      isCalenderVisible: flag,
      selectedDate: selected
    });
    AsyncStorage.getItem('token').then(token => {
      this.props.getStepCount({ date: selected.toISOString() }, token);
      this.props.getDistance({ date: selected.toISOString() }, token);
      this.props.getFloor({ date: selected.toISOString() }, token);
    });
  }
  goBackToday(today) {
    this.setState({ selectedDate: today });
    AsyncStorage.getItem('token').then(token => {
      this.props.getStepCount({ date: new Date().toISOString() }, token);
      this.props.getDistance({ date: new Date().toISOString() }, token);
      this.props.getFloor({ date: new Date().toISOString() }, token);
    });
  }
  closeModal(e) {
    this.setState({
      isCalenderVisible: e
    });
  }
  openModal(e) {
    this.setState({
      isCalenderVisible: e
    });
  }
  componentDidMount() {
    AsyncStorage.getItem('token').then(token => {
      this.props.getStepCount({ date: new Date().toISOString() }, token);
      this.props.getDistance({ date: new Date().toISOString() }, token);
      this.props.getFloor({ date: new Date().toISOString() }, token);
    });
  }
  dateSelected(date) {
    //const newDate = date.toDate();

    AsyncStorage.getItem('token').then(token => {
      //console.log(Date.parse(this.props.step.endDate));
      this.props.getStepCount({ date: date.toISOString() }, token);
      this.props.getDistance({ date: date.toISOString() }, token);
      this.props.getFloor({ date: date.toISOString() }, token);
    });
    const today = new Date();

    if (date > today) {
      this.setState({
        isToday: false,
        selectedDate: date
      });
      return;
    }
    this.setState({ selectedDate: date, isToday: true });
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
    console.log(this.props.floor.value);
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
            num={this.props.step.value || '5000'}
            unit={'steps'}
            time={moment(this.props.step.endDate).format('HH:mm') || '19:00'}
          />
          <WorkoutCard
            bkColor={'#35652c'}
            name={'Working+Running Distance'}
            num={(parseInt(this.props.distance.value || '555') / 1000).toFixed(
              1
            )}
            unit={'km'}
            time={
              moment(this.props.distance.endDate).format('HH:mm') || '19:00'
            }
          />
          <WorkoutCard
            bkColor={'#3d7ea4'}
            name={'Flights Climbed'}
            num={this.props.floor.value || '6'}
            unit={'floor'}
            time={moment(this.props.floor.endDate).format('HH:mm') || '19:00'}
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

        <MyCalendarStrip
          selectedDate={this.state.selectedDate}
          onPressDate={this.dateSelected}
          onPressGoToday={this.goBackToday}
          openModal={this.openModal}
        />

        <Content>
          {this.state.isToday ? this.renderData() : this.renderNodata()}
        </Content>
        <CalendarModal
          isCalenderVisible={this.state.isCalenderVisible}
          close={this.closeModal}
          selectDate={this.selectDate}
          title={moment(this.state.selectedDate).year()}
        />
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
