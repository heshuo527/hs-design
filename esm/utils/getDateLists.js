function getDateLists(year, month) {
  // 获取当月天数即获取下月的第0天
  var currentMonthLength = new Date(year, month, 0).getDate();
  var dateList = Array.from({
    length: currentMonthLength
  }, function (val, index) {
    return index + 1;
  }); // 获取上一月天数

  var prevMonthLength = new Date(year, month - 1, 0).getDate(); // 获取当月第一天的星期，星期天则设置为7

  var startDay = new Date(year, month - 1, 1).getDay() || 7; // 当月第一天不为星期一则需要填补前缀

  var prefix = [];

  for (var i = 0; i < startDay - 1; i++) {
    prefix.unshift(prevMonthLength - i);
  } // 前缀和当前月不满42则需填后缀


  var distance = 42 - prefix.length - dateList.length;
  var suffix = [];

  for (var _i = 0; _i < distance; _i++) {
    suffix.push(_i + 1);
  }

  return {
    prefix: prefix,
    dateList: dateList,
    suffix: suffix
  };
}

export default getDateLists;