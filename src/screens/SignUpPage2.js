import React, { Component } from 'react';
import { View } from 'react-native';

import { connect } from 'react-redux';
import { register, findUseInfo } from '../redux/actions';
import { UserHeightData, UserWeightData } from '../commons/UserData';
import {
  Container,
  Form,
  Item,
  Label,
  Content,
  Button,
  Text,
  Toast,
  Spinner,
  CheckBox,
  Icon
} from 'native-base';

import moment from 'moment';
import DatePicker from 'react-native-datepicker';
import HeightAndWeightPicker from '../components/HeightAndWeightPicker';
import AsyncStorage from '@react-native-community/async-storage';
import PolicyModal from '../components/PolicyModal';
class SignUpPage2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment().format('DD-MM-YYYY'),
      weight: '75kg',
      height: '175cm',
      isCheck: false,
      isVisible: false
    };
    this.btnHandler = this.btnHandler.bind(this);
    this.handleHeightAndWeight = this.handleHeightAndWeight.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.modalHandler = this.modalHandler.bind(this);
  }
  handleCheckBox() {
    this.setState({
      isCheck: !this.state.isCheck
    });
  }
  modalHandler() {
    this.setState({
      isVisible: !this.state.isVisible
    });
  }
  async btnHandler() {
    const { weight, height, date, isCheck } = this.state;
    console.log(isCheck);
    if (!isCheck) {
      Toast.show({
        text: 'You need accept policy',
        buttonText: 'Cancel',
        type: 'danger',
        duration: 2500
      });
      return;
    }
    const timestamp = moment(date, 'DD-MM-YYYY').toDate();

    let payload = await AsyncStorage.getItem('payload');
    payload = Object.assign(JSON.parse(payload), {
      birthday: Date.parse(timestamp),
      weight: parseInt(weight),
      height: parseInt(height)
    });

    this.props.register(payload);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.users.isFinished) {
      AsyncStorage.setItem('token', nextProps.users.token);

      this.props.findUseInfo(nextProps.users.token);

      setTimeout(() => {
        this.props.navigation.navigate('home');
      }, 300);
    } else {
      Toast.show({
        text: nextProps.users.error,
        buttonText: 'Cancel',
        type: 'danger',
        duration: 2600
      });
    }
  }
  handleHeightAndWeight(value) {
    if (value.trim().includes('cm')) {
      this.setState({
        height: value
      });
    } else {
      this.setState({
        weight: value
      });
    }
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#1f3954' }}>
        <Form style={{ marginTop: 90 }}>
          <Item stackedLabel style={{ margin: 10 }}>
            <Label
              style={{
                color: '#ffffff',
                fontFamily: 'Helvetica',
                fontSize: 18
              }}
            >
              Date of Birth
            </Label>
            <DatePicker
              date={this.state.date}
              mode="date"
              placeholder="select date"
              format="DD-MM-YYYY"
              minDate="01-01-1900"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              showIcon={false}
              style={{
                width: 120,
                height: 30,
                marginLeft: -260,
                width: 200
              }}
              customStyles={{
                dateInput: {
                  borderWidth: 0
                }
              }}
              onDateChange={date => {
                this.setState({ date: date });
              }}
            />
          </Item>
          <Item stackedLabel style={{ margin: 10 }}>
            <Label
              style={{
                color: '#ffffff',
                fontFamily: 'Helvetica',
                fontSize: 18
              }}
            >
              Your Height
            </Label>
            <HeightAndWeightPicker
              value={this.state.height}
              data={UserHeightData}
              handleHeightAndWeight={this.handleHeightAndWeight}
            />
          </Item>

          <Item stackedLabel style={{ margin: 10 }}>
            <Label
              style={{
                color: '#ffffff',
                fontFamily: 'Helvetica',
                fontSize: 18
              }}
            >
              Your Weight
            </Label>
            <HeightAndWeightPicker
              value={this.state.weight}
              data={UserWeightData}
              handleHeightAndWeight={this.handleHeightAndWeight}
            />
          </Item>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 5
            }}
          >
            <CheckBox
              checked={this.state.isCheck}
              style={{ marginRight: 15 }}
              onPress={this.handleCheckBox}
            />

            <Text
              style={{
                fontSize: 19,
                fontFamily: 'Helvetica',
                color: '#58a4d1'
              }}
              onPress={this.modalHandler}
            >
              Accept policy
            </Text>
          </View>
          <Button
            block
            rounded
            onPress={this.btnHandler}
            success
            style={{
              marginTop: 30,
              marginLeft: 10,
              marginRight: 10
            }}
          >
            <Text
              style={{
                fontFamily: 'Helvetica',
                fontSize: 18
              }}
            >
              Conform
            </Text>
          </Button>
        </Form>
        <PolicyModal
          isVisible={this.state.isVisible}
          modalHandler={this.modalHandler}
        />
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  users: state.users
});
const mapDispatchToProps = { register, findUseInfo };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpPage2);
