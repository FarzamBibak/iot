// forgetpassword.js

import React from "react";
import { NavLink } from "react-router-dom";

class ForgetPassword extends React.Component {
    componentDidMount() {
        var scriptSourceList = [
            "js/forgetpasswordpage-script.js"
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

                <div class="passwordBox animated fadeInDown">
                    <div class="row">

                        <div class="col-md-12">
                            <div class="ibox-content">

                                <h2 class="font-bold">Forgot password</h2>

                                <p>
                                    Enter your email address and your password will be reset and emailed to you.
                                </p>

                                <div class="row">

                                    <div class="col-lg-12">
                                        <form class="m-t" role="form" action="index.html">
                                            <div class="form-group">
                                                <input type="email" class="form-control" placeholder="Email address" required="" />
                                            </div>

                                            <button type="submit" class="btn btn-primary block full-width m-b">Send new password</button>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div class="row">
                        <div class="col-md-6">
                            Copyright Example Company
                        </div>
                        <div class="col-md-6 text-right">
                            <small>© 2014-2015</small>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default ForgetPassword;