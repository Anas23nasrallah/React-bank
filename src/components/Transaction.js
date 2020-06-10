import React, { Component } from 'react';

class Transaction extends Component {

    deleteTransaction = () => {
        this.props.deleteTransaction(this.props.transaction._id)
    }

    render() {
        const transaction = this.props.transaction
        return (
            <div>
                <span>{transaction.vendor} </span>
                <span>{transaction.amount} </span>
                <span>{transaction.category} </span>
                <button id='delete' onClick={this.deleteTransaction}>-</button>
            </div>
        )
    }
}

export default Transaction
