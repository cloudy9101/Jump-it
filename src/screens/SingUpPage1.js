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
import ImagePicker from 'react-native-image-picker';
import KeyboardShift from '../components/KeyboardShift';
import ValidationUtil from '../utils/ValidationUtil';
export default class SignUpPage1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheck: true,
      photo: null,
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
          photo: source
        });
      }
    });
  }
  async btnHandler() {
    const { firstName, lastName, gender, photo } = this.state;
    // if (ValidationUtil.isEmpty(firstName) || ValidationUtil.isEmpty(lastName)) {
    //   Toast.show({
    //     text: 'All Fields Are Required..',
    //     buttonText: 'Cancel',
    //     type: 'danger',
    //     duration: 2500
    //   });
    //   return;
    // }
    let payload = await AsyncStorage.getItem('payload');

    payload = Object.assign(JSON.parse(payload), {
      photo: photo === null ? null : photo.uri,
      firstName,
      lastName,
      gender
    });

    await AsyncStorage.setItem('payload', JSON.stringify(payload));

    this.props.navigation.navigate('SignUp2');
  }

  render() {
    return (
      <Container>
        <Form style={{ marginTop: 70 }}>
          <Item inlineLabel style={{ margin: 10 }}>
            <Label style={{ fontSize: 15 }}>Your Photo</Label>
            <Button transparent light onPress={this.handleImagePicker}>
              {this.state.photo === null ? (
                <Thumbnail
                  style={{ marginLeft: 30, top: -19 }}
                  large
                  source={require('../../assets/camera.jpeg')}
                />
              ) : (
                <Thumbnail
                  large
                  style={{ marginLeft: 30, top: -19 }}
                  source={this.state.photo}
                />
              )}
            </Button>
          </Item>
          <Item stackedLabel style={{ margin: 10 }}>
            <Label>First Name</Label>
            <Input onChangeText={text => this.setState({ firstName: text })} />
          </Item>
          <Item stackedLabel style={{ margin: 10 }}>
            <Label>Last Name</Label>
            <Input onChangeText={text => this.setState({ lastName: text })} />
          </Item>

          <Item stackedLabel style={{ margin: 10 }}>
            <Label>Gender?</Label>
            <View style={styles.viewStyle}>
              <CheckBox
                checked={this.state.isCheck}
                color="#f5a742"
                onPress={this.handleCheckBox}
              />
              <Text style={{ paddingLeft: 15, color: '#555' }}>Male</Text>

              <CheckBox
                color="#f5a742"
                checked={!this.state.isCheck}
                onPress={this.handleCheckBox}
              />
              <Text style={{ paddingLeft: 15, color: '#555' }}>Female</Text>
            </View>
          </Item>
          <View style={{ marginTop: 40, marginLeft: 10, marginRight: 10 }}>
            <Button block rounded bordered warning onPress={this.btnHandler}>
              <Text>Next</Text>
            </Button>
          </View>
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
