import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TableRow from "./components/table"
import Container from "./components/container"
import { Input } from "reactstrap"
import Api from "./utils/api"

class App extends Component {
  state = {
    results: [], 
    original: [],
    search: ""
  }
  componentDidMount () {
    Api.getRandomPeople().then(people => {
console.log(people.data.results)
      this.setState({
        results: people.data.results,
        original: people.data.results
      }) 
    }) 
  }
  handleInputChange = (event) => {
      const { name, value } = event.target
      this.setState({ 
        [name]: value
      })
      console.log(value)
       const newEmployees = this.state.original.filter(employee => {
         return employee.name.first.toLowerCase().includes(value.toLowerCase())
       })   
       this.setState({ 
         results: newEmployees
       })
  }
  handleSubmit = (columnName) => {
    const newEmployees = this.state.results.sort((a,b) => {
      return a.name[columnName].localeCompare(b.name[columnName]) 
      console.log(a.name[columnName])
    })

    this.setState({ 
      results: newEmployees
    })
  }

  render () {
    return (
      <Container className="App">
         search :   <Input style = {{width: "50%"}} name="search" value={this.state.search}
         onChange = {this.handleInputChange}
         
         />
         <TableRow   results= {
           this.state.results
         }  handleSubmit = {this.handleSubmit} />
      </Container>
    );
  }
 
}

export default App;
