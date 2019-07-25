import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Content } from 'native-base';
import CalendarStrip from 'react-native-calendar-strip';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import { fetchExercises } from '../redux/actions';
import PlanItemComponent from '../components/PlanItemComponent';
import HeaderComponent from '../components/HeaderComponent';

class PlanPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
    this.handleDateSelected = this.handleDateSelected.bind(this);
  }

  componentDidMount() {
    AsyncStorage.getItem('token').then(token => {
      this.props.fetchExercises(this.state.date, token);
    });
  }

  handleDateSelected(date) {
    const newDate = date.toDate();
    this.setState({ date: newDate });
    AsyncStorage.getItem('token').then(token => {
      this.props.fetchExercises(newDate, token);
    });
  }

  render() {
    const { navigation } = this.props;
    const items = this.props.exercisesPlan.data.map((item, i) => {
      return <PlanItemComponent key={i} name={item.name} value={item.value} />;
    });
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
        <Content>{items}</Content>
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
