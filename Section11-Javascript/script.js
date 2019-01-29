//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?
function checkDriverAge1() {	
	var age = prompt("What is your age? CD1");
	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}

checkDriverAge1();


//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.
var checkAge = function checkDriverAge2() {
	var age = prompt("What is your age? CD2");
	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

checkAge();


//BONUS: Instead of using the prompt. Now, only use the return keyword and make the checkDriverAge() function accept an argument of age, so that if you enter:
function checkDriverAge(age) {
	if (Number(age) < 18) {
		return("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		return("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		return("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

checkDriverAge(81);