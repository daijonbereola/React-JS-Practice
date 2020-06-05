import React from "react"

//import Header from "./components/Header"
//import MainContent from "./components/MainContent"
//import Footer from "./components/Footer"
//import Joke from "./components/Joke"
import TodoItem from "./components/TodoItem"
import todosData from "./components/todosData"
//import productsData from "./components/vschoolProducts"
//import Products from "./components/Products"

//React State Practice 2 https://scrimba.com/p/p7P5Hd/cewRpUQ
/*
class App extends React.Component {
    constructor(){
        super()
        this.state = {
            isLoggedIn: true
        }
    }
    render(){
        let wordDisplay
        if (this.state.isLoggedIn === true) {
            wordDisplay = "in"
        }
        else {
            wordDisplay = "out"
        }
        return (
            <div>
                <h1>You are currently logged {wordDisplay}</h1>
            </div>
        )
    }
}
*/

/*
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName:"",
            lastName:"",
            age:"",
            gender:"",
            location:"",
            isSomething: false,
            isEverything: false,
            isNothing: true,
        }
    this.handleChange=this.handleChange.bind(this)
    }
    
    handleChange(event){
        const{name, value, type, checked}=event.target
        type === "checkbox" ? 
            this.setState({
                [name]:checked
            })
        :
            this.setState({
                [name]:value
        })
    }
    
    render() {
        return (
            <main>
                <form>
                    <input 
                        name="firstName" 
                        placeholder="First Name"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                    />
                    <br />
                    <input 
                        name="lastName" 
                        placeholder="Last Name"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                    />
                    <br/>
                    <input 
                        name="age" 
                        placeholder="Age"
                        value={this.state.age}
                        onChange={this.handleChange}
                    />
                    <br/>
                    <label>
                        <br/>
                        <input 
                            name="gender"
                            value="Male"
                            type= "radio"
                            checked={this.state.gender === "Male"}
                            onChange={this.handleChange}
                        /> Male
                    </label>
                    <br/>
                    <label>
                        <input 
                            name="gender"
                            value="Female"
                            type= "radio"
                            checked={this.state.gender === "Female"}
                            onChange={this.handleChange}
                        /> Female
                        <br />
                    </label>
                    
                    <br />
                    <select 
                        name="location"
                        value={this.state.location}
                        onChange={this.handleChange}>
                        <option> ~Select a Location~ </option> 
                        <option value="District of Columbia"> Disctrict of Columbia </option> 
                        <option value="New York"> New York </option> 
                        <option value="Oakland"> Oakland </option>
                    </select> 

                    <br />
                    
                    <label>
                        <input 
                        type="checkbox"
                        name="isSomething"
                        checked={this.state.isSomething}
                        onChange={this.handleChange}
                        /> 
                         Something
                    </label>
                    <br />
                    
                    <label>
                        <input 
                        type = "checkbox"
                        name = "isEverything"
                        checked={this.state.isEverything}
                        onChange={this.handleChange}
                        /> 
                         Everything
                    </label>
                    <br />
                    
                    <label>
                        <input 
                            type = "checkbox"
                            name = "isNothing"
                            checked={this.state.isNothing}
                            onChange={this.handleChange}
                            /> 
                         Nothing
                    </label>
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.location}</p>
                <p>Your dietary restrictions:</p> 
                <p>Something: {this.state.isSomething ? "Yes" : "No"}</p>
                <p>Everything: {this.state.isEverything ? "Yes" : "No"}</p>
                <p>Nothing: {this.state.isNothing ? "Yes" : "No"}</p>
            </main>
        )
    }
}
*/

/*
class App extends React.Component{
    render(){
        return(
            <div className="five-jokes">
                <Joke
                    question = {{name: "Why did the chicken cross the road?"}}
                    punchline = {{name: "To get to the other side."}}
                />
                <Joke
                    question = {{name: "Did you hear about the two peanuts walking through town?"}}
                    punchline = {{name: "One was a salted!"}} 
                />
                <Joke
                    question = {{name: "How do you make holy water?"}}
                    punchline = {{name: "You boil the hell out of it!"}} 
                />
                <Joke
                    question = {{name: "Did you know the first French fries weren't actually cooked in France?"}}
                    punchline = {{name: "They were cooked in Greece."}} 
                />
                <Joke
                    question = {{name: "What do you call someone with no body and no nose?"}}
                    punchline = {{name: "Nobody knows."}} 
                />
            </div>
        )
    }
}
*/

/*
function App() {
    const productsComponents = productsData.map(
      product => <Products 
      key={product.id} 
      name={product.name} 
      price={product.price} 
      description={product.description} 
    />)
    return (
        <div>
            {productsComponents}
        </div>
    )
}
*/

/*
function App() {
    return(
    	<div>
    		<Header/>
    		<MainContent />
    		<Footer />
    	</div>
    )
}
*/

/*
function App() {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }
  const styles = {
 	color: "#FF8c00", 
  	backgroundColor: "#FF2D00",
  	fontSize: 200
  
  return (
    <h1 style={styles}>Good {timeOfDay}!</h1>
    )
}
*/
//Todo App
class App extends React.Component {
    constructor(){
        super()
        this.state = {
            todos: todosData
        }
    } 
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )
    }
    
}

export default App