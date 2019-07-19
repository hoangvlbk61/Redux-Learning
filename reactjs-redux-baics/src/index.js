// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


import {createStore} from "redux" ; 

// default state
const initialState = { 
       result: 100 , 
       lastValues: []
}

const reducer = (state = initialState, action) => { 
    let newState = {...state} ; 
    console.log(newState.result);
    switch(action.type) { 
        case "ADD": 
            newState = { 
                ...newState, 
                lastValues: [...newState.lastValues, newState.result] 
            }
            newState.result = newState.result + action.payload ; 
            break; 
        case "SUBTRACT": 
            newState = { 
                ...newState, 
                lastValues: [...newState.lastValues, newState.result] 
            }
            newState.result = newState.result - action.payload ; 
            break; 
        default: 
            break; 
    }
    return newState ; 
}

const store = createStore(reducer, ) ; 

store.subscribe(() => { 
    console.log("Store updated", store.getState()); 
})

store.dispatch({ 
    type: "ADD" , 
    payload: 100 
})

store.dispatch({ 
    type: "SUBTRACT", 
    payload: 200
})

store.dispatch({ 
    type: "ADD" ,
    payload: 200 
})