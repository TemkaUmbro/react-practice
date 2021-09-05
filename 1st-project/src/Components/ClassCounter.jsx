import React, { useState } from "react";

class ClassCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }

    decrement = () => {
        this.setState({ count: this.state.count - 1 })
    }

    render() {
        return (
            <>
                <div>{this.state.count}</div>
                <button onClick={this.decrement}>decrement</button>
                <button onClick={this.increment}>increment</button>
            </>
        );
    }
}

export default ClassCounter