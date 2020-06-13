import React, { Component } from 'react';
import '../styles/operations.css'

class Operations extends Component {

    constructor() {
        super()
        this.state = {
            amount: '',
            vendor: '',
            category: ''
        }
    }

    deposit = () => {
        this.props.addTransaction({
            amount: parseInt(this.state.amount),
            vendor: this.state.vendor,
            category: this.state.category
        })
        this.setState({
            amount: '',
            vendor: '',
            category: ''
        })
    }

    withdraw = () => {
        this.props.addTransaction({
            amount: -1 * this.state.amount,
            vendor: this.state.vendor,
            category: this.state.category
        })
        this.setState({
            amount: '',
            vendor: '',
            category: ''
        })
    }

    handleAmountInput = (e) => {
        const amountInput = e.target.value
        this.setState({
            amount: amountInput
        })
    }

    handleVendorInput = (e) => {
        const vendorInput = e.target.value
        this.setState({
            vendor: vendorInput
        })
    }

    handleCategoryInput = (e) => {
        const categoryInput = e.target.value
        this.setState({
            category: categoryInput
        })
    }

    render() {
        return (
            <div>
                
                <br></br>
                <br></br>
                <input placeholder='Amount' type='Number' className='operation-input' id='amount-input' onChange={this.handleAmountInput} value={this.state.amount} />
                <input placeholder='Vendor' className='operation-input' id='vendor-input' onChange={this.handleVendorInput} value={this.state.vendor} />
                <input placeholder='Category' className='operation-input' id='category-input' onChange={this.handleCategoryInput} value={this.state.category} />
                <button onClick={this.deposit} className='btn' id='deposit-btn'>Deposit</button>
                <button onClick={this.withdraw} className='btn' id='withdraw-btn'>Withdraw</button>
                
            </div>
        )
    }
}

export default Operations