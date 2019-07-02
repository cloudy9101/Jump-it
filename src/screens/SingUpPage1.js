import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

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
  Thumbnail
} from 'native-base';
import ImagePicker from 'react-native-image-picker';
import KeyboardShift from '../components/KeyboardShift';
export default class SignUpPage1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheck: true,
      photo: null
    };
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleImagePicker = this.handleImagePicker.bind(this);
  }
  handleCheckBox() {
    this.setState({
      isCheck: !this.state.isCheck
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

  render() {
    return (
      <Container>
        {/* <Content> */}
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
            <Input />
          </Item>
          <Item stackedLabel style={{ margin: 10 }}>
            <Label>Last Name</Label>
            <Input />
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
            <Button
              block
              rounded
              bordered
              warning
              onPress={() => this.props.navigation.navigate('SignUp2')}
            >
              <Text>Next</Text>
            </Button>
          </View>
        </Form>
        {/* </Content> */}
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
