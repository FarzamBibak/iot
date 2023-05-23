// login-page.js

import React from "react";
import { NavLink } from "react-router-dom";

class Login extends React.Component {
    componentDidMount() {
        var scriptSourceList = [
            "js/jquery-3.1.1.min.js",
            "js/bootstrap.min.js",
            "js/loginpage-script.js",
            "js/plugins/validate/jquery.validate.min.js"
        ], script,
            linkHrefList = [
                "css/bootstrap.min.css",
                "font-awesome/css/font-awesome.min.css",
                "css/animate.css",
                "css/style.css"
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
            <div>
                <div className="middle-box text-center loginscreen animated fadeInDown">
                    <div>
                        <div>
                            <h1 className="logo-name"> iot </h1>
                        </div>
                        <h3>Welcome to iot</h3>
                        {/* <p>Perfectly designed and precisely prepared admin theme with over 50 pages with extra new web app views.</p> */}
                        <p>Login in. To see it in action.</p>
                        <form id="register" className="m-t" role="form" action="/dashboard" >
                            <div className="form-group">
                                <input name="userNameOrEmail" id="userNameOrEmail" type="text" className="form-control" placeholder="Username or Email" required autoFocus />
                                <p id="userNameOrEmail-error" className="text-danger text-left"></p>
                            </div>
                            <div className="form-group">
                                <input name="password" id="password" type="password" className="form-control" placeholder="Password" required />
                                <p id="password-error" className="text-danger text-left"></p>
                            </div>
                            <button type="submit" className="btn btn-primary block full-width m-b">Login</button>
                        </form>
                        <NavLink exact to="/forgetpassword"><small>Forgot password?</small></NavLink>
                        <p className="text-muted text-center"><small>Do not have an account?</small></p>
                        <NavLink className="btn btn-sm btn-white btn-block" exact to="/register">Create an account</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
