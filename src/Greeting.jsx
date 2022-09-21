import React, { Component } from "react";

const Greeting = ({ greet  }) => {

    if (greet !== "") {
        return (
            <div>
                <h1> Hi, {greet} </h1>
            </div>
        );
    }
}


export default Greeting;
