import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);  
    this.state = {
      listA : ["A","B","C","D","E","F","G","H","I","J","K","L","M"],
      listB : ["1","2","3","4"]
    }
  }  

  data = this.state;

  render() {
    return (
      <div className="App">
        <Header onClick={this.pushCol}/>
        <Table listA={this.state.listA} listB={this.state.listB} move={this.moveOnClick}/> 
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="header-main">
        <h4 onClick={this.props.onClick}> <u> Todo List </u> </h4>
      </div>
    );
  }
}

function moveOnClick(direction,key) {
  if(direction === "l") {
    console.log("Moved Left");
    console.log(key);
  } else if (direction === "r") {
    console.log("Moved Right");
    console.log(key);
  }
}

function getList (a,dir) {
  if(dir === "l") {
    var list = a.map( (var1,i,a) => (<ul key={"l" + i} onClick={() => moveOnClick("r","l"+i)}> {var1}</ul>));
  } else if(dir === "r") {
    var list = a.map( (var1,i,a) => (<ul key={"r" + i} onClick={() => moveOnClick("l","r"+i)}> {var1}</ul>));
  }
  return list;
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
              <td className = "table-list" > 
                { getList(this.props.listA,"l") }
              </td>
              <td className = "table-list" > 
                { getList(this.props.listB,"r") }
              </td>
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