const Transaction = require('../models/Transaction');

// get all the exitsing transactions
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();

        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        });
    }
}

// add a new transaction
exports.addTransactions = async (req, res, next) => {
    try {
        const { text, amount } = req.body;

        const transaction = await Transaction.create(req.body);

        return res.status(201).json({
            success: true,
            data: transaction
        });
    } catch (error) {
        console.log(error)
    }

}

// delete a existing transaction
exports.deleteTransactions = async (req, res, next) => {
    res.send('DELETE Transactions');
}