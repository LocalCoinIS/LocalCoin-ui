import React from "react";
import PropTypes from "prop-types";
import cnames from "classnames";
import counterpart from "counterpart";
import onClickOutside from "react-onclickoutside";

class Tabs extends React.Component {
    static defaultProps = {
        defaultActiveTab: null,
        defaultContent: null,
        inner: false,
        dashboardTabsClass: "",
        buttons: null
    };

    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        const {items, defaultActiveTab} = props;
        let activeTab = !!defaultActiveTab
            ? defaultActiveTab
            : items.length > 0
                ? [...items].shift().title
                : null;
        this.state = {
            openMobileSelect: false,
            activeTab
        };
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this._findActiveTab = this._findActiveTab.bind(this);
        this._renderDesktopTabs = this._renderDesktopTabs.bind(this);
        this._renderMobileTabs = this._renderMobileTabs.bind(this);
    }

    handleClickOutside() {
        this.setState({openMobileSelect: false});
    }

    _findActiveTab(items) {
        return items.find(({title}) => title === this.state.activeTab);
    }

    _renderDesktopTabs(items) {
        const renderDesktopTab = ({title, subTitle, link}) => {
            return (
                <div
                    key={`desktop-${title}`}
                    className={cnames("dashboard__tabs__item", {
                        active: title === this.state.activeTab
                    })}
                    onClick={e => {
                        e.preventDefault();
                        this._changeTab({title, link});
                        if(this.props.updateModal) {
                            this.props.updateModal()
                        };
                    }}
                >
                    <h4>{counterpart.translate(title)}</h4>
                    {!!subTitle ? <span>{subTitle}</span> : null}
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
        const {dashboardTabsClass} = this.props;
        return (
            <div
                className={
                    !!dashboardTabsClass
                        ? `dashboard__tabs ${dashboardTabsClass}`
                        : "dashboard__tabs"
                }
            >
                {this._renderMobileTabs(items)}
                {this._renderDesktopTabs(items)}
            </div>
        );
    }

    _changeTab({title, link}) {
/*         try {
            let hashByConten =
                typeof this.props.hashByConten !== "undefined"
                    ? this.props.hashByConten
                    : false;
            if (hashByConten === true) {
                window.location.hash = title.match(/[a-zA-Z]+/g).join("-");
            }
        } catch (e) {} */

        if (title === this.state.activeTab) {
            return;
        }

        if (link) {
            this.context.router.push(link);
            return;
        }

        this.setState({activeTab: title});
        // this.props.updateModal();
        if (typeof this.props.onChange !== "undefined")
            this.props.onChange(title);
    }

    render() {
        const {items, inner, defaultContent, buttons} = this.props;
        const activeTab = this._findActiveTab(items);
        const content = !!defaultContent
            ? defaultContent
            : activeTab
                ? activeTab.content
                : null;

        return items.length > 0 && activeTab ? (
            inner ? (
                <div className="dashboard">
                    {this._renderTabs(items)}
                    {buttons}
                    {content}
                </div>
            ) : (
                <div>
                    <div className="dashboard">
                        {this._renderTabs(items)}
                        {buttons}
                    </div>
                    <div className="negative-margins">
                        <div className="container-fluid">{content}</div>
                    </div>
                </div>
            )
        ) : null;
    }
}

export default onClickOutside(Tabs);

/*
    render() {
        let {children, contentClass, tabsClass, style, segmented} = this.props;
        const collapseTabs =
            this.state.width < 900 && React.Children.count(children) > 2;

        let activeContent = null;

        let tabs = React.Children.map(children, (child, index) => {
            if (!child) {
                return null;
            }
            if (collapseTabs && child.props.disabled) return null;
            let isActive = index === this.state.activeTab;
            if (isActive) {
                activeContent = child.props.children;
            }

            return React.cloneElement(child, {
                collapsed: collapseTabs,
                isActive,
                changeTab: this._changeTab.bind(this),
                index: index
            });
        }).filter(a => a !== null);

        if (!activeContent) {
            activeContent = tabs[0].props.children;
        }

        return (
            <div
                className={cnames(
                    !!this.props.actionButtons ? "with-buttons" : "",
                    this.props.className
                )}
            >
                <div className="service-selector">
                    <ul
                        style={style}
                        className={cnames("button-group no-margin", tabsClass, {
                            segmented
                        })}
                    >
                        {collapseTabs ? (
                            <li
                                style={{
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    minWidth: "15rem"
                                }}
                            >
                                <select
                                    value={this.state.activeTab}
                                    style={{marginTop: 10, marginBottom: 10}}
                                    className="bts-select"
                                    onChange={e => {
                                        let ind = parseInt(e.target.value, 10);
                                        this._changeTab(
                                            ind,
                                            e.target[ind].attributes[
                                                "data-is-link-to"
                                            ].value
                                        );
                                    }}
                                >
                                    {tabs}
                                </select>
                            </li>
                        ) : (
                            tabs
                        )}
                    </ul>
                </div>
Это почему-то правилось в старом компоненте, коммит 9f85776
=============
              {this.props.actionButtons ? (
                <div className="tabs-action-buttons">
                  {this.props.actionButtons}
                </div>
              ) : null}
=============
                <div className={cnames("tab-content", contentClass)}>
                    {activeContent}
                </div>
            </div>
        );
    }
}

Tabs = connect(Tabs, {
    listenTo() {
        return [SettingsStore];
    },
    getProps() {
        return {viewSettings: SettingsStore.getState().viewSettings};
    }
});

export {Tabs, Tab};
*/