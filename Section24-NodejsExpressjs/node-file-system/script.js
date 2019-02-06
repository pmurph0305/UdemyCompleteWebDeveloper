const fs = require('fs');

// asycnronous read file.
fs.readFile('./hello.txt', (err, data) => {
    if (err) {
        console.log('error.' + err);
    } else {
        // if no encoding is entered (ie .toString), raw buffer is returned.
        console.log('Async Read File:',data.toString(('utf8')));
    }
});

// synchronous read file.
const file = fs.readFileSync('./hello.txt');
console.log('Sync Read File:', file.toString());

// Append to the file.
// fs.appendFile('./hello.txt', ' Append this to the file.', err => {
//     if (err) {
//         console.log("err:" + err);
//     }
// });

// WRITE
fs.writeFile('./bye.txt', 'Good bye text write', err => {
    if (err) {
        console.log('err' + err);
    }
})

// DELETE a file.
fs.unlink('./bye.txt', err => {
    if (err) {
        console.log('err' + err);
    }
});