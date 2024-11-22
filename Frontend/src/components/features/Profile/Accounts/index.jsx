import AccountCard from "../../../ui/AccountCard";

const Accounts = () => {

    return (
        <>
            <h2 className='sr-only'>Accounts</h2>
            <AccountCard accountName='Checking (x8349)' balance='2,082.79' balanceType='Available' />
            <AccountCard accountName='Savings (x6712)' balance='10,928.42' balanceType='Available' />
            <AccountCard accountName='Credit Card (x8349)' balance='184.30' balanceType='Current' />
        </>
    )
}

export default Accounts;