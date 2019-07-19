import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';


// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


import {createStore, combineReducers, applyMiddleware} from "redux" ; 
import logger from "redux-logger" ; 


const mathReducer = (state  = { 
    result: 100 , 
    lastValues: []
}, action) => { 
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

const userReducer = (state = { name: "Unknown", age: 18}, action) => { 
    switch(action.type) { 
        case "SET_NAME": 
        state = { 
            ...state, 
            name: action.payload
        }
        break; 
        case "SET_AGE": 
        state = { 
            ...state, 
            age: action.payload
        }
        break; 
        default: 
        break; 
    }
    return state ; 
}

const myLoggerAsMiddleWare = (store) => (next) => (action) => { 
    console.log("Logger action: ", action) ; 
    next(action);
}

const store = createStore(combineReducers({math: mathReducer, user: userReducer}), {}, applyMiddleware(logger)) ; 

store.subscribe(() => { 
    // console.log("Store updated", store.getState()); 
})


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);