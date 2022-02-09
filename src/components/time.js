import React, {useEffect, useState} from "react";

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

    return (
        <div className="wrapper__time">
            {/* <p className="time__hours__container" style={{fontSize: hoursAndMinutesFontSize+"px", lineHeight: hoursAndMinutesLineHeight+"px"}}>{`${hours}`}</p>
            <p className="time__minutes__container" style={{fontSize: hoursAndMinutesFontSize+"px", lineHeight: hoursAndMinutesLineHeight+"px"}}>{`${minutes}`}</p>
            <div className="time__seconds-meridian__container">
                <p className="time__meridian__container" style={{fontSize: secondsAndMeridianFontSize+"px", lineHeight: secondsAndMeridianLineHeight+"px"}}>{`${meridian}`}</p>
                <p className="time__seconds__container" style={{fontSize: secondsAndMeridianFontSize+"px", lineHeight: secondsAndMeridianLineHeight+"px"}}>{`.${seconds}`}</p>
            </div> */}

            <p className="time__hours__container">{`${hours}`}</p>
            <p className="time__hours-minutes-separator">:</p>
            <p className="time__minutes__container">{`${minutes}`}</p>
            <div className="time__seconds-meridian__container">
                <p className="time__meridian__container">{`${meridian}`}</p>
                <p className="time__seconds__container">{`.${seconds}`}</p>
            </div>
        </div>
    );
});

// const TimeDisplay = React.memo(function Counter({ count }) {
//         console.log("updating time.js");
//     return <h3>{`Count: ${count}`}</h3>;
//   });

export { TimeDisplay };

