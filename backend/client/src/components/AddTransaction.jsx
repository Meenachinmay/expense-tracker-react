import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { make_notification } from './Notification';

export const AddTransaction = () => {
    
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction, transactions } = useContext(GlobalContext);


    let texts = transactions.map(transaction => transaction.text.toUpperCase());
    // checking for pre-existing data
    const checkDuplicateName = (transaction_name) => {
        if (texts.includes(text.toUpperCase())){
            return true;
        }    
        return false;
    }


    // notify user for adding duplicate transactions    
    const notify_for_duplicate_transaction = () => {
        make_notification({
            type: 'error',
            text: 'Do not make duplicate transaction!'
        })
    }

    // notify user for adding a new transactions    
    const notify_for_a_new_transaction = () => {
        make_notification({
            type: 'success',
            text: 'A new transaction is added, successfully'
        })
    }

    // adding a new transaction
    const onSubmit = (e) => {
        e.preventDefault();

        // check duplications here
        if (checkDuplicateName(text)){
            notify_for_duplicate_transaction();
            setText('');
            setAmount(0);
            return;
        }

        // creating a new transaction
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        // persisting a new transaction
        addTransaction(newTransaction);
        // notifying user for adding a new transaction
        notify_for_a_new_transaction();

        // clearing inputs
        setText('');
        setAmount(0);
    }

    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange= {(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label htmlFor="amount">Amount <br />
                    (negative - expense, positive - income)</label
                >
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}
