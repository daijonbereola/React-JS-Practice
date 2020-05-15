import React from "react"

function Products(props){
    return(
        <div>
            <h3>Name: {props.name}</h3>
            <p>Price: {props.price}</p>
            <p>Description: {props.description}</p>
            <hr/>
        </div>
    )
}

export default Products