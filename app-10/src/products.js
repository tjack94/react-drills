import React, { Component }  from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Products extends Component{
    constructor(){
        super()
        this.state = {
            productList: []
        }
    }
    componentDidMount(){
        axios.get('https://swapi.co/api/people/').then(response=>{  
        this.setState({
                productList: response.data.results
            })
        })

    }
render(){
    const list = this.state.productList.map((product, index)=>{
        return (
           <Link key= {index} to= {`/details/${index + 1}`}> <h2> {product.name} </h2></Link>
        )
    })
    return( 
        <div>
        {list}
        </div>
    )
}
}

export default Products