import React, { Component } from 'react';
import '../styles/breakDown.css'

class Breakdown extends Component {

    sumByCategory(transactions) {
        const summedByCategory = {}
        const summedArr = []
        for (let transaction of transactions) {
            if (summedByCategory[transaction.category]) {
                summedByCategory[transaction.category] += transaction.amount
            } else {
                summedByCategory[transaction.category] = transaction.amount
            }
        }
        for (let category in summedByCategory) {
            summedArr.push({
                category: category,
                sum: summedByCategory[category]
            })
        }
        return summedArr
    }

    render() {
        const transactions = this.props.transactions
        const summedByCategory = this.sumByCategory(transactions)
        return (
            <div>
                <div id='breakdown-title'>BreakDown: </div>
                {summedByCategory.map((c, i) => {
                    return (
                        <div key={i} className='breakdown-element'>
                            <div className='breakdown-category'>{c.category}</div> 
                            <div className='breakdown-amount'>{c.sum}</div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Breakdown;