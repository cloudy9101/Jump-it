import React from 'react';
import Modal from 'react-native-modal';
import { View } from 'react-native';

import { Content, Icon, Text } from 'native-base';
function PolicyModal(props) {
  return (
    <Modal
      isVisible={props.isVisible}
      backdropOpacity={0.8}
      animationInTiming={360}
    >
      <Content>
        <View style={{ marginTop: '15%' }}>
          <View style={{ alignItems: 'flex-end' }}>
            <Icon
              name="cross"
              type="Entypo"
              style={{
                color: '#ffffff',
                fontFamily: 'Helvetica',
                fontSize: 36
              }}
              onPress={props.modalHandler}
            />
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text
              style={{
                color: '#ffffff',
                fontFamily: 'Helvetica',
                fontSize: 26,
                fontWeight: 'bold'
              }}
            >
              Policy of This app
            </Text>
          </View>
          <View style={{ marginTop: '8%' }}>
            <Text
              style={{
                color: '#ffffff',
                fontFamily: 'Helvetica',
                fontSize: 19
              }}
            >
              {'\t'}I am the modal content!
            </Text>
          </View>
        </View>
      </Content>
    </Modal>
  );
}

export default PolicyModal;
