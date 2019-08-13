import React from 'react';
import { View, Dimensions, Modal, Platform } from 'react-native';
import { Icon } from 'native-base';
import { CalendarList } from 'react-native-calendars';
const screenWidth = Math.round(Dimensions.get('window').width);
function CalendarModal(props) {
  console.log(screenWidth, props.isCalenderVisible);
  return (
    <Modal
      visible={props.isCalenderVisible}
      animationType={'slide'}
      transparent={false}
      style={{ backgroundColor: '#000' }}
      // backdropOpacity={0.8}
      // animationInTiming={360}
    >
      {/* <Icon
        name="cross"
        type="Entypo"
        style={{
          color: '#ffffff',
          fontFamily: 'Helvetica',
          fontSize: 36
        }}
        //onPress={props.modalHandler}
      /> */}
      <CalendarList
        onVisibleMonthsChange={months => {
          console.log('now these months are visible', months);
        }}
        pastScrollRange={50}
        futureScrollRange={50}
        scrollEnabled={true}
        showScrollIndicator={true}
        calendarWidth={screenWidth}
        style={{
          marginTop: Platform.OS === 'ios' ? '13%' : '8%'
        }}
        theme={{
          backgroundColor: 'red',
          calendarBackground: '#1f3954',
          textSectionTitleColor: '#fff', // title of week
          selectedDayBackgroundColor: 'red',
          selectedDayTextColor: '#111',
          todayTextColor: '#fff',
          dayTextColor: '#fff',
          textDisabledColor: 'red',
          dotColor: 'red',
          selectedDotColor: 'red',
          arrowColor: 'orange',
          monthTextColor: '#fff', //  title of month
          indicatorColor: '#111',
          textDayFontFamily: 'Helvetica',
          textMonthFontFamily: 'Helvetica',
          textDayHeaderFontFamily: 'Helvetica',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 18,
          textMonthFontSize: 18,
          textDayHeaderFontSize: 15
        }}
      />
    </Modal>
  );
}

export default CalendarModal;
