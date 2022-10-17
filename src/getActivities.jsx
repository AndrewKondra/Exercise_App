async function getActivities(maxRow) {
    // console.log('Hello Andrew')
    // console.log(maxRow)
    // await fetch(`http://127.0.0.1:5000/activities`, {
    //     // credentials: 'include',
    //     method: 'POST',
    //     body: JSON.stringify(maxRow),
    //     headers: { "Content-type": "application/json; charset=UTF-8" }
    //     // body: info
    // })

    const resDat = await fetch(`http://127.0.0.1:5000/activities`, {
        method: 'POST',
        body: JSON.stringify(maxRow),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })

    // console.log(resDat);
    const jsonDat = await resDat.json();
    // console.log(jsonDat)
    return jsonDat;
}

export default getActivities