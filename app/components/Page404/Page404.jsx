import React from "react";
import {Link} from "react-router";
import {connect} from "alt-react";
import SettingsStore from "stores/SettingsStore";
import Translate from "react-translate-component";

import {logoLight} from "../../assets/brand-new-layout/img/images";

class Page404 extends React.Component {
    static defaultProps = {
        subtitle: "page_not_found_subtitle"
    };
    render() {
        return (
            <div className="page-404">
                <div className="page-404-container">
                    <div className="page-404-logo">
                        <img
                            src={logoLight}
                            height="50px"
                            width="50px"
                            alt="Logo"
                        />
                    </div>
                    <div className="page-404-title">
                        <Translate content="page404.page_not_found_title" />
                    </div>
                    <div className="page-404-subtitle">
                        <Translate content={"page404." + this.props.subtitle} />
                    </div>
                    <div className="page-404-button-back">
                        <Link to={"/"}>
                            <Translate
                                component="button"
                                className="btn large inverted flat"
                                content="page404.home"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default (Page404 = connect(
    Page404,
    {
        listenTo() {
            return [SettingsStore];
        },
        getProps() {
            return {
                theme: SettingsStore.getState().settings.get("themes")
            };
        }
    }
));
