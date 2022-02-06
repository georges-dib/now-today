import * as React from "react";
import { importLang } from "../common/text";
import { Display } from "../components/display";
import "../css/main.css";

const lang = importLang();

const IndexPage = () => {
    return (
        <main>
            <title>{lang.title}</title>

            <div id="wrapper">
                <Display/>
            </div>
        </main>
    )
}

export default IndexPage
