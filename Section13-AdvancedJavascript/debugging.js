const flattened = [[0, 1], [2,3], [4,5]].reduce((accumulator, array) => {
    // console.log('array', array);
    // console.log('accumulator', accumulator);
    debugger;
    return accumulator.concat(array) }
    , []);

// break fat arrow into seperate lines and use console.logs, and use clearer variable names.
// instead of console.log use debugger