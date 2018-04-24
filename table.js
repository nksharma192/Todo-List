import React from 'react';
import './table.css';

class Table extends React.Component {
  
    constructor(props){
      super(props);
      this.moveOnClick = this.moveOnClick.bind(this);
    }
  
    trans(dir,key){
      var a = this.props.listA;
      var b = this.props.listB;
      var odd = "";
      var temp = [];
      var temp2 = [];

      if(dir === "R") {
        
        for(var i=0;i<b.length; i++) {
          if(i !== key) {
            temp2.push(b[i]);
          }
          else {
            odd = b[i];
          }
        }
 
          temp[0] = odd;
          for(var x=0; x<a.length; x++) {
            temp.push(a[x]);
          }
          a = temp;        
          b = temp2;      
        }
      else if (dir === "L") 
      {
       for(var z=0; z<a.length; z++) {
          if(z !== key) {
            temp.push(a[z]);
          }
          else {
            odd = a[z];
          }
        }
  
        temp2[0] = odd;
  
        for(x=0; x<b.length; x++) {
          temp2.push(b[x]);
        }
  
          a = temp;
          b = temp2;
      }
      this.props.compState(a,b);
    }
  
    moveOnClick(direction,key) {
        this.trans(direction,key);   
    } 
  
    getList (list,position) {
      var displayList;
      if(position === "left-col") {
        displayList = list.map( 
                        (var1,i) => (
                                        <ul key={"left" + i} onClick={() => this.moveOnClick("L",i)}>
                                          {var1} 
                                        </ul> 
                                      ));
      } 
      
      else if(position === "right-col") {
        displayList = list.map( 
                        (var1,i) => (
                                        <ul key={"right" + i} onClick={() => this.moveOnClick("R",i)}>
                                          {var1}
                                        </ul>
                                      ));
      }
      return displayList;
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

  export default Table;

















/*
---------------------------------------------      6          --------------------------------------------------------
import React from 'react';
import './table.css';

class Table extends React.Component {
  
    constructor(props){
      super(props);
      this.moveOnClick = this.moveOnClick.bind(this);
    }
  
    trans(dir,key){
      var a = this.props.listA;
      var b = this.props.listB;
      var odd = "";
      var temp = [];
      var temp2 = [];

      if(dir === "R") {
        
        for(var i=0;i<b.length; i++) {
          if(i !== key) {
            temp2.push(b[i]);
          }
          else {
            odd = b[i];
          }
        }
 
          temp[0] = odd;
          for(var x=0; x<a.length; x++) {
            temp.push(a[x]);
          }
          a = temp;        
          b = temp2;      
        }
      else if (dir === "L") 
      {
       for(var z=0; z<a.length; z++) {
          if(z !== key) {
            temp.push(a[z]);
          }
          else {
            odd = a[z];
          }
        }
  
        temp2[0] = odd;
  
        for(x=0; x<b.length; x++) {
          temp2.push(b[x]);
        }
  
          a = temp;
          b = temp2;
      }
      this.props.compState(a,b);
    }
  
    moveOnClick(direction,key) {
        this.trans(direction,key);   
    } 
  
    getList (list,position) {
      var displayList;
      if(position === "left-col") {
        displayList = list.map( 
                        (var1,i) => (
                                        <ul key={"left" + i} onClick={() => this.moveOnClick("L",i)}>
                                          {var1} 
                                        </ul> 
                                      ));
      } 
      
      else if(position === "right-col") {
        displayList = list.map( 
                        (var1,i) => (
                                        <ul key={"right" + i} onClick={() => this.moveOnClick("R",i)}>
                                          {var1}
                                        </ul>
                                      ));
      }
      return displayList;
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

  export default Table;

 ---------------------------------------------      5             ----------------------------------------------------------


import React from 'react';
import './table.css';

class Table extends React.Component {
  
    constructor(props){
      super(props);
      this.moveOnClick = this.moveOnClick.bind(this);
    }
  
    a = this.props.listA;
    b = this.props.listB;
    odd="";
  
    trans(dir,key){
      if(dir === "R") {
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
 
          temp[0] = this.odd;
          for(var x=0; x<this.a.length; x++) {
            temp.push(this.a[x]);
          }
          this.a = temp;
    
        
          this.b = temp2;
      
        }
      else if (dir == "L") 
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
  
    moveOnClick(direction,key) {
        this.trans(direction,key);
        this.props.compState(this.a,this.b)
    } 
  
    getList (list,position) {
      var displayList;
      if(position === "left-col") {
        displayList = list.map( 
                        (var1,i) => (
                                        <ul key={"left" + i} onClick={() => this.moveOnClick("L",i)}>
                                          {var1} 
                                        </ul> 
                                      ));
      } 
      
      else if(position === "right-col") {
        displayList = list.map( 
                        (var1,i) => (
                                        <ul key={"right" + i} onClick={() => this.moveOnClick("R",i)}>
                                          {var1}
                                        </ul>
                                      ));
      }
      return displayList;
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

  export default Table; */