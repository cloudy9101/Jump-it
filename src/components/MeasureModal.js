import React, { Component } from 'react';
import Modal from 'react-native-modal';
import { View, Platform, TextInput } from 'react-native';
import { Content, Icon, Input, Text, Toast, Label, Button } from 'native-base';
import ValidationUtil from '../utils/ValidationUtil';
class MeasureModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sugar: '',
      high: '',
      low: '',
      isShow: false,
      msg: ''
    };

    this.btnHandler = this.btnHandler.bind(this);
  }

  btnHandler() {
    const { high, low, sugar } = this.state;

    if (isNaN(high) || isNaN(low) || isNaN(sugar)) {
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
          }, 3000);
        }
      );

      return;
    }

    if (
      ValidationUtil.isEmpty(high) ||
      ValidationUtil.isEmpty(low) ||
      ValidationUtil.isEmpty(sugar)
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
          }, 3000);
        }
      );

      return;
    }
  }

  render() {
    return (
      <Modal
        isVisible={this.props.isVisible}
        backdropOpacity={0.8}
        animationOutTiming={500}
        animationInTiming={700}
      >
        <Content>
          <View style={{ marginTop: '10%' }}>
            <View style={{ alignItems: 'flex-end' }}>
              <Icon
                name="cross"
                type="Entypo"
                style={{
                  color: '#ffffff',
                  fontFamily: 'Helvetica',
                  fontSize: 36
                }}
                onPress={this.props.modalHandler}
              />
            </View>
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
                      onChangeText={text => this.setState({ high: text })}
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
                      onChangeText={text => this.setState({ high: text })}
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
                      onChangeText={text => this.setState({ high: text })}
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
                    onChangeText={text => this.setState({ high: text })}
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
                      width: 70,
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
                  grams
                </Text>
              </View>
              <Text
                style={{
                  color: '#fff',
                  fontFamily: 'Helvetica',
                  fontSize: 17
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
        </Content>
      </Modal>
    );
  }
}

export default MeasureModal;
