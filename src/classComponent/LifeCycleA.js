import React, { Component } from 'react'
import StateLess from './StateLess'
import StateFull from './StateFull'

export default class LifeCycleA extends Component {

    componentDidMount() {
        console.log("LifeCycleA componentDidMount")
        fetch("https://658ae52eba789a9622381b47.mockapi.io/products")
            .then((res) => res.json())
            .then((data) => console.log(data)
            )
    }

    constructor(props) {
        super(props)
        this.state = {
            name: "Sangeetha"
        }
        console.log("LifeCycleA constructor")
    }


    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleA getDerivedStateFromProps")
        return state.name
    }


    render() {
        console.log("LifeCycleA render")

        return (
            <div>ClassComp
                <h1>Hi My name is {this.state.name}</h1>
                <StateLess />
                <StateFull />
            </div>
        )
    }



}

