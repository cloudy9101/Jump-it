import moment from 'moment';
export default class DateUtils {
  static showWeek(d) {
    let weekArr = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];
    let start = d.startOf('week').date();
    let end = d.endOf('week').date();
    let monthStart = d.startOf('week').month();
    let monthEnd = d.endOf('week').month();
    if (monthStart === monthEnd) {
      return start + '- ' + end + ' ' + weekArr[monthEnd] + ' ' + d.year();
    }
    return (
      start +
      ' ' +
      weekArr[monthStart] +
      '- ' +
      end +
      ' ' +
      weekArr[monthEnd] +
      ' ' +
      d.year()
    );
  }
  static showMonth(d) {
    let weekArr = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];
    return weekArr[d.month()] + ' ' + new Date().getFullYear();
  }

  static showYear(d) {
    return d.year();
  }
}
