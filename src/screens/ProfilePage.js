import React, { Component } from 'react';
import { View } from 'react-native';
import {
  Container,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Content,
  Thumbnail,
  Toast
} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { updateUser } from '../redux/actions';
import HeaderComponent from '../components/DrawerHeaderComponent';
import ImagePicker from 'react-native-image-picker';
import HeightAndWeightPicker from '../components/HeightAndWeightPicker';
import { UserHeightData, UserWeightData } from '../commons/UserData';
import ValidationUtil from '../utils/ValidationUtil';
class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      avator: this.props.users.avator,
      weight: this.props.users.weight,
      height: this.props.users.height,
      firstName: this.props.users.firstName,
      lastName: this.props.users.lastName,
      username: this.props.users.username
    };

    this.handleImagePicker = this.handleImagePicker.bind(this);
    this.handleHeightAndWeight = this.handleHeightAndWeight.bind(this);
    this.blurHandler = this.blurHandler.bind(this);
    this.btnHandler = this.btnHandler.bind(this);
  }
  btnHandler() {
    const {
      weight,
      height,
      firstName,
      lastName,
      username,
      avator
    } = this.state;
    // if (
    //   ValidationUtil.isEmpty(username) ||
    //   ValidationUtil.isEmpty(lastName) ||
    //   ValidationUtil.isEmpty(firstName)
    // ) {
    //   Toast.show({
    //     text: 'All Fields Are Required..',
    //     buttonText: 'Cancel',
    //     type: 'danger',
    //     duration: 2000
    //   });
    //   return;
    // }
    AsyncStorage.getItem('token').then(token => {
      const obj = {
        avator: avator,
        username,
        firstName,
        lastName,
        height,
        weight
      };

      this.props.updateUser(
        {
          avator: avator,
          username,
          firstName,
          lastName,
          height,
          weight
        },
        token
      );
      this.props.navigation.goBack();
    });
  }
  blurHandler() {
    this.setState({
      isShow: true
    });
  }
  handleHeightAndWeight(value) {
    if (value.trim().includes('cm')) {
      this.setState({
        height: parseInt(value),
        isShow: true
      });
    } else {
      this.setState({
        weight: parseInt(value),
        isShow: true
      });
    }
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
        console.log(source);

        this.setState({
          avator: source.uri,
          isShow: true
        });
        console.log(this.state.avator);
      }
    });
  }
  render() {
    console.log(this.state.avator);
    return (
      <Container style={{ backgroundColor: '#1f3954' }}>
        {/* <HeaderComponent titleName="Profile" {...this.props} /> */}
        <Content>
          <Form style={{ marginTop: 40 }}>
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
                    style={{ marginLeft: 50, top: -19 }}
                    source={require('../../assets/download.png')}
                    large
                  />
                ) : (
                  <Thumbnail
                    large
                    style={{ marginLeft: 30, top: -19 }}
                    source={{ uri: this.state.avator }}
                  />
                )}
              </Button>
            </Item>
            <Item stackedLabel style={{ marginTop: 10 }}>
              <Label
                style={{
                  color: '#ffffff',
                  fontFamily: 'Helvetica',
                  fontSize: 18
                }}
              >
                User Name
              </Label>
              <Input
                onBlur={this.blurHandler}
                value={this.state.username}
                style={{ flex: 1, fontSize: 16, color: '#ffffff' }}
                onChangeText={text => this.setState({ username: text })}
              />
            </Item>
            <Item stackedLabel style={{ marginTop: 10 }}>
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
                onBlur={this.blurHandler}
                value={this.state.firstName}
                style={{ flex: 1, fontSize: 16, color: '#ffffff' }}
                onChangeText={text => this.setState({ firstName: text })}
              />
            </Item>
            <Item stackedLabel style={{ marginTop: 10 }}>
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
                onBlur={this.blurHandler}
                value={this.state.lastName}
                style={{ flex: 1, fontSize: 16, color: '#ffffff' }}
                onChangeText={text => this.setState({ lastName: text })}
              />
            </Item>
            <Item stackedLabel style={{ marginTop: 5 }}>
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

            <Item stackedLabel style={{ marginTop: 5 }}>
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
            {this.state.isShow ? (
              <Button
                onPress={this.btnHandler}
                block
                rounded
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
                  Save
                </Text>
              </Button>
            ) : null}
          </Form>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  users: state.users
});
const mapDispatchToProps = { updateUser };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
