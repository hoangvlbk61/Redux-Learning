import React, {Component} from 'react';
import {Main} from './components/Main'; 
import {User} from './components/User';
import {connect} from 'react-redux'; 

import './App.css';

export class App extends Component {
  render() {
    return (
    <div className="App">
      <Main changeUsername={() => this.props.setName('Anna')}/>
      <User username={this.props.user.name}/>
    </div>
  );
  }
}

// Transfer state - props
const mapStateToProps = (state) => { 
    return { 
        user: state.user, 
        math: state.math
    }
}


// Transfer function to change the props respectively 
const mapDispatchToProps = (dispatch) => { 
    return { 
         setName: (name) => { 
           dispatch({ 
             type: "SET_NAME", 
             payload: name 
           })
         }, 
         setAge: (age) => { 
           dispatch({ 
             type: 'SET_AGE', 
             payload: age
           })
         }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App); 


