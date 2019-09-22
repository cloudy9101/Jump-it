import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Content, Spinner } from 'native-base';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';
import { fetchExercises } from '../redux/actions';
import PlanItemComponent from '../components/PlanItemComponent';
import HeaderComponent from '../components/HeaderComponent';
import MyCalendarStrip from '../components/MyCalendarStrip';
import CalendarModal from '../components/CalendarModal';
class PlanPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: new Date(),
      isCalenderVisible: false
    };

    this.dateSelected = this.dateSelected.bind(this);
    this.goBackToday = this.goBackToday.bind(this);
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
      this.props.fetchExercises(this.state.selectedDate, token);
    });
  }
  goBackToday(today) {
    this.setState({ selectedDate: today });
    AsyncStorage.getItem('token').then(token => {
      this.props.fetchExercises(this.state.selectedDate, token);
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
      this.props.fetchExercises(this.state.selectedDate, token);
    });
  }

  dateSelected(date) {
    this.setState({ selectedDate: date });
    AsyncStorage.getItem('token').then(token => {
      this.props.fetchExercises(this.state.selectedDate, token);
    });
  }

  render() {
    const { navigation } = this.props;
    const items = this.props.exercisesPlan.data.map((item, i) => {
      return (
        <PlanItemComponent
          key={i}
          name={item.name}
          value={item.value}
          backgroundImg={item.backgroundImg}
        />
      );
    });
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
          {this.props.exercisesPlan.isLoading ? (
            items
          ) : (
            <Spinner color="#fff" />
          )}
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
  exercisesPlan: state.exercisesPlan
});
const mapDispatchToProps = { fetchExercises };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanPage);
