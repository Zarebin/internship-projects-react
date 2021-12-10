/* eslint-disable no-extend-native */
Date.prototype.toJalaliCorrectFormat = function toJalaliCorrectFormat() {
  const date = new Date();
  const jalajiShownDay = date.toLocaleDateString('fa-IR', { weekday: 'long' });
  const jalajiShownDayNumber = date.toLocaleDateString('fa-IR', { day: 'numeric' });
  const jalajiShownMonth = date.toLocaleDateString('fa-IR', { month: 'long' });
  const jalajiShownYear = date.toLocaleDateString('fa-IR', { year: 'numeric' });

  return (`${jalajiShownDay} ${jalajiShownDayNumber} ${jalajiShownMonth} ${jalajiShownYear}`);
};
