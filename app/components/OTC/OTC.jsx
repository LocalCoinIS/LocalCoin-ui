import React from "react";
import Translate from "react-translate-component";
import { otcPrint } from "../../assets/brand-new-layout/img/images";


class OTC extends React.Component {
    render() {
        return (
            <div className="page-otc">
                <div className="page-otc-container">
                    <div className="page-otc-info">
                        <Translate content="otc.info" />
                    </div>
                    <img src={otcPrint}/>
                </div>
            </div>
        );
    }
}

export default OTC;