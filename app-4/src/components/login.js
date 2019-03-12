import React, { Component } from 'react'

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            password: ''
        }
    }

    handleUserName = (christianIsAwesome) => {
        this.setState({
              userName: christianIsAwesome
        })
    }

    handlePassword = (calebIsAsAwesomeAsChristian) => {
        this.setState({
            password: calebIsAsAwesomeAsChristian
        })
    }

    loginAlert = () => {
        alert(`Username: ${this.state.userName} Password: ${this.state.password}`)
    }

    render() {
        return (
            <div>
                <input onChange={(e) => this.handleUserName(e.target.value)}/>
                <input onChange={(e) => this.handlePassword(e.target.value)}/>
                <button onClick={() => this.loginAlert()}>Login</button>
            </div>
        )
    }
}