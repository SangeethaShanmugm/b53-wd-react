import React, { Component } from 'react'

export default class StateFull extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    IncrementCount = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <div>StateFull  - Class Comp
                <p>Count: {this.state.count}</p>
                <button onClick={this.IncrementCount}>Increment Count</button>

            </div>
        )
    }
}
