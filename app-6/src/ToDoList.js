import React, { Component } from "react"

class ToDoList extends Component{
    constructor(){
        super();
        this.state = {
            list: [],
            userInput: ""

        }
    }
    handleChange(string){
this.setState( { userInput: string } )
    }
    addOne(){
        var list = this.state.list
        var input = this.state.userInput
        list.push(input)

        this.setState( { list: list, 
        userInput: ""} )
    }
    render(){
        var listedItems = this.state.list.map((element, index) => {
           return <p key= { index }> { element } </p>
        })
        return (
            <div>
                <h1>My To-Do List:</h1>
                <input type="text" onChange= {e=> this.handleChange(e.target.value)} value= {this.state.userInput}/>
                <button onClick= {()=> this.addOne()}>Add</button>
                {listedItems}
            </div>
        )
    }
}
export default ToDoList