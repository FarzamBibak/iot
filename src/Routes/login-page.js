// login.js

import React from "react";
import { NavLink } from "react-router-dom";

class Login extends React.Component {
    componentDidMount() {
        var scriptSourceList = [
            "js/jquery-3.1.1.min.js",
            "js/bootstrap.min.js",
            "js/loginpage-script.js"
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
                        <form className="m-t" role="form" action="/dashboard">
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Username" required="" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password" required="" />
                            </div>
                            <button type="submit" className="btn btn-primary block full-width m-b"><NavLink exact to="/dashboard" />Login</button>

                            <NavLink exact to="/forgetpassword"><small>Forgot password?</small></NavLink>
                            <p className="text-muted text-center"><small>Do not have an account?</small></p>
                            <NavLink className="btn btn-sm btn-white btn-block" exact to="/register">Create an account</NavLink>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
