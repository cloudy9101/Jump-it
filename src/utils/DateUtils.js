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
<<<<<<< HEAD
    d = new Date();
    d = moment(d);
    if (monthStart === monthEnd) {
      return start + '- ' + end + ' ' + weekArr[monthEnd] + ' ' + d.year();
    }

=======
    if (monthStart === monthEnd) {
      return start + '- ' + end + ' ' + weekArr[monthEnd] + ' ' + d.year();
    }
>>>>>>> 9cc202ac13d8276061f0b6fed77ddf5a4c5c70a4
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
    return weekArr[d.month()] + ' ' + d.year();
  }

  static showYear(d) {
    return d.year();
  }
}
