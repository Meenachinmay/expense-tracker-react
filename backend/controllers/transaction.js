exports.getTransactions = (req, res, next) => {
    res.send('GET Transactions');
}

exports.addTransactions = (req, res, next) => {
    res.send('POST Transactions');
}

exports.deleteTransactions = (req, res, next) => {
    res.send('DELETE Transactions');
}