import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Table />
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

class Timer extends Component {
  render() {
    return (
      <div>
        <p> Time : <span> {new Date().toLocaleTimeString()} </span></p>
      </div>
    );
  }
}

class Table extends Component {
  render() {
    return (
      <div className="table-main">
        <table>
          <tr> 
            <td className = "table-head"> <b> Tasks </b> </td>
            <td className = "table-head"> <b> Completed </b> </td>
          </tr>

          <tr>
            <td className = "table-list"> </td>
            <td className = "table-list"> </td>
          </tr>

        </table>
      </div>
    );
  }
}

export default App;
