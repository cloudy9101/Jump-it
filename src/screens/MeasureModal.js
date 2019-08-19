import React, { Component } from 'react';

import { View, Platform, TextInput, Modal } from 'react-native';
import {
  Content,
  Icon,
  Input,
  Text,
  Toast,
  Label,
  Button,
  Header,
  Left,
  Right,
  Body
} from 'native-base';
import moment from 'moment';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { saveMeasure } from '../redux/actions';
import ValidationUtil from '../utils/ValidationUtil';
class MeasureModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      high: '',
      low: '',
      isShow: false,
      msg: '',
      date: moment().format('DD-MM-YYYY')
    };

    this.btnHandler = this.btnHandler.bind(this);
  }

  btnHandler() {
    const { high, low, value, date } = this.state;

    if (isNaN(high) || isNaN(low) || isNaN(value)) {
      this.textInput1.clear();
      this.textInput2.clear();
      this.textInput.clear();
      this.setState(
        {
          isShow: true,
          msg: 'Must enter number..'
        },
        () => {
          setTimeout(() => {
            this.setState({
              isShow: false
            });
          }, 2000);
        }
      );
      return;
    }
    if (
      ValidationUtil.isEmpty(high) ||
      ValidationUtil.isEmpty(low) ||
      ValidationUtil.isEmpty(value)
    ) {
      this.textInput1.clear();
      this.textInput2.clear();
      this.textInput.clear();
      this.setState(
        {
          isShow: true,
          msg: 'All the fields are required..'
        },
        () => {
          setTimeout(() => {
            this.setState({
              isShow: false
            });
          }, 2000);
        }
      );
      return;
    }

    AsyncStorage.getItem('token').then(token => {
      this.props.saveMeasure({ low, high, value, date }, token);
      this.props.modalHandler();
    });
  }

  render() {
    return (
      <Modal
        visible={this.props.isVisible}
        animationType={'slide'}
        transparent={false}
        style={{ backgroundColor: '#1f3954' }}
      >
        <Header style={{ backgroundColor: '#1f3954', borderBottomWidth: 0.2 }}>
          <Left />
          <Body style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Helvetica',
                fontSize: 20,
                fontWeight: 'bold'
              }}
            >
              {this.state.date}
            </Text>
          </Body>
          <Right>
            <Icon
              name="cross"
              type="Entypo"
              style={{
                color: '#ffffff',
                fontFamily: 'Helvetica',
                fontSize: 33
              }}
              onPress={this.props.modalHandler}
            />
          </Right>
        </Header>
        <View style={{ backgroundColor: '#1f3954', flex: 1 }}>
          <View style={{ marginTop: '10%' }}>
            <View style={{ alignItems: 'center' }}>
              {this.state.isShow ? (
                <Text
                  style={{
                    color: '#f71b2e',
                    fontFamily: 'Helvetica',
                    fontSize: 20
                  }}
                >
                  {this.state.msg}
                </Text>
              ) : null}
              <Label
                style={{
                  color: '#db1414',
                  fontFamily: 'Helvetica',
                  fontSize: 25,
                  fontWeight: 'bold'
                }}
              >
                High Blood Pressure
              </Label>
              <View style={{ alignItems: 'center' }}>
                <View
                  style={{
                    marginTop: 20,
                    marginBottom: 20,
                    flexDirection: 'row',
                    alignItems: 'center'
                  }}
                >
                  {Platform.OS === 'ios' ? (
                    <TextInput
                      ref={input => {
                        this.textInput1 = input;
                      }}
                      placeholder="120"
                      placeholderTextColor="#888"
                      color="#fff"
                      style={{
                        borderColor: '#fff',
                        borderWidth: 1,
                        width: 49,
                        height: 38,
                        fontFamily: 'Helvetica',
                        fontSize: 20,
                        textAlign: 'center'
                      }}
                      onChangeText={text => this.setState({ low: text })}
                    />
                  ) : (
                    <Input
                      ref={input => {
                        this.textInput1 = input;
                      }}
                      placeholder="120"
                      placeholderTextColor="#888"
                      color="#fff"
                      style={{
                        borderColor: '#fff',
                        borderWidth: 1,
                        width: 49,
                        height: 38,
                        fontFamily: 'Helvetica',
                        fontSize: 20,
                        textAlign: 'center'
                      }}
                      onChangeText={text => this.setState({ low: text })}
                    />
                  )}
                  <Text
                    style={{
                      paddingLeft: 5,
                      paddingRight: 5,
                      color: '#ccc',
                      fontSize: 30
                    }}
                  >
                    /
                  </Text>
                  {Platform.OS === 'ios' ? (
                    <TextInput
                      ref={input => {
                        this.textInput2 = input;
                      }}
                      placeholder="120"
                      placeholderTextColor="#888"
                      color="#fff"
                      style={{
                        borderColor: '#fff',
                        borderWidth: 1,
                        width: 49,
                        height: 38,
                        fontFamily: 'Helvetica',
                        fontSize: 20,
                        textAlign: 'center'
                      }}
                      onChangeText={text => this.setState({ high: text })}
                    />
                  ) : (
                    <Input
                      ref={input => {
                        this.textInput2 = input;
                      }}
                      placeholder="120"
                      placeholderTextColor="#888"
                      color="#fff"
                      style={{
                        borderColor: '#fff',
                        borderWidth: 1,
                        width: 49,
                        height: 38,
                        fontFamily: 'Helvetica',
                        fontSize: 20,
                        textAlign: 'center'
                      }}
                      onChangeText={text => this.setState({ high: text })}
                    />
                  )}
                  <Text
                    style={{
                      paddingLeft: 5,
                      paddingRight: 5,
                      color: '#ccc',
                      fontSize: 18,
                      alignSelf: 'flex-end'
                    }}
                  >
                    mmHG
                  </Text>
                </View>
              </View>
              <Label
                style={{
                  color: '#ebc417',
                  fontFamily: 'Helvetica',
                  fontSize: 25,
                  fontWeight: 'bold',
                  marginBottom: 20
                }}
              >
                Sugar Intake
              </Label>
              <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                {Platform.OS === 'ios' ? (
                  <TextInput
                    ref={input => {
                      this.textInput = input;
                    }}
                    placeholder="120"
                    placeholderTextColor="#888"
                    color="#fff"
                    style={{
                      borderColor: '#fff',
                      borderWidth: 1,
                      width: 49,
                      height: 38,
                      fontFamily: 'Helvetica',
                      fontSize: 20,
                      textAlign: 'center'
                    }}
                    onChangeText={text => this.setState({ value: text })}
                  />
                ) : (
                  <Input
                    ref={input => {
                      this.textInput = input;
                    }}
                    placeholder="120"
                    placeholderTextColor="#888"
                    color="#fff"
                    style={{
                      borderColor: '#fff',
                      borderWidth: 1,
                      width: 70,
                      height: 38,
                      fontFamily: 'Helvetica',
                      fontSize: 20,
                      textAlign: 'center'
                    }}
                    onChangeText={text => this.setState({ value: text })}
                  />
                )}

                <Text
                  style={{
                    paddingLeft: 5,
                    paddingRight: 5,
                    color: '#ccc',
                    fontSize: 18,
                    alignSelf: 'flex-end'
                  }}
                >
                  grams
                </Text>
              </View>
              <Text
                style={{
                  color: '#fff',
                  fontFamily: 'Helvetica',
                  fontSize: 17,
                  textAlign: 'center'
                }}
              >
                Start with your calories, and use the first 3 numbers for the 10
                percent added sugar goal (1,500 daily calories is 150). Divide
                your number by 4 to get daily sugar grams
              </Text>
            </View>
            <Button
              block
              rounded
              // bordered
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
                Submit
              </Text>
            </Button>
          </View>
        </View>
      </Modal>
    );
  }
}
const mapDispatchToProps = { saveMeasure };

export default connect(
  null,
  mapDispatchToProps
)(MeasureModal);
