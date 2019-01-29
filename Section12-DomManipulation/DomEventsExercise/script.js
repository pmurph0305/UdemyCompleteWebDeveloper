// get button by id.
var button = document.getElementById("addToListBtn");
// get user input by id.
var input = document.getElementById("userInput");
// select the unordered list.
var ul = document.querySelector("ul");
// query for all li elements
var lis = document.querySelectorAll("li");

// add event listeners to all existing li elements.
for (var i =0; i < lis.length; i++) {
	// click listener to toggle done.
	lis[i].addEventListener("click", toggleDoneOnLiElement);
	// add buttons
	addRemoveButtonToLiElement(lis[i]);
}

//Event listeners to add items to list on click or enter press.
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

// Functions

function addListAfterClick() {
	// if input length is greater than 0
	if (inputLength() > 0) {
		// add input item to list.
		addListElement();
	}
}

function addListAfterKeypress(event) {
	// if input is greater than 0 and enter was pressed.
	if (inputLength() > 0 && event.keyCode === 13) {
		// add input item to list.
		addListElement();
	}
}

function addListElement() {
	// create a li element.
	var li = document.createElement("li");
	// append text to the li.
	li.appendChild(document.createTextNode(input.value));
	li.addEventListener("click", toggleDoneOnLiElement);
	addRemoveButtonToLiElement(li);
	// append li to the ul element.
	ul.appendChild(li);
	// reset input
	input.value = "";
}

function addRemoveButtonToLiElement(li) {
	var delButton = document.createElement("button");
	//set id and text.
	delButton.setAttribute("id",li.textContent);
	delButton.textContent = "Remove";
	// add as child to list item.
	li.appendChild(delButton);
	delButton.addEventListener("click",removeItemAfterButtonClick);
}

function inputLength() {
	return input.value.length;
}

function removeItemAfterButtonClick(event) {
	// get the parent li element.
	var parent = event.target.parentNode;
	// remove it from the ul element.
	parent.parentNode.removeChild(parent);
}

function toggleDoneOnLiElement(event) {
	// toggle the done class on the click on li element.
	event.target.classList.toggle("done");
}
