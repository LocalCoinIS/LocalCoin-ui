import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="header">
                <div className="container-fluid">
                    <div className="mobile">
                        <span className="mobile__burger">
                            <span />
                        </span>
                        <div className="mobile__menu">
                            <span className="mobile__menu__close" />
                            <ul className="mobile__list">
                                <li className="mobile__list__item">
                                    <a className="mobile__list__link" href="#">
                                        Create Account
                                    </a>
                                </li>
                                <li className="mobile__list__item">
                                    <a className="mobile__list__link" href="#">
                                        Send
                                    </a>
                                </li>
                                <li className="mobile__list__item">
                                    <a className="mobile__list__link" href="#">
                                        Deposit/Withdraw
                                    </a>
                                </li>
                                <li className="mobile__list__item">
                                    <a className="mobile__list__link" href="#">
                                        Explore
                                    </a>
                                </li>
                                <li className="mobile__list__item">
                                    <a className="mobile__list__link" href="#">
                                        Settings
                                    </a>
                                </li>
                            </ul>
                            <label className="mobile__accounts">Accounts</label>
                        </div>
                    </div>
                    <div className="header-line">
                        <div className="logo">
                            <img src="img/logo.svg" alt="logo" />
                        </div>
                        <nav className="navigation">
                            <ul className="navigation__list">
                                <li className="navigation__item active">
                                    <a className="navigation__link" href="#">
                                        Account
                                    </a>
                                </li>
                                <li className="navigation__item">
                                    <a className="navigation__link" href="#">
                                        Exchange
                                    </a>
                                </li>
                                <li className="navigation__item">
                                    <a className="navigation__link" href="#">
                                        Deposit/Withdraw
                                    </a>
                                </li>
                                <li className="navigation__item">
                                    <a className="navigation__link" href="#">
                                        OTC
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div className="balance">
                            <span className="balance__label">Balance: 0</span>
                            <ul className="balance__list">
                                <li className="balance__item active">
                                    <a className="balance__link" href="#">
                                        LLC
                                    </a>
                                </li>
                                <li className="balance__item">
                                    <a className="balance__link" href="#">
                                        BTC
                                    </a>
                                </li>
                                <li className="balance__item">
                                    <a className="balance__link" href="#">
                                        XCR
                                    </a>
                                </li>
                                <li className="balance__item">
                                    <a className="balance__link" href="#">
                                        ETH
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="user">
                            <img
                                className="user__icon"
                                src="img/user.png"
                                alt="user"
                            />
                            <span className="user__name">Ninetor-dot</span>
                        </div>
                        <a className="settings" href="#">
                            <img
                                className="settings__icon"
                                src="img/settings.svg"
                                alt="settings"
                            />
                        </a>
                        <a className="lock" href="#">
                            <img
                                className="lock__icon"
                                src="img/lock.svg"
                                alt="lock"
                            />
                        </a>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
