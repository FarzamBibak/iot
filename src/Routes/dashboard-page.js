import React from 'react';
import { NavLink } from 'react-router-dom';

class Dashboard extends React.Component {
    componentDidMount() {
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
            "js/inspinia.js",
            "js/plugins/pace/pace.min.js",
            "js/plugins/jquery-ui/jquery-ui.min.js",
            "js/plugins/jvectormap/jquery-jvectormap-2.0.2.min.js",
            "js/plugins/jvectormap/jquery-jvectormap-world-mill-en.js",
            "js/plugins/sparkline/jquery.sparkline.min.js",
            "js/demo/sparkline-demo.js",
            "js/plugins/chartJs/Chart.min.js",
            "js/dashboardpage-script.js"
        ], script,
            linkHrefList = [
                "css/bootstrap.min.css",
                "font-awesome/css/font-awesome.min.css",
                "css/plugins/morris/morris-0.4.3.min.css",
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

                <div id="wrapper">
                    <nav className="navbar-default navbar-static-side" role="navigation">
                        <div className="sidebar-collapse">
                            <ul className="nav metismenu" id="side-menu">
                                <li className="nav-header">
                                    <div className="dropdown profile-element"> <span>
                                        <img alt="image" className="img-circle" src="img/profile_small.jpg" />
                                    </span>
                                        <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                                            <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold">David Williams</strong>
                                            </span> <span className="text-muted text-xs block">Art Director <b className="caret"></b></span> </span> </a>
                                        <ul className="dropdown-menu animated fadeInRight m-t-xs">
                                            <li><a href="">Profile</a></li>
                                            <li><a href="">Contacts</a></li>
                                            <li><a href="">Mailbox</a></li>
                                            <li className="divider"></li>
                                            <li><a href="">Logout</a></li>
                                        </ul>
                                    </div>
                                    <div className="logo-element">
                                        IN+
                                    </div>
                                </li>
                                <li className="active">
                                    <a href=""><i className="fa fa-th-large"></i> <span className="nav-label">Dashboards</span> <span className="fa arrow"></span></a>
                                    <ul className="nav nav-second-level">
                                        <li><a href="">Dashboard v.1</a></li>
                                        <li><a href="">Dashboard v.2</a></li>
                                        <li><a href="">Dashboard v.3</a></li>
                                        <li className="active"><a href="">Dashboard v.4</a></li>
                                        <li><a href="">Dashboard v.5 </a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href=""><i className="fa fa-diamond"></i> <span className="nav-label">Layouts</span></a>
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
                                        <li><a href="contacts.html">Contacts</a></li>
                                        <li><a href="profile.html">Profile</a></li>
                                        <li><a href="profile_2.html">Profile v.2</a></li>
                                        <li><a href="contacts_2.html">Contacts v.2</a></li>
                                        <li><a href="projects.html">Projects</a></li>
                                        <li><a href="project_detail.html">Project detail</a></li>
                                        <li><a href="activity_stream.html">Activity stream</a></li>
                                        <li><a href="teams_board.html">Teams board</a></li>
                                        <li><a href="social_feed.html">Social feed</a></li>
                                        <li><a href="clients.html">Clients</a></li>
                                        <li><a href="full_height.html">Outlook view</a></li>
                                        <li><a href="vote_list.html">Vote list</a></li>
                                        <li><a href="file_manager.html">File manager</a></li>
                                        <li><a href="calendar.html">Calendar</a></li>
                                        <li><a href="issue_tracker.html">Issue tracker</a></li>
                                        <li><a href="blog.html">Blog</a></li>
                                        <li><a href="article.html">Article</a></li>
                                        <li><a href="faq.html">FAQ</a></li>
                                        <li><a href="timeline.html">Timeline</a></li>
                                        <li><a href="pin_board.html">Pin board</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-files-o"></i> <span className="nav-label">Other Pages</span><span className="fa arrow"></span></a>
                                    <ul className="nav nav-second-level collapse">
                                        <li><a href="search_results.html">Search results</a></li>
                                        <li><a href="lockscreen.html">Lockscreen</a></li>
                                        <li><a href="invoice.html">Invoice</a></li>
                                        <li><a href="login.html">Login</a></li>
                                        <li><a href="login_two_columns.html">Login v.2</a></li>
                                        <li><a href="forgot_password.html">Forget password</a></li>
                                        <li><a href="register.html">Register</a></li>
                                        <li><a href="404.html">404 Page</a></li>
                                        <li><a href="500.html">500 Page</a></li>
                                        <li><a href="empty_page.html">Empty page</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-globe"></i> <span className="nav-label">Miscellaneous</span><span className="label label-info pull-right">NEW</span></a>
                                    <ul className="nav nav-second-level collapse">
                                        <li><a href="toastr_notifications.html">Notification</a></li>
                                        <li><a href="nestable_list.html">Nestable list</a></li>
                                        <li><a href="agile_board.html">Agile board</a></li>
                                        <li><a href="timeline_2.html">Timeline v.2</a></li>
                                        <li><a href="diff.html">Diff</a></li>
                                        <li><a href="pdf_viewer.html">PDF viewer</a></li>
                                        <li><a href="i18support.html">i18 support</a></li>
                                        <li><a href="sweetalert.html">Sweet alert</a></li>
                                        <li><a href="idle_timer.html">Idle timer</a></li>
                                        <li><a href="truncate.html">Truncate</a></li>
                                        <li><a href="password_meter.html">Password meter</a></li>
                                        <li><a href="spinners.html">Spinners</a></li>
                                        <li><a href="spinners_usage.html">Spinners usage</a></li>
                                        <li><a href="tinycon.html">Live favicon</a></li>
                                        <li><a href="google_maps.html">Google maps</a></li>
                                        <li><a href="datamaps.html">Datamaps</a></li>
                                        <li><a href="social_buttons.html">Social buttons</a></li>
                                        <li><a href="code_editor.html">Code editor</a></li>
                                        <li><a href="modal_window.html">Modal window</a></li>
                                        <li><a href="clipboard.html">Clipboard</a></li>
                                        <li><a href="text_spinners.html">Text spinners</a></li>
                                        <li><a href="forum_main.html">Forum view</a></li>
                                        <li><a href="validation.html">Validation</a></li>
                                        <li><a href="tree_view.html">Tree view</a></li>
                                        <li><a href="loading_buttons.html">Loading buttons</a></li>
                                        <li><a href="chat_view.html">Chat view</a></li>
                                        <li><a href="masonry.html">Masonry</a></li>
                                        <li><a href="tour.html">Tour</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-flask"></i> <span className="nav-label">UI Elements</span><span className="fa arrow"></span></a>
                                    <ul className="nav nav-second-level collapse">
                                        <li><a href="typography.html">Typography</a></li>
                                        <li><a href="icons.html">Icons</a></li>
                                        <li><a href="draggable_panels.html">Draggable Panels</a></li> <li><a href="resizeable_panels.html">Resizeable Panels</a></li>
                                        <li><a href="buttons.html">Buttons</a></li>
                                        <li><a href="video.html">Video</a></li>
                                        <li><a href="tabs_panels.html">Panels</a></li>
                                        <li><a href="tabs.html">Tabs</a></li>
                                        <li><a href="notifications.html">Notifications & Tooltips</a></li>
                                        <li><a href="helper_classes.html">Helper css classes</a></li>
                                        <li><a href="badges_labels.html">Badges, Labels, Progress</a></li>
                                    </ul>
                                </li>

                                <li>
                                    <a href="grid_options.html"><i className="fa fa-laptop"></i> <span className="nav-label">Grid options</span></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-table"></i> <span className="nav-label">Tables</span><span className="fa arrow"></span></a>
                                    <ul className="nav nav-second-level collapse">
                                        <li><a href="table_basic.html">Static Tables</a></li>
                                        <li><a href="table_data_tables.html">Data Tables</a></li>
                                        <li><a href="table_foo_table.html">Foo Tables</a></li>
                                        <li><a href="jq_grid.html">jqGrid</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-shopping-cart"></i> <span className="nav-label">E-commerce</span><span className="fa arrow"></span></a>
                                    <ul className="nav nav-second-level collapse">
                                        <li><a href="ecommerce_products_grid.html">Products grid</a></li>
                                        <li><a href="ecommerce_product_list.html">Products list</a></li>
                                        <li><a href="ecommerce_product.html">Product edit</a></li>
                                        <li><a href="ecommerce_product_detail.html">Product detail</a></li>
                                        <li><a href="ecommerce-cart.html">Cart</a></li>
                                        <li><a href="ecommerce-orders.html">Orders</a></li>
                                        <li><a href="ecommerce_payments.html">Credit Card form</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-picture-o"></i> <span className="nav-label">Gallery</span><span className="fa arrow"></span></a>
                                    <ul className="nav nav-second-level collapse">
                                        <li><a href="basic_gallery.html">Lightbox Gallery</a></li>
                                        <li><a href="slick_carousel.html">Slick Carousel</a></li>
                                        <li><a href="carousel.html">Bootstrap Carousel</a></li>

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
                                    <a href="css_animation.html"><i className="fa fa-magic"></i> <span className="nav-label">CSS Animations </span><span className="label label-info pull-right">62</span></a>
                                </li>
                                <li className="landing_link">
                                    <a target="_blank" href="landing.html"><i className="fa fa-star"></i> <span className="nav-label">Landing Page</span> <span className="label label-warning pull-right">NEW</span></a>
                                </li>
                                <li className="special_link">
                                    <a href="package.html"><i className="fa fa-database"></i> <span className="nav-label">Package</span></a>
                                </li>
                            </ul>

                        </div>
                    </nav>

                    <div id="page-wrapper" className="gray-bg">
                        <div className="row border-bottom">
                            <nav className="navbar navbar-static-top white-bg" role="navigation" style={{ marginBottom: 0 }}>
                                <div className="navbar-header">
                                    <a className="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i className="fa fa-bars"></i> </a>
                                    <form role="search" className="navbar-form-custom" action="search_results.html">
                                        <div className="form-group">
                                            <input type="text" placeholder="Search for something..." className="form-control" name="top-search" id="top-search" />
                                        </div>
                                    </form>
                                </div>
                                <ul className="nav navbar-top-links navbar-right">
                                    <li>
                                        <span className="m-r-sm text-muted welcome-message">Welcome to INSPINIA+ Admin Theme.</span>
                                    </li>
                                    <li className="dropdown">
                                        <a className="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                                            <i className="fa fa-envelope"></i>  <span className="label label-warning">16</span>
                                        </a>
                                        <ul className="dropdown-menu dropdown-messages">
                                            <li>
                                                <div className="dropdown-messages-box">
                                                    <a href="profile.html" className="pull-left">
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
                                                    <a href="profile.html" className="pull-left">
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
                                                    <a href="profile.html" className="pull-left">
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
                                                    <a href="mailbox.html">
                                                        <i className="fa fa-envelope"></i> <strong>Read All Messages</strong>
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a className="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                                            <i className="fa fa-bell"></i>  <span className="label label-primary">8</span>
                                        </a>
                                        <ul className="dropdown-menu dropdown-alerts">
                                            <li>
                                                <a href="mailbox.html">
                                                    <div>
                                                        <i className="fa fa-envelope fa-fw"></i> You have 16 messages
                                                        <span className="pull-right text-muted small">4 minutes ago</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="divider"></li>
                                            <li>
                                                <a href="profile.html">
                                                    <div>
                                                        <i className="fa fa-twitter fa-fw"></i> 3 New Followers
                                                        <span className="pull-right text-muted small">12 minutes ago</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="divider"></li>
                                            <li>
                                                <a href="grid_options.html">
                                                    <div>
                                                        <i className="fa fa-upload fa-fw"></i> Server Rebooted
                                                        <span className="pull-right text-muted small">4 minutes ago</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="divider"></li>
                                            <li>
                                                <div className="text-center link-block">
                                                    <a href="notifications.html">
                                                        <strong>See All Alerts</strong>
                                                        <i className="fa fa-angle-right"></i>
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>


                                    <li>
                                        <a href="login.html">
                                            <i className="fa fa-sign-out"></i> Log out
                                        </a>
                                    </li>
                                    <li>
                                        <a className="right-sidebar-toggle">
                                            <i className="fa fa-tasks"></i>
                                        </a>
                                    </li>
                                </ul>

                            </nav>
                        </div>


                        <div className="wrapper wrapper-content">
                            <div className="row">
                                <div className="col-lg-2">
                                    <div className="ibox float-e-margins">
                                        <div className="ibox-title">
                                            <span className="label label-success pull-right">Monthly</span>
                                            <h5>Views</h5>
                                        </div>
                                        <div className="ibox-content">
                                            <h1 className="no-margins">386,200</h1>
                                            <div className="stat-percent font-bold text-success">98% <i className="fa fa-bolt"></i></div>
                                            <small>Total views</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div className="ibox float-e-margins">
                                        <div className="ibox-title">
                                            <span className="label label-info pull-right">Annual</span>
                                            <h5>Orders</h5>
                                        </div>
                                        <div className="ibox-content">
                                            <h1 className="no-margins">80,800</h1>
                                            <div className="stat-percent font-bold text-info">20% <i className="fa fa-level-up"></i></div>
                                            <small>New orders</small>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="ibox float-e-margins">
                                        <div className="ibox-title">
                                            <span className="label label-primary pull-right">Today</span>
                                            <h5>visits</h5>
                                        </div>
                                        <div className="ibox-content">

                                            <div className="row">
                                                <div className="col-md-6">
                                                    <h1 className="no-margins">406,42</h1>
                                                    <div className="font-bold text-navy">44% <i className="fa fa-level-up"></i> <small>Rapid pace</small></div>
                                                </div>
                                                <div className="col-md-6">
                                                    <h1 className="no-margins">206,12</h1>
                                                    <div className="font-bold text-navy">22% <i className="fa fa-level-up"></i> <small>Slow pace</small></div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="ibox float-e-margins">
                                        <div className="ibox-title">
                                            <h5>Monthly income</h5>
                                            <div className="ibox-tools">
                                                <span className="label label-primary">Updated 12.2015</span>
                                            </div>
                                        </div>
                                        <div className="ibox-content no-padding">
                                            <div className="flot-chart m-t-lg" style={{ height: "55px" }}>
                                                <div className="flot-chart-content" id="flot-chart1"></div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="ibox float-e-margins">
                                        <div className="ibox-content">
                                            <div>
                                                <span className="pull-right text-right">
                                                    <small>Average value of sales in the past month in: <strong>United states</strong></small>
                                                    <br />
                                                    All sales: 162,862
                                                </span>
                                                <h3 className="font-bold no-margins">
                                                    Half-year revenue margin
                                                </h3>
                                                <small>Sales marketing.</small>
                                            </div>

                                            <div className="m-t-sm">

                                                <div className="row">
                                                    <div className="col-md-8">
                                                        <div>
                                                            <canvas id="lineChart" height="114"></canvas>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <ul className="stat-list m-t-lg">
                                                            <li>
                                                                <h2 className="no-margins">2,346</h2>
                                                                <small>Total orders in period</small>
                                                                <div className="progress progress-mini">
                                                                    <div className="progress-bar" style={{ width: "48%" }}></div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <h2 className="no-margins ">4,422</h2>
                                                                <small>Orders in last month</small>
                                                                <div className="progress progress-mini">
                                                                    <div className="progress-bar" style={{ width: "60%" }}></div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="m-t-md">
                                                <small className="pull-right">
                                                    <i className="fa fa-clock-o"> </i>
                                                    Update on 16.07.2015
                                                </small>
                                                <small>
                                                    <strong>Analysis of sales:</strong> The value has been changed over time, and last month reached a level over $50,000.
                                                </small>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="ibox float-e-margins">
                                        <div className="ibox-title">
                                            <span className="label label-warning pull-right">Data has changed</span>
                                            <h5>User activity</h5>
                                        </div>
                                        <div className="ibox-content">
                                            <div className="row">
                                                <div className="col-xs-4">
                                                    <small className="stats-label">Pages / Visit</small>
                                                    <h4>236 321.80</h4>
                                                </div>

                                                <div className="col-xs-4">
                                                    <small className="stats-label">% New Visits</small>
                                                    <h4>46.11%</h4>
                                                </div>
                                                <div className="col-xs-4">
                                                    <small className="stats-label">Last week</small>
                                                    <h4>432.021</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ibox-content">
                                            <div className="row">
                                                <div className="col-xs-4">
                                                    <small className="stats-label">Pages / Visit</small>
                                                    <h4>643 321.10</h4>
                                                </div>

                                                <div className="col-xs-4">
                                                    <small className="stats-label">% New Visits</small>
                                                    <h4>92.43%</h4>
                                                </div>
                                                <div className="col-xs-4">
                                                    <small className="stats-label">Last week</small>
                                                    <h4>564.554</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ibox-content">
                                            <div className="row">
                                                <div className="col-xs-4">
                                                    <small className="stats-label">Pages / Visit</small>
                                                    <h4>436 547.20</h4>
                                                </div>

                                                <div className="col-xs-4">
                                                    <small className="stats-label">% New Visits</small>
                                                    <h4>150.23%</h4>
                                                </div>
                                                <div className="col-xs-4">
                                                    <small className="stats-label">Last week</small>
                                                    <h4>124.990</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="row">

                                <div className="col-lg-12">
                                    <div className="ibox float-e-margins">
                                        <div className="ibox-title">
                                            <h5>Custom responsive table </h5>
                                            <div className="ibox-tools">
                                                <a className="collapse-link">
                                                    <i className="fa fa-chevron-up"></i>
                                                </a>
                                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                                    <i className="fa fa-wrench"></i>
                                                </a>
                                                <ul className="dropdown-menu dropdown-user">
                                                    <li><a href="#">Config option 1</a>
                                                    </li>
                                                    <li><a href="#">Config option 2</a>
                                                    </li>
                                                </ul>
                                                <a className="close-link">
                                                    <i className="fa fa-times"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ibox-content">
                                            <div className="row">
                                                <div className="col-sm-9 m-b-xs">
                                                    <div data-toggle="buttons" className="btn-group">
                                                        <label className="btn btn-sm btn-white"> <input type="radio" id="option1" name="options" /> Day </label>
                                                        <label className="btn btn-sm btn-white active"> <input type="radio" id="option2" name="options" /> Week </label>
                                                        <label className="btn btn-sm btn-white"> <input type="radio" id="option3" name="options" /> Month </label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="input-group"><input type="text" placeholder="Search" className="input-sm form-control" /> <span className="input-group-btn">
                                                        <button type="button" className="btn btn-sm btn-primary"> Go!</button> </span></div>
                                                </div>
                                            </div>
                                            <div className="table-responsive">
                                                <table className="table table-striped">
                                                    <thead>
                                                        <tr>

                                                            <th>#</th>
                                                            <th>Project </th>
                                                            <th>Name </th>
                                                            <th>Phone </th>
                                                            <th>Company </th>
                                                            <th>Completed </th>
                                                            <th>Task</th>
                                                            <th>Date</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>Project <small>This is example of project</small></td>
                                                            <td>Patrick Smith</td>
                                                            <td>0800 051213</td>
                                                            <td>Inceptos Hymenaeos Ltd</td>
                                                            <td><span className="pie">0.52/1.561</span></td>
                                                            <td>20%</td>
                                                            <td>Jul 14, 2013</td>
                                                            <td><a href="#"><i className="fa fa-check text-navy"></i></a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>Alpha project</td>
                                                            <td>Alice Jackson</td>
                                                            <td>0500 780909</td>
                                                            <td>Nec Euismod In Company</td>
                                                            <td><span className="pie">6,9</span></td>
                                                            <td>40%</td>
                                                            <td>Jul 16, 2013</td>
                                                            <td><a href="#"><i className="fa fa-check text-navy"></i></a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td>Betha project</td>
                                                            <td>John Smith</td>
                                                            <td>0800 1111</td>
                                                            <td>Erat Volutpat</td>
                                                            <td><span className="pie">3,1</span></td>
                                                            <td>75%</td>
                                                            <td>Jul 18, 2013</td>
                                                            <td><a href="#"><i className="fa fa-check text-navy"></i></a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>Gamma project</td>
                                                            <td>Anna Jordan</td>
                                                            <td>(016977) 0648</td>
                                                            <td>Tellus Ltd</td>
                                                            <td><span className="pie">4,9</span></td>
                                                            <td>18%</td>
                                                            <td>Jul 22, 2013</td>
                                                            <td><a href="#"><i className="fa fa-check text-navy"></i></a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>Alpha project</td>
                                                            <td>Alice Jackson</td>
                                                            <td>0500 780909</td>
                                                            <td>Nec Euismod In Company</td>
                                                            <td><span className="pie">6,9</span></td>
                                                            <td>40%</td>
                                                            <td>Jul 16, 2013</td>
                                                            <td><a href="#"><i className="fa fa-check text-navy"></i></a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>Project <small>This is example of project</small></td>
                                                            <td>Patrick Smith</td>
                                                            <td>0800 051213</td>
                                                            <td>Inceptos Hymenaeos Ltd</td>
                                                            <td><span className="pie">0.52/1.561</span></td>
                                                            <td>20%</td>
                                                            <td>Jul 14, 2013</td>
                                                            <td><a href="#"><i className="fa fa-check text-navy"></i></a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>Gamma project</td>
                                                            <td>Anna Jordan</td>
                                                            <td>(016977) 0648</td>
                                                            <td>Tellus Ltd</td>
                                                            <td><span className="pie">4,9</span></td>
                                                            <td>18%</td>
                                                            <td>Jul 22, 2013</td>
                                                            <td><a href="#"><i className="fa fa-check text-navy"></i></a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>Project <small>This is example of project</small></td>
                                                            <td>Patrick Smith</td>
                                                            <td>0800 051213</td>
                                                            <td>Inceptos Hymenaeos Ltd</td>
                                                            <td><span className="pie">0.52/1.561</span></td>
                                                            <td>20%</td>
                                                            <td>Jul 14, 2013</td>
                                                            <td><a href="#"><i className="fa fa-check text-navy"></i></a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>Alpha project</td>
                                                            <td>Alice Jackson</td>
                                                            <td>0500 780909</td>
                                                            <td>Nec Euismod In Company</td>
                                                            <td><span className="pie">6,9</span></td>
                                                            <td>40%</td>
                                                            <td>Jul 16, 2013</td>
                                                            <td><a href="#"><i className="fa fa-check text-navy"></i></a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td>Betha project</td>
                                                            <td>John Smith</td>
                                                            <td>0800 1111</td>
                                                            <td>Erat Volutpat</td>
                                                            <td><span className="pie">3,1</span></td>
                                                            <td>75%</td>
                                                            <td>Jul 18, 2013</td>
                                                            <td><a href="#"><i className="fa fa-check text-navy"></i></a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>Gamma project</td>
                                                            <td>Anna Jordan</td>
                                                            <td>(016977) 0648</td>
                                                            <td>Tellus Ltd</td>
                                                            <td><span className="pie">4,9</span></td>
                                                            <td>18%</td>
                                                            <td>Jul 22, 2013</td>
                                                            <td><a href="#"><i className="fa fa-check text-navy"></i></a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>Alpha project</td>
                                                            <td>Alice Jackson</td>
                                                            <td>0500 780909</td>
                                                            <td>Nec Euismod In Company</td>
                                                            <td><span className="pie">6,9</span></td>
                                                            <td>40%</td>
                                                            <td>Jul 16, 2013</td>
                                                            <td><a href="#"><i className="fa fa-check text-navy"></i></a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>Project <small>This is example of project</small></td>
                                                            <td>Patrick Smith</td>
                                                            <td>0800 051213</td>
                                                            <td>Inceptos Hymenaeos Ltd</td>
                                                            <td><span className="pie">0.52/1.561</span></td>
                                                            <td>20%</td>
                                                            <td>Jul 14, 2013</td>
                                                            <td><a href="#"><i className="fa fa-check text-navy"></i></a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>Gamma project</td>
                                                            <td>Anna Jordan</td>
                                                            <td>(016977) 0648</td>
                                                            <td>Tellus Ltd</td>
                                                            <td><span className="pie">4,9</span></td>
                                                            <td>18%</td>
                                                            <td>Jul 22, 2013</td>
                                                            <td><a href="#"><i className="fa fa-check text-navy"></i></a></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>


                        <div className="footer">
                            <div className="pull-right">
                                10GB of <strong>250GB</strong> Free.
                            </div>
                            <div>
                                <strong>Copyright</strong> Example Company &copy; 2014-2017
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
            </div>
        )
    }
}

export default Dashboard;
