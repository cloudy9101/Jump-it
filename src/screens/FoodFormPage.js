import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import { Container, Content, View, Thumbnail, Text, Icon, Button, Form, Input, Label, Item } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

import { addFood, updateFoodValue, updateFood, deleteFood, fetchFoods } from '../redux/actions';
import ImagePicker from 'react-native-image-picker';
// import FSUtil from '../utils/FirebaseStorageUtil';
import firebase from 'react-native-firebase';

let foodImgs = [];
foodImgs[0] = require('../../assets/foods/food0.jpg');
foodImgs[1] = require('../../assets/foods/food1.jpg');
foodImgs[2] = require('../../assets/foods/food2.jpg');
foodImgs[3] = require('../../assets/foods/food3.jpg');
foodImgs[4] = require('../../assets/foods/food4.jpg');
foodImgs[5] = require('../../assets/foods/food5.jpg');
foodImgs[6] = require('../../assets/foods/food6.jpg');
foodImgs[7] = require('../../assets/foods/food7.jpg');
foodImgs[8] = require('../../assets/foods/food8.jpg');
foodImgs[9] = require('../../assets/foods/food9.jpg');
foodImgs[10] = require('../../assets/foods/food10.jpg');

const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

class FoodFormPage extends Component {
  constructor(props) {
    super(props);
    const item = this.props.navigation.getParam('item', null);

    this.state = { imgRes: null, imgUri: null, imgIndex: 0, name: "", value: 0 }
    if(item) {
      this.state = { item: item,
                     imgUri: item.imgUri ? item.imgUri : null,
                     imgIndex: item.imgIndex || 0,
                     name: item.name,
                     value: item.value }
    }
    this.addFood = this.addFood.bind(this);
    this.updateFood = this.updateFood.bind(this);
    this.deleteFood = this.deleteFood.bind(this);
    this.openImagePicker = this.openImagePicker.bind(this);
  }

  addFood() {
    AsyncStorage.getItem('token').then(token => {
      this.props.addFood(token, this.state.name, this.state.value, { imgRes: this.state.imgRes, imgUri: this.state.imgUri, imgIndex: this.state.imgIndex });
      this.props.navigation.goBack();
    });
  }

  updateFood() {
    AsyncStorage.getItem('token').then(token => {
      this.props.updateFood(token, this.state.item._id, this.state.name, this.state.value, { imgRes: this.state.imgRes, imgUri: this.state.imgUri, imgIndex: this.state.imgIndex });
      this.props.navigation.goBack();
    });
  }

  deleteFood() {
    AsyncStorage.getItem('token').then(token => {
      this.props.deleteFood(token, this.state.item._id);
      this.props.navigation.goBack();
    });
  }

  openImagePicker() {
    ImagePicker.showImagePicker(options, (response) => {

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        delete response.data;
        this.setState({imgRes: response})
      }
    });
  }

  render() {
    const { navigation } = this.props;
    const left = <Button transparent onPress={() => navigation.goBack()}><Icon name="md-arrow-back" /></Button>;
    const imgIndex = this.state.imgIndex || 0;
    let imgSource = foodImgs[imgIndex];
    imgSource = this.state.imgUri != null ? { uri: this.state.imgUri } : imgSource;
    imgSource = this.state.imgRes != null ? { uri: this.state.imgRes.uri } : imgSource;
    return (
      <Container style={styles.container}>
        <HeaderComponent left={left} title={navigation.state.routeName} {...this.props} />
        <Content style={styles.content}>
          <View style={styles.body}>
            <Image
              style={styles.selectedImg}
              source={imgSource}
            />
            <View style={styles.imgList}>
              {foodImgs.map((item, key) => {
                return <Button key={key} transparent style={styles.imgItem} onPress={() => {
                  this.setState({
                    imgIndex: key,
                    imgUri: null,
                    imgRes: null
                  })
                }}>
                         <Thumbnail style={styles.imgThumb} square source={item} />
                       </Button>
              })}
              <Button transparent style={styles.cameraBtn} onPress={this.openImagePicker}>
                <Icon name="md-camera" key={foodImgs.length} style={styles.cameraIcon} />
              </Button>
            </View>
            <Form style={styles.form}>
              <Item fixedLabel>
                <Label style={{ color: '#ffffff' }}>Food Item</Label>
                <Input onChangeText={(text) => this.setState({name: text})} value={this.state.name} />
              </Item>
              <Item fixedLabel>
                <Label style={{ color: '#ffffff' }}>Stock</Label>
                <Input onChangeText={(text) => this.setState({value: parseInt(text, 0) || 0})}
                  value={"" + this.state.value}
                  keyboardType={'numeric'}
                />
              </Item>
              <Button block success onPress={this.state.item ? this.updateFood : this.addFood} style={styles.submitBtn}>
                <Text>Submit</Text>
              </Button>
              <Button bordered small danger onPress={this.deleteFood} style={styles.submitBtn}>
                <Text>Delete</Text>
              </Button>
            </Form>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = {
  container: { backgroundColor: '#1f3954' },
  body: {
    alignItems: 'center'
  },
  selectedImg: {
    marginTop: 10,
    width: 240,
    height: 240
  },
  imgList: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  imgItem: {
    marginRight: 5,
    marginBottom: 15,
  },
  cameraBtn: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraIcon: {
    flex: 1,
    color: '#ffffff',
  },
  form: {
    width: "80%",
    alignItems: 'center',
  },
  submitBtn: {
    marginTop: 20,
    alignSelf: 'center',
    width: "40%",
    justifyContent: 'center',
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = { addFood, updateFoodValue, updateFood, deleteFood, fetchFoods };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodFormPage);
