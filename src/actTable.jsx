// import React, { Component, useEffect, useState } from "react";
// import getActivities from './getActivities';
// import SendData from './SendData';

// class ActTable extends Component {
//     constructor(activities) {
//         super();
// const activities = async () =>  {await getActivities(5) }
// console.log(activities)
// this.state = {
//     activityNumber: 5,
//     activities: []
// };

// console.log(this.state.activities)
// this.onInputchange = this.onInputchange.bind(this);
// this.state.activities = async () => await getActivities(this.state.activityNumber)
// }

// async onInputchange(event) {
//     const activities = await getActivities(this.state.activityNumber)
//     console.log(activities)
//     this.setState(
//         {
//             activities,
//             [event.target.name]: event.target.value,
//         });
//     // console.log(this.state.activityNumber)
// }

// render() {
//     console.log(this.state.activities)

import './App.css';
import './index.css';
import getActivities from './getActivities';
import React, { useEffect, useState } from "react";

const ActTable = (tableProp) => {
    // const tableData = tableProp.activities


    const [tableData, setTableData] = useState([]);
    const [actNum, setActNum] = useState(5);
    console.log(actNum);

    useEffect(() => {
        updateTable(actNum)
    }, [actNum])

    function newActNum(event) {
        setActNum(event.target.value)
    }

    async function updateTable(actNum) {
        const newData = await getActivities(actNum);
        console.log(newData);
        setTableData(newData);
    };

    console.log(tableData);

    return (
        <div>
            <form>
                <div className="inline-flex justify-center w-full" >
                    <label className="p-6 place-items-center inline-block relative top-6 font-sans mb-2 text-xl font-medium text-black dark:text-gray-300">
                        Number of Activities :
                        <input onChange={newActNum} name="newActNum" className="text-center shadow-md border-6 border-black" min="1" type="number" style={{ width: 50 }} />
                    </label>
                </div>
            </form>
            <div className="flex w-full justify-center pb-6 ">
                <table className="w-full justify-center " >
                    <thead className="">
                        <tr className="">
                            <th className="b px-4 py-2">
                                Name</th>
                            <th className="px-4 py-2 ">
                                Activity</th>
                            <th className="px-4 py-2">
                                Distance</th>
                            <th className="px-4 py-2">
                                Date</th>
                            <th className="px-4 py-2">
                                Time Stamp</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {tableData.map((data) => (
                            <tr className="h-16 text-center">
                                <td className="px-4 py-2 ">
                                    {data.name}</td>
                                <td className="px-4 py-2 inline-flex ">
                                    <img className="" src={`/${data.activity}.png`} alt={data.activity} border='3' height='50' width='50' /> </td>
                                <td className="px-4 py-2">
                                    {data.distance}</td>
                                <td className="px-4 py-2">
                                    {data.act_date}</td>
                                <td className="px-4 py-2">
                                    {data.time_stamp}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
// }
export default ActTable;