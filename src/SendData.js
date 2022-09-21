// import React, { Component } from "react";
// import UserInput from "./UserInput";


async function SendData (newData) {
    // console.log('Hello Andrew')
    // console.log(newData);
    const resDat = await fetch(`http://127.0.0.1:5000/submit`, {
        // credentials: 'include',
        method: 'POST',
        body: JSON.stringify(newData),
        headers: { "Content-type": "application/json; charset=UTF-8" }
        // body: info
    })
    // console.log(resDat);
    const jsonDat = await resDat.json();
    console.log(jsonDat)
    return jsonDat;
}


// function SendData (newData) {
//     let resp;
//     console.log('Hello Andrew');
//     console.log(newData)
//     fetch(`http://127.0.0.1:5000/test`,
//         {
//             method: 'POST',
//             body: JSON.stringify(newData),
//             headers: { "Content-type": "application/json; charset=UTF-8" }
//         })
//         .then(response => {
//             if (!response.ok) {
//                 return { failed: true, status: response.status };
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log(data);
//             console.log(data.total);

//         })
//         .catch(err => {
//             console.log(err)
//         });

//     // return resp;
// }




export default SendData

