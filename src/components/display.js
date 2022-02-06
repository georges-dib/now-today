import React, {useEffect, useState} from "react";
import { DateDisplay } from "./date";
import { TimeDisplay } from "./time";

const Display = (props) => {
    const [currentTime, setCurrentTime] = useState(new Date());


    /** DidMount */
    useEffect(()=>{
        setInterval(()=>{
            setCurrentTime(new Date());
        }, 1000);
    }, [])

    /** DidUpdate */
    useEffect(()=>{
        
    })

    return (
        <>
            <TimeDisplay hours={currentTime.getHours()} minutes={currentTime.getMinutes()} seconds={currentTime.getSeconds()}/>
            
            <DateDisplay year={currentTime.getFullYear()} month={currentTime.getMonth()} 
                    date={currentTime.getDate()} day={currentTime.getDay()}/>
        </>
    );
}

export { Display };