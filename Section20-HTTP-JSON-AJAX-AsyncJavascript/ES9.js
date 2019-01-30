//object spread operator
const animals = {
	tiger: 23,
	cat: 12,
	human: 38,
	ape: 12
}
//es9 (object spread)
const { tiger, ape, ...rest } = animals;

function objectSpread(param1, param2, param3) {
	console.log(param1);
	console.log(param2);
	console.log(param3);
}
objectSpread(tiger, ape, rest);


//es6
const array = [1, 2, 3, 4, 5];
function sum(a, b, c, d, e) {
	return a + b + c + d + e;
}
sum(...array);




//es9 finally
const urls = [
	'https://swapi.co/api/people/1',
	'https://swapi.co/api/people/2',
	'https://swapi.co/api/people/3',
	'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url => fetch(url).then(people => people.json())))
	.then(array => {
		console.log('1', array[0]);
		console.log('2', array[1]);
		throw Error;
		console.log('3', array[2]);
		console.log('4', array[3]);
	})
	.catch(err => console.log('This is an error.', err))
	.finally(() => console.log('Extra actions can go here'));


//for await of...

const urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums'
]

// reminder of old for x of y.
const loopThroughUrl = (urls) => {
	for (url of urls) {
		console.log(url)
	}
}

loopThroughUrl(urls);

//New for await of feature:
const getData = async function () {
	const arrayOfPromises = urls.map(url => fetch(url));
	for await (let request of arrayOfPromises) {
		const data = await request.json();
		console.log(data);
	}
}

getData();