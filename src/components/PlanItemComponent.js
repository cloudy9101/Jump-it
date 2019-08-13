import React from 'react';
import { Image, ImageBackground } from 'react-native';
import { View, ListItem, Text, Icon, Card, CardItem, Thumbnail, Left, Body, Right, Button } from 'native-base';

const PlanItemComponent = props => {
  return(
    <View style={{ borderTopWidth: 1, borderTopColor: '#ffffff' }}>
      <ImageBackground
        source={{uri: props.backgroundImg || 'http://ww1.sinaimg.cn/large/006tNc79ly1g5xrrk78gnj31900u04qs.jpg'}}
        style={{ width: '100%', height: 150 }}
      >
        <View style={{backgroundColor: 'rgba(0, 0, 0, 0.3)', flex: 2, flexDirection: 'column', justifyContent: "flex-end", alignItems: "flex-start"}}>
          <Text
            style={{
              color: '#ffffff',
              fontFamily: 'Times New Roman',
              fontSize: 24,
              fontWeight: 'bold',
              marginLeft: 10,
              marginBottom: 5
            }}
          >
            {props.name}
          </Text>
          <Text
            style={{
              color: '#ffffff',
              fontFamily: 'Times New Roman',
              fontSize: 18,
              fontWeight: 'bold',
              marginLeft: 10,
              marginBottom: 10
            }}
          >
            {props.value}
          </Text>
        </View>
      </ImageBackground>
    </View>
  )
};

export default PlanItemComponent;
