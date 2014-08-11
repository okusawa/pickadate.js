Pickadate = {};
Pickadate.Utility = {};

Pickadate.Utility.getDayOfTheWeekColor = function(day, settings) {
  var color = "";

  if (day === 6) {
    color = settings.jpSaturdayTitle;
  } else if (day === 0) {
    color = settings.jpSundayTitle;
  }

  var ret;
  if (settings.useJpHoliday && color) {
    ret = ' style="color: ' + color + '"';
  }

  return ret;
};

Pickadate.Utility.getDayColor = function(targetDate, isInFocus, settings) {
  // create check date string
  var _month = (targetDate.month+1);
  if (_month < 10) _month = '0' + _month;
  var _date = targetDate.date;
  if (_date < 10) _date = '0' + _date;
  var date_str = targetDate.year + '-' + _month + '-' + _date;

  var color = "";
  if (Pickadate.Utility._isJpHoliday(date_str)) {
    color = settings.jpHoliday;
  } else {
    if (targetDate.day === 6) {
      color = settings.jpSaturday;
    } else if (targetDate.day === 0) {
      color = settings.jpSunday;
    }
  }

  var ret = '';
  if (settings.useJpHoliday && isInFocus) {
    ret = ' style="color: ' + color + '"';
  }
  return ret;
};

Pickadate.Utility._isJpHoliday = function(str) {
  return Pickadate.Utility._getJpHolidayData(str) !== null;
};

// Pickadate.Utility.getJpHolidayName = function(str) {
//   var ret = "";
//   var data = Pickadate.Utility._getJpHolidayData(str);
//   if (data) ret = data.description;
//   return ret;
// };

Pickadate.Utility._getJpHolidayData = function(str) {

  var _tbl_2014 = [
    { date: '2014-01-01', description: '元日' },
    { date: '2014-01-13', description: '成人の日' },
    { date: '2014-02-11', description: '建国記念の日' },
    { date: '2014-03-21', description: '春分の日' },
    { date: '2014-04-29', description: '昭和の日' },
    { date: '2014-05-03', description: '憲法記念日' },
    { date: '2014-05-04', description: 'みどりの日' },
    { date: '2014-05-05', description: 'こどもの日' },
    { date: '2014-05-06', description: '振替休日' },
    { date: '2014-07-21', description: '海の日' },
    { date: '2014-09-15', description: '敬老の日' },
    { date: '2014-09-23', description: '秋分の日' },
    { date: '2014-10-13', description: '体育の日' },
    { date: '2014-11-03', description: '文化の日' },
    { date: '2014-11-23', description: '勤労感謝の日' },
    { date: '2014-11-24', description: '振替休日' },
    { date: '2014-12-23', description: '天皇誕生日' }
  ];

  var _tbl_2015 = [
    { date: '2015-01-01', description: '元日' },
    { date: '2015-01-12', description: '成人の日' },
    { date: '2015-02-11', description: '建国記念の日' },
    { date: '2015-03-21', description: '春分の日' },
    { date: '2015-04-29', description: '昭和の日' },
    { date: '2015-05-03', description: '憲法記念日' },
    { date: '2015-05-04', description: 'みどりの日' },
    { date: '2015-05-05', description: 'こどもの日' },
    { date: '2015-05-06', description: '振替休日' },
    { date: '2015-07-20', description: '海の日' },
    { date: '2015-09-21', description: '敬老の日' },
    { date: '2015-09-22', description: '国民の休日' },
    { date: '2015-09-23', description: '秋分の日' },
    { date: '2015-10-12', description: '体育の日' },
    { date: '2015-11-03', description: '文化の日' },
    { date: '2015-11-23', description: '勤労感謝の日' },
    { date: '2015-12-23', description: '天皇誕生日' }
  ];

  var _tbl_2016 = [
    { date: '2016-01-01', description: '元日' },
    { date: '2016-01-11', description: '成人の日' },
    { date: '2016-02-11', description: '建国記念の日' },
    { date: '2016-03-20', description: '春分の日' },
    { date: '2016-03-21', description: '振替休日' },
    { date: '2016-04-29', description: '昭和の日' },
    { date: '2016-05-03', description: '憲法記念日' },
    { date: '2016-05-04', description: 'みどりの日' },
    { date: '2016-05-05', description: 'こどもの日' },
    { date: '2016-07-18', description: '海の日' },
    { date: '2016-08-11', description: '山の日' },
    { date: '2016-09-19', description: '敬老の日' },
    { date: '2016-09-22', description: '秋分の日' },
    { date: '2016-10-10', description: '体育の日' },
    { date: '2016-11-03', description: '文化の日' },
    { date: '2016-11-23', description: '勤労感謝の日' },
    { date: '2016-12-23', description: '天皇誕生日' }
  ];

  var _tbl_2017 = [
    { date: '2017-01-01', description: '元日' },
    { date: '2017-01-02', description: '振替休日' },
    { date: '2017-01-09', description: '成人の日' },
    { date: '2017-02-11', description: '建国記念の日' },
    { date: '2017-03-20', description: '春分の日' },
    { date: '2017-04-29', description: '昭和の日' },
    { date: '2017-05-03', description: '憲法記念日' },
    { date: '2017-05-04', description: 'みどりの日' },
    { date: '2017-05-05', description: 'こどもの日' },
    { date: '2017-07-17', description: '海の日' },
    { date: '2017-08-11', description: '山の日' },
    { date: '2017-09-18', description: '敬老の日' },
    { date: '2017-09-23', description: '秋分の日' },
    { date: '2017-10-09', description: '体育の日' },
    { date: '2017-11-03', description: '文化の日' },
    { date: '2017-11-23', description: '勤労感謝の日' },
    { date: '2017-12-23', description: '天皇誕生日' }
  ];

  var _tbl_2018 = [
    { date: '2018-01-01', description: '元日' },
    { date: '2018-01-08', description: '成人の日' },
    { date: '2018-02-11', description: '建国記念の日' },
    { date: '2018-02-12', description: '振替休日' },
    { date: '2018-03-21', description: '春分の日' },
    { date: '2018-04-29', description: '昭和の日' },
    { date: '2018-04-30', description: '振替休日' },
    { date: '2018-05-03', description: '憲法記念日' },
    { date: '2018-05-04', description: 'みどりの日' },
    { date: '2018-05-05', description: 'こどもの日' },
    { date: '2018-07-16', description: '海の日' },
    { date: '2018-08-11', description: '山の日' },
    { date: '2018-09-17', description: '敬老の日' },
    { date: '2018-09-23', description: '秋分の日' },
    { date: '2018-09-24', description: '振替休日' },
    { date: '2018-10-08', description: '体育の日' },
    { date: '2018-11-03', description: '文化の日' },
    { date: '2018-11-23', description: '勤労感謝の日' },
    { date: '2018-12-23', description: '天皇誕生日' },
    { date: '2018-12-24', description: '振替休日' }
  ];

  var _tbl_2019 = [
    { date: '2019-01-01', description: '元日' },
    { date: '2019-01-14', description: '成人の日' },
    { date: '2019-02-11', description: '建国記念の日' },
    { date: '2019-03-21', description: '春分の日' },
    { date: '2019-04-29', description: '昭和の日' },
    { date: '2019-05-03', description: '憲法記念日' },
    { date: '2019-05-04', description: 'みどりの日' },
    { date: '2019-05-05', description: 'こどもの日' },
    { date: '2019-05-06', description: '振替休日' },
    { date: '2019-07-15', description: '海の日' },
    { date: '2019-08-11', description: '山の日' },
    { date: '2019-08-12', description: '振替休日' },
    { date: '2019-09-16', description: '敬老の日' },
    { date: '2019-09-23', description: '秋分の日' },
    { date: '2019-10-14', description: '体育の日' },
    { date: '2019-11-03', description: '文化の日' },
    { date: '2019-11-04', description: '振替休日' },
    { date: '2019-11-23', description: '勤労感謝の日' },
    { date: '2019-12-23', description: '天皇誕生日' }
  ];

  var _tbl_2020 = [
    { date: '2020-01-01', description: '元日' },
    { date: '2020-01-13', description: '成人の日' },
    { date: '2020-02-11', description: '建国記念の日' },
    { date: '2020-03-20', description: '春分の日' },
    { date: '2020-04-29', description: '昭和の日' },
    { date: '2020-05-03', description: '憲法記念日' },
    { date: '2020-05-04', description: 'みどりの日' },
    { date: '2020-05-05', description: 'こどもの日' },
    { date: '2020-05-06', description: '振替休日' },
    { date: '2020-07-20', description: '海の日' },
    { date: '2020-08-11', description: '山の日' },
    { date: '2020-09-21', description: '敬老の日' },
    { date: '2020-09-22', description: '秋分の日' },
    { date: '2020-10-12', description: '体育の日' },
    { date: '2020-11-03', description: '文化の日' },
    { date: '2020-11-23', description: '勤労感謝の日' },
    { date: '2020-12-23', description: '天皇誕生日' }
  ];

  var year = str.split('-')[0];
  var ret = null;
  if (year >= 2014 && year <= 2020) {
    var tbl = eval('_tbl_' + year);
    if (tbl) {
      for (var i = 0; i < tbl.length; i++) {
        if (str == tbl[i].date) {
          ret = tbl[i];
          break;
        }
      }
    }
//     _.each(eval('_tbl_' + year), function(obj) {
//       if (str == obj.date) {
//         ret = obj;
//         return;
//       }
//     });
  }

  return ret;
};
