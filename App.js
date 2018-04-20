import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';

class App extends Component {

  constructor(props) {
    super(props);  
    this.state = {
      listA : ["A","B","C","D","E","F","G","H","I","J","K","L","M"],
      listB : ["1","2","3","4"]
    }

    this.changeState = this.changeState.bind(this);
  }  
  
  changeState(newA,newB){
    console.log("Changing State.... ");
    console.log(newA);
    console.log(newB);
    this.setState({ listA : newA ,listB : newB});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Table listA={this.state.listA} listB={this.state.listB} compState={this.changeState} /> 
        <h4> {this.state.listA}</h4>
        <h4> {this.state.listB}</h4>
      </div>
    );
  }
}

class Table extends Component {
  
  constructor(props){
    super(props);
    this.changeStateC = this.changeStateC.bind(this);
    this.listA = ["D","Q"];
    this.listB = ["#","@2"];
  }

  changeStateC(){
    console.log("Changing State in Child.... ");
    this.props.compState(this.listA,this.listB)
  }

  moveOnClick(direction,key) {
    if(direction === "l") {
      console.log("Moved Left");
      console.log(key);
      this.changeStateC();   
    } else if (direction === "r") {
      console.log("Moved Right");
      console.log(key);
    }
  } 

  getList (a,pos) {
    if(pos === "left-col") {
      var list = a.map( (var1,i,a) => (<ul key={"left" + i} onClick={() => this.moveOnClick("r","left"+i)}> {var1}</ul>));
    } else if(pos === "right-col") {
      var list = a.map( (var1,i,a) => (<ul key={"right" + i} onClick={() => this.moveOnClick("l","right"+i)}> {var1}</ul>));
    }
    return list;
  }

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
                { this.getList(this.props.listA,"left-col") }
              </td>
              <td className = "table-list" > 
                { this.getList(this.props.listB,"right-col") }
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