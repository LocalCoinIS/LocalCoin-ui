import React from "react";
import utils from "common/utils";
import PropTypes from "prop-types";

class Dropdown extends React.Component {
    static propTypes = {
        scroll_length: PropTypes.number
    };

    static defaultProps = {
        scroll_length: 9
    };

    constructor(props) {
        const scroll_length = props.scroll_length;
        super(props);
        this.state = {
            active: false,
            filter: typeof props.filter !== "undefined" ? props.filter : true,
            filterValue: ""
        };

        this.listener = false;
        this.onBodyClick = this.onBodyClick.bind(this);
    }

    componentDidMount() {
        this._setListener();
    }

    shouldComponentUpdate(np, ns) {
        return (
            !utils.are_equal_shallow(np.entries, this.props.entries) ||
            !utils.are_equal_shallow(ns, this.state) ||
            np.value !== this.props.value
        );
    }

    _setListener(props = this.props) {
        if (props.entries.length > 1 && !this.listener) {
            this.listener = true;
            document.body.addEventListener("click", this.onBodyClick, {
                capture: false,
                passive: true
            });
        }
    }

    _removeListener() {
        document.body.removeEventListener("click", this.onBodyClick);
        this.listener = false;
    }

    componentWillReceiveProps(np) {
        if (np.entries.length === 1) {
            this._removeListener();
        } else if (np.entries.length > 1) {
            this._setListener(np);
        }
    }

    componentWillUnmount() {
        this._removeListener();
    }

    onBodyClick(e) {
        let el = e.target;
        let insideActionSheet = false;

        do {
            if (
                el.classList &&
                el.classList.contains("dropdown") &&
                el.id === this.props.id
            ) {
                insideActionSheet = true;
                break;
            }
        } while ((el = el.parentNode));

        if (!insideActionSheet) {
            this.setState({active: false});
        } else {
            e.stopPropagation();
        }
    }

    onChange(value, e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.onChange(value);
        this.setState({
            active: false
        });
    }

    _toggleDropdown() {
        this.setState({
            active: !this.state.active
        });
        if(!this.state.active && this.props.focusInput) {
            this.props.focusInput();
        }

        if(typeof this.find_input !== "undefined" && this.find_input != null) {
            setTimeout(() => {
                this.find_input.focus();
            }, 300);
        }
    }

    render() {
        const {entries, value} = this.props;

        let {active} = this.state;
        if (entries.length === 0) return null;
        if (entries.length == 1) {
            return (
                <div
                    className={
                        "dropdown-wrapper inactive" +
                        (this.props.upperCase ? " upper-case" : "")
                    }
                >
                    <div>
                        {this.props.singleEntry
                            ? this.props.singleEntry
                            : entries[0]}
                    </div>
                </div>
            );
        } else {
            var filterAssets = entries
                .filter(
                    item => item
                        .toUpperCase()
                        .indexOf(
                            this.state.filterValue.trim().toUpperCase()
                        ) !== -1
                );

            let options = filterAssets.map(value => {
                return (
                    <li
                        className={this.props.upperCase ? "upper-case" : ""}
                        
                        onClick={this.onChange.bind(
                            this,
                            this.props.values[value]
                        )}
                    >
                        <span>{value}</span>
                    </li>
                );
            });
            return (
                <div
                    onClick={this._toggleDropdown.bind(this)}
                    className={
                        "dropdown-wrapper" +
                        (active ? " active" : "") +
                        (this.props.upperCase ? " upper-case" : "")
                    }
                >
                    <div style={{paddingRight: 15}}>
                        {value ? value : <span className="hidden">A</span>}
                    </div>
                    <ul
                        className="dropdown"
                        style={{
                            minWidth: "100px"
                        }}
                    >
                        {this.state.filter && entries.length > 1 ? <div>
                            <input
                                type="text"
                                rows="1"
                                style={{
                                    margin: "5px",
                                    width: "90%",
                                    border: "1px solid #7fafe8",
                                }}
                                id="search_inp_drd"
                                ref={(input) => { this.find_input = input; }} 
                                placeholder="Search"
                                onChange={e => {
                                    this.setState({
                                        filterValue: e.target.value
                                    });
                                }}
                            />
                        </div> : ""}
                        {options}
                    </ul>
                </div>
            );
        }
    }
}

export default Dropdown;
