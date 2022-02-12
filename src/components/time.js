import React, {useEffect, useState} from "react";
import { importLang } from "../common/text";

const lang = importLang();

const TimeDisplay = React.memo(function TimeDisplay(props) {

    const [hoursAndMinutesFontSize, setHoursAndMinutesFontSize] = useState(0);
    const [secondsAndMeridianFontSize, setSecondsAndMeridianFontSize] = useState(0);

    useEffect(()=>{
        // const totalVW = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        // updateHoursAndMinutesFontSize(totalVW);
        // updateSecondsAndMeridianFontSize(totalVW);
    }, [])

    const updateHoursAndMinutesFontSize = (totalVW) => {
        let hoursTextWidth = totalVW * 80 / 100;
        setHoursAndMinutesFontSize(hoursTextWidth);
    }

    const updateSecondsAndMeridianFontSize = (totalVW) => {
        let secondsTextWidth = totalVW * 20 / 100;
        setSecondsAndMeridianFontSize(secondsTextWidth);
    }

    const meridian = props.hours !== undefined ? props.hours > 12 ? "PM" : "AM" : "";
    const hours = props.hours !== undefined ? (props.hours > 12 ? props.hours - 12 : props.hours).toString().padStart(2, "0") : "00";
    const minutes = props.minutes !== undefined ? props.minutes.toString().padStart(2, "0") : "00";
    const seconds = props.seconds !== undefined ? props.seconds.toString().padStart(2, "0") : "00";

    const hoursAndMinutesLineHeight = hoursAndMinutesFontSize - 36;
    const secondsAndMeridianLineHeight = secondsAndMeridianFontSize;

    const secondsDegrees = ((props.seconds / 60) * 360) + 90;
    const minutesDegrees = ((props.minutes / 60) * 360) + ((props.seconds/60)*6);
    const hoursDegrees = ((props.hours / 12) * 360) + ((props.minutes/60)*30);

    return (
        <div className="wrapper__time">
            {/* <p className="time__hours__container" style={{fontSize: hoursAndMinutesFontSize+"px", lineHeight: hoursAndMinutesLineHeight+"px"}}>{`${hours}`}</p>
            <p className="time__minutes__container" style={{fontSize: hoursAndMinutesFontSize+"px", lineHeight: hoursAndMinutesLineHeight+"px"}}>{`${minutes}`}</p>
            <div className="time__seconds-meridian__container">
                <p className="time__meridian__container" style={{fontSize: secondsAndMeridianFontSize+"px", lineHeight: secondsAndMeridianLineHeight+"px"}}>{`${meridian}`}</p>
                <p className="time__seconds__container" style={{fontSize: secondsAndMeridianFontSize+"px", lineHeight: secondsAndMeridianLineHeight+"px"}}>{`.${seconds}`}</p>
            </div> */}

            {props.selectedTimeDisplay === lang.timeDisplayOptions.DIGITAL &&
                <>
                    <p className="time__hours__container">{`${hours}`}</p>
                    <p className="time__hours-minutes-separator">:</p>
                    <p className="time__minutes__container">{`${minutes}`}</p>
                    <div className="time__seconds-meridian__container">
                        <p className="time__meridian__container">{`${meridian}`}</p>
                        <p className="time__seconds__container">{`.${seconds}`}</p>
                    </div>
                </>
            }

            {props.selectedTimeDisplay === lang.timeDisplayOptions.ANALOG &&
                <>
                    <div className="time__analog-clock__outer">
                        {/* main axes */}
                        <div className="clock__axis clock__axis-primary clock__axis-primary-x"></div>
                        <div className="clock__axis clock__axis-primary clock__axis-primary-y"></div>

                        {/* secondary axes */}
                        <div className="clock__axis clock__axis-secondary clock__axis-secondary-1"></div>
                        <div className="clock__axis clock__axis-secondary clock__axis-secondary-2"></div>
                        <div className="clock__axis clock__axis-secondary clock__axis-secondary-3"></div>
                        <div className="clock__axis clock__axis-secondary clock__axis-secondary-4"></div>

                        {/* inner circle for styling */}
                        <div className="time__analog-clock__inner"></div>

                        {/* seconds, minutes and hours */}
                        <div className="clock__handle clock__handle-seconds" style={{transform:`rotate(${secondsDegrees}deg)`}}></div>
                        <div className="clock__handle clock__handle-minutes" style={{transform:`rotate(${minutesDegrees}deg)`}}></div>
                        <div className="clock__handle clock__handle-hours" style={{transform:`rotate(${hoursDegrees}deg)`}}></div>

                        {/* center circle for styling */}
                        <div className="time__analog-clock__center"></div>
                    </div>
                </>
            }
        </div>
    );
});

// const TimeDisplay = React.memo(function Counter({ count }) {
//         console.log("updating time.js");
//     return <h3>{`Count: ${count}`}</h3>;
//   });

export { TimeDisplay };

