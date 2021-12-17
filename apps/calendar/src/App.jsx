/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect, useRef } from 'zarkit/react';
import months from './months';
import '@webcomponents/webcomponentsjs';
import '@material/mwc-button';
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';
import './style.scss';
import './toJalaliCorrectFormat';

const App = function App() {
  let date = new Date();
  const m = new Intl.DateTimeFormat('fa-IR', { month: 'numeric' }).format(date);
  // get jalali months (not gregorian months) as thisMonth:
  const thisMonth = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۱۰', '۱۱', '۱۲'].indexOf(m);
  //
  const monthRef = useRef();
  const [time, setTime] = useState();
  const [jalaliDay, setJalaliDay] = useState();
  const [hijriDay, setHijriDay] = useState();
  const [gregorianDay, setGregorianDay] = useState();
  const [dayStyle, setDayStyle] = useState();
  const [today, setToday] = useState(date.getDate());
  const [monthNumber, setMonthNumber] = useState(thisMonth);
  const [toggle, setToggle] = useState();
  //
  function dateTime() {
    date = new Date();
    const timeOptions = {
      hourCycle: 'h23', hour: '2-digit', minute: '2-digit', second: '2-digit',
    };
    const dateOptions = {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
    };
    // set time in Persian:
    setTime(date.toLocaleTimeString('fa-IR', timeOptions));
    // set jalali full date:
    setJalaliDay(date.toJalaliCorrectFormat());
    // set hijri full date:
    setHijriDay(date.toLocaleDateString('ar-SA', dateOptions));
    // set gregorian full date:
    setGregorianDay(date.toLocaleDateString('en-US', dateOptions));
    // set today:
    setToday(date.getDate());
  }

  useEffect(() => {
    monthRef.current.onchange = (e) => setMonthNumber(parseInt(e.target.value, 10));
    dateTime();
    setInterval(dateTime, 1000);
  }, []);
  // set a table to put days of calendar in it:
  function monthTable() {
    return (
      new Array(months[monthNumber].jalali.length / 7).fill('').map((_, j) => (
        <tr key={`row${j}`}>
          {months[monthNumber].jalali.slice(j * 7, j * 7 + 7).map((__, i) => {
            let tdClass = '';
            if (
              (j === 0 && months[monthNumber].jalali[j * 7 + i] > 20)
              || ((j === 4 || j === 5) && months[monthNumber].jalali[j * 7 + i] < 10)
            ) {
              tdClass += ' other-month';
            }
            tdClass += tdClass !== ' other-month' && monthNumber === thisMonth && months[monthNumber].gregorian[j * 7 + i] === today ? ' today' : '';
            tdClass += tdClass !== ' other-month' && months[monthNumber].holidays.includes(months[monthNumber].jalali[j * 7 + i]) ? ' holiday' : '';
            return (
              <td className={tdClass} key={`col${j * 7}${i}`}>
                <div className="jalali">{months[monthNumber].jalali[j * 7 + i].toLocaleString('fa-IR')}</div>
                <div className="foreign-calendar">
                  <div className="hijri">{months[monthNumber].hijri[j * 7 + i].toLocaleString('ar-SA')}</div>
                  <div className="gregorian">{months[monthNumber].gregorian[j * 7 + i]}</div>
                </div>
              </td>
            );
          })}
        </tr>
      ))
    );
  }
  // set a menu and a list of months to select month:
  function monthSelect() {
    let monthList = [];
    for (let i = 0; i < months.length; i += 1) {
      let selected;
      if (i === monthNumber) selected = 'true';
      monthList = monthList.concat(
        <mwc-list-item
          key={i}
          value={i}
          selected={selected}
        >
          {months[i].monthJalali}
        </mwc-list-item>,
      );
    }
    return monthList;
  }

  function nextMonth() {
    if (monthNumber < 11) setMonthNumber(monthNumber + 1);
  }
  function perviousMonth() {
    if (monthNumber > 0) setMonthNumber(monthNumber - 1);
  }
  function goToToday() {
    setMonthNumber(thisMonth);
    setDayStyle('blink');
    setTimeout(() => setDayStyle(''), 500);
  }
  function occasionsToggle() {
    setToggle(toggle !== 'active' ? 'active' : '');
  }

  return (
    <div id="main-calendar-app">
      <div id="day-time">
        <div id="time"><h2>{time}</h2></div>
        <div id="jalali-day" className={dayStyle}><h2>{jalaliDay}</h2></div>
        <div id="hijri-day">{hijriDay}</div>
        <div id="gregorian-day">{gregorianDay}</div>
      </div>
      <div>
        <div id="main-calendar">
          <div id="month">
            <mwc-button id="pervious-month" onClick={perviousMonth}>ماه قبل</mwc-button>
            <mwc-button id="next-month" onClick={nextMonth}>ماه بعد</mwc-button>
            <mwc-select ref={monthRef}>{monthSelect()}</mwc-select>
            <h4 id="month-hijri">{months[monthNumber].monthHijri}</h4>
            <h4 id="month-gregorian">{months[monthNumber].monthGregorian}</h4>
          </div>
          <table>
            <thead>
              <tr>
                <td>شنبه</td>
                <td>یکشنبه</td>
                <td>دوشنبه</td>
                <td>سه‌شنبه</td>
                <td>چهارشنبه</td>
                <td>پنج‌شنبه</td>
                <td>جمعه</td>
              </tr>
            </thead>
            <tbody>
              {monthTable()}
            </tbody>
          </table>
          <mwc-button id="go-to-today" onClick={goToToday}>برو به امروز</mwc-button>
        </div>
        <div id="main-occasion">
          <div id="occasion" className={toggle}>
            <mwc-button
              onClick={occasionsToggle}
            >
              مناسبت‌های این ماه
            </mwc-button>
          </div>
          <div id="occasions" dangerouslySetInnerHTML={{ __html: months[monthNumber].occasions }} className={toggle} />
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};

export default App;
