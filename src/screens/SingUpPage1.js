import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {
  Container,
  Form,
  Item,
  Input,
  Label,
  Content,
  CheckBox,
  Button,
  Text,
  Thumbnail,
  Toast
} from 'native-base';
import moment from 'moment';
import ImagePicker from 'react-native-image-picker';
import KeyboardShift from '../components/KeyboardShift';
import ValidationUtil from '../utils/ValidationUtil';
export default class SignUpPage1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheck: true,
      avator: null,
      firstName: '',
      lastName: '',
      gender: 1
    };
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleImagePicker = this.handleImagePicker.bind(this);
    this.btnHandler = this.btnHandler.bind(this);
  }
  handleCheckBox() {
    this.setState({
      isCheck: !this.state.isCheck,
      gender: !this.state.isCheck ? 0 : 1
    });
  }
  handleImagePicker() {
    const options = {
      title: null,
      cancelButtonTitle: 'Cancel',
      takePhotoButtonTitle: 'Open Camera',
      chooseFromLibraryButtonTitle: 'Choose From Photos',
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      noData: true,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, response => {
      if (response.uri) {
        let source = { uri: response.uri };

        this.setState({
          avator: source,
          avatarRes: response
        });
      }
    });
  }
  async btnHandler() {
    const { firstName, lastName, gender, avator, avatarRes } = this.state;
    if (ValidationUtil.isEmpty(firstName) || ValidationUtil.isEmpty(lastName)) {
      Toast.show({
        style: {
          marginTop: 65
        },
        position: 'top',
        text: 'All Fields Are Required..',
        buttonText: 'Cancel',
        type: 'danger',
        duration: 2500
      });
      return;
    }
    let payload = await AsyncStorage.getItem('payload');

    payload = Object.assign(JSON.parse(payload), {
      avator: avator === null ? null : avator.uri,
      avatarRes,
      firstName,
      lastName,
      gender
    });

    await AsyncStorage.setItem('payload', JSON.stringify(payload));

    this.props.navigation.navigate('SignUp2');
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#1f3954' }}>
        <Form style={{ marginTop: 80 }}>
          <Item inlineLabel style={{ margin: 10 }}>
            <Label
              style={{
                color: '#ffffff',
                fontFamily: 'Helvetica',
                fontSize: 18
              }}
            >
              Your Photo
            </Label>
            <Button transparent light onPress={this.handleImagePicker}>
              {this.state.avator === null ? (
                <Thumbnail
                  style={{ marginLeft: 30, top: -19 }}
                  large
                  source={require('../../assets/download.png')}
                />
              ) : (
                <Thumbnail
                  large
                  style={{ marginLeft: 30, top: -19 }}
                  source={this.state.avator}
                />
              )}
            </Button>
          </Item>
          <Item stackedLabel style={{ margin: 10 }}>
            <Label
              style={{
                color: '#ffffff',
                fontFamily: 'Helvetica',
                fontSize: 18
              }}
            >
              First Name
            </Label>
            <Input
              style={{ flex: 1, fontSize: 16, color: '#ffffff' }}
              onChangeText={text => this.setState({ firstName: text })}
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
              Last Name
            </Label>
            <Input
              style={{ flex: 1, fontSize: 16, color: '#ffffff' }}
              onChangeText={text => this.setState({ lastName: text })}
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
              Gender
            </Label>
            <View style={styles.viewStyle}>
              <CheckBox
                checked={this.state.isCheck}
                color="#ffffff"
                onPress={this.handleCheckBox}
              />
              <Text
                style={{
                  paddingLeft: 15,
                  color: '#ffffff',
                  fontFamily: 'Helvetica',
                  fontSize: 18
                }}
              >
                Male
              </Text>

              <CheckBox
                color="#ffffff"
                checked={!this.state.isCheck}
                onPress={this.handleCheckBox}
              />
              <Text
                style={{
                  paddingLeft: 15,
                  color: '#ffffff',
                  fontFamily: 'Helvetica',
                  fontSize: 18
                }}
              >
                Female
              </Text>
            </View>
          </Item>
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
              Next
            </Text>
          </Button>
        </Form>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  viewStyle: {
    marginTop: 18,
    flexDirection: 'row',
    left: -105
  }
});
