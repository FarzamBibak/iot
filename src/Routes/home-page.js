// home-page.js

import React from "react";
import { NavLink } from "react-router-dom";

class Home extends React.Component {
    componentDidMount() {
        var scriptSourceList = [
            "js/jquery-3.1.1.min.js",
            "js/bootstrap.min.js",
            "js/plugins/metisMenu/jquery.metisMenu.js",
            "js/plugins/slimscroll/jquery.slimscroll.min.js",
            "js/inspinia.js",
            "js/plugins/pace/pace.min.js",
            "js/plugins/wow/wow.min.js",
            "js/homepage-script.js"
        ], script,
            linkHrefList = [
                "css/bootstrap.min.css",
                "css/animate.css",
                "font-awesome/css/font-awesome.min.css",
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

                <div className="navbar-wrapper">
                    <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                        <div className="container">
                            <div className="navbar-header page-scroll">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a className="navbar-brand" href="index.html">WEBAPPLAYERS</a>
                            </div>
                            <div id="navbar" className="navbar-collapse collapse">
                                <ul className="nav navbar-nav navbar-right">
                                    <li><a className="page-scroll" href="#page-top">Home</a></li>
                                    <li><a className="page-scroll" href="#features">Features</a></li>
                                    <li><a className="page-scroll" href="#team">Team</a></li>
                                    <li><a className="page-scroll" href="#testimonials">Testimonials</a></li>
                                    <li><a className="page-scroll" href="#pricing">Pricing</a></li>
                                    <li><a className="page-scroll" href="#contact">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div id="inSlider" className="carousel carousel-fade" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#inSlider" data-slide-to="0" className="active"></li>
                        <li data-target="#inSlider" data-slide-to="1"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <div className="container">
                                <div className="carousel-caption">
                                    <h1>We craft<br />
                                        brands, web apps,<br />
                                        and user interfaces<br />
                                        we are IN+ studio</h1>
                                    <p>Lorem Ipsum is simply dummy text of the printing.</p>
                                    <p>
                                        <a className="btn btn-lg btn-primary" href="#" role="button">READ MORE</a>
                                        <a className="caption-link" href="#" role="button">Inspinia Theme</a>
                                    </p>
                                </div>
                                <div className="carousel-image wow zoomIn">
                                    <img src="img/landing/laptop.png" alt="laptop" />
                                </div>
                            </div>
                            {/* <!-- Set background for slide in css --> */}
                            <div className="header-back one"></div>

                        </div>
                        <div className="item">
                            <div className="container">
                                <div className="carousel-caption blank">
                                    <h1>We create meaningful <br /> interfaces that inspire.</h1>
                                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
                                </div>
                            </div>
                            {/* <!-- Set background for slide in css --> */}
                            <div className="header-back two"></div>
                        </div>
                    </div>
                    <a className="left carousel-control" href="#inSlider" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#inSlider" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>


                <section id="features" className="container services">
                    <div className="row">
                        <div className="col-sm-3">
                            <h2>Full responsive</h2>
                            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                            <p><a className="navy-link" href="#" role="button">Details &raquo;</a></p>
                        </div>
                        <div className="col-sm-3">
                            <h2>LESS/SASS Files</h2>
                            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                            <p><a className="navy-link" href="#" role="button">Details &raquo;</a></p>
                        </div>
                        <div className="col-sm-3">
                            <h2>6 Charts Library</h2>
                            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                            <p><a className="navy-link" href="#" role="button">Details &raquo;</a></p>
                        </div>
                        <div className="col-sm-3">
                            <h2>Advanced Forms</h2>
                            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                            <p><a className="navy-link" href="#" role="button">Details &raquo;</a></p>
                        </div>
                    </div>
                </section>

                <section className="container features">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="navy-line"></div>
                            <h1>Over 40+ unique view<br /> <span className="navy"> with many custom components</span> </h1>
                            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 text-center wow fadeInLeft">
                            <div>
                                <i className="fa fa-mobile features-icon"></i>
                                <h2>Full responsive</h2>
                                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                            </div>
                            <div className="m-t-lg">
                                <i className="fa fa-bar-chart features-icon"></i>
                                <h2>6 Charts Library</h2>
                                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                            </div>
                        </div>
                        <div className="col-md-6 text-center  wow zoomIn">
                            <img src="img/landing/perspective.png" alt="dashboard" className="img-responsive" />
                        </div>
                        <div className="col-md-3 text-center wow fadeInRight">
                            <div>
                                <i className="fa fa-envelope features-icon"></i>
                                <h2>Mail pages</h2>
                                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                            </div>
                            <div className="m-t-lg">
                                <i className="fa fa-google features-icon"></i>
                                <h2>AngularJS version</h2>
                                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="navy-line"></div>
                            <h1>Discover great feautres</h1>
                            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. </p>
                        </div>
                    </div>
                    <div className="row features-block">
                        <div className="col-lg-6 features-text wow fadeInLeft">
                            <small>INSPINIA</small>
                            <h2>Perfectly designed </h2>
                            <p>INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with latest jQuery plugins.</p>
                            <a href="" className="btn btn-primary">Learn more</a>
                        </div>
                        <div className="col-lg-6 text-right wow fadeInRight">
                            <img src="img/landing/dashboard.png" alt="dashboard" className="img-responsive pull-right" />
                        </div>
                    </div>
                </section>

                <section id="team" className="gray-section team">
                    <div className="container">
                        <div className="row m-b-lg">
                            <div className="col-lg-12 text-center">
                                <div className="navy-line"></div>
                                <h1>Our Team</h1>
                                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4 wow fadeInLeft">
                                <div className="team-member">
                                    <img src="img/landing/avatar3.jpg" className="img-responsive img-circle img-small" alt="" />
                                    <h4><span className="navy">Amelia</span> Smith</h4>
                                    <p>Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus. </p>
                                    <ul className="list-inline social-icon">
                                        <li><a href="#"><i className="fa fa-twitter"></i></a>
                                        </li>
                                        <li><a href="#"><i className="fa fa-facebook"></i></a>
                                        </li>
                                        <li><a href="#"><i className="fa fa-linkedin"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="team-member wow zoomIn">
                                    <img src="img/landing/avatar1.jpg" className="img-responsive img-circle" alt="" />
                                    <h4><span className="navy">John</span> Novak</h4>
                                    <p>Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus.</p>
                                    <ul className="list-inline social-icon">
                                        <li><a href="#"><i className="fa fa-twitter"></i></a>
                                        </li>
                                        <li><a href="#"><i className="fa fa-facebook"></i></a>
                                        </li>
                                        <li><a href="#"><i className="fa fa-linkedin"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4 wow fadeInRight">
                                <div className="team-member">
                                    <img src="img/landing/avatar2.jpg" className="img-responsive img-circle img-small" alt="" />
                                    <h4><span className="navy">Peter</span> Johnson</h4>
                                    <p>Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus.</p>
                                    <ul className="list-inline social-icon">
                                        <li><a href="#"><i className="fa fa-twitter"></i></a>
                                        </li>
                                        <li><a href="#"><i className="fa fa-facebook"></i></a>
                                        </li>
                                        <li><a href="#"><i className="fa fa-linkedin"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 col-lg-offset-2 text-center m-t-lg m-b-lg">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="features">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="navy-line"></div>
                                <h1>Even more great feautres</h1>
                                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. </p>
                            </div>
                        </div>
                        <div className="row features-block">
                            <div className="col-lg-3 features-text wow fadeInLeft">
                                <small>INSPINIA</small>
                                <h2>Perfectly designed </h2>
                                <p>INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with latest jQuery plugins.</p>
                                <a href="" className="btn btn-primary">Learn more</a>
                            </div>
                            <div className="col-lg-6 text-right m-t-n-lg wow zoomIn">
                                <img src="img/landing/iphone.jpg" className="img-responsive" alt="dashboard" />
                            </div>
                            <div className="col-lg-3 features-text text-right wow fadeInRight">
                                <small>INSPINIA</small>
                                <h2>Perfectly designed </h2>
                                <p>INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with latest jQuery plugins.</p>
                                <a href="" className="btn btn-primary">Learn more</a>
                            </div>
                        </div>
                    </div>

                </section>

                <section className="timeline gray-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="navy-line"></div>
                                <h1>Our workflow</h1>
                                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. </p>
                            </div>
                        </div>
                        <div className="row features-block">

                            <div className="col-lg-12">
                                <div id="vertical-timeline" className="vertical-container light-timeline center-orientation">
                                    <div className="vertical-timeline-block">
                                        <div className="vertical-timeline-icon navy-bg">
                                            <i className="fa fa-briefcase"></i>
                                        </div>

                                        <div className="vertical-timeline-content">
                                            <h2>Meeting</h2>
                                            <p>Conference on the sales results for the previous year. Monica please examine sales trends in marketing and products. Below please find the current status of the sale.
                                            </p>
                                            <a href="#" className="btn btn-xs btn-primary"> More info</a>
                                            <span className="vertical-date"> Today <br /> <small>Dec 24</small> </span>
                                        </div>
                                    </div>

                                    <div className="vertical-timeline-block">
                                        <div className="vertical-timeline-icon navy-bg">
                                            <i className="fa fa-file-text"></i>
                                        </div>

                                        <div className="vertical-timeline-content">
                                            <h2>Decision</h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                                            <a href="#" className="btn btn-xs btn-primary"> More info</a>
                                            <span className="vertical-date"> Tomorrow <br /> <small>Dec 26</small> </span>
                                        </div>
                                    </div>

                                    <div className="vertical-timeline-block">
                                        <div className="vertical-timeline-icon navy-bg">
                                            <i className="fa fa-cogs"></i>
                                        </div>

                                        <div className="vertical-timeline-content">
                                            <h2>Implementation</h2>
                                            <p>Go to shop and find some products. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. </p>
                                            <a href="#" className="btn btn-xs btn-primary"> More info</a>
                                            <span className="vertical-date"> Monday <br /> <small>Jan 02</small> </span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </section>

                <section id="testimonials" className="navy-section testimonials" style={{ marginTop: 0 }}>

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center wow zoomIn">
                                <i className="fa fa-comment big-icon"></i>
                                <h1>
                                    What our users say
                                </h1>
                                <div className="testimonials-text">
                                    <i>"Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."</i>
                                </div>
                                <small>
                                    <strong>12.02.2014 - Andy Smith</strong>
                                </small>
                            </div>
                        </div>
                    </div>

                </section>

                <section className="comments gray-section" style={{ marginTop: 0 }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="navy-line"></div>
                                <h1>What our partners say</h1>
                                <p>Donec sed odio dui. Etiam porta sem malesuada. </p>
                            </div>
                        </div>
                        <div className="row features-block">
                            <div className="col-lg-4">
                                <div className="bubble">
                                    "Uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                                </div>
                                <div className="comments-avatar">
                                    <a href="" className="pull-left">
                                        <img alt="image" src="img/landing/avatar3.jpg" />
                                    </a>
                                    <div className="media-body">
                                        <div className="commens-name">
                                            Andrew Williams
                                        </div>
                                        <small className="text-muted">Company X from California</small>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="bubble">
                                    "Uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                                </div>
                                <div className="comments-avatar">
                                    <a href="" className="pull-left">
                                        <img alt="image" src="img/landing/avatar1.jpg" />
                                    </a>
                                    <div className="media-body">
                                        <div className="commens-name">
                                            Andrew Williams
                                        </div>
                                        <small className="text-muted">Company X from California</small>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="bubble">
                                    "Uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                                </div>
                                <div className="comments-avatar">
                                    <a href="" className="pull-left">
                                        <img alt="image" src="img/landing/avatar2.jpg" />
                                    </a>
                                    <div className="media-body">
                                        <div className="commens-name">
                                            Andrew Williams
                                        </div>
                                        <small className="text-muted">Company X from California</small>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>

                </section>

                <section className="features">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="navy-line"></div>
                                <h1>More and more extra great feautres</h1>
                                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-5 col-lg-offset-1 features-text">
                                <small>INSPINIA</small>
                                <h2>Perfectly designed </h2>
                                <i className="fa fa-bar-chart big-icon pull-right"></i>
                                <p>INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with.</p>
                            </div>
                            <div className="col-lg-5 features-text">
                                <small>INSPINIA</small>
                                <h2>Perfectly designed </h2>
                                <i className="fa fa-bolt big-icon pull-right"></i>
                                <p>INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-5 col-lg-offset-1 features-text">
                                <small>INSPINIA</small>
                                <h2>Perfectly designed </h2>
                                <i className="fa fa-clock-o big-icon pull-right"></i>
                                <p>INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with.</p>
                            </div>
                            <div className="col-lg-5 features-text">
                                <small>INSPINIA</small>
                                <h2>Perfectly designed </h2>
                                <i className="fa fa-users big-icon pull-right"></i>
                                <p>INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with.</p>
                            </div>
                        </div>
                    </div>

                </section>
                <section id="pricing" className="pricing">
                    <div className="container">
                        <div className="row m-b-lg">
                            <div className="col-lg-12 text-center">
                                <div className="navy-line"></div>
                                <h1>App Pricing</h1>
                                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 wow zoomIn">
                                <ul className="pricing-plan list-unstyled">
                                    <li className="pricing-title">
                                        Basic
                                    </li>
                                    <li className="pricing-desc">
                                        Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus.
                                    </li>
                                    <li className="pricing-price">
                                        <span>$16</span> / month
                                    </li>
                                    <li>
                                        Dashboards
                                    </li>
                                    <li>
                                        Projects view
                                    </li>
                                    <li>
                                        Contacts
                                    </li>
                                    <li>
                                        Calendar
                                    </li>
                                    <li>
                                        AngularJs
                                    </li>
                                    <li>
                                        <a className="btn btn-primary btn-xs" href="#">Signup</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-4 wow zoomIn">
                                <ul className="pricing-plan list-unstyled selected">
                                    <li className="pricing-title">
                                        Standard
                                    </li>
                                    <li className="pricing-desc">
                                        Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus.
                                    </li>
                                    <li className="pricing-price">
                                        <span>$22</span> / month
                                    </li>
                                    <li>
                                        Dashboards
                                    </li>
                                    <li>
                                        Projects view
                                    </li>
                                    <li>
                                        Contacts
                                    </li>
                                    <li>
                                        Calendar
                                    </li>
                                    <li>
                                        AngularJs
                                    </li>
                                    <li>
                                        <strong>Support platform</strong>
                                    </li>
                                    <li className="plan-action">
                                        <a className="btn btn-primary btn-xs" href="#">Signup</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-4 wow zoomIn">
                                <ul className="pricing-plan list-unstyled">
                                    <li className="pricing-title">
                                        Premium
                                    </li>
                                    <li className="pricing-desc">
                                        Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus.
                                    </li>
                                    <li className="pricing-price">
                                        <span>$160</span> / month
                                    </li>
                                    <li>
                                        Dashboards
                                    </li>
                                    <li>
                                        Projects view
                                    </li>
                                    <li>
                                        Contacts
                                    </li>
                                    <li>
                                        Calendar
                                    </li>
                                    <li>
                                        AngularJs
                                    </li>
                                    <li>
                                        <a className="btn btn-primary btn-xs" href="#">Signup</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row m-t-lg">
                            <div className="col-lg-8 col-lg-offset-2 text-center m-t-lg">
                                <p>*Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. <span className="navy">Various versions</span>  have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                            </div>
                        </div>
                    </div>

                </section>

                <section id="contact" className="gray-section contact">
                    <div className="container">
                        <div className="row m-b-lg">
                            <div className="col-lg-12 text-center">
                                <div className="navy-line"></div>
                                <h1>Contact Us</h1>
                                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.</p>
                            </div>
                        </div>
                        <div className="row m-b-lg">
                            <div className="col-lg-3 col-lg-offset-3">
                                <address>
                                    <strong><span className="navy">Company name, Inc.</span></strong><br />
                                    795 Folsom Ave, Suite 600<br />
                                    San Francisco, CA 94107<br />
                                    <abbr title="Phone">P:</abbr> (123) 456-7890
                                </address>
                            </div>
                            <div className="col-lg-4">
                                <p className="text-color">
                                    Consectetur adipisicing elit. Aut eaque, totam corporis laboriosam veritatis quis ad perspiciatis, totam corporis laboriosam veritatis, consectetur adipisicing elit quos non quis ad perspiciatis, totam corporis ea,
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <a href="mailto:test@email.com" className="btn btn-primary">Send us mail</a>
                                <p className="m-t-sm">
                                    Or follow us on social platform
                                </p>
                                <ul className="list-inline social-icon">
                                    <li><a href="#"><i className="fa fa-twitter"></i></a>
                                    </li>
                                    <li><a href="#"><i className="fa fa-facebook"></i></a>
                                    </li>
                                    <li><a href="#"><i className="fa fa-linkedin"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 col-lg-offset-2 text-center m-t-lg m-b-lg">
                                <p><strong>&copy; 2015 Company Name</strong><br /> consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default Home;
