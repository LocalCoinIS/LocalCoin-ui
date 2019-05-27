import React from "react";
import HelpContent from "../../components/Utility/HelpContent";
import {toPairs} from "lodash-es";

class Content extends React.Component {
    render() {
        let path = toPairs(this.props.params)
            .map(p => p[1])
            .join("/");
        return (
            <div className="content">
                <div className="faq">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-8">
                                <HelpContent path={path || "index"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
