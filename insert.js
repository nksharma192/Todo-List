import React from 'react';

class Insert extends React.Component {
    render() {
        return (
            <div className="Insert-main">
                New Item : <input name="item" type="text" value={this.props.value} onChange={this.props.s}/>
                <input type="submit" name="submit" value="Add" onClick={this.props.insertV}/>
            </div>
        );
    }
}

export default Insert;




/* 
-------------------------6 -------------------------------
import React from 'react';

class Insert extends React.Component {
    render() {
        return (
            <div className="Insert-main">
                New Item : <input name="item" type="text" value={this.props.value} onChange={this.props.s}/>
                <input type="submit" name="submit" value="Add" onClick={this.props.insertV}/>
            </div>
        );
    }
}

export default Insert;




*/