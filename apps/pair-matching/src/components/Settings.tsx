import React, { useRef, useEffect, useMemo } from 'zarkit/react';
import '@webcomponents/webcomponentsjs/webcomponents-loader';
import '@material/mwc-button';
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';

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
  // Create refs for material components
  const sizeRef = useRef<HTMLElement>();
  const iconThemeRef = useRef<HTMLElement>();

  // fill icons on component constructor
  useMemo(() => {
    fillIcons(props);
  }, []);

  // set events
  useEffect(() => {
    sizeRef.current.onchange = (e: any) => setSize(e.target.value.split('x'));
    iconThemeRef.current.onchange = (e: any) => setIconTheme(e.target.value);
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
      <mwc-select label="اندازه" className="setting-size" ref={sizeRef}>
        <mwc-list-item value="4x4">۴x۴</mwc-list-item>
        <mwc-list-item value="4x6">۴x۶</mwc-list-item>
        <mwc-list-item value="4x7">۴x۷</mwc-list-item>
        <mwc-list-item value="5x6" selected="">
          ۵x۶
        </mwc-list-item>
        <mwc-list-item value="5x8">۵x۸</mwc-list-item>
        <mwc-list-item value="6x6">۶x۶</mwc-list-item>
        <mwc-list-item value="6x8">۶x۸</mwc-list-item>
        <mwc-list-item value="6x10">۶x۱۰</mwc-list-item>
      </mwc-select>
      <mwc-select label="زمینه" className="setting-theme" ref={iconThemeRef}>
        <mwc-list-item value="christmas" selected="">
          کریسمس
        </mwc-list-item>
        <mwc-list-item value="fruits">میوه ها</mwc-list-item>
      </mwc-select>
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
