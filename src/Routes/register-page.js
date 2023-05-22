// register-page.js

import React from "react";
import { NavLink } from "react-router-dom";

class Register extends React.Component {
    componentDidMount() {
        var scriptSourceList = [
            "js/jquery-3.1.1.min.js",
            "js/bootstrap.min.js",
            "js/plugins/iCheck/icheck.min.js",
            "js/registerpage-script.js"
        ], script,
            linkHrefList = [
                "css/bootstrap.min.css",
                "font-awesome/css/font-awesome.min.css",
                "css/plugins/iCheck/custom.css",
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
                document.head.appendChild(link);
            }
        };
    };

    render() {
        return (
            <div className="middle-box text-center loginscreen animated fadeInDown">
                <div>
                    <div>
                        <h1 className="logo-name"> iot </h1>
                    </div>
                    <h3>Register to iot</h3>
                    <p>Create account to see it in action.</p>
                    <form className="m-t" role="form" action="/confirmcode" autoComplete="on">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Name" required autoFocus />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email" required />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" required autoComplete="off" />
                        </div>
                        <div className="form-group">
                            <div className="checkbox i-checks">
                                <label> <input type="checkbox" required/> Agree the terms and policy </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary block full-width m-b">Register</button>

                        <p className="text-muted text-center"><small>Already have an account?</small></p>
                        <NavLink className="btn btn-sm btn-white btn-block" exact to="/login">Login</NavLink>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register;
