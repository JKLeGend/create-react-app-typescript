import React from 'react';
import { useState, useEffect } from 'react';
const UseStateEffectBasic = () => {
    const [count, setCount] = useState(() => 10);
    useEffect(() => {
        document.title = `You clicked ${count} times`;
        return () => {
            alert("clicked");
            console.log("useEffect in CounterExample");
        };
    }, [count]);
    return (React.createElement("div", null,
        React.createElement("p", null,
            "You clicked ",
            count,
            " times"),
        React.createElement("button", {onClick: () => setCount(count + 1)}, "Click me")));
};

export default UseStateEffectBasic;