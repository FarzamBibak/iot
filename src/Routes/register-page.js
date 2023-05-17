// register.js

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
                // link.async = false;
                document.head.appendChild(link);
            }
        };
    };

    render() {
        return (
            <div class="middle-box text-center loginscreen   animated fadeInDown">
                <div>
                    <div>

                        <h1 class="logo-name">IN+</h1>

                    </div>
                    <h3>Register to IN+</h3>
                    <p>Create account to see it in action.</p>
                    <form class="m-t" role="form" action="login.html">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Name" required="" />
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="Email" required="" />
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Password" required="" />
                        </div>
                        <div class="form-group">
                            <div class="checkbox i-checks"><label> <input type="checkbox" /><i></i> Agree the terms and policy </label></div>
                        </div>
                        <button type="submit" class="btn btn-primary block full-width m-b">Register</button>

                        <p class="text-muted text-center"><small>Already have an account?</small></p>
                        <a class="btn btn-sm btn-white btn-block" href="login.html">Login</a>
                    </form>
                    <p class="m-t"> <small>Inspinia we app framework base on Bootstrap 3 &copy; 2014</small> </p>
                </div>
            </div>
        )
    }
}

export default Register;
