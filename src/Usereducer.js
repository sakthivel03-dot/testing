import React, { useReducer } from 'react';

let initialState = {
    count: 0
};

let reducer = (state, action) => {
    switch (action.type) {
        case "like":
            return { count: state.count + 1 };
        case "dislike":
            return { count: state.count - 1 };
        case "cancel":
            return initialState;
        default:
            throw new Error("Invalid action type");
    }
};

function UseReducer() {
    let [count, setcount] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>UseReducer Hook Example</h1>
            <p>Count: {count.count}</p>
            <button onClick={() => setcount({ type: "like" })}>Like</button>
            <button onClick={() => setcount({ type: "dislike" })}>Dislike</button>
            <button onClick={() => setcount({ type: "cancel" })}>Cancel</button>
        </div>
    );
}

export default UseReducer;
