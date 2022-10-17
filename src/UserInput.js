import './App.css';
import './index.css'
import React, { Component, useEffect } from "react";
import SendData from './SendData';
import Greeting from './Greeting';
import getActivities from './getActivities';
import ActTable from './actTable';


class UserInput extends Component {
  constructor() {
    super();
    this.state = {
      activity: "",
      distance: "",
      name: "Andrew",
      actDate: "",
      greet: "",
      activities: [],
      activityNumber: 5
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.updateTable = this.updateTable.bind(this);
  }
  

  async onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async onSubmitForm() {
    const newData = this.state
    const greet = await SendData(newData)
    const activities = await getActivities(this.state.activityNumber)
    this.setState(
      {
        greet: greet.greeting,
        activities
      })
  }

  async updateTable(event) {
    const activities = await getActivities(event.target.value)
    this.setState(
      {
        [event.target.name]: event.target.value,
        activities,
      })
  }

  render() {
    return (
      <div className="grid grid-cols-1 w-full" >
        <form className="w-4/5 grid grid-cols-3 flex m-4 border-slate-200">
          <div className="w-40 h-10 px-8">
            <label className="font-sans text-xl font-medium text-gray-800 dark:text-gray-300" >
              Activity:
              <input
                className="p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="activity"
                type="text"
                value={this.state.activity}
                onChange={this.onChange}
              />
            </label>
          </div>
          <div className="w-10 h-10 px-8">
            <label className="font-sans text-xl font-medium text-gray-800 dark:text-gray-300" >
              Distance:
              <input
                className="w-20 p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="distance"
                type="number"
                value={this.state.distance}
                onChange={this.onChange}
              />
            </label>
          </div>
          <div className="w-40 h-10 px-8">
            <label className="font-sans text-xl font-medium text-gray-800 dark:text-gray-300" >
              Date:
              <input
                className="p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="actDate"
                type="date"
                value={this.state.actDate}
                onChange={this.onChange}
              />
            </label>
          </div>
        </form>
        <div className="w-4/5 flex justify-center py-8 px-4">
          <button className="bg-slate-200 hover:bg-green-500 text-black font-bold py-2 px-4 border border-slate-400 rounded" onClick={this.onSubmitForm}>Submit Activity</button>
        </div>
        <div className="relative top-2">
          <div className="flex justify-center m-4 font-sans text-xl font-medium text-black dark:text-gray-300">
            <Greeting greet={this.state.greet} />
          </div>
          <div className="flex justify-center relative top-6 m-4">
            <ActTable activities={this.state.activities} actNum={this.state.activityNumber} />
          </div>
        </div>
      </div>
    );
  }
}

export default UserInput;