import React from "react";
import PropTypes from "prop-types";
import cnames from "classnames";
import counterpart from "counterpart";

class Tabs extends React.Component {
    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        const {items} = props;
        this.state = {
            openMobileSelect: false,
            activeTab: items.length > 0 ? [...items].shift().title : null
        };
        this._findActiveTab = this._findActiveTab.bind(this);
        this._renderDesktopTabs = this._renderDesktopTabs.bind(this);
        this._renderMobileTabs = this._renderMobileTabs.bind(this);
    }

    _findActiveTab(items) {
        return items.find(({title}) => title === this.state.activeTab);
    }

    _renderDesktopTabs(items) {
        const renderDesktopTab = ({title, link}) => {
            return (
                <div
                    key={`desktop-${title}`}
                    className={cnames("dashboard__tabs__item", {
                        active: title === this.state.activeTab
                    })}
                    onClick={e => {
                        e.preventDefault();
                        this._changeTab({title, link});
                    }}
                >
                    <h4>{counterpart.translate(title)}</h4>
                </div>
            );
        };

        return items.map(renderDesktopTab);
    }

    _renderMobileTabs(items) {
        const activeTab = this._findActiveTab(items);
        return activeTab ? (
            <div
                className={cnames("select dashboard__mobileselect", {
                    "is-open": this.state.openMobileSelect
                })}
            >
                <span
                    className="placeholder"
                    onClick={e => {
                        e.preventDefault();
                        this.setState({
                            openMobileSelect: !this.state.openMobileSelect
                        });
                    }}
                >
                    {counterpart.translate(activeTab.title)}
                </span>
                <ul>
                    {items
                        .filter(({title}) => title !== activeTab.title)
                        .map(({title, link}) => {
                            return (
                                <li
                                    key={`mobile-${title}`}
                                    onClick={e => {
                                        e.preventDefault();
                                        this._changeTab({title, link});
                                        this.setState({
                                            openMobileSelect: false
                                        });
                                    }}
                                >
                                    {counterpart.translate(title)}
                                </li>
                            );
                        })}
                </ul>
            </div>
        ) : null;
    }

    _renderTabs(items) {
        return (
            <div className="dashboard__tabs permissions">
                {this._renderMobileTabs(items)}
                {this._renderDesktopTabs(items)}
            </div>
        );
    }

    _changeTab({title, link}) {
        if (title === this.state.activeTab) {
            return;
        }

        if (link) {
            this.context.router.push(link);
            return;
        }

        this.setState({activeTab: title});
    }

    render() {
        const {items} = this.props;
        const activeTab = this._findActiveTab(items);
        return items.length > 0 && activeTab ? (
            <div>
                <div className="dashboard">{this._renderTabs(items)}</div>
                <div className="negative-margins">
                    <div className="container-fluid">{activeTab.content}</div>
                </div>
            </div>
        ) : null;
    }
}

export default Tabs;
