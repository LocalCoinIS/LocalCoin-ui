import React from "react";
import cnames from "classnames";
import onClickOutside from "react-onclickoutside";

// isOpen - статус раскрыт ли список
// setOpen - колбэк, чтобы менять статус
// onChange - колбэк на изменение
class DropdownListUnWrapped extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.setOpen = this.setOpen.bind(this);
    }

    handleClickOutside() {
        this.setState({isOpen: false});
    }

    setOpen(open) {
        this.setState({isOpen: open});
    }

    render() {
        const {options, selected, onChange} = this.props;
        return (
            <div className={cnames("select", {"is-open": this.state.isOpen})}>
                <span
                    className="placeholder"
                    onClick={e => {
                        e.preventDefault();
                        this.setOpen(!this.state.isOpen);
                    }}
                >
                    {selected["label"]}
                </span>
                <ul>
                    {options
                        .filter(entry => entry["key"] !== selected["key"])
                        .map(entry => {
                            return (
                                <li
                                    key={entry["key"]}
                                    onClick={e => {
                                        onChange.bind(this, entry["key"])(e);
                                        this.setOpen(false);
                                    }}
                                >
                                    {entry["label"]}
                                </li>
                            );
                        })}
                </ul>
            </div>
        );
    }
}
const DropdownList = onClickOutside(DropdownListUnWrapped);
export default DropdownList;
