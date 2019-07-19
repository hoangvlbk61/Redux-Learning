const mathReducer = (state = {
    result: 100,
    lastValues: []
}, action) => {
    let newState = {...state };
    console.log(newState.result);
    switch (action.type) {
        case "ADD":
            newState = {
                ...newState,
                lastValues: [...newState.lastValues, newState.result]
            }
            newState.result = newState.result + action.payload;
            break;
        case "SUBTRACT":
            newState = {
                ...newState,
                lastValues: [...newState.lastValues, newState.result]
            }
            newState.result = newState.result - action.payload;
            break;
        default:
            break;
    }
    return newState;
}

export default mathReducer;