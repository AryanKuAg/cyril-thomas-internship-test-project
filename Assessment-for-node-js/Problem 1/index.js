var xlsx = require('node-xlsx');

var obj = xlsx.parse(__dirname + '/kepler_data.xlsx'); // parses a file


let filteredKeplerList = obj[0].data.map(e => {  // filtering the data

    if(e.length > 20){
        if(e[0] !== '' && e[0] !== 'kepid'){
            return e;
        }
    }
    return [];
}).filter(e => e.length > 0);


// filteredKeplerList.forEach(e => {
//     console.log(typeof e[25]);
// })

// Filtering data based on assignment criteria 
// let habitablePlanets = filteredKeplerList.filter(e => {
//     let isConfirmed = e[3] === 'CONFIRMED';
//     let isInSol = e[31] >= 0.36 && e[31] <= 1.11;
//     let isKoiPrad = e[25] < 1.6;
//     if(isConfirmed && isInSol && isKoiPrad){
//         return true;
//     }
//     return false;
// })

