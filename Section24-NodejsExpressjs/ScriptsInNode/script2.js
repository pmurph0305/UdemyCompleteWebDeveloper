// example for exporting other scripts/modules.

// const largeNumber = 256;

//export default largeNumber;
// module exports in node.
// module.exports = {
//     largeNumber: largeNumber
// }; 

// // requiring scripts.
// const script2 = require('./script2.js')

// //file system module
// // const fs = require('fs'); 
// // console.log(fs);

// // http module.
// // const http = require('http') // http module
// // console.log(http);

// const a = script2.largeNumber;
// const b = 256;
// console.log(a+b);

// // directory
// //console.log(__dirname);



// Example server using just node.
// const http = require('http');
// const server = http.createServer((request, response) => {
//     //console.log('headers', request.headers);
//     console.log('method', request.method);
//     console.log('url', request.url);

//     const user = {
//         name: 'FakeName',
//         hobby: 'exampleHobby'
//     }

//     response.setHeader('Content-Type', 'application/json');
//     response.end(JSON.stringify(user));
//     //response.end('<h1>hey</h1>')
// })
// server.listen(8080);
