import React from "react"

function Joke(props){
    return(
        <div>
            <div className="jokes">
                <h3 className="jokes-question">{props.question.name}</h3>
                <p className="jokes-name">{props.punchline.name}</p>
            </div>
            <hr className="break"/>
        </div>
        
    )
}

export default Joke