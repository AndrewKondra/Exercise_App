import './App.css';
import React, { Component } from "react";
import UserInput from './UserInput';
// import background from "./activities2.png";

class App extends Component {
    render() {
        return (
            <div>
                <div className="" style={{ height: '100vh' }} >
                    <UserInput />
                </div>
            </div >
        );
    }
}

export default App;
