function parseDateString(str) {
  if (str) {
    var dateObject = new Date(str);
    return {
      year: dateObject.getFullYear(),
      month: dateObject.getMonth() + 1,
      date: dateObject.getDate()
    };
  } else {
    var _dateObject = new Date();

    return {
      year: _dateObject.getFullYear(),
      month: _dateObject.getMonth() + 1,
      date: _dateObject.getDate()
    };
  }
}

export default parseDateString;