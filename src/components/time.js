import * as React from "react";

const TimeDisplay = React.memo(function TimeDisplay(props) {
    const meridian = props.hours !== undefined ? props.hours > 12 ? "PM" : "AM" : "";
    const hours = props.hours !== undefined ? (props.hours - 12).toString().padStart(2, "0") : "00";
    const minutes = props.minutes !== undefined ? props.minutes.toString().padStart(2, "0") : "00";
    const seconds = props.seconds !== undefined ? props.seconds.toString().padStart(2, "0") : "00";

    return (
        <div className="wrapper__time">
            <p>{`${hours}:${minutes}:${seconds} ${meridian}`}</p>
        </div>
    );
});

// const TimeDisplay = React.memo(function Counter({ count }) {
//         console.log("updating time.js");
//     return <h3>{`Count: ${count}`}</h3>;
//   });

export { TimeDisplay };

