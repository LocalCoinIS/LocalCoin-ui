import React from "react";
import {Link} from "react-router/es";
import Translate from "react-translate-component";
import {ChainStore} from "bitsharesjs/es";
import ChainTypes from "../../components/Utility/ChainTypes";
import BindToChainState from "../../components/Utility/BindToChainState";
import Statistics from "../../components/Account/Statistics";
import AccountActions from "actions/AccountActions";
import TimeAgo from "../../components/Utility/TimeAgo";
import HelpContent from "../../components/Utility/HelpContent";
import accountUtils from "common/account_utils";
import {Tabs, Tab} from "../../components/Utility/Tabs";
import counterpart from "counterpart";

class FeeHelp extends React.Component {
    static propTypes = {
        dprops: ChainTypes.ChainObject.isRequired
    };
    static defaultProps = {
        dprops: "2.1.0"
    };

    render() {
        let {dprops} = this.props;

        return (
            <HelpContent
                {...this.props}
                path="components/AccountMembership"
                section="fee-division"
                nextMaintenanceTime={{
                    time: dprops.get("next_maintenance_time")
                }}
            />
        );
    }
}
FeeHelp = BindToChainState(FeeHelp);

class AccountMembership extends React.Component {
    static propTypes = {
        account: ChainTypes.ChainAccount.isRequired,
        gprops: ChainTypes.ChainObject.isRequired,
        core_asset: ChainTypes.ChainAsset.isRequired
    };
    static defaultProps = {
        gprops: "2.0.0",
        core_asset: "1.3.0"
    };

    upgradeAccount(id, lifetime, e) {
        e.preventDefault();
        AccountActions.upgradeAccount(id, lifetime);
    }

    componentWillMount() {
        accountUtils.getFinalFeeAsset(this.props.account, "account_upgrade");
    }

    render() {
        let {gprops, core_asset} = this.props;

        let account = this.props.account.toJS();

        let ltr = ChainStore.getAccount(account.lifetime_referrer, false);
        if (ltr) account.lifetime_referrer_name = ltr.get("name");
        let ref = ChainStore.getAccount(account.referrer, false);
        if (ref) account.referrer_name = ref.get("name");
        let reg = ChainStore.getAccount(account.registrar, false);
        if (reg) account.registrar_name = reg.get("name");

        let account_name = account.name;

        let network_fee = account.network_fee_percentage / 100;
        let lifetime_fee = account.lifetime_referrer_fee_percentage / 100;
        let referrer_total_fee = 100 - network_fee - lifetime_fee;
        let referrer_fee =
            (referrer_total_fee * account.referrer_rewards_percentage) / 10000;
        let registrar_fee = 100 - referrer_fee - lifetime_fee - network_fee;

        let lifetime_cost =
            (gprops.getIn([
                "parameters",
                "current_fees",
                "parameters",
                8,
                1,
                "membership_lifetime_fee"
            ]) *
                gprops.getIn(["parameters", "current_fees", "scale"])) /
            10000;
        let annual_cost =
            (gprops.getIn([
                "parameters",
                "current_fees",
                "parameters",
                8,
                1,
                "membership_annual_fee"
            ]) *
                gprops.getIn(["parameters", "current_fees", "scale"])) /
            10000;

        let member_status = ChainStore.getAccountMemberStatus(
            this.props.account
        );
        let membership = "account.member." + member_status;
        let expiration = null;
        if (member_status === "annual")
            expiration = (
                <span>
                    (<Translate content="account.member.expires" />{" "}
                    <TimeAgo time={account.membership_expiration_date} />)
                </span>
            );
        let expiration_date = account.membership_expiration_date;
        if (expiration_date === "1969-12-31T23:59:59")
            expiration_date = "Never";
        else if (expiration_date === "1970-01-01T00:00:00")
            expiration_date = "N/A";

        return (
            <div className="grid-content account-membership" style={{overflowX: "hidden"}}>
                <div className="content-block no-margin">
                    <h2 className="content__heading">
                        <Translate content={membership} /> {expiration}
                    </h2>
                    {member_status === "lifetime" ? null : (
                        <div>
                            <div className="large-6 medium-8">
                                <HelpContent
                                    path="components/AccountMembership"
                                    section="lifetime"
                                    feesCashback={100 - network_fee}
                                    price={{
                                        amount: lifetime_cost,
                                        asset: core_asset
                                    }}
                                />
                                <div
                                    className="button no-margin btn large outline lifetime-btn"
                                    onClick={this.upgradeAccount.bind(
                                        this,
                                        account.id,
                                        true
                                    )}
                                >
                                    <Translate content="account.member.upgrade_lifetime" />
                                </div>{" "}
                                &nbsp; &nbsp;
                                {true || member_status === "annual" ? null : (
                                    <div
                                        className="button"
                                        onClick={this.upgradeAccount.bind(
                                            this,
                                            account.id,
                                            false
                                        )}
                                    >
                                        <Translate content="account.member.subscribe" />
                                    </div>
                                )}
                            </div>
                            <br />
                            <hr />
                        </div>
                    )}
                </div>

                <div className="content-block no-margin">
                    <div className="no-margin grid-block vertical large-horizontal">
                        <div className="no-margin grid-block large-5">
                            <div
                                className="grid-content"
                                style={{paddingRight: 45}}
                            >
                                {member_status === "lifetime" ? (
                                    <div>
                                        <h4>
                                            <Translate content="account.member.referral_link" />
                                        </h4>
                                        <Translate content="account.member.referral_text" />
                                        :
                                        <h5>https://wallet.localcoin.is/?r=${account.name}
                                       </h5>
                                    </div>
                                ) : null}
                                <h4>
                                    <Translate content="account.member.fee_allocation" />
                                </h4>
                                <table className="table key-value-table">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <Translate content="account.member.network_percentage" />
                                            </td>
                                            <td>{network_fee}%</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Translate content="account.member.lifetime_referrer" />{" "}
                                                &nbsp; (
                                                <Link
                                                    to={`account/${
                                                        account.lifetime_referrer_name
                                                    }/overview`}
                                                >
                                                    {
                                                        account.lifetime_referrer_name
                                                    }
                                                </Link>
                                                )
                                            </td>
                                            <td>{lifetime_fee}%</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Translate content="account.member.registrar" />{" "}
                                                &nbsp; (
                                                <Link
                                                    to={`account/${
                                                        account.registrar_name
                                                    }/overview`}
                                                >
                                                    {account.registrar_name}
                                                </Link>
                                                )
                                            </td>
                                            <td>{registrar_fee}%</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Translate content="account.member.referrer" />{" "}
                                                &nbsp; (
                                                <Link
                                                    to={`account/${
                                                        account.referrer_name
                                                    }/overview`}
                                                >
                                                    {account.referrer_name}
                                                </Link>
                                                )
                                            </td>
                                            <td>{referrer_fee}%</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Translate content="account.member.membership_expiration" />{" "}
                                            </td>
                                            <td>{expiration_date}</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <h4>
                                    <Translate content="account.member.fees_cashback" />
                                </h4>
                                <table className="table key-value-table">
                                    <Statistics
                                        stat_object={account.statistics}
                                    />
                                </table>
                            </div>
                        </div>
                        <div className="grid-block large-7">
                            <div className="grid-content">
                                <FeeHelp
                                    account={account_name}
                                    networkFee={network_fee}
                                    referrerFee={referrer_fee}
                                    registrarFee={registrar_fee}
                                    lifetimeFee={lifetime_fee}
                                    referrerTotalFee={referrer_total_fee}
                                    maintenanceInterval={gprops.getIn([
                                        "parameters",
                                        "maintenance_interval"
                                    ])}
                                    vestingThreshold={{
                                        amount: gprops.getIn([
                                            "parameters",
                                            "cashback_vesting_threshold"
                                        ]),
                                        asset: core_asset
                                    }}
                                    vestingPeriod={
                                        gprops.getIn([
                                            "parameters",
                                            "cashback_vesting_period_seconds"
                                        ]) /
                                        60 /
                                        60 /
                                        24
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
AccountMembership = BindToChainState(AccountMembership);

export default AccountMembership;
