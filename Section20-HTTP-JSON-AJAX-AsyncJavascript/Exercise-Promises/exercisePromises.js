// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const promise = new Promise((resolve, reject) => {
	setTimeout(resolve, 4000, "Success");
});

// #2) Run the above promise and make it console.log "success"
promise.then(result => console.log(result));

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
const promiseShorter = Promise.resolve(
	setTimeout(console.log, 4000, "Success")
);

// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed').then(function () { }, function (error) {
	console.log("Ooops something went wrong ->" + error);
});


// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
	'https://swapi.co/api/people/1',
	'https://swapi.co/api/people/2',
	'https://swapi.co/api/people/3/wrongurl',
	'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url => {
	return fetch(url).then(result => result.json())
})).then(results => {
	console.log(results[0]);
	console.log(results[1]);
	console.log(results[2]);
	console.log(results[3]);
}).catch(function (error) {
	console.log('An error occured: ' + error);
});



// This one will still give responses for things that do not fail.
// but defeats the purpose of promise.all, as it is used
// to create an array of the results
// so that if one fails, they all fail.
// Promise.all(urls.map(url => {
// 	return fetch(url)
// 		.then(result => result.json())
// 		.then(result => console.log(result))
// 		.catch(error => console.log("Error with " + error))
// }));

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it? Yes.