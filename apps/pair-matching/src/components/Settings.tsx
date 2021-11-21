import React, {useRef, useEffect, useMemo} from 'zarkit/react';
import '@webcomponents/webcomponentsjs/webcomponents-loader';
import '@material/mwc-button';
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';

function Settings(props: any) {

    // Create refs for material components
    const sizeRef = useRef<HTMLElement>();
    const iconThemeRef = useRef<HTMLElement>();

    // fill icons on component constructor
    useMemo(() => {
        fillIcons(props);
    }, []);

    // set events
    useEffect(() => {
        sizeRef.current.onchange = (e: any) => props.setSize(e.target.value);
        iconThemeRef.current.onchange = (e: any) => props.setIconTheme(e.target.value);
    }, []);

    // change game settings
    useEffect(() => {
        props.setFlipped([]);
        props.setSolved([]);
        props.setTime(0);
        props.setGameState('init');
        clearInterval(props.timer);
        props.setTimer(undefined);
        fillIcons(props);
    }, [props.size, props.iconTheme]);


    // render game setting elements
    return (
        <div className="settings">
            <mwc-select label="اندازه" className="setting-size" ref={sizeRef}>
                <mwc-list-item value="4x4">۴x۴</mwc-list-item>
                <mwc-list-item value="4x6">۴x۶</mwc-list-item>
                <mwc-list-item value="4x7">۴x۷</mwc-list-item>
                <mwc-list-item value="5x6" selected={true}>۵x۶</mwc-list-item>
                <mwc-list-item value="5x8">۵x۸</mwc-list-item>
                <mwc-list-item value="6x6">۶x۶</mwc-list-item>
                <mwc-list-item value="6x8">۶x۸</mwc-list-item>
                <mwc-list-item value="6x10">۶x۱۰</mwc-list-item>
            </mwc-select>
            <mwc-select label="زمینه" className="setting-theme" ref={iconThemeRef}>
                <mwc-list-item value="christmas" selected={true}>کریسمس</mwc-list-item>
                <mwc-list-item value="fruits">میوه ها</mwc-list-item>
            </mwc-select>
            <div className="time">
                <span>زمان</span>
                <div>
                    <span className="val">{(props.time).toLocaleString('fa-IR')}</span>
                    <span className="best">{(props.bestTime.hasOwnProperty(props.size) ? parseInt(props.bestTime[props.size]):'-').toLocaleString('fa-IR')}</span>
                </div>
            </div>
        </div>
    )
}

// A function for dynamic load all assets in a directory
function importAll(context: any) {
    let items: any = {};
    context.keys().map((item: any) => {
        let key = item.replace('./', '').replace(/\..+$/, '');
        items[key] = context(item)
    });
    return items;
}

// Define game icon themes
export const icons: any = {
    christmas: importAll(require.context('../assets/images/christmas/', false, /\.svg$/)),
    fruits: importAll(require.context('../assets/images/fruits/', false, /\.svg$/)),
}

// Shuffle cards function
const shuffle = (array: any) => {
    array.sort(() => Math.random() - 0.5);
}

// Fill game object with icons by required count and shuffle those
export const fillIcons = (props: any) => {
    let icn = Object.keys(icons[props.iconTheme]);
    let iconsCount = (props.size.split('x')[0] * props.size.split('x')[1]) / 2;

    if (icn.length < iconsCount) {
        icn = [...icn, ...icn];
    }

    icn = icn.slice(0, iconsCount);
    icn = [...icn, ...icn];
    shuffle(icn);
    props.setIcons(icn);
}

export default Settings;