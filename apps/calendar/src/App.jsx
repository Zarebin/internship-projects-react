import React, { useState, useEffect } from 'zarkit/react';
import months from './months';
import '@webcomponents/webcomponentsjs';
import '@material/mwc-button';
import './style.scss';

function App() {
   let date = new Date();
   let m = new Intl.DateTimeFormat('fa-IR', { month: 'numeric' }).format(date);
   let thisMonth = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۱۰', '۱۱', '۱۲'].indexOf(m);

   const [time, setTime] = useState();
   const [day, setDay] = useState();
   const [today, setToday] = useState(date.getDate());
   const [dayStyle, setDayStyle] = useState();
   const [monthNumber, setMonthNumber] = useState(thisMonth);
   const [toggle, setToggle] = useState();
   const [showHide, setShowHide] = useState();

   // ________________________________________________dateTime

   useEffect(() => {
      dateTime();
      setInterval(dateTime, 1000);
   }, [])

   function dateTime() {
      date = new Date();
      const timeOptions = { hourCycle: 'h23', hour: '2-digit', minute: '2-digit', second: '2-digit' };
      setTime(date.toLocaleTimeString('fa-IR', timeOptions));

      const shownDay = date.toLocaleDateString('fa-IR', { weekday: 'long' });
      const shownDayNumber = date.toLocaleDateString('fa-IR', { day: 'numeric' });
      const shownMonth = date.toLocaleDateString('fa-IR', { month: 'long' });
      const shownYear = date.toLocaleDateString('fa-IR', { year: 'numeric' });
      setDay(`${shownDay} ${shownDayNumber} ${shownMonth} ${shownYear}`);

      setToday(date.getDate());
   }

   // ________________________________________________table

   function monthTable() {
      return (
         new Array(months[monthNumber].jalali.length / 7).fill('').map((_, j) => {
            return (
               <tr key={'row' + j}>{months[monthNumber].jalali.slice(j * 7, j * 7 + 7).map((_, i) => {
                  let tdClass = '';
                  if ((j == 0 && months[monthNumber].jalali[j * 7 + i] > 20) || (j == 4 && months[monthNumber].jalali[j * 7 + i] < 10)) {
                     tdClass += ' other-month';
                  }
                  tdClass += tdClass !== ' other-month' && monthNumber === thisMonth && months[monthNumber].gregorian[j * 7 + i] === today ? ' today' : '';
                  tdClass += tdClass !== ' other-month' && months[monthNumber].holidays.includes(months[monthNumber].jalali[j * 7 + i]) ? ' holiday' : '';
                  return (
                     <td className={tdClass} key={'col' + j * 7 + i}>
                        <div className='jalali'>{months[monthNumber].jalali[j * 7 + i].toLocaleString('fa-IR')}</div>
                        <div className='gregorian'>{months[monthNumber].gregorian[j * 7 + i]}</div>
                        <div className='hijri'>{months[monthNumber].hijri[j * 7 + i].toLocaleString('ar-SA')}</div>
                     </td>
                  )
               })}</tr>
            )
         })
      )
   }

   // ________________________________________________functions

   function nextMonth() {
      if (monthNumber < 9) setMonthNumber(monthNumber + 1);
   }

   function perviousMonth() {
      if (6 < monthNumber) setMonthNumber(monthNumber - 1);
   }

   function goToToday() {
      setMonthNumber(thisMonth);
      setDayStyle({ backgroundColor: 'rgb(200, 200, 200)' });
      setTimeout(() => setDayStyle({ backgroundColor: 'transparent' }), 500);
   }

   function occasionsShowHide() {
      if (showHide !== 'active') {
         setToggle('active');
         setShowHide('active');
      }
      else {
         setToggle('');
         setShowHide('');
      }
   }

   // ________________________________________________return

   return (
      <div>
         <div id="day-time">
            <div id="day" style={dayStyle}>{day}</div>
            <div id="time">{time}</div>
         </div>
         <mwc-button id="goToToday" onClick={goToToday}>برو به امروز</mwc-button>
         <div>
            <div id="mainCalendar">
               <div id="month">
                  <mwc-button id="perviousMonth" onClick={perviousMonth}>ماه قبل</mwc-button>
                  <mwc-button id="nextMonth" onClick={nextMonth}>ماه بعد</mwc-button>
                  <h1 id="monthJalali">{months[monthNumber].monthJalali}</h1>
                  <h4 id="monthHijri">{months[monthNumber].monthHijri}</h4>
                  <h4 id="monthGregorian">{months[monthNumber].monthGregorian}</h4>
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
            </div>
            <div id="mainOccasion">
               <div id="occasion" onClick={occasionsShowHide}><h2 className={toggle}>مناسبت‌های این ماه</h2></div>
               <div id="occasions" dangerouslySetInnerHTML={{ __html: months[monthNumber].occasions }} className={showHide}></div>
            </div>
            <div className="clear"></div>
         </div>
      </div>
   )
}

export default App;
