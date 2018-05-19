import React, { Component } from "react"

class Login extends Component {
    constructor(){
        super();
        this.state= {
            password: "",
            username: ''
        }
    }
    submitFunction(){
        alert(`Username: ${this.state.username} Password ${this.state.password}` )
    }
    handleChange(event, name){
        const value = event.target.value
      this.setState({ [name]: value })
    }
    render(){
        return(
<form >
    <input placeholder= "username" type="text" onChange= {(e)=> this.handleChange(e, "username") }/>
    <input placeholder= "password" type="text"onChange= {(e)=> this.handleChange(e,"password")} />
    <button onClick= {()=> this.submitFunction() }>
        Login
    </button>
</form>
        )
    }
}
export default Login