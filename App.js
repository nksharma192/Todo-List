import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      listA : ["A","B","C","D","E","F","G","H","I","J","K","L","M"],
      listB : ["1","2","3","4"]
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Table p={this.state.listA} q={this.state.listB}/>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="header-main">
        <h4> <u> Todo List </u> </h4>
      </div>
    );
  }
}

function getList (a) {

  var x = a.map( a => (<ul key={a}>{a}</ul>));
  console.log("Test : " + x);
  return x;
}

class Table extends Component {
  render() {
    return (
      <div className="table-main">
        <table>
          <tbody>
          <tr> 
            <td className = "table-head"> <b> Tasks </b> </td>
            <td className = "table-head"> <b> Completed </b> </td>
          </tr>

          <tr>
            <td className = "table-list"> {getList(this.props.p)}
            </td>
            <td className = "table-list"> {getList(this.props.q)} </td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;


/*

function lists(s,t) {

  var x = s.map((n) => n);
  var z = t.map((y) => y);
  console.log ("X : " + x);
  console.log ("Z : " + z);
}

class Timer extends Component {
  render() {
    return (
      <div>
        <p> Time : <span> {new Date().toLocaleTimeString()} </span></p>
      </div>
    );
  }
}

*/