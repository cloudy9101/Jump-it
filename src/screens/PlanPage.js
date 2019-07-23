import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import CalendarStrip from 'react-native-calendar-strip';
import { connect } from 'react-redux';

import { fetchExercises } from '../redux/actions';
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

class PlanPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
    this.handleDateSelected = this.handleDateSelected.bind(this);
  }

  componentDidMount() {
    this.props.fetchExercises(this.state.date);
  }

  handleDateSelected(date) {
    const newDate = date.toDate();
    this.setState({date: newDate})
    this.props.fetchExercises(newDate);
  }

  render() {
    const items = this.props.exercisesPlan.data.map((item, i) => {
      return <PlanItemComponent key={i} name={item.name} value={item.value} />;
    });
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
            onDateSelected={this.handleDateSelected}
          />
          { items }
        </Content>
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
