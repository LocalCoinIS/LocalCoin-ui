import React from "react";

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="footer">
                <div className="footer-line">
                    <div className="footer-info">
                        <span className="footer-info__status">connected</span>
                        <span className="footer-info__data">
                            latency 478ms / head block #27485593
                        </span>
                    </div>
                    <button
                        className="btn large inverted flat support-btn"
                        type="button"
                    >
                        Support
                    </button>
                </div>
            </footer>
        );
    }
}

export default Footer;
