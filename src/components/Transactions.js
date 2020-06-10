import React, { Component } from 'react';
import Transaction from './Transaction'

class Transactions extends Component {

    render() {
        const transactions = this.props.transactions
        return (
            transactions.map((tr, i) => <Transaction transaction={tr} key={i} deleteTransaction={this.props.deleteTransaction}/>)
        )
    }
}

export default Transactions