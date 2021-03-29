
const display_first_output = document.querySelector('.first-output');
const display_first_current_output = document.querySelector('.current-output');
const display_current_operator = document.querySelector('.operator');
const display_result = document.querySelector('.result');
display_first_output.innerText = 0;

var listNumber_first = [];
var listNumber_current = [];
var firstOutput = 0;
var currentOutput = 0;
var result = 0;
var typeOperation;
var firstOpertionStatus = false;

function getValue(value) {

	if (!firstOpertionStatus) {
		listNumber_first.push(value);
		let getNumbers_first = listNumber_first.join('');
		firstOutput = getNumbers_first;
		display_first_output.innerText = firstOutput;
	}
	
	if (firstOpertionStatus) {
		listNumber_current.push(value);
		let getNumbers_current = listNumber_current.join('');
		currentOutput = Number(getNumbers_current);
		display_first_current_output.innerText = currentOutput;
	}

}

function operation(type) {
	typeOperation = type;
	firstOpertionStatus = true;
	display_current_operator.innerText = typeOperation;
}

function _delete() {
	console.log('delete');
}

function getResult() {
	firstOpertionStatus = false;
	result = firstOutput + typeOperation + currentOutput;
	display_first_output.innerText = eval(result);
	display_first_current_output.innerText = '';
	display_current_operator.innerText = '';
}

function clearAll() {
	display_first_output.innerText = 0;
	display_first_current_output.innerText = '';
	display_current_operator.innerText = '';
	listNumber_first = [];
	listNumber_current = [];
	firstOutput = 0;
	currentOutput = 0;
}
