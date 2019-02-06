const fs = require('fs');
// 1 - What floor does santa end up on.
// ( --> should go UP 1 floor
// ) --> should go DOWN 1 floor

function question1() {
    fs.readFile('input.txt', (err, data) => {
        console.time('santa-time-floor');
        const directions = data.toString();
        // console.log(directions);
        const directionsArray = directions.split('');
        //console.log(directionsArray);
        const answer = directionsArray.reduce((accumulator, currentValue) => {
            if (currentValue === '(') {
                return accumulator += 1;
            } else if (currentValue === ')') {
                return accumulator -= 1;
            }
        }, 0);
        console.timeEnd('santa-time-floor')
        console.log("Floor:", answer);
    })
}

question1();
 
// 2 - When does santa first enter the basement
function question2() {
    fs.readFile('input.txt', (err, data) => {
        console.time('santa-time-basement');
        const directions = data.toString();
        // console.log(directions);
        const directionsArray = directions.split('');
        //console.log(directionsArray);
        let accumulator = 0;
        let counter = 0;
        const answer = directionsArray.some((currentItem) => {
            if (currentItem === '(') {
                accumulator += 1;
            } else if (currentItem === ')') {
                accumulator -= 1;
            }
            counter += 1;
            return accumulator < 0;
        })
        console.timeEnd('santa-time-basement')
        console.log("Basement:", counter);
    })
}

question2();
