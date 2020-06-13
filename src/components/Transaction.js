import React, { Component } from 'react';
import '../styles/transaction.css'

class Transaction extends Component {

    deleteTransaction = () => {
        this.props.deleteTransaction(this.props.transaction._id)
    }

    render() {
        const transaction = this.props.transaction
        const amount = transaction.amount
        return (
            <div className={amount > 0 ? 'transaction deposit' : 'transaction withdraw'}>
                <div className='vendor values'>{transaction.vendor} </div>
                <div className='amount values'>{transaction.amount} </div>
                <div className='category values'>{transaction.category} </div>
                <button className='delete-transaction' onClick={this.deleteTransaction}>-</button>
            </div>
        )
    }
}

export default Transaction
