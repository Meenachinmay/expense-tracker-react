import React, { useContext }from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';
import { NoPastTransaction } from './NoPastTransaction';

export const TransactionList = () => {

    const { transactions } = useContext(GlobalContext);

    let final_transaction = null;

    if (transactions.length !== 0){
        final_transaction = transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />));
    }else{
        final_transaction = <NoPastTransaction />
    }

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {final_transaction}
            </ul>    
        </>
    )
}
