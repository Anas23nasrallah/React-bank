import React, { Component } from 'react';

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

                <input placeholder='Amount' id='amount-input' onChange={this.handleAmountInput} value={this.state.amount} />
                <input placeholder='Vendor' id='vendor-input' onChange={this.handleVendorInput} value={this.state.vendor} />
                <input placeholder='Category' id='category-input' onChange={this.handleCategoryInput} value={this.state.category} />
                <button onClick={this.deposit}>Deposit</button>
                <button onClick={this.withdraw}>Withdraw</button>
                
            </div>
        )
    }
}

export default Operations