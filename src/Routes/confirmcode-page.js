// confirmcode-page.js

import React from "react";
import { NavLink } from "react-router-dom";

class ConfirmCode extends React.Component {
    componentDidMount() {
        var scriptSourceList = [
            "js/confirmcodepage-script.js"
        ], script,
            linkHrefList = [
                "css/bootstrap.min.css",
                "font-awesome/css/font-awesome.min.css",
                "css/animate.css",
                "css/style.css"
            ], link,
            jquerySrc = "js/jquery-3.1.1.min.js";

        function getSrc(i) {
            return i.getAttribute("src")
        };
        function getHref(i) {
            return i.getAttribute("href")
        };

        for (let counter = 0; counter < scriptSourceList.length; counter++) {
            let src = scriptSourceList[counter]
            if (!Array.from(document.getElementsByTagName("script")).map(getSrc).includes(src)) {
                if (Array.from(document.getElementsByTagName("script")).map(getSrc).includes(jquerySrc)) {
                    script = document.createElement("script");
                    script.src = src;
                    script.async = false;
                    document.body.appendChild(script);
                } else {
                    script = document.createElement("script");
                    script.src = jquerySrc;
                    script.async = false;
                    document.body.appendChild(script);
                }
            }
        };
        for (let counter = 0; counter < linkHrefList.length; counter++) {
            let href = linkHrefList[counter]
            if (!Array.from(document.getElementsByTagName("link")).map(getHref).includes(href)) {
                link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = href;
                // link.async = false;
                document.head.appendChild(link);
            }
        };
    };

    render() {
        return (
            <div>
                <div className="passwordBox animated fadeInDown">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="ibox-content">
                                <h2 className="font-bold">Confirm code</h2>
                                <p> Enter the received code that we sent to your email: </p>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <form className="m-t" role="form" action="/dashboard">
                                            <div className="form-group">
                                                <input type="password" className="form-control" placeholder="Received code is ..." required maxlength="8" autoFocus/>
                                            </div>
                                            <div className="buttons">
                                                <button type="submit" className="btn btn-default block half-width m-b m-r-xs">Send Again</button>
                                                <button type="submit" className="btn btn-primary block half-width m-b m-l-xs">Confirm</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default ConfirmCode;
