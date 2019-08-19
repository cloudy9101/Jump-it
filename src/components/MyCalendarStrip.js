import React, { Component, PureComponent } from 'react';

import {
  View,
  Text,
  FlatList,
  Platform,
  Dimensions,
  StyleSheet,
  PanResponder,
  TouchableOpacity
} from 'react-native';
import Weeks from './Weeks';
import { Icon } from 'native-base';
import {
  format,
  addDays,
  subDays,
  eachDay,
  isFuture,
  isSameDay,
  endOfWeek,
  getISOWeek,
  startOfWeek,
  differenceInDays
} from 'date-fns';

const width = Dimensions.get('window').width;
const ITEM_LENGTH = width / 7;
const _today = new Date();
const _year = _today.getFullYear();
const _month = _today.getMonth();
const _day = _today.getDate();
const TODAY = new Date(_year, _month, _day); // FORMAT: Wed May 16 2018 00:00:00 GMT+0800 (CST)

class DateItem extends PureComponent {
  render() {
    const { showLunar } = this.props;
    const { item, highlight, onItemPress } = this.props;
    const solar = format(item, 'D');

    const highlightBgColor = '#b38b27';
    const normalBgColor = '#1f3954';
    const hightlightTextColor = '#ffffff';
    const normalTextColor = '#ffffff';
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          underlayColor="#008b8b"
          style={styles.itemWrapButton}
          onPress={onItemPress}
        >
          <View
            style={[
              styles.itemView,
              { paddingTop: 10 },
              { backgroundColor: highlight ? highlightBgColor : normalBgColor }
            ]}
          >
            <Text
              style={[
                styles.itemDateText,
                { color: highlight ? hightlightTextColor : normalTextColor }
              ]}
            >
              {solar}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

class MyCalendarStrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: this.getInitialDates(),
      isTodayVisible: true,
      pageOfToday: 2, // page of today in calendar, start from 0
      currentPage: 2 // current page in calendar,  start from 0
    };
  }

  componentWillMount() {
    const touchThreshold = 50;
    const speedThreshold = 0.2;
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        const { dy, vy } = gestureState;
        if (dy > touchThreshold && vy > speedThreshold) {
          const { onSwipeDown } = this.props;
          onSwipeDown && onSwipeDown();
        }
        return false;
      },
      onPanResponderRelease: () => {}
    });
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.scrollToPage(2);
  //   }, 100);
  // }

  componentWillReceiveProps(nextProps) {
    if (isSameDay(nextProps.selectedDate, this.props.selectedDate)) return;
    const nextSelectedDate = nextProps.selectedDate;
    if (!this.currentPageDatesIncludes(nextSelectedDate)) {
      const sameDay = d => isSameDay(d, nextSelectedDate);
      if (this.state.datas.find(sameDay)) {
        let selectedIndex = this.state.datas.findIndex(sameDay);
        if (selectedIndex === -1) selectedIndex = this.state.pageOfToday; // in case not find
        const selectedPage = ~~(selectedIndex / 7);
        this.scrollToPage(selectedPage);
      } else {
        // not born, then spawn these dates, then scroll to it.
        // past: born [startOfThatWeek, last]
        // future: born [first, endOfThatWeek]
        // momentumEnd() handle pageOfToday and currentPage
        if (isFuture(nextSelectedDate)) {
          const head = this.state.datas[0];
          const tail = endOfWeek(nextSelectedDate);
          const days = eachDay(head, tail);
          this.setState(
            {
              datas: days,
              isTodayVisible: false
            },
            () => {
              const page = ~~(days.length / 7 - 1);

              this.scrollToPage(page);
            }
          );
        } else {
          const head = startOfWeek(nextSelectedDate);
          const tail = this.state.datas[this.state.datas.length - 1];
          const days = eachDay(head, tail);
          this.setState(
            {
              datas: days,
              isTodayVisible: false
            },
            () => {
              // to first page
              this.scrollToPage(0);
            }
          );
        }
      }
    }
  }

  scrollToPage = (page, animated = true) => {
    this._calendar.scrollToIndex({ animated, index: 7 * page });
  };

  currentPageDatesIncludes = date => {
    const { currentPage } = this.state;
    const currentPageDates = this.state.datas.slice(
      7 * currentPage,
      7 * (currentPage + 1)
    );

    return !!currentPageDates.find(d => isSameDay(d, date));
  };

  getInitialDates() {
    const last2WeekOfToday = subDays(TODAY, 7 * 2);
    const next2WeekOfToday = addDays(TODAY, 7 * 2);
    const startLast2Week = startOfWeek(last2WeekOfToday);
    const endNext2Week = endOfWeek(next2WeekOfToday);
    const eachDays = eachDay(startLast2Week, endNext2Week);
    return eachDays;
  }

  loadNextTwoWeek(originalDates) {
    const originalFirstDate = originalDates[0];
    const originalLastDate = originalDates[originalDates.length - 1];
    const lastDayOfNext2Week = addDays(originalLastDate, 7 * 2);
    const eachDays = eachDay(originalFirstDate, lastDayOfNext2Week);
    this.setState({ datas: eachDays });
  }

  loadPreviousTwoWeek(originalDates) {
    const originalFirstDate = originalDates[0];
    const originalLastDate = originalDates[originalDates.length - 1];
    const firstDayOfPrevious2Week = subDays(originalFirstDate, 7 * 2);
    const eachDays = eachDay(firstDayOfPrevious2Week, originalLastDate);
    this.setState(
      prevState => ({
        datas: eachDays,
        currentPage: prevState.currentPage + 2,
        pageOfToday: prevState.pageOfToday + 2
      }),
      () => {
        this.scrollToPage(2, false);
      }
    );
  }

  _renderHeader = () => {
    const {
      selectedDate,
      onPressGoToday,

      showWeekNumber
    } = this.props;

    const dateFormatted = format(selectedDate, 'MMMM YYYY');
    const weekNumber = getISOWeek(selectedDate);
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => this.props.openModal(true)}>
          <Text style={styles.headerDate}>{dateFormatted}</Text>
        </TouchableOpacity>
        {showWeekNumber && (
          <Text style={styles.headerDateWeek}>{` W${weekNumber}`}</Text>
        )}
        {!this.state.isTodayVisible && (
          <TouchableOpacity
            style={styles.headerGoTodayButton}
            onPress={() => {
              const page = this.state.pageOfToday;
              onPressGoToday && onPressGoToday(TODAY);
              this.scrollToPage(page);
            }}
          >
            <Icon name="refresh" type="EvilIcons" style={styles.todayText} />
          </TouchableOpacity>
        )}
      </View>
    );
  };

  _stringToDate = dateString => {
    const dateArr = dateString.split('-');
    const [y, m, d] = dateArr.map(ds => parseInt(ds, 10));

    return new Date(y, m - 1, d);
  };

  render() {
    const { onPressDate, selectedDate } = this.props;

    return (
      <View style={styles.container} {...this._panResponder.panHandlers}>
        {this._renderHeader()}
        <Weeks />
        <FlatList
          ref={ref => (this._calendar = ref)}
          bounces={false}
          horizontal
          pagingEnabled
          initialScrollIndex={14}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={this.momentumEnd}
          scrollEventThrottle={500}
          getItemLayout={(data, index) => ({
            length: ITEM_LENGTH,
            offset: ITEM_LENGTH * index,
            index
          })}
          onEndReached={() => {
            this.onEndReached();
          }}
          onEndReachedThreshold={0.01}
          data={this.state.datas}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <DateItem
              item={item}
              onItemPress={() => onPressDate && onPressDate(item)}
              highlight={isSameDay(selectedDate, item)}
            />
          )}
        />
      </View>
    );
  }

  momentumEnd = event => {
    const firstDayInCalendar = this.state.datas
      ? this.state.datas[0]
      : new Date();
    const daysBeforeToday = differenceInDays(firstDayInCalendar, new Date());
    const pageOfToday = ~~Math.abs(daysBeforeToday / 7);
    const screenWidth = event.nativeEvent.layoutMeasurement.width;
    const currentPage = event.nativeEvent.contentOffset.x / screenWidth;
    this.setState({
      pageOfToday,
      currentPage,
      isTodayVisible: currentPage === pageOfToday
    });

    // swipe to head ~ load 2 weeks
    if (event.nativeEvent.contentOffset.x < width) {
      this.loadPreviousTwoWeek(this.state.datas);
    }
  };

  onEndReached() {
    this.loadNextTwoWeek(this.state.datas);
  }
}

const styles = StyleSheet.create({
  container: {
    width,
    height: 110,
    backgroundColor: '#315574'
    // borderBottomWidth: 1,

    // borderBottomColor: 'rgb(238, 238, 238)'
  },
  header: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerDate: {
    color: '#ffffff',
    fontFamily: 'Helvetica',
    fontSize: 18,
    fontWeight: 'bold'
  },
  headerDateWeek: {
    color: '#fff',
    fontFamily: 'Helvetica',
    fontSize: 18
  },
  headerGoTodayButton: {
    borderRadius: 10,
    width: 25,
    height: 20,

    position: 'absolute',
    top: 5,
    right: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  todayText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold'
  },
  itemContainer: {
    width: width / 7,
    height: 55
  },
  itemWrapButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemView: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 44,
    height: 44,
    borderRadius: 22
  },
  itemDateText: {
    lineHeight: 22,
    fontFamily: 'Helvetica',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default MyCalendarStrip;
