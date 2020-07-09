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


  render () {
    return (
      <Container className="App">
         search :   <Input style = {{width: "50%"}} />
         <TableRow   results= {
           this.state.results
         } />
      </Container>
    );
  }
 
}

export default App;
