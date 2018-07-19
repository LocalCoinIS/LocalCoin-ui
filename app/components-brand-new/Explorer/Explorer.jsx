import React from "react";
import {Link} from "react-router/es";
import Translate from "react-translate-component";
import counterpart from "counterpart";

const exploreItems = [
    {
        translate: "explorer.blocks.title", // Blockchain
        link: "/explorer/blocks",
        imgClassName: "blockchain",
        imgName: "e_blockchain.svg"
    },
    {
        translate: "explorer.assets.title", // Assets
        link: "/explorer/assets",
        imgClassName: "assets",
        imgName: "e_assets.svg"
    },
    {
        translate: "explorer.accounts.title", // Accounts
        link: "/explorer/accounts",
        imgClassName: "accounts",
        imgName: "e_accounts.svg"
    },
    {
        translate: "explorer.witnesses.title", // Witnesses
        link: "/explorer/witnesses",
        imgClassName: "witnesses",
        imgName: "e_witnesses.svg"
    },
    {
        translate: "explorer.committee_members.title", // Committee members
        link: "/explorer/committee-members",
        imgClassName: "members",
        imgName: "e_members.svg"
    },
    {
        translate: "markets.title", // Markets
        link: "/explorer/markets",
        imgClassName: "markets",
        imgName: "e_markets.svg"
    },
    {
        translate: "fees.title", // Fee Schedule
        link: "/explorer/fees",
        imgClassName: "fee",
        imgName: "e_fee.svg"
    }
];

class Explorer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const makeExploreItem = ({translate, link, imgClassName, imgName}) => {
            const imgSrc = require(`!file-loader?name=asset-symbols/[name].svg!../../assets/brand-new-layout/img/${imgName}`);
            let heading = translate;
            if (typeof heading === "string" && heading.indexOf(".") > 0) {
                heading = counterpart.translate(heading);
            }
            return (
                <div
                    className="col-xl-3 col-lg-4 col-md-6 col-sm-12"
                    key={imgClassName}
                >
                    <Link className="explore__item" to={link}>
                        <img
                            className={`explore__item__img ${imgClassName}`}
                            src={imgSrc}
                            alt="icon"
                        />
                        <h4 className="explore__item__heading">{heading}</h4>
                    </Link>
                </div>
            );
        };
        return (
            <div className="content">
                <h2 className="content__heading">Explore</h2>
                <div className="explore">
                    <div className="container-fluid">
                        <div className="row">
                            {exploreItems.map(makeExploreItem)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Explorer;
