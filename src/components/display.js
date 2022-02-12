import React, {useEffect, useState} from "react";
import { importLang } from "../common/text";
import { DateDisplay } from "./date";
import { OptionsTab } from "./OptionsTab";
import { TimeDisplay } from "./time";

const lang = importLang();

const Display = (props) => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [selectedTimeDisplay, setSelectedTimeDisplay] = useState(lang.timeDisplayOptions.ANALOG);

    const options=[
        {id: 0, value: lang.timeDisplayOptions.ANALOG, onClick: (value)=>setSelectedTimeDisplay(value)},
        {id: 1, value: lang.timeDisplayOptions.DIGITAL, onClick: (value)=>setSelectedTimeDisplay(value)}
    ]

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
            <TimeDisplay hours={currentTime.getHours()} minutes={currentTime.getMinutes()} seconds={currentTime.getSeconds()}
                    selectedTimeDisplay={selectedTimeDisplay}/>
            
            <DateDisplay year={currentTime.getFullYear()} month={currentTime.getMonth()} 
                    date={currentTime.getDate()} day={currentTime.getDay()}/>

            <OptionsTab options={options}/>
        </>
    );
}

export { Display };