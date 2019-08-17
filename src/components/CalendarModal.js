import React from 'react';
import { View, Dimensions, Modal, Platform } from 'react-native';
import { Text, Header, Right, Button, Body, Left } from 'native-base';
import { CalendarList } from 'react-native-calendars';
const screenWidth = Math.round(Dimensions.get('window').width);
function CalendarModal(props) {
  // console.log(screenWidth, props.isCalenderVisible);
  const title = props.title;
  return (
    <Modal
      visible={props.isCalenderVisible}
      animationType={'slide'}
      transparent={false}
    >
      <Header style={{ backgroundColor: '#1f3954', borderBottomWidth: 0.2 }}>
        <Left />
        <Body>
          <Text
            style={{
              color: '#ffffff',
              fontFamily: 'Helvetica',
              fontSize: 19,
              fontWeight: 'bold'
            }}
          >
            {Platform.OS === 'ios' ? title : null}
          </Text>
        </Body>
        <Right>
          <Button transparent onPress={() => props.close(false)}>
            <Text
              style={{
                color: '#ffffff',
                fontFamily: 'Helvetica',
                fontSize: 17,
                fontWeight: 'bold'
              }}
            >
              Done{' '}
            </Text>
          </Button>
        </Right>
      </Header>
      <CalendarList
        // onVisibleMonthsChange={months => {
        //   // console.log('now these months are visible', months);
        // }}
        onDayPress={day => {
          props.selectDate(day, false);
        }}
        pastScrollRange={50}
        futureScrollRange={50}
        scrollEnabled={true}
        showScrollIndicator={true}
        calendarWidth={screenWidth}
        theme={{
          'stylesheet.calendar.header': {
            header: {
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20
            }
          },
          calendarBackground: '#1f3954',
          textSectionTitleColor: '#fff', // title of week
          todayTextColor: '#010',
          dayTextColor: '#fff',
          monthTextColor: '#fff', //  title of month
          textDayFontFamily: 'Helvetica',
          textMonthFontFamily: 'Helvetica',
          textDayHeaderFontFamily: 'Helvetica',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 18,
          textMonthFontSize: 18,
          textDayHeaderFontSize: 15,
          indicatorColor: '#fff'
        }}
      />
    </Modal>
  );
}

export default CalendarModal;
