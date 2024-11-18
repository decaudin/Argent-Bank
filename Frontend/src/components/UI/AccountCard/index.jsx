import PropTypes from "prop-types";
import './index.scss';

const AccountCard = ( {accountName, balance, balanceType} ) => {

    return (
        <div className="account-card">
            <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank {accountName}</h3>
                <p className="account-amount">${balance}</p>
                <p className="account-amount-description">{balanceType} Balance</p>
            </div>
            <button className="transaction-button">View transactions</button>
        </div>
    )
}

AccountCard.propTypes = {
    accountName: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired,
    balanceType: PropTypes.string.isRequired,
};

export default AccountCard;