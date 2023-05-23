// register-page.js

import React from "react";
import { NavLink } from "react-router-dom";

class Register extends React.Component {
    componentDidMount() {
        var scriptSourceList = [
            "js/jquery-3.1.1.min.js",
            "js/bootstrap.min.js",
            "js/plugins/iCheck/icheck.min.js",
            "js/registerpage-script.js",
            "js/plugins/validate/jquery.validate.min.js",
        ], script,
            linkHrefList = [
                "css/bootstrap.min.css",
                "font-awesome/css/font-awesome.min.css",
                "css/plugins/iCheck/custom.css",
                "css/animate.css",
                "css/style.css",
            ], link,
            jquerySrc = "js/jquery-3.1.1.min.js",
            jqueryValidateSrc = "js/plugins/validate/jquery.validate.min.js";

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
                    if (Array.from(document.getElementsByTagName("script")).map(getSrc).includes(jqueryValidateSrc)) {
                        script = document.createElement("script");
                        script.src = src;
                        script.async = false;
                        document.body.appendChild(script);
                    } else {
                        script = document.createElement("script");
                        script.src = jqueryValidateSrc;
                        script.async = false;
                        document.body.appendChild(script);
                    }               
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
                    <form id="register" className="m-t" role="form" action="/confirmcode" >
                        <div className="form-group">
                            <input name="userName" id="userName" type="text" className="form-control" placeholder="User name" required autoFocus />
                            <p id="userName-error" className="text-danger text-left"></p>
                        </div>
                        <div className="form-group">
                            <input name="email" id="email" type="email" className="form-control" placeholder="Email" required />
                            <p id="email-error" className="text-danger text-left"></p>
                        </div>
                        <div className="form-group">
                            <input name="password" id="password" type="password" className="form-control" placeholder="Password" required />
                            <p id="password-error" className="text-danger text-left"></p>
                        </div>
                        <div className="form-group">
                            <input name="confirmPassword" id="confirmPassword" type="password" className="form-control" placeholder="Confirm password" required />
                            <p id="confirmPassword-error" className="text-danger text-left"></p>
                        </div>
                        <div className="form-group">
                            <div className="checkbox i-checks">
                                <label className="float-left"> <input type="checkbox" id="agreeTerms" name="agreeTerms" required /> Agree the terms and policy </label>
                                <p id="agreeTerms-error" className="text-danger text-left"></p>
                            </div>
                        </div>
                        <br />

                        <button type="submit" className="btn btn-primary block full-width m-b m-t-sm">Register</button>
                    </form>
                    <p className="text-muted text-center"><small>Already have an account?</small></p>
                    <NavLink className="btn btn-sm btn-white btn-block" exact to="/login">Login</NavLink>
                </div>
            </div>
        )
    }
}

export default Register;
