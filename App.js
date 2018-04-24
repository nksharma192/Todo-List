import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Table from './table.js';
import Insert from './insert.js';

class App extends Component {

  constructor(props) {
    super(props);  
    this.state = {
      listA : ["A","B","C",],
      listB : ["1","2","3",],
      text : "",
    }

    this.changeState = this.changeState.bind(this);
    this.changeText = this.changeText.bind(this);
    this.textSubmit = this.textSubmit.bind(this);
  }  
  
  changeState(newA,newB){
    this.setState({ listA : newA ,listB : newB});
  }

  changeText(event) {
    this.setState({text : event.target.value});
  }

  textSubmit(){
    this.setState({
      listA : [this.state.text, ...this.state.listA]
    });
    console.log("A : " + this.state.listA);
    var x = this.state.listA.map((a,i) => console.log("A : " + a + "and Index : " + i));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Table listA={this.state.listA} listB={this.state.listB} compState={this.changeState} /> 
        <br/>
        <br/>
        <Insert value={this.state.text} s={this.changeText} insertV={this.textSubmit}/>
        <p> {this.state.text} </p>
        <p> {this.state.insert} </p>
    </div>
    );
  }
}
 
export default App;
































/*
-------------------------------------------- 6 --------------------------

class App extends Component {

  constructor(props) {
    super(props);  
    this.state = {
      listA : ["A","B","C",],
      listB : ["1","2","3",],
      text : "",
    }

    this.changeState = this.changeState.bind(this);
    this.changeText = this.changeText.bind(this);
    this.textSubmit = this.textSubmit.bind(this);
  }  
  
  changeState(newA,newB){
    this.setState({ listA : newA ,listB : newB});
  }

  changeText(event) {
    this.setState({text : event.target.value});
  }

  textSubmit(){
    this.setState({
      listA : [this.state.text, ...this.state.listA]
    });
    console.log("A : " + this.state.listA);
    var x = this.state.listA.map((a,i) => console.log("A : " + a + "and Index : " + i));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Table listA={this.state.listA} listB={this.state.listB} compState={this.changeState} /> 
        <br/>
        <br/>
        <Insert value={this.state.text} s={this.changeText} insertV={this.textSubmit}/>
        <p> {this.state.text} </p>
        <p> {this.state.insert} </p>
    </div>
    );
  }
}
 
export default App;





------------------------------------------- 5    ---------------------------------------------------------------
import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Table from './table.js';

class App extends Component {

  constructor(props) {
    super(props);  
    this.state = {
      listA : ["A","B","C","D","E","F","G","H","I","J","K","L","M"],
      listB : ["1","2","3","4","X","Y","zZ"]
    }

    this.changeState = this.changeState.bind(this);
  }  
  
  changeState(newA,newB){
    this.setState({ listA : newA ,listB : newB});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Table listA={this.state.listA} listB={this.state.listB} compState={this.changeState} /> 
        <br/>
    </div>
    );
  }
}
 
export default App;




















---------------------------------------------3-----------------------------------------
class App extends Component {

  constructor(props) {
    super(props);  
    this.state = {
      listA : ["A","B","C","D","E","F","G","H","I","J","K","L","M"],
      listB : ["1","2","3","4","X","Y","zZ"]
    }

    this.changeState = this.changeState.bind(this);
  }  
  
  changeState(newA,newB){
    this.setState({ listA : newA ,listB : newB});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Table listA={this.state.listA} listB={this.state.listB} compState={this.changeState} /> 
        <br/>
        <button onClick={this.delete}> Delete </button>
        <h4> {this.state.listB}</h4>
      </div>
    );
  }
}

class Table extends Component {
  
  constructor(props){
    super(props);
    this.changeStateC = this.changeStateC.bind(this);
//    this.listA = this.props.listA;
//    this.listB = this.props.listB;
  }

  a = this.props.listA;
  b = this.props.listB;
  odd="";

  trans(dir,key,del){
    if(dir === "l") {
      var temp = [];
      var temp2 = [];
     
      for(var i=0;i<this.b.length; i++) {
        if(i !== key) {
          temp2.push(this.b[i]);
        }
        else {
          this.odd = this.b[i];
        }
      }

      if(del === 0) {
      } 
      else if(del === 1) {
        temp[0] = this.odd;
        for(var x=0; x<this.a.length; x++) {
          temp.push(this.a[x]);
        }
        this.a = temp;
  
      }
 

        this.b = temp2;
    } 

    else if (dir == "r") 
    {
      var temp = [];
      var temp2 = [];
      for(var z=0; z<this.a.length; z++) {
        if(z !== key) {
          temp.push(this.a[z]);
        }
        else {
          this.odd = this.a[z];
        }
      }

      temp2[0] = this.odd;

      for(x=0; x<this.b.length; x++) {
        temp2.push(this.b[x]);
      }

        this.a = temp;
        this.b = temp2;
    }
  }

  changeStateC(dir,key,del) {
    this.trans(dir,key);
    this.props.compState(this.a,this.b)
  }

  moveOnClick(direction,key,del) {
    if(direction === "l") {
      this.changeStateC(direction,key);   
    } else if (direction === "r") {
      this.changeStateC(direction,key);
    }
  } 

  v(dir,key,del) {
    del = 1;
    this.moveOnClick(dir,key,del);
  }

  getList (a,pos) {
    if(pos === "left-col") {
      var list = a.map( (var1,i,a) => (<ul key={"left" + i} onClick={() => this.moveOnClick("r",i,this.props.delete)}> {var1} <button id={i} onClick={()=>this.v("r",i,"del")}> x </button></ul> ));
    } else if(pos === "right-col") {
       list = a.map( (var1,i,a) => (<ul key={"right" + i} onClick={() => this.moveOnClick("l",i,this.props.delete)}> {var1}</ul>));
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









----------------------------------------------2----------------------------------------
class App extends Component {

  constructor(props) {
    super(props);  
    this.state = {
      listA : ["A","B","C","D","E","F","G","H","I","J","K","L","M"],
      listB : ["1","2","3","4","X","Y","zZ"]
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
    this.listA = this.props.listA;
    this.listB = this.props.listB;
  }

  a = this.props.listA;
  b = this.props.listB;
  odd="";

  trans(dir,key){
  
    var temp = [];
    console.log("A : " + this.a);
    console.log("B : " + this.b);
    console.log(this.a[2]);

    for(var i=0;i<this.b.length; i++) {
      if(i != key) {
        temp.push(this.b[i]);
        console.log(this.b[i]);
      }
      else {
        this.odd = this.b[i];
      }
    }

    var temp2 = [];
    temp2[0] = this.odd;

    for(var x=0; x<this.a.length; x++) {
      console.log("THIS IS :" +this.props.listA[i]);
      temp2.push(this.a[x]);
      console.log("a[i] : "+ this.a[i]);
    }


    this.b = temp;
    this.a = temp2;
    console.log("A : "+ this.a);
    console.log("Temp : " + temp);
    console.log("Temp2 : " + temp2);
    console.log("Odd : " + this.odd);
    
  }

  changeStateC(dir,key) {
    console.log("HHHHH : " + dir + key);
    console.log("Changing State in Child.... ");
    this.trans(dir,key);
    this.props.compState(this.a,this.b)
  }

  moveOnClick(direction,key) {
    if(direction === "l") {
      console.log("Moved Left");
      console.log(key); 
      this.changeStateC(direction,key);   
    } else if (direction === "r") {
      console.log("Moved Right");
      console.log(key);
    }
  } 

  getList (a,pos) {
    if(pos === "left-col") {
      var list = a.map( (var1,i,a) => (<ul key={"left" + i} onClick={() => this.moveOnClick("r",i)}> {var1}</ul>));
      //var list = a.map( (var1,i,a) => (<ul key={"left" + i} onClick={() => this.moveOnClick("r","left"+i)}> {var1}</ul>));
    } else if(pos === "right-col") {
      var list = a.map( (var1,i,a) => (<ul key={"right" + i} onClick={() => this.moveOnClick("l",i)}> {var1}</ul>));
      //var list = a.map( (var1,i,a) => (<ul key={"right" + i} onClick={() => this.moveOnClick("l","right"+i)}> {var1}</ul>));
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





















------------------------------------ 1 ----------------------------------------------







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