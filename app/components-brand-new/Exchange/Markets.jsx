import React from "react";
import MyMarkets from "./MyMarkets";

class Markets extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div ref="wrapper" className="grid-block page-layout no-overflow">
                <MyMarkets
                    style={{width: "100%", padding: 20}}
                    className="no-overflow"
                    headerStyle={{paddingTop: 0, borderTop: "none"}}
                    columns={[
                        {name: "add", index: 1},
                        {name: "star", index: 2},
                        {name: "market", index: 3},
                        {name: "quoteSupply", index: 4},
                        {name: "vol", index: 5},
                        {name: "price", index: 6},
                        {name: "change", index: 7}
                    ]}
                />
            </div>
        );
    }
}

export default Markets;
