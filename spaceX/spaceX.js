const url = "https://api.spacexdata.com/v2/launchpads";

 d3.json(url).then(receivedData => console.log(receivedData));

// // this would retrieve results from vandenberg only
// d3.json(url).then(spaceXResults =>
//     console.log(spaceXResults[0]));

// // code to retrieve full name of vandenburg
// d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// // call the latitude of vandenberg
// d3.json(url).then(spaceXResults =>
//     console.log(spaceXResults[0].location.latitude));

// SKILL DRILL: use map to print only lat and long of each launch station

d3.json(url).then(spaceXResults => 
    console.log(spaceXResults.map(row=>(row.location.latitude+","+row.location.longitude))));
// print lat, long and station name
//d3.json(url).then(spaceXResults => 
    //console.log(spaceXResults.map(row=>(row.location.name+":"+row.location.latitude+","+row.location.longitude))));

    