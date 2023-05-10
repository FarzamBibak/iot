// test.js

import React from "react";

class Test extends React.Component {
    render() {
        return (
            <div id="test">
                <div className="row wrapper border-bottom white-bg page-heading">
                    <div className="col-lg-9">
                        <h2>This is main title</h2>
                        <ol className="breadcrumb">
                            <li>
                                <a href="index.html">This is</a>
                            </li>
                            <li className="active">
                                <strong>Breadcrumb</strong>
                            </li>
                            <li>
                                <strong>Test</strong>
                            </li>
                        </ol>
                    </div>
                    <div className="col-lg-3">
                        <div className="title-action">
                            <a href="" className="btn btn-primary">This is action area</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="wrapper wrapper-content">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Test;
