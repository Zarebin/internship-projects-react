import React, { useRef, useEffect, useMemo } from 'zarkit/react';
import Select from 'zarkit/select';

// A function for dynamic load all assets in a directory
function importAll(context: any) {
  const items: any = {};
  context.keys().map((item: any) => {
    const key = item.replace('./', '').replace(/\..+$/, '');
    items[key] = context(item);
    return item;
  });
  return items;
}

// Define game icon themes
export const icons: any = {
  christmas: importAll(require.context('../assets/images/christmas/', false, /\.svg$/)),
  fruits: importAll(require.context('../assets/images/fruits/', false, /\.svg$/)),
};

// Shuffle cards function
const shuffle = (array: any) => {
  array.sort(() => Math.random() - 0.5);
};

// Fill game object with icons by required count and shuffle those
export const fillIcons = (props: any) => {
  let icn = Object.keys(icons[props.iconTheme]);
  const iconsCount = (props.size[0] * props.size[1]) / 2;

  if (icn.length < iconsCount) {
    icn = [...icn, ...icn];
  }

  icn = icn.slice(0, iconsCount);
  icn = [...icn, ...icn];
  shuffle(icn);
  props.setIcons(icn);
};

const Settings = function (props: any) {
  const {
    setFlipped,
    setSolved,
    time,
    setTime,
    timer,
    setTimer,
    setGameState,
    size,
    setSize,
    iconTheme,
    setIconTheme,
    bestTime,
  } = props;

  // fill icons on component constructor
  useMemo(() => {
    fillIcons(props);
  }, []);

  // change game settings
  useEffect(() => {
    setFlipped([]);
    setSolved([]);
    setTime(0);
    setGameState('init');
    clearInterval(timer);
    setTimer(undefined);
    fillIcons(props);
  }, [size, iconTheme]);

  // render game setting elements
  return (
    <div className="settings">
      <Select
        label="اندازه"
        onChange={(e: any) => setSize(e.target.value.split('x'))}
        options={[
          { key: '4x4', value: '4x4', label: '۴x۴' },
          { key: '4x6', value: '4x6', label: '۴x۶' },
          { key: '4x7', value: '4x7', label: '۴x۷' },
          { key: '5x6', value: '5x6', label: '۵x۶', selected: true },
          { key: '5x8', value: '5x8', label: '۶x۶' },
          { key: '6x8', value: '6x8', label: '۶x۸' },
          { key: '6x10', value: '6x10', label: '۶x۱۰' },
        ]}
        value={size.join('x')}
      />
      <Select
        label="زمینه"
        onChange={(e: any) => setIconTheme(e.target.value)}
        options={[
          { key: 'christmas', value: 'christmas', label: 'کریسمس', selected: true },
          { key: 'fruits', value: 'fruits', label: 'میوه ها' },
        ]}
        value={iconTheme}
      />
      <div className="time">
        <span>زمان</span>
        <div>
          <span className="val">{time.toLocaleString('fa-IR')}</span>
          <span className="best">
            {(Object.prototype.hasOwnProperty.call(bestTime, size.join('x'))
              ? parseInt(bestTime[size.join('x')], 10)
              : '-'
            ).toLocaleString('fa-IR')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Settings;
