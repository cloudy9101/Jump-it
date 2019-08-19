export default class ValidationUtil {
  static isEmpty(str) {
    return str === null || str === '' || str === undefined;
  }
  static isEmail(email) {
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return email.match(pattern);
  }
  static validPassword(str) {
    if (str.length < 8) return true;
  }

  static passwordMatch(p1, p2) {
    return p1 === p2;
  }
}
