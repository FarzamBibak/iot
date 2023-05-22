// dashboard-page.js

import React from 'react';
import { NavLink } from 'react-router-dom';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inpMsg: "0",
            inpNot: "0",
            userName: "Nima Fathi",
        }
    }
    componentWillMount() {
        var scriptSourceList = [
            "js/jquery-3.1.1.min.js",
            "js/bootstrap.min.js",
            "js/plugins/metisMenu/jquery.metisMenu.js",
            "js/plugins/slimscroll/jquery.slimscroll.min.js",
            "js/plugins/flot/jquery.flot.js",
            "js/plugins/flot/jquery.flot.tooltip.min.js",
            "js/plugins/flot/jquery.flot.spline.js",
            "js/plugins/flot/jquery.flot.resize.js",
            "js/plugins/flot/jquery.flot.pie.js",
            "js/plugins/flot/jquery.flot.symbol.js",
            "js/plugins/flot/curvedLines.js",
            "js/plugins/peity/jquery.peity.min.js",
            "js/demo/peity-demo.js",
            "js/plugins/pace/pace.min.js",
            "js/plugins/jquery-ui/jquery-ui.min.js",
            "js/plugins/jvectormap/jquery-jvectormap-2.0.2.min.js",
            "js/plugins/jvectormap/jquery-jvectormap-world-mill-en.js",
            // "js/plugins/sparkline/jquery.sparkline.min.js",
            // "js/demo/sparkline-demo.js",
            // "js/plugins/chartJs/Chart.min.js",
            "js/dashboardpage-script.js",
            "js/inspinia.js",
        ], script,
            linkHrefList = [
                "css/bootstrap.min.css",
                "font-awesome/css/font-awesome.min.css",
                "css/plugins/morris/morris-0.4.3.min.css",
                "css/animate.css",
                "css/style.css",
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
            <div id="wrapper">
                <nav className="navbar-default navbar-static-side" role="navigation">
                    <div className="sidebar-collapse">
                        <ul className="nav metismenu" id="side-menu">
                            <li className="nav-header">
                                <div className="dropdown profile-element"> <span>
                                    <img alt="image" className="img-circle" src="img/profile_small.jpg" />
                                </span>
                                    <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                                        <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold"> {this.state.userName}</strong>
                                        </span> <span className="text-muted text-xs block">Art Director <b className="caret"></b></span> </span> </a>
                                    <ul className="dropdown-menu animated fadeInRight m-t-xs">
                                        <li><a href="">Profile</a></li>
                                        <li><a href="">Projects</a></li>
                                        <li className="divider"></li>
                                        <li><a href="">Logout</a></li>
                                    </ul>
                                </div>
                                <div className="logo-element">
                                    iot
                                </div>
                            </li>
                            <li>
                                <a href=""><i className="fa fa-th-large"></i> <span className="nav-label">Dashboards</span> <span className="fa arrow"></span></a>
                                <ul className="nav nav-second-level">
                                    <li><a href="">Dashboard v.1</a></li>
                                    <li><a href="">Dashboard v.2</a></li>
                                    <li><a href="">Dashboard v.3</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href=""><i className="fa fa-diamond"></i> <span className="nav-label">Layouts</span><span className="fa arrow"></span></a>
                                <ul className='nav nav-second-level'>
                                    <li><a href=''>Test</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-bar-chart-o"></i> <span className="nav-label">Graphs</span><span className="fa arrow"></span></a>
                                <ul className="nav nav-second-level collapse">
                                    <li><a href="">Flot Charts</a></li>
                                    <li><a href="">Morris.js Charts</a></li>
                                    <li><a href="">Rickshaw Charts</a></li>
                                    <li><a href="">Chart.js</a></li>
                                    <li><a href="">Chartist</a></li>
                                    <li><a href="">c3 charts</a></li>
                                    <li><a href="">Peity Charts</a></li>
                                    <li><a href="">Sparkline Charts</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href=""><i className="fa fa-envelope"></i> <span className="nav-label">Mailbox </span><span className="label label-warning pull-right">16/24</span></a>
                                <ul className="nav nav-second-level collapse">
                                    <li><a href="">Inbox</a></li>
                                    <li><a href="">Email view</a></li>
                                    <li><a href="">Compose email</a></li>
                                    <li><a href="">Email templates</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href=""><i className="fa fa-pie-chart"></i> <span className="nav-label">Metrics</span>  </a>
                            </li>
                            <li>
                                <a href=""><i className="fa fa-flask"></i> <span className="nav-label">Widgets</span></a>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-edit"></i> <span className="nav-label">Forms</span><span className="fa arrow"></span></a>
                                <ul className="nav nav-second-level collapse">
                                    <li><a href="">Basic form</a></li>
                                    <li><a href="">Advanced Plugins</a></li>
                                    <li><a href="">Wizard</a></li>
                                    <li><a href="">File Upload</a></li>
                                    <li><a href="">Text Editor</a></li>
                                    <li><a href="">Autocomplete</a></li>
                                    <li><a href="">Markdown</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-desktop"></i> <span className="nav-label">App Views</span>  <span className="pull-right label label-primary">SPECIAL</span></a>
                                <ul className="nav nav-second-level collapse">
                                    <li><a href="">Contacts</a></li>
                                    <li><a href="">Profile</a></li>
                                    <li><a href="">Profile v.2</a></li>
                                    <li><a href="">Contacts v.2</a></li>
                                    <li><a href="">Projects</a></li>
                                    <li><a href="">Project detail</a></li>
                                    <li><a href="">Activity stream</a></li>
                                    <li><a href="">Teams board</a></li>
                                    <li><a href="">Social feed</a></li>
                                    <li><a href="">Clients</a></li>
                                    <li><a href="">Outlook view</a></li>
                                    <li><a href="">Vote list</a></li>
                                    <li><a href="">File manager</a></li>
                                    <li><a href="">Calendar</a></li>
                                    <li><a href="">Issue tracker</a></li>
                                    <li><a href="">Blog</a></li>
                                    <li><a href="">Article</a></li>
                                    <li><a href="">FAQ</a></li>
                                    <li><a href="">Timeline</a></li>
                                    <li><a href="">Pin board</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-files-o"></i> <span className="nav-label">Other Pages</span><span className="fa arrow"></span></a>
                                <ul className="nav nav-second-level collapse">
                                    <li><a href="">Search results</a></li>
                                    <li><a href="">Lockscreen</a></li>
                                    <li><a href="">Invoice</a></li>
                                    <li><a href="">Login</a></li>
                                    <li><a href="">Login v.2</a></li>
                                    <li><a href="">Forget password</a></li>
                                    <li><a href="">Register</a></li>
                                    <li><a href="">404 Page</a></li>
                                    <li><a href="">500 Page</a></li>
                                    <li><a href="">Empty page</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-globe"></i> <span className="nav-label">Miscellaneous</span><span className="label label-info pull-right">NEW</span></a>
                                <ul className="nav nav-second-level collapse">
                                    <li><a href="">Notification</a></li>
                                    <li><a href="">Nestable list</a></li>
                                    <li><a href="">Agile board</a></li>
                                    <li><a href="">Timeline v.2</a></li>
                                    <li><a href="">Diff</a></li>
                                    <li><a href="">PDF viewer</a></li>
                                    <li><a href="">i18 support</a></li>
                                    <li><a href="">Sweet alert</a></li>
                                    <li><a href="">Idle timer</a></li>
                                    <li><a href="">Truncate</a></li>
                                    <li><a href="">Password meter</a></li>
                                    <li><a href="">Spinners</a></li>
                                    <li><a href="">Spinners usage</a></li>
                                    <li><a href="">Live favicon</a></li>
                                    <li><a href="">Google maps</a></li>
                                    <li><a href="">Datamaps</a></li>
                                    <li><a href="">Social buttons</a></li>
                                    <li><a href="">Code editor</a></li>
                                    <li><a href="">Modal window</a></li>
                                    <li><a href="">Clipboard</a></li>
                                    <li><a href="">Text spinners</a></li>
                                    <li><a href="">Forum view</a></li>
                                    <li><a href="">Validation</a></li>
                                    <li><a href="">Tree view</a></li>
                                    <li><a href="">Loading buttons</a></li>
                                    <li><a href="">Chat view</a></li>
                                    <li><a href="">Masonry</a></li>
                                    <li><a href="">Tour</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-flask"></i> <span className="nav-label">UI Elements</span><span className="fa arrow"></span></a>
                                <ul className="nav nav-second-level collapse">
                                    <li><a href="">Typography</a></li>
                                    <li><a href="">Icons</a></li>
                                    <li><a href="">Draggable Panels</a></li> <li><a href="">Resizeable Panels</a></li>
                                    <li><a href="">Buttons</a></li>
                                    <li><a href="">Video</a></li>
                                    <li><a href="">Panels</a></li>
                                    <li><a href="">Tabs</a></li>
                                    <li><a href="">Notifications & Tooltips</a></li>
                                    <li><a href="">Helper css classes</a></li>
                                    <li><a href="">Badges, Labels, Progress</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href=""><i className="fa fa-laptop"></i> <span className="nav-label">Grid options</span></a>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-table"></i> <span className="nav-label">Tables</span><span className="fa arrow"></span></a>
                                <ul className="nav nav-second-level collapse">
                                    <li><a href="">Static Tables</a></li>
                                    <li><a href="">Data Tables</a></li>
                                    <li><a href="">Foo Tables</a></li>
                                    <li><a href="">jqGrid</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-shopping-cart"></i> <span className="nav-label">E-commerce</span><span className="fa arrow"></span></a>
                                <ul className="nav nav-second-level collapse">
                                    <li><a href="">Products grid</a></li>
                                    <li><a href="">Products list</a></li>
                                    <li><a href="">Product edit</a></li>
                                    <li><a href="">Product detail</a></li>
                                    <li><a href="">Cart</a></li>
                                    <li><a href="">Orders</a></li>
                                    <li><a href="">Credit Card form</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-picture-o"></i> <span className="nav-label">Gallery</span><span className="fa arrow"></span></a>
                                <ul className="nav nav-second-level collapse">
                                    <li><a href="">Lightbox Gallery</a></li>
                                    <li><a href="">Slick Carousel</a></li>
                                    <li><a href="">Bootstrap Carousel</a></li>

                                </ul>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-sitemap"></i> <span className="nav-label">Menu Levels </span><span className="fa arrow"></span></a>
                                <ul className="nav nav-second-level collapse">
                                    <li>
                                        <a href="#">Third Level <span className="fa arrow"></span></a>
                                        <ul className="nav nav-third-level">
                                            <li>
                                                <a href="#">Third Level Item</a>
                                            </li>
                                            <li>
                                                <a href="#">Third Level Item</a>
                                            </li>
                                            <li>
                                                <a href="#">Third Level Item</a>
                                            </li>

                                        </ul>
                                    </li>
                                    <li><a href="#">Second Level Item</a></li>
                                    <li>
                                        <a href="#">Second Level Item</a></li>
                                    <li>
                                        <a href="#">Second Level Item</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href=""><i className="fa fa-magic"></i> <span className="nav-label">CSS Animations </span><span className="label label-info pull-right">62</span></a>
                            </li>
                            <li className="landing_link">
                                <a href=""><i className="fa fa-star"></i> <span className="nav-label">Landing Page</span> <span className="label label-warning pull-right">NEW</span></a>
                            </li>
                            <li className="special_link">
                                <a href=""><i className="fa fa-database"></i> <span className="nav-label">Package</span></a>
                            </li>
                        </ul>

                    </div>
                </nav>

                <div id="page-wrapper" className="gray-bg">
                    <div className="row border-bottom">
                        <nav className="navbar navbar-static-top white-bg" role="navigation" style={{ marginBottom: 0 }}>
                            <div className="navbar-header">
                                <a className="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i className="fa fa-bars"></i> </a>
                            </div>
                            <ul className="nav navbar-top-links navbar-right">
                                <li>
                                    <span className="m-r-sm text-muted welcome-message">Welcome to iot Admin Theme.</span>
                                </li>
                                <li className="dropdown">
                                    <a className="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                                        <i className="fa fa-envelope"></i>  <span className="label label-warning"> {this.state.inpMsg} </span>
                                    </a>
                                    <ul className="dropdown-menu dropdown-messages">
                                        <li>
                                            <div className="dropdown-messages-box">
                                                <a href="" className="pull-left">
                                                    <img alt="image" className="img-circle" src="img/a7.jpg" />
                                                </a>
                                                <div>
                                                    <small className="pull-right">46h ago</small>
                                                    <strong>Mike Loreipsum</strong> started following <strong>Monica Smith</strong>. <br />
                                                    <small className="text-muted">3 days ago at 7:58 pm - 10.06.2014</small>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="divider"></li>
                                        <li>
                                            <div className="dropdown-messages-box">
                                                <a href="" className="pull-left">
                                                    <img alt="image" className="img-circle" src="img/a4.jpg" />
                                                </a>
                                                <div>
                                                    <small className="pull-right text-navy">5h ago</small>
                                                    <strong>Chris Johnatan Overtunk</strong> started following <strong>Monica Smith</strong>. <br />
                                                    <small className="text-muted">Yesterday 1:21 pm - 11.06.2014</small>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="divider"></li>
                                        <li>
                                            <div className="dropdown-messages-box">
                                                <a href="" className="pull-left">
                                                    <img alt="image" className="img-circle" src="img/profile.jpg" />
                                                </a>
                                                <div>
                                                    <small className="pull-right">23h ago</small>
                                                    <strong>Monica Smith</strong> love <strong>Kim Smith</strong>. <br />
                                                    <small className="text-muted">2 days ago at 2:30 am - 11.06.2014</small>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="divider"></li>
                                        <li>
                                            <div className="text-center link-block">
                                                <a href="">
                                                    <i className="fa fa-envelope"></i> <strong>Read All Messages</strong>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a className="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                                        <i className="fa fa-bell"></i>  <span className="label label-primary">{this.state.inpNot}</span>
                                    </a>
                                    <ul className="dropdown-menu dropdown-alerts">
                                        <li>
                                            <a href="">
                                                <div>
                                                    <i className="fa fa-envelope fa-fw"></i> You have 16 messages
                                                    <span className="pull-right text-muted small">4 minutes ago</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="divider"></li>
                                        <li>
                                            <a href="">
                                                <div>
                                                    <i className="fa fa-twitter fa-fw"></i> 3 New Followers
                                                    <span className="pull-right text-muted small">12 minutes ago</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="divider"></li>
                                        <li>
                                            <a href="">
                                                <div>
                                                    <i className="fa fa-upload fa-fw"></i> Server Rebooted
                                                    <span className="pull-right text-muted small">4 minutes ago</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="divider"></li>
                                        <li>
                                            <div className="text-center link-block">
                                                <a href="">
                                                    <strong>See All Alerts</strong>
                                                    <i className="fa fa-angle-right"></i>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </li>


                                <li>
                                    <NavLink exact to="/login">
                                        <i className="fa fa-sign-out"></i> Log out
                                    </NavLink>
                                </li>
                                <li>
                                    <a className="right-sidebar-toggle">
                                        <i className="fa fa-tasks"></i>
                                    </a>
                                </li>
                            </ul>

                        </nav>
                    </div>
                    {/* <div class="row wrapper border-bottom white-bg page-heading">
                        <div class="col-lg-10">
                            <h2>Home</h2>
                            <ol class="breadcrumb">
                                <li className='active'>
                                    <NavLink exact to="/dashboard" ><strong>Home</strong></NavLink>
                                </li>
                            </ol>
                        </div>
                        <div class="col-lg-2">

                        </div>
                    </div> */}


                    <div className="wrapper wrapper-content">
                        <div className="row">
                            {/* body options */}
                        </div>
                    </div>


                    <div className="footer">
                        <div>
                            <strong>Copyright</strong> pypi &copy; 2014-2017
                        </div>
                    </div>

                </div>
                <div id="right-sidebar">
                    <div className="sidebar-container">

                        <ul className="nav nav-tabs navs-3">

                            <li className="active"><a data-toggle="tab" href="#tab-1">
                                Notes
                            </a></li>
                            <li><a data-toggle="tab" href="#tab-2">
                                Projects
                            </a></li>
                            <li className=""><a data-toggle="tab" href="#tab-3">
                                <i className="fa fa-gear"></i>
                            </a></li>
                        </ul>

                        <div className="tab-content">


                            <div id="tab-1" className="tab-pane active">

                                <div className="sidebar-title">
                                    <h3> <i className="fa fa-comments-o"></i> Latest Notes</h3>
                                    <small><i className="fa fa-tim"></i> You have 10 new message.</small>
                                </div>

                                <div>

                                    <div className="sidebar-message">
                                        <a href="#">
                                            <div className="pull-left text-center">
                                                <img alt="image" className="img-circle message-avatar" src="img/a1.jpg" />

                                                <div className="m-t-xs">
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                </div>
                                            </div>
                                            <div className="media-body">

                                                There are many variations of passages of Lorem Ipsum available.
                                                <br />
                                                <small className="text-muted">Today 4:21 pm</small>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="sidebar-message">
                                        <a href="#">
                                            <div className="pull-left text-center">
                                                <img alt="image" className="img-circle message-avatar" src="img/a2.jpg" />
                                            </div>
                                            <div className="media-body">
                                                The point of using Lorem Ipsum is that it has a more-or-less normal.
                                                <br />
                                                <small className="text-muted">Yesterday 2:45 pm</small>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="sidebar-message">
                                        <a href="#">
                                            <div className="pull-left text-center">
                                                <img alt="image" className="img-circle message-avatar" src="img/a3.jpg" />

                                                <div className="m-t-xs">
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                </div>
                                            </div>
                                            <div className="media-body">
                                                Mevolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                                <br />
                                                <small className="text-muted">Yesterday 1:10 pm</small>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="sidebar-message">
                                        <a href="#">
                                            <div className="pull-left text-center">
                                                <img alt="image" className="img-circle message-avatar" src="img/a4.jpg" />
                                            </div>

                                            <div className="media-body">
                                                Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
                                                <br />
                                                <small className="text-muted">Monday 8:37 pm</small>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="sidebar-message">
                                        <a href="#">
                                            <div className="pull-left text-center">
                                                <img alt="image" className="img-circle message-avatar" src="img/a8.jpg" />
                                            </div>
                                            <div className="media-body">

                                                All the Lorem Ipsum generators on the Internet tend to repeat.
                                                <br />
                                                <small className="text-muted">Today 4:21 pm</small>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="sidebar-message">
                                        <a href="#">
                                            <div className="pull-left text-center">
                                                <img alt="image" className="img-circle message-avatar" src="img/a7.jpg" />
                                            </div>
                                            <div className="media-body">
                                                Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                                <br />
                                                <small className="text-muted">Yesterday 2:45 pm</small>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="sidebar-message">
                                        <a href="#">
                                            <div className="pull-left text-center">
                                                <img alt="image" className="img-circle message-avatar" src="img/a3.jpg" />

                                                <div className="m-t-xs">
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                </div>
                                            </div>
                                            <div className="media-body">
                                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below.
                                                <br />
                                                <small className="text-muted">Yesterday 1:10 pm</small>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="sidebar-message">
                                        <a href="#">
                                            <div className="pull-left text-center">
                                                <img alt="image" className="img-circle message-avatar" src="img/a4.jpg" />
                                            </div>
                                            <div className="media-body">
                                                Uncover many web sites still in their infancy. Various versions have.
                                                <br />
                                                <small className="text-muted">Monday 8:37 pm</small>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                            </div>

                            <div id="tab-2" className="tab-pane">

                                <div className="sidebar-title">
                                    <h3> <i className="fa fa-cube"></i> Latest projects</h3>
                                    <small><i className="fa fa-tim"></i> You have 14 projects. 10 not completed.</small>
                                </div>

                                <ul className="sidebar-list">
                                    <li>
                                        <a href="#">
                                            <div className="small pull-right m-t-xs">9 hours ago</div>
                                            <h4>Business valuation</h4>
                                            It is a long established fact that a reader will be distracted.

                                            <div className="small">Completion with: 22%</div>
                                            <div className="progress progress-mini">
                                                <div style={{ width: "22%" }} className="progress-bar progress-bar-warning"></div>
                                            </div>
                                            <div className="small text-muted m-t-xs">Project end: 4:00 pm - 12.06.2014</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="small pull-right m-t-xs">9 hours ago</div>
                                            <h4>Contract with Company </h4>
                                            Many desktop publishing packages and web page editors.

                                            <div className="small">Completion with: 48%</div>
                                            <div className="progress progress-mini">
                                                <div style={{ width: "48%" }} className="progress-bar"></div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="small pull-right m-t-xs">9 hours ago</div>
                                            <h4>Meeting</h4>
                                            By the readable content of a page when looking at its layout.

                                            <div className="small">Completion with: 14%</div>
                                            <div className="progress progress-mini">
                                                <div style={{ width: "14%" }} className="progress-bar progress-bar-info"></div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="label label-primary pull-right">NEW</span>
                                            <h4>The generated</h4>
                                            {/* <!--<div className="small pull-right m-t-xs">9 hours ago</div>--> */}
                                            There are many variations of passages of Lorem Ipsum available.
                                            <div className="small">Completion with: 22%</div>
                                            <div className="small text-muted m-t-xs">Project end: 4:00 pm - 12.06.2014</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="small pull-right m-t-xs">9 hours ago</div>
                                            <h4>Business valuation</h4>
                                            It is a long established fact that a reader will be distracted.

                                            <div className="small">Completion with: 22%</div>
                                            <div className="progress progress-mini">
                                                <div style={{ width: "22%" }} className="progress-bar progress-bar-warning"></div>
                                            </div>
                                            <div className="small text-muted m-t-xs">Project end: 4:00 pm - 12.06.2014</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="small pull-right m-t-xs">9 hours ago</div>
                                            <h4>Contract with Company </h4>
                                            Many desktop publishing packages and web page editors.

                                            <div className="small">Completion with: 48%</div>
                                            <div className="progress progress-mini">
                                                <div style={{ width: "48%" }} className="progress-bar"></div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="small pull-right m-t-xs">9 hours ago</div>
                                            <h4>Meeting</h4>
                                            By the readable content of a page when looking at its layout.

                                            <div className="small">Completion with: 14%</div>
                                            <div className="progress progress-mini">
                                                <div style={{ width: "14%" }} className="progress-bar progress-bar-info"></div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="label label-primary pull-right">NEW</span>
                                            <h4>The generated</h4>
                                            {/* <!--<div className="small pull-right m-t-xs">9 hours ago</div>--> */}
                                            There are many variations of passages of Lorem Ipsum available.
                                            <div className="small">Completion with: 22%</div>
                                            <div className="small text-muted m-t-xs">Project end: 4:00 pm - 12.06.2014</div>
                                        </a>
                                    </li>

                                </ul>

                            </div>

                            <div id="tab-3" className="tab-pane">

                                <div className="sidebar-title">
                                    <h3><i className="fa fa-gears"></i> Settings</h3>
                                    <small><i className="fa fa-tim"></i> You have 14 projects. 10 not completed.</small>
                                </div>

                                <div className="setings-item">
                                    <span>
                                        Show notifications
                                    </span>
                                    <div className="switch">
                                        <div className="onoffswitch">
                                            <input type="checkbox" name="collapsemenu" className="onoffswitch-checkbox" id="example" />
                                            <label className="onoffswitch-label" htmlFor="example">
                                                <span className="onoffswitch-inner"></span>
                                                <span className="onoffswitch-switch"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="setings-item">
                                    <span>
                                        Disable Chat
                                    </span>
                                    <div className="switch">
                                        <div className="onoffswitch">
                                            <input type="checkbox" name="collapsemenu" className="onoffswitch-checkbox" id="example2" />
                                            <label className="onoffswitch-label" htmlFor="example2">
                                                <span className="onoffswitch-inner"></span>
                                                <span className="onoffswitch-switch"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="setings-item">
                                    <span>
                                        Enable history
                                    </span>
                                    <div className="switch">
                                        <div className="onoffswitch">
                                            <input type="checkbox" name="collapsemenu" className="onoffswitch-checkbox" id="example3" />
                                            <label className="onoffswitch-label" htmlFor="example3">
                                                <span className="onoffswitch-inner"></span>
                                                <span className="onoffswitch-switch"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="setings-item">
                                    <span>
                                        Show charts
                                    </span>
                                    <div className="switch">
                                        <div className="onoffswitch">
                                            <input type="checkbox" name="collapsemenu" className="onoffswitch-checkbox" id="example4" />
                                            <label className="onoffswitch-label" htmlFor="example4">
                                                <span className="onoffswitch-inner"></span>
                                                <span className="onoffswitch-switch"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="setings-item">
                                    <span>
                                        Offline users
                                    </span>
                                    <div className="switch">
                                        <div className="onoffswitch">
                                            <input type="checkbox" name="collapsemenu" className="onoffswitch-checkbox" id="example5" />
                                            <label className="onoffswitch-label" htmlFor="example5">
                                                <span className="onoffswitch-inner"></span>
                                                <span className="onoffswitch-switch"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="setings-item">
                                    <span>
                                        Global search
                                    </span>
                                    <div className="switch">
                                        <div className="onoffswitch">
                                            <input type="checkbox" name="collapsemenu" className="onoffswitch-checkbox" id="example6" />
                                            <label className="onoffswitch-label" htmlFor="example6">
                                                <span className="onoffswitch-inner"></span>
                                                <span className="onoffswitch-switch"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="setings-item">
                                    <span>
                                        Update everyday
                                    </span>
                                    <div className="switch">
                                        <div className="onoffswitch">
                                            <input type="checkbox" name="collapsemenu" className="onoffswitch-checkbox" id="example7" />
                                            <label className="onoffswitch-label" htmlFor="example7">
                                                <span className="onoffswitch-inner"></span>
                                                <span className="onoffswitch-switch"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="sidebar-content">
                                    <h4>Settings</h4>
                                    <div className="small">
                                        I belive that. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        And typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                        Over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
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

export default Dashboard;
