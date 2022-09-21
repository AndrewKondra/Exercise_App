import './App.css';
import React, { Component } from "react";
import UserInput from './UserInput';
// import background from "./activities2.png";

class App extends Component {
    // constructor() {
    //     super()
    // this.state = {
    //     initTable: []
    // }
    // const initTable = async () => {getActivities (5)}
    // console.log(initTable)
    // }

    // async getInit(event) {
    //     const initTable = await getActivities(5)
    //     console.log('----- initTable',initTable)
    //     this.setState({
    //         initTable,
    //     });
    // }

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
