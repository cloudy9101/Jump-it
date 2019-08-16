import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import {
  Container,
  View,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Fab,
  Tab,
  Tabs,
  TabHeading,
  Spinner
} from 'native-base';
import moment from 'moment';
import AsyncStorage from '@react-native-community/async-storage';
import ChartScreen from '../components/ChartScreen';
import HeaderComponent from '../components/HeaderComponent';
import MeasureModal from './MeasureModal';
import DateUtils from '../utils/DateUtils';
import DatechangeComponet from '../components/DatechangeComponet';
import CalendarModal from '../components/CalendarModal';
import LineGraph from '../components/LineGraph';
import { connect } from 'react-redux';
import {
  readHighBlood,
  readSugar,
  clearSugarState,
  clearHighBloodState
} from '../redux/actions';

const data1 = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      data: [20]
    },
    {
      data: [50]
    }
  ]
};
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43]
    }
  ]
};
class MeasurementPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      date: moment(),
      color: '#222',
      isCalenderVisible: false
    };

    this.modelhandler = this.modelhandler.bind(this);
    this.backwardHandler = this.backwardHandler.bind(this);
    this.forwardHandler = this.forwardHandler.bind(this);
    this.canlanderModalHandler = this.canlanderModalHandler.bind(this);
    this.selectDate = this.selectDate.bind(this);
    this.tabChangeHandler = this.tabChangeHandler.bind(this);
  }
  componentDidMount() {
    AsyncStorage.getItem('token').then(token => {
      const today = moment().format('DD-MM-YYYY');
      this.props.readHighBlood(today, 'week', token);
      this.props.readSugar(today, 'week', token);
    });
  }
  async tabChangeHandler(v) {
    if (v.i === 1) {
      await this.props.clearHighBloodState();
      await this.props.clearSugarState();

      AsyncStorage.getItem('token').then(token => {
        const today = this.state.date.format('DD-MM-YYYY');
        this.props.readHighBlood(today, 'month', token);
        this.props.readSugar(today, 'month', token);
      });
    } else if (v.i === 2) {
      await this.props.clearHighBloodState();
      await this.props.clearSugarState();
      AsyncStorage.getItem('token').then(token => {
        const today = this.state.date.format('DD-MM-YYYY');
        this.props.readHighBlood(today, 'year', token);
        this.props.readSugar(today, 'year', token);
      });
    } else {
      await this.props.clearHighBloodState();
      await this.props.clearSugarState();
      AsyncStorage.getItem('token').then(token => {
        const today = this.state.date.format('DD-MM-YYYY');
        this.props.readHighBlood(today, 'week', token);
        this.props.readSugar(today, 'week', token);
      });
    }
  }

  selectDate(day, flag) {
    const { date } = this.state;
    const selected = moment(day.dateString, 'YYYY-MM-DD');
    if (selected.toDate().getTime() < new Date().getTime()) {
      this.setState({
        color: '#fff'
      });
    }
    this.setState({
      isCalenderVisible: flag,
      date: selected
    });
    AsyncStorage.getItem('token').then(token => {
      const today = this.state.date.format('DD-MM-YYYY');
      this.props.readHighBlood(today, 'week', token);
      this.props.readSugar(today, 'week', token);
    });
  }
  canlanderModalHandler(e) {
    this.setState({
      isCalenderVisible: e
    });
  }
  async backwardHandler(e) {
    const { date } = this.state;
    switch (e) {
      case 'WEEK': {
        const value = date.subtract(7, 'days');
        this.setState({
          date: value,
          color: '#fff'
        });
        await this.props.clearHighBloodState();
        await this.props.clearSugarState();
        AsyncStorage.getItem('token').then(token => {
          const today = this.state.date.format('DD-MM-YYYY');
          this.props.readHighBlood(today, 'week', token);
          this.props.readSugar(today, 'week', token);
        });

        break;
      }
      case 'MONTH': {
        const value = date.subtract(1, 'months');
        this.setState({
          date: value,
          color: '#fff'
        });
        await this.props.clearHighBloodState();
        await this.props.clearSugarState();
        AsyncStorage.getItem('token').then(token => {
          const today = this.state.date.format('DD-MM-YYYY');
          this.props.readHighBlood(today, 'month', token);
          this.props.readSugar(today, 'month', token);
        });
        break;
      }
      case 'YEAR': {
        const value = date.subtract(1, 'years');
        this.setState({
          date: value,
          color: '#fff'
        });
        await this.props.clearHighBloodState();
        await this.props.clearSugarState();
        AsyncStorage.getItem('token').then(token => {
          const today = this.state.date.format('DD-MM-YYYY');
          this.props.readHighBlood(today, 'year', token);
          this.props.readSugar(today, 'year', token);
        });
        break;
      }
    }
  }
  async forwardHandler(e) {
    const { date } = this.state;
    const current = new Date();
    switch (e) {
      case 'WEEK': {
        if (date.toDate() < current) {
          const value = date.add(7, 'days');
          this.setState({
            date: value,
            color: '#fff'
          });
        } else {
          this.setState({
            color: '#222'
          });
        }
        await this.props.clearHighBloodState();
        await this.props.clearSugarState();
        AsyncStorage.getItem('token').then(token => {
          const today = this.state.date.format('DD-MM-YYYY');
          this.props.readHighBlood(today, 'week', token);
          this.props.readSugar(today, 'week', token);
        });

        break;
      }
      case 'MONTH': {
        if (date.toDate().getMonth() < current.getMonth()) {
          const value = date.add(1, 'months');
          this.setState({
            date: value,
            color: '#fff'
          });
        } else {
          this.setState({
            color: '#222'
          });
        }
        await this.props.clearHighBloodState();
        await this.props.clearSugarState();
        AsyncStorage.getItem('token').then(token => {
          const today = this.state.date.format('DD-MM-YYYY');
          this.props.readHighBlood(today, 'month', token);
          this.props.readSugar(today, 'month', token);
        });
        break;
      }
      case 'YEAR': {
        if (date.toDate().getFullYear() < current.getFullYear()) {
          const value = date.add(1, 'years');
          this.setState({
            date: value,
            color: '#fff'
          });
        } else {
          this.setState({
            color: '#222'
          });
        }
        await this.props.clearHighBloodState();
        await this.props.clearSugarState();
        AsyncStorage.getItem('token').then(token => {
          const today = this.state.date.format('DD-MM-YYYY');
          this.props.readHighBlood(today, 'year', token);
          this.props.readSugar(today, 'year', token);
        });
        break;
      }
    }
  }
  modelhandler() {
    this.setState({
      isVisible: !this.state.isVisible
    });
  }
  render() {
    return (
      <Container style={{ backgroundColor: '#1f3954' }}>
        <HeaderComponent title={'Measure'} {...this.props} />
        <Tabs
          tabBarUnderlineStyle={{ backgroundColor: '#bbb', height: 1 }}
          onChangeTab={this.tabChangeHandler}
        >
          <Tab
            style={{ backgroundColor: '#1f3954' }}
            heading={
              <TabHeading
                style={{
                  backgroundColor: '#1f3954'
                }}
              >
                <Text
                  style={{
                    color: '#ffffff',
                    fontFamily: 'Georgia',
                    fontSize: 16
                  }}
                >
                  Week
                </Text>
              </TabHeading>
            }
          >
            <DatechangeComponet
              data={DateUtils.showWeek(this.state.date)}
              color={this.state.color}
              backwardHandler={() => this.backwardHandler('WEEK')}
              forwardHandler={() => this.forwardHandler('WEEK')}
              txtPress={this.canlanderModalHandler}
            />
            <Content style={{ marginTop: 1 }}>
              {this.props.highblood.isLoading && this.props.sugar.isLoading ? (
                <>
                  <LineGraph
                    dividerColor="#DD5144"
                    name="High Blood Pressure"
                    GradientFrom="#DD5144"
                    GradientTo="#a82216"
                    data={this.props.highblood ? this.props.highblood : data1}
                  />

                  <LineGraph
                    dividerColor="#b38b27"
                    name="Sugar Taken"
                    GradientFrom="#b38b27"
                    GradientTo="#946d0d"
                    data={this.props.sugar ? this.props.sugar : data}
                  />
                </>
              ) : (
                <Spinner color="#fff" />
              )}
              {/* <ChartScreen
                name="Steps"
                dividerColor="#6e61a8"
                GradientFrom="#6e61a8"
                GradientTo="#453687"
                data={data}
              />
              <ChartScreen
                dividerColor="#35652c"
                name="Working+Running Distance"
                GradientFrom="#35652c"
                GradientTo="#163d0f"
                data={data}
              /> */}
            </Content>
          </Tab>
          <Tab
            style={{ backgroundColor: '#1f3954' }}
            heading={
              <TabHeading
                style={{ backgroundColor: '#1f3954', color: '#ffffff' }}
                activeTabStyle={{ color: 'color' }}
              >
                <Text
                  style={{
                    color: '#ffffff',
                    fontFamily: 'Georgia',
                    fontSize: 16
                  }}
                >
                  Month
                </Text>
              </TabHeading>
            }
          >
            <DatechangeComponet
              data={DateUtils.showMonth(this.state.date)}
              color={this.state.color}
              backwardHandler={() => this.backwardHandler('MONTH')}
              forwardHandler={() => this.forwardHandler('MONTH')}
              txtPress={this.canlanderModalHandler}
            />
            <Content>
              {this.props.highblood.isLoading && this.props.sugar.isLoading ? (
                <>
                  <LineGraph
                    dividerColor="#DD5144"
                    name="High Blood Pressure"
                    GradientFrom="#DD5144"
                    GradientTo="#a82216"
                    data={this.props.highblood ? this.props.highblood : data1}
                  />
                  <LineGraph
                    dividerColor="#b38b27"
                    name="Sugar Taken"
                    GradientFrom="#b38b27"
                    GradientTo="#946d0d"
                    data={this.props.sugar ? this.props.sugar : data}
                  />
                </>
              ) : (
                <Spinner color="#fff" />
              )}

              {/* 
              <ChartScreen
                name="Steps"
                dividerColor="#6e61a8"
                GradientFrom="#6e61a8"
                GradientTo="#453687"
                data={data}
              />
              <ChartScreen
                dividerColor="#35652c"
                name="Working+Running Distance"
                GradientFrom="#35652c"
                GradientTo="#163d0f"
                data={data}
              /> */}
            </Content>
          </Tab>
          <Tab
            style={{ backgroundColor: '#1f3954' }}
            heading={
              <TabHeading
                style={{ backgroundColor: '#1f3954', color: '#ffffff' }}
              >
                <Text
                  style={{
                    color: '#ffffff',
                    fontFamily: 'Georgia',
                    fontSize: 16
                  }}
                >
                  Year
                </Text>
              </TabHeading>
            }
          >
            <DatechangeComponet
              data={DateUtils.showYear(this.state.date)}
              color={this.state.color}
              backwardHandler={() => this.backwardHandler('YEAR')}
              forwardHandler={() => this.forwardHandler('YEAR')}
              txtPress={this.canlanderModalHandler}
            />
            <Content>
              {this.props.highblood.isLoading && this.props.sugar.isLoading ? (
                <>
                  <LineGraph
                    dividerColor="#DD5144"
                    name="High Blood Pressure"
                    GradientFrom="#DD5144"
                    GradientTo="#a82216"
                    data={this.props.highblood ? this.props.highblood : data1}
                  />
                  <ChartScreen
                    dividerColor="#b38b27"
                    name="Sugar Taken"
                    GradientFrom="#b38b27"
                    GradientTo="#946d0d"
                    data={this.props.sugar ? this.props.sugar : data}
                  />
                </>
              ) : (
                <Spinner color="#fff" />
              )}

              {/* 
              <ChartScreen
                name="Steps"
                dividerColor="#6e61a8"
                GradientFrom="#6e61a8"
                GradientTo="#453687"
                data={data}
              />
              <ChartScreen
                dividerColor="#35652c"
                name="Working+Running Distance"
                GradientFrom="#35652c"
                GradientTo="#163d0f"
                data={data}
              /> */}
            </Content>
          </Tab>
        </Tabs>
        <CalendarModal
          isCalenderVisible={this.state.isCalenderVisible}
          close={this.canlanderModalHandler}
          selectDate={this.selectDate}
          title={this.state.date.year()}
        />
        <Fab
          direction="up"
          containerStyle={{}}
          style={{
            backgroundColor: '#3d7ea4',
            width: 50,
            height: 50,
            opacity: 0.8
          }}
          onPress={this.modelhandler}
        >
          <Icon name="pencil" type="FontAwesome" />
        </Fab>
        <MeasureModal
          isVisible={this.state.isVisible}
          modalHandler={this.modelhandler}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  highblood: state.highblood,
  sugar: state.sugar
});
const mapDispatchToProps = {
  readHighBlood,
  readSugar,
  clearSugarState,
  clearHighBloodState
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MeasurementPage);
