
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Transaction = require("../../model/Transaction.js")
mongoose.connect("mongodb://localhost/transactionsDB", { useNewUrlParser: true })

router.get('/transactions', async function (req, res) {
    const transactions = await Transaction.find({})
    res.send(transactions)
})

router.post('/transaction', async function (req, res) {
    const transaction = new Transaction({
        amount: req.body.amount,
        vendor: req.body.vendor,
        category: req.body.category
    })
    await transaction.save(function(err, obj){    
        res.send(obj.id);
    });
})

router.delete('/transaction/:id', async function (req, res) {
    const transactionId = req.params.id;
    await Transaction.deleteOne({
        _id: transactionId
    })
    res.send()
})

module.exports = router