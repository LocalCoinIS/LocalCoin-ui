import React from "react";
import cnames from "classnames";

// isOpen - статус раскрыт ли список
// setOpen - колбэк, чтобы менять статус
// onChange - колбэк на изменение
const DropdownList = ({options, selected, isOpen, setOpen, onChange}) => {
    return (
        <div className={cnames("select", {"is-open": isOpen})}>
            <span
                className="placeholder"
                onClick={e => {
                    e.preventDefault();
                    setOpen(!isOpen);
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
                                    setOpen(false);
                                }}
                            >
                                {entry["label"]}
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

export default DropdownList;
