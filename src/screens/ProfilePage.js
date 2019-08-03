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
  Thumbnail
} from 'native-base';
import HeaderComponent from '../components/DrawerHeaderComponent';
import ImagePicker from 'react-native-image-picker';
import HeightAndWeightPicker from '../components/HeightAndWeightPicker';
import { UserHeightData, UserWeightData } from '../commons/UserData';
export default class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avator: null,
      weight: '75kg',
      height: '175cm',
      firstName: '',
      lastName: '',
      username: ''
    };
    this.handleImagePicker = this.handleImagePicker.bind(this);
    this.handleHeightAndWeight = this.handleHeightAndWeight.bind(this);
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
        console.log(response.uri);
        this.setState({
          avator: source
        });
      }
    });
  }
  render() {
    return (
      <Container style={{ backgroundColor: '#1f3954' }}>
        <HeaderComponent titleName="Profile" {...this.props} />
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
                    source={this.state.avator}
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
            {this.state.username !== '' &&
            this.state.firstName !== '' &&
            this.state.lastName !== '' ? (
              <Button
                block
                rounded
                // bordered
                success
                style={{
                  marginTop: 30,
                  marginLeft: 10,
                  marginRight: 10
                  //  borderColor: '#fff'
                }}
              >
                <Text
                  style={{
                    // color: '#ffffff',
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
