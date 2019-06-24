import React from "react";
import PropTypes from "prop-types";
import cnames from "classnames";
import counterpart from "counterpart";
import onClickOutside from "react-onclickoutside";

class Tab extends React.Component {
    static propTypes = {
        changeTab: PropTypes.func,
        isActive: PropTypes.bool.isRequired,
        index: PropTypes.number.isRequired,
        className: PropTypes.string,
        isLinkTo: PropTypes.string,
        subText: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    };

    static defaultProps = {
        isActive: false,
        index: 0,
        className: "",
        isLinkTo: "",
        subText: null
    };

    render() {
        let {
            isActive,
            index,
            changeTab,
            title,
            className,
            updatedTab,
            disabled,
            subText
        } = this.props;
        let c = cnames({"is-active": isActive}, className);

        if (typeof title === "string" && title.indexOf(".") > 0) {
            title = counterpart.translate(title);
        }

        // dont string concetenate subText directly within the rendering, subText can be an object without toString
        // implementation, but valid DOM (meaning, don't do subText + "someString"

        if (this.props.collapsed) {
            // if subText is empty, dont render it, we dont want empty brackets added
            if (typeof subText === "string") {
                subText = subText.trim();
            }
            return (
                <option value={index} data-is-link-to={this.props.isLinkTo}>
                    <span className="tab-title">
                        {title}
                        {updatedTab ? "*" : ""}
                        {subText && " ("}
                        {subText && subText}
                        {subText && ")"}
                    </span>
                </option>
            );
        }
        return (
            <li
                className={c}
                onClick={
                    !disabled
                        ? changeTab.bind(this, index, this.props.isLinkTo)
                        : null
                }
            >
                <a>
                    <span className="tab-title">
                        {title}
                        {updatedTab ? "*" : ""}
                    </span>
                    {subText && <div className="tab-subtext">{subText}</div>}
                </a>
            </li>
        );
    }
}

export default Tab;
