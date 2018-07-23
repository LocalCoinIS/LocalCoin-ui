import React from "react";
import {qr} from "../../assets/brand-new-layout/img/images";

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sidebar">
                <div className="sidebar__qr">
                    <img src={qr} alt="code" />
                </div>
                <p className="sidebar__descr">
                    Your deposit address is your account name!
                </p>
                <span className="sidebar__user">
                    <b>ninetor-dot</b>
                </span>
                <ul className="sidebar__menu">
                    <li className="sidebar__menu__item noborder">
                        <a className="sidebar__menu__link" href="#">
                            Dashboard
                        </a>
                    </li>
                    <li className="sidebar__menu__item">
                        <a className="sidebar__menu__link" href="#">
                            Membership
                        </a>
                    </li>
                    <li className="sidebar__menu__item">
                        <a className="sidebar__menu__link" href="#">
                            Voting
                        </a>
                    </li>
                    <li className="sidebar__menu__item showsub expand noborder">
                        <a className="sidebar__menu__link" href="#">
                            Advanced features
                        </a>
                        <ul className="sidebar__menu__sub">
                            <li className="sidebar__menu__sub__item noborder">
                                <a
                                    className="sidebar__menu__sub__link"
                                    href="#"
                                >
                                    Issued Assets
                                </a>
                            </li>
                            <li className="sidebar__menu__sub__item active">
                                <a
                                    className="sidebar__menu__sub__link"
                                    href="#"
                                >
                                    Permissions
                                </a>
                            </li>
                            <li className="sidebar__menu__sub__item">
                                <a
                                    className="sidebar__menu__sub__link"
                                    href="#"
                                >
                                    Whitelist
                                </a>
                            </li>
                            <li className="sidebar__menu__sub__item">
                                <a
                                    className="sidebar__menu__sub__link"
                                    href="#"
                                >
                                    Vesting balances
                                </a>
                            </li>
                            <li className="sidebar__menu__sub__item">
                                <a
                                    className="sidebar__menu__sub__link"
                                    href="#"
                                >
                                    Signed Messages
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <button className="btn large create-account" type="button">
                    Create a New Account
                </button>
            </div>
        );
    }
}

export default Sidebar;
