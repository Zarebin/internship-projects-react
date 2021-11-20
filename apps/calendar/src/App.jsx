import React, { useState, useEffect } from 'zarkit/react';
import months from './months';
import '@webcomponents/webcomponentsjs';
import '@material/mwc-button';
import './style.scss';

function App() {

   var m = new Intl.DateTimeFormat('fa-IR', { month: 'numeric' }).format(new Date());
   var thisMonth = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۱۰', '۱۱', '۱۲'].indexOf(m);

   const [time, setTime] = useState();
   const [day, setDay] = useState();
   const [dayStyle, setDayStyle] = useState();
   const [monthNumber, setMonthNumber] = useState(thisMonth);
   const [today, setToday] = useState(new Date().getDate());

   // ________________________________________________dateTime

   useEffect(() => {
      dateTime();
      setInterval(dateTime, 1000);
   }, [])

   function dateTime() {
      const date = new Date();
      const timeOptions = { hourCycle: 'h23', hour: '2-digit', minute: '2-digit', second: '2-digit' };
      setTime(date.toLocaleTimeString('fa-IR', timeOptions));

      const rooz = date.toLocaleDateString('fa-IR', { weekday: 'long' });
      const adadeRooz = date.toLocaleDateString('fa-IR', { day: 'numeric' });
      const maah = date.toLocaleDateString('fa-IR', { month: 'long' });
      const saal = date.toLocaleDateString('fa-IR', { year: 'numeric' });
      setDay(`${rooz} ${adadeRooz} ${maah} ${saal}`);

      setToday(new Date().getDate());
   }

   // ________________________________________________table

   function monthTable() {
      return (
         new Array(months[monthNumber].shamsi.length / 7).fill('').map((_, j) => {
            return (
               <tr key={'row' + j}>{months[monthNumber].shamsi.slice(j * 7, j * 7 + 7).map((_, i) => {
                  let tdClass = monthNumber === thisMonth && months[monthNumber].miladi[j * 7 + i] === today ? 'today' : '';
                  return (
                     <td className={tdClass} key={'col' + j * 7 + i}>
                        <div className='shamsi'>{months[monthNumber].shamsi[j * 7 + i].toLocaleString('fa-IR')}</div>
                        <div className='miladi'>{months[monthNumber].miladi[j * 7 + i]}</div>
                        <div className='ghamari'>{months[monthNumber].ghamari[j * 7 + i].toLocaleString('ar-SA')}</div>
                     </td>
                  )
               })}</tr>
            )
         })
      )
   }

   // ________________________________________________buttons

   function nextMonth() {
      if (monthNumber < 9) {
         setMonthNumber(monthNumber + 1);
      }
   }

   function perviousMonth() {
      if (6 < monthNumber) {
         setMonthNumber(monthNumber - 1);
      }
   }

   function goToToday() {
      setMonthNumber(thisMonth);
      setDayStyle({ backgroundColor: '#651fff' });
      setTimeout(() => setDayStyle({ backgroundColor: 'transparent' }), 500);
   }

   return (
      <div>
         <div id="day-time">
            <div id="day" style={dayStyle}>{day}</div>
            <div id="time">{time}</div>
         </div>
         <mwc-button id="goToToday" onClick={goToToday}>برو به امروز</mwc-button>
         <div className="month" id={months[monthNumber].name}>
            <div id="mainCalendar">
               <div id="month">
                  <mwc-button class="perviousMonth" onClick={perviousMonth}>ماه قبل</mwc-button>
                  <mwc-button class="nextMonth" onClick={nextMonth}>ماه بعد</mwc-button>
                  <h1 id="monthShamsi">{months[monthNumber].monthShamsi}</h1>
                  <h4 id="monthGhamari">{months[monthNumber].monthGhamari}</h4>
                  <h4 id="monthMiladi">{months[monthNumber].monthMiladi}</h4>
               </div>
               <table className="calendarTable">
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
                  <tbody>{monthTable()}</tbody>
               </table>
            </div>
            <div id="mainMonasebat">
               <div id="monasebat">
                  <h1>مناسبت های این ماه</h1>
               </div>
               <div id="monasebatha" dangerouslySetInnerHTML={{ __html: months[monthNumber].monasebatha }}></div>
            </div>
         </div>
      </div>
   )
}

export default App;
