import React, {Component} from 'react'
import axios from 'axios'

class Details extends Component{
    constructor(){
        super()
        this.state = {
            item: {}
        }
        
    }
    componentDidMount(){
        axios.get(`https://swapi.co/api/people/${this.props.match.params.id}/`).then(response=>{
            console.log(response.data)
            this.setState({
                item: response.data
            })
        })
    }
    render(){
        return (
            <div>
                <h2>{this.state.item.name}</h2>
                <h4>Height: {this.state.item.height}</h4>
                <h4>Hair Color: {this.state.item.hair_color}</h4>
                <h4>Gender: {this.state.item.gender}</h4>
            </div>
        )
    }

}

export default Details