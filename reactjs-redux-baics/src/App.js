import React, {Component} from 'react';
import Main from './components/Main'; 
import User from './components/User';

import './App.css';

class App extends Component {

  constructor(props) 
  { 
    super(props) ; 
    this.state = { 
      name : 'Max' , 
    };  
    this.changeUsername = this.changeUsername.bind(this) ; 
  }

  changeUsername(newName) { 
    this.setState({ 
      name: newName 
    })
  }

  render() {
    const name = this.state.name ; 
    return (
    <div className="App">
      <Main changeUsername={this.changeUsername}/>
      <User username={name}/>
    </div>
  );
  }
}

export default App;
