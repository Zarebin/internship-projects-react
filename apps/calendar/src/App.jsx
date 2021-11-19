import React, { useState, useEffect } from 'zarkit/react';
import '@webcomponents/webcomponentsjs';
import '@material/mwc-button';
import './style.scss';

var m = new Intl.DateTimeFormat('fa-IR', { month: 'numeric' }).format(new Date());
var thisMonth = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۱۰', '۱۱', '۱۲'].indexOf(m);
var monthNumber = thisMonth;

var today = new Date().getDate();

function App() {

   const [time, setTime] = useState();
   const [day, setDay] = useState();
   const [monthShamsi, setMonthShamsi] = useState();
   const [monthGhamari, setMonthGhamari] = useState();
   const [monthMiladi, setMonthMiladi] = useState();
   const [monasebatha, setMonasebatha] = useState();
   const [dayStyle, setDayStyle] = useState();
   const [monthId, setMonthId] = useState();

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
   }

   // ________________________________________________months

   var farvardin;
   var ordibehesht;
   var khordad;
   var tir;
   var mordad;
   var shahrivar;
   var bahman;
   var esfand;

   var aban = {
      shamsi: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5],
      miladi: [23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
      ghamari: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      name: 'aban',
      monthShamsi: 'آبان ۱۴۰۰',
      monthGhamari: 'ربیع‌الأول - ربیع‌الثّانی ۱۴۴۳',
      monthMiladi: 'October - November 2021',
      monasebatha: `
            ۱ آبان ــ روز آمار و برنامه ریزی<br/>
            <span style="color: red">۲ آبان ــ میلاد رسول اکرم و امام جعفر صادق علیه السلام [ ١٧ ربيع الاول ]</span><br/>
            ۷ آبان ــ سالروز ورود کوروش بزرگ به بابل در سال ۵۳۹ پیش از میلاد<br/>
            ۸ آبان ــ روز نوجوان<br/>
            ۱۰ آبان ــ آبان روز، جشن آبانگان<br/>
            ۱۳ آبان ــ روز دانش آموز<br/>
            ۱۴ آبان ــ روز فرهنگ عمومی<br/>
            ۱۵ آبان ــ جشن میانه پاییز<br/>
            ۱۸ آبان ــ روز ملی کیفیت<br/>
            ۲۳ آبان ــ ولادت امام حسن عسکری علیه السلام [ ٨ ربيع الثاني ]<br/>
            ۲۳ آبان ــ روز جهانی دیابت [ 14 November ]<br/>
            ۲۴ آبان ــ روز کتاب و کتابخوانی<br/>
            ۲۵ آبان ــ وفات حضرت معصومه سلام الله علیها [ ١٠ ربيع الثاني ]<br/>
            ۲۷ آبان ــ روز جهانی فلسفه [ 18 November ]<br/>
            ۲۸ آبان ــ روز جهانی آقایان [ 19 November ]<br/>
            ۲۹ آبان ــ روز جهانی کودک [ 20 November ]<br/>
      `
   }

   var mehr = {
      shamsi: [27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
      miladi: [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
      ghamari: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      name: 'mehr',
      monthShamsi: 'مهر ۱۴۰۰',
      monthGhamari: 'صفر - ربیع‌الأول ۱۴۴۳',
      monthMiladi: 'September - October 2021',
      monasebatha: `
         ۱ مهر ــ آغاز حمله مغول به ایران در پاییز ۵۹۳ خورشیدی<br/>
         ۵ مهر ــ روز جهانی جهانگردی [ 27 September ]<br/>
         <span style="color: red">۵ مهر ــ اربعین حسینی [ ٢٠ صفر ]</span><br/>
         ۷ مهر ــ روز آتش نشانی و ایمنی<br/>
         ۷ مهر ــ سقوط هواپیمای حامل جمعی از فرماندهان جنگ (کلاهدوز، نامجو، فلاحی، فکوری، جهان آرا) در سال ۱۳۶۰<br/>
         ۸ مهر ــ روز بزرگداشت مولوی<br/>
         ۸ مهر ــ روز جهانی ناشنوایان [ 30 September ]<br/>
         ۸ مهر ــ روز جهانی ترجمه و مترجم [ 30 September ]<br/>
         ۹ مهر ــ روز جهانی سالمندان [ 1 October ]<br/>
         ۱۰ مهر ــ روز جشن مهرگان<br/>
         ۱۳ مهر ــ روز نیروی انتظامی<br/>
         <span style="color: red">۱۳ مهر ــ رحلت رسول اکرم؛ شهادت امام حسن مجتبی علیه السلام [ ٢٨ صفر ]</span><br/>
         ۱۳ مهر ــ روز جهانی معلم [ 5 October ]<br/>
         ۱۴ مهر ــ روز دامپزشکی<br/>
         <span style="color: red">۱۵ مهر ــ شهادت امام رضا علیه السلام [ ٣٠ صفر ]</span><br/>
         ۱۶ مهر ــ روز ملی کودک<br/>
         ۱۶ مهر ــ هجرت پیامبر اکرم از مکه به مدینه [ ١ ربيع الاول ]<br/>
         ۱۷ مهر ــ روز جهانی پست [ 9 October ]<br/>
         ۱۸ مهر ــ روز جهانی مبارزه با حکم اعدام [ 10 October ]<br/>
         ۱۹ مهر ــ روز جهانی دختر [ 11 October ]<br/>
         ۲۰ مهر ــ روز بزرگداشت حافظ<br/>
         ۲۱ مهر ــ جشن پیروزی کاوه و فریدون<br/>
         ۲۲ مهر ــ روز جهانی استاندارد [ 14 October ]<br/>
         ۲۳ مهر ــ روز جهانی عصای سفید [ 15 October ]<br/>
         ۲۳ مهر ــ شهادت امام حسن عسکری علیه السلام [ ٨ ربيع الاول ]<br/>
         ۲۴ مهر ــ روز جهانی غذا [ 16 October ]<br/>
         ۲۵ مهر ــ روز جهانی ریشه کنی فقر [ 17 October ]<br/>
         ۲۶ مهر ــ روز تربیت بدنی و ورزش<br/>
         ۲۷ مهر ــ میلاد رسول اکرم به روایت اهل سنت [ ١٢ ربيع الاول ]<br/>
         ۲۹ مهر ــ روز ملی کوهنورد<br/>
      `
   }

   var azar = {
      shamsi: [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3],
      miladi: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
      ghamari: [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
      name: 'azar',
      monthShamsi: 'آذر ۱۴۰۰',
      monthGhamari: 'ربیع‌الثّانی - جمادی‌الأول ۱۴۴۳',
      monthMiladi: 'November - December 2021',
      monasebatha: `
         ۱ آذر ــ آذر جشن<br/>
         ۴ آذر ــ روز جهانی مبارزه با خشونت علیه زنان [ 25 November ]<br/>
         ۵ آذر ــ روز بسیج مستضعفان<br/>
         ۷ آذر ــ روز نیروی دریایی<br/>
         ۹ آذر ــ جشن آذرگان، آذر روز<br/>
         ۱۰ آذر ــ روز مجلس<br/>
         ۱۰ آذر ــ روز جهانی ایدز [ 1 December ]<br/>
         ۱۲ آذر ــ روز جهانی معلولان [ 3 December ]<br/>
         ۱۳ آذر ــ روز بیمه<br/>
         ۱۵ آذر ــ روز حسابدار<br/>
         ۱۶ آذر ــ روز دانشجو<br/>
         ۱۹ آذر ــ ولادت حضرت زینب سلام الله علیها و روز پرستار و بهورز [ ٥ جمادي الاولي ]<br/>
         ۲۰ آذر ــ روز جهانی کوه نوردی [ 11 December ]<br/>
         ۲۵ آذر ــ روز پژوهش<br/>
         ۲۶ آذر ــ روز حمل و نقل<br/>
         ۳۰ آذر ــ جشن شب یلدا<br/>
      `
   }

   var dey = {
      shamsi: [27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1],
      miladi: [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
      ghamari: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
      name: 'dey',
      monthShamsi: 'دی ۱۴۰۰',
      monthGhamari: 'جمادی‌الأول - جمادی‌الثّانی ۱۴۴۳',
      monthMiladi: 'December 2021 - January 2022',
      monasebatha: `
         ۱ دی ــ روز میلاد خورشید؛ جشن خرم روز، نخستین جشن دیگان<br/>
         ۴ دی ــ جشن کریسمس [ 25 December ]<br/>
         ۵ دی ــ زمین لرزه ی بم [۱۳۸۲ خورشیدی]<br/>
         ۵ دی ــ سالروز شهادت آشو زرتشت، اَبَراِنسان بزرگ تاریخ<br/>
         ۸ دی ــ دی به آذر روز، دومین جشن دیگان<br/>
         ۱۱ دی ــ جشن آغاز سال نو میلادی [ 1 January ]<br/>
         ۱۳ دی ــ شهادت سردار حاج قاسم سلیمانی [۱۳۹۸ خورشیدی]<br/>
         ۱۵ دی ــ دی به مهر روز، سومین جشن دیگان<br/>
         <span style="color: red">۱۶ دی ــ شهادت حضرت فاطمه زهرا سلام الله علیها [ ٣ جمادي الثاني ]</span><br/>
         ۱۶ دی ــ غرق شدن کشتی سانچی [۱۳۹۶ خورشیدی]<br/>
         ۱۸ دی ــ شلیک به پرواز ۷۵۲ هواپیمایی اوکراین [۱۳۹۸ خورشیدی]<br/>
         ۱۹ دی ــ درگذشت اکبر هاشمی رفسنجانی [۱۳۹۵ خورشیدی]<br/>
         ۲۰ دی ــ قتل امیرکبیر به دستور ناصرالدین شاه قاجار [۱۲۳۰ خورشیدی]<br/>
         ۲۳ دی ــ دی به دین روز، چهارمین جشن دیگان<br/>
         ۳۰ دی ــ آتش‌سوزی و فروریختن ساختمان پلاسکو [۱۳۹۵ خورشیدی]<br/>
      `
   }

   var months = [farvardin, ordibehesht, khordad, tir, mordad, shahrivar, mehr, aban, azar, dey, bahman, esfand];

   // ________________________________________________table

   useEffect(() => {
      monthTable(monthNumber);
   }, [])


   function monthTable(monthNumber) {

      setMonthShamsi(months[monthNumber].monthShamsi);
      setMonthGhamari(months[monthNumber].monthGhamari);
      setMonthMiladi(months[monthNumber].monthMiladi);
      setMonasebatha(months[monthNumber].monasebatha);
      setMonthId(months[monthNumber].name);

      var tableRows = document.querySelectorAll('tbody tr');
      for (let i = 0; i < 5; i++) {
         tableRows[i].innerHTML = '';
      }
      for (let i = 0; i < 35; i++) {

         let tdClass = monthNumber === thisMonth && months[monthNumber].miladi[i] === today ? 'today' : '';

         tableRows[parseInt(i / 7)].innerHTML += `<td class='${tdClass}'>
            <div class='shamsi'>${months[monthNumber].shamsi[i].toLocaleString('fa-IR')}</div>
            <div class='miladi'>${months[monthNumber].miladi[i]}</div>
            <div class='ghamari'>${months[monthNumber].ghamari[i].toLocaleString('ar-SA')}</div>
            </td>`;
      }
   }

   // ________________________________________________buttons

   function nextMonth() {
      if (monthNumber < 9) {
         monthNumber++;
         monthTable(monthNumber);
      }
   }

   function perviousMonth() {
      if (6 < monthNumber) {
         monthNumber--;
         monthTable(monthNumber);
      }
   }

   function goToToday() {
      monthNumber = thisMonth;
      monthTable(monthNumber);
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
         <div className="month" id={monthId}>
            <div id="mainCalendar">
               <div id="month">
                  <mwc-button class="perviousMonth" onClick={perviousMonth}>ماه قبل</mwc-button>
                  <mwc-button class="nextMonth" onClick={nextMonth}>ماه بعد</mwc-button>
                  <h1 id="monthShamsi">{monthShamsi}</h1>
                  <h4 id="monthGhamari">{monthGhamari}</h4>
                  <h4 id="monthMiladi">{monthMiladi}</h4>
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
                  <tbody>
                     <tr></tr>
                     <tr></tr>
                     <tr></tr>
                     <tr></tr>
                     <tr></tr>
                  </tbody>
               </table>
            </div>
            <div id="mainMonasebat">
               <div id="monasebat">
                  <h1>مناسبت های این ماه</h1>
               </div>
               <div id="monasebatha" dangerouslySetInnerHTML={{ __html: monasebatha }}></div>
            </div>
         </div>
      </div>
   )
}

export default App;
