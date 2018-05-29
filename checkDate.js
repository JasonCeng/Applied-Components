// 函数名：checkDate_1
// 功能介绍：检查是否为日期时间
function checkDate_1 (str) {
  var reg = /^(\d+)-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
  var r = str.match(reg); // w3school match():http://www.w3school.com.cn/jsref/jsref_match.asp
  if (r == null) {
    return false;
  }
  var d = new Date(r[1], r[2], r[3], r[4], r[5], r[6]);
  var year = d.getFullYear();
  var month = d.getMonth() + 1;
  var date = d.getDate();
  var hour = d.getHours();
  var minute = d.getMinutes();
  var second = d.getSeconds();
  if (year != r[1]) {
    return false;
  }
  if (month != r[2]) {
    return false;
  }
  if (date != r[3]) {
    return false;
  }
  if (hour != r[4]) {
    return false;
  }
  if (minute != r[5]) {
    return false;
  }
  if (second != r[6]) {
    return false;
  }
  return true;
}

// 函数名：checkDate_2
// 功能介绍：检查日期格式是否为yyyy-mm-dd
function checkDate_2 (mystring) {
  var reg = /^(\d{4})-(\d{2})-(\d{2})$/;
  var str = mystring;
  var arr = reg.exec(str);  // w3School exec():http://www.w3school.com.cn/jsref/jsref_exec_regexp.asp
  if (str == "") {
    return true;
  }
  if (!(reg.test(str) && RegExp.$2 <= 12 && RegExp.$3 <= 31)) { // w3School test():http://www.w3school.com.cn/jsref/jsref_test_regexp.asp
    alert("请保证"+sm+"中输入的日期格式为yyyy-mm-dd或正确的日期!");
    return false;
  }
  return true;
}

// 函数名：checkDate_3
// 功能介绍：检查日期格式是否为YYYYMMDD
function checkDate_3 (strDate) {
  if (strDate.length != 8) {
    return null;
  }
  var dtDate = null;
  var nYear = parseInt(strDate.substring(0, 4), 10);
  var nMonth = parseInt(strDate.substring(4, 6), 10);
  var nDay = parseInt(strDate.substring(6, 8), 10);
  if (isNaN(nYear) == true || isNaN(nMonth) == true || isNaN(nDay) == true) {
    return null;
  }
  dtDate = new Date(nYear, nMonth-1, nDay);
  if (nYear != dtDate.getFullYear() || (nMonth-1) != dtDate.getMonth() || nDay != dtDate.getDate()) {
    return null;
  }
  return dtDate;
}