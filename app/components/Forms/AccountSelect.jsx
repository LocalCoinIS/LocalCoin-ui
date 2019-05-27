import React from "react";
import counterpart from "counterpart";
import PropTypes from "prop-types";
import DropdownList from "components/Utility/DropdownList";

export default class AccountSelect extends React.Component {
    static propTypes = {
        account_names: PropTypes.array,
        list_size: PropTypes.number,
        onChange: PropTypes.func,
        placeholder: PropTypes.string,
        center: PropTypes.bool,
        tabIndex: PropTypes.number,
        className: PropTypes.string
        //defaultAccount: PropTypes.string
    };

    constructor(props) {
        super(props);

        if (typeof props.selected !== "undefined")
            this.state = {selected: props.selected};
        else this.state = {selected: null};

        this.default_placeholder = counterpart.translate(
            "account.select_placeholder"
        );

        this._onAccountChange = this._onAccountChange.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        return (
            nextProps.selected !== this.props.selected ||
            nextProps.list_size !== this.props.list_size ||
            nextProps.placeholder !== this.props.placeholder ||
            nextProps.account_names !== this.props.account_names
        );
    }

    value() {
        return this.state.selected;
    }

    reset() {
        this.setState({selected: null});
    }

    render() {
        var account_names = this.props.account_names;
        var placeholder = this.props.placeholder || this.default_placeholder;

        let options = account_names.sort().map(account_name => {
            return {
                key: account_name,
                label: account_name
            };
        });

        return (
            <DropdownList
                options={options}
                selected={{
                    key: this.state.selected,
                    label:
                        this.state.selected === null
                            ? placeholder
                            : this.state.selected
                }}
                onChange={key => {
                    this._onAccountChange(key);
                }}
            />
        );
    }

    _onAccountChange(value) {
        var placeholder = this.props.placeholder || this.default_placeholder;
        if (value === placeholder) {
            value = null;
        }

        this.setState({
            selected: value
        });

        console.log(value);

        if (this.props.onChange) {
            this.props.onChange(value);
        }
    }
}
