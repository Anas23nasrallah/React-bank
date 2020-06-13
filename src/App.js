import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Transactions from './components/Transactions'
import Operations from './components/Operations';
import Breakdown from './components/Breakdown';
import Landing from './components/Landing'
const axios = require('axios');

class App extends Component {
  constructor() {
    super()
    this.state = {
      transactions: []
    }
  }

  componentDidMount = async () => {
    let transactions = await axios.get('http://localhost:3001/transactions')
    this.setState({
      transactions: transactions.data
    })
  }

  addTransaction = async (operationDetails) => {
    if(!operationDetails.amount || !operationDetails.vendor || !operationDetails.category){
      alert('Fill all the required inputs')
      return
    }
    const respond = await axios.post('http://localhost:3001/transaction', operationDetails)
    const transactions = [...this.state.transactions]
    operationDetails._id = respond.data
    transactions.unshift(operationDetails)
    this.setState({ transactions })
  }

  deleteTransaction = async (id) => {
    const transactionToDeleteId = this.state.transactions.find(t => t._id === id)._id
    await axios.delete('http://localhost:3001/transaction/' + transactionToDeleteId)
    const transactions = [...this.state.transactions]
    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i]._id === transactionToDeleteId) {
        transactions.splice(i, 1)
        break
      }
    }
    this.setState({
      transactions
    })
  }

  render() {

    let balance = 0;
    if (this.state.transactions.length) {
      balance = this.state.transactions.map(t => t.amount).reduce((sum, currentValue) => sum + currentValue)
    }
    
    return (
      <Router >
        <div>

          <div id='header'>
            <Link to='/transactions' className='header-link' id='transactions-link'><span> Transactions</span></Link>
            <Link to='/operations' className='header-link' id='operations-link'><span>  Operations</span></Link>
            <Link to='/breakdown' className='header-link' id='breakdown-link'><span>  Breakdown</span></Link>
          </div>

          <hr></hr>

          <div id='balance' class={balance > 0 ? 'positive' : 'negative'}>Balance: {balance} &#8362;</div> <br></br>
          <Route exact path='/' render={() => <Landing/>} />
          <Route exact path='/breakdown' render={() => <Breakdown transactions={this.state.transactions} />} />
          <Route exact path='/transactions' render={() => <Transactions transactions={this.state.transactions} deleteTransaction={this.deleteTransaction} />} />
          <Route exact path='/operations' render={() => <Operations addTransaction={this.addTransaction} />} />

        </div>

      </Router>
    );
  }
}

export default App;
