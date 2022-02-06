import * as React from "react";
import { importLang } from "../common/text";

const lang = importLang();

const DateDisplay = React.memo(function DateDisplay(props) {
    const day = props.day !== undefined ? lang.allDays[props.day] : "";
    const month = props.month !== undefined ? lang.allMonths[props.month] : "";
    return (
        <div className="wrapper__date">
            <p>{`${day}, ${month} ${props.date} ${props.year}`}</p>
        </div>
    );
});

export { DateDisplay };