import * as React from "react";
import { importLang } from "../common/text";

const lang = importLang();

const OptionsTab = React.memo(function OptionsTab(props) {
    
    return (
        <div className="options__wrapper">
            {!!props.options && props.options.map(opt=>{
                return <button key={opt.id} onClick={()=>opt.onClick(opt.value)}>{opt.value}</button>
            })}
        </div>
    );
});

export { OptionsTab };