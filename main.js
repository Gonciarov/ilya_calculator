var displayedNumber = ""
var displayedOperator = ""


var sum = 0


let number1 = null;
let number2 = null;
let operator = null;
0;

function updateDisplay() {
	document.getElementById("inscreen").innerHTML = displayedNumber;
	document.getElementById("operator").innerHTML = displayedOperator;
}



function storeCalculationState() {
	number1 = result;
	number2 = null;
}

function clearCalculationState() {
	number1 = null;
	number2 = null
	operator = null;
	result = 0;
}



function onNumberClick(num) {
	if (!operator) {
		if (!number1) {
			displayedNumber = "";
		}
		displayedNumber += num.toString();
		number1 = parseInt(displayedNumber);
		updateDisplay();
		console.warn(number1);
	} else {
		if (!number2) {
			displayedNumber = "";
		}
		displayedNumber += num.toString();
		number2 = parseInt(displayedNumber);
		updateDisplay();
		console.warn(number2);
	}
}

function onOperatorClick(newOperator) {

	if (!number1) {
		return;
	}

	if (number2) {
		calculateResult();
		storeCalculationState();
		displayedNumber = result.toString();
	}

	operator = newOperator;
	displayedOperator = operator;
	updateDisplay();
}


function equals() {
	if (!(number1 && operator && number2)) {
		console.warn('nothing to do')
		return;
	}

	calculateResult();

	storeCalculationState();
	displayedNumber = result.toString();
	displayedOperator = ""
	updateDisplay();	
}

function calculateResult() {	
	switch (operator) {
		case ("+"): {
			result = number1 + number2;
			break;
		}
		case ("-"): {
			result = number1 - number2;
			break;
		}
		case ("/"): {
			result = number1 / number2
			break;
		}
		case ("*"): {
			result = number1 * number2
			break;
		}
	}

	console.warn(result);
	return result;
}


function onClearClick() {
	displayedNumber = "";
	displayedOperator = "";
	clearCalculationState();
	updateDisplay();
}


