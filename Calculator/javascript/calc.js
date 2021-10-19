// Value tracker
const calcValues ={
	displayValue: "0",			//tracking what should be output to display.
	operator: false,			//tracking if operator button has been pushed, so the user cant double operator.
	decimalPush: false,				//tracking if decimal has been pushed, so the user cant double decimal.
};



//updates the display
function updateDisplay(){
	const display = document.querySelector('#calcDisplay');
	display.value = calcValues.displayValue;
};
/*																		functions for operators						*/

//function for divide key
const divideClick = document.querySelector('.divide');
divideClick.addEventListener("click", divide);
function divide(){
	
	if(calcValues.operator==false){
		calcValues.displayValue = calcValues.displayValue + "/";
		updateDisplay();
		calcValues.operator=true;
	}
		
	
}

//function for multiply key
const multiplyClick = document.querySelector('.multiply');
multiplyClick.addEventListener("click", multiply);
function multiply(){
	
	if(calcValues.operator==false){
		calcValues.displayValue = calcValues.displayValue + "*";
		updateDisplay();
		calcValues.operator=true;
	}
	
}

//function for minus key
const subtractClick = document.querySelector('.subtract');
subtractClick.addEventListener("click", subtract);
function subtract(){
	
	if(calcValues.operator==false){
		calcValues.displayValue = calcValues.displayValue + "-";
		updateDisplay();
		calcValues.operator=true;
	}
	
}

//function for addition key
const plusClick = document.querySelector('.plus');
plusClick.addEventListener("click", plus);
function plus(){
	
	if(calcValues.operator==false){
		calcValues.displayValue = calcValues.displayValue + "+";
		updateDisplay();
		calcValues.operator=true;
	}
	
}

//function for equal key
const equalClick = document.querySelector('#equalSign');
equalClick.addEventListener("click", equalSign);
function equalSign(){
	
	if(calcValues.operator==false){
		
		calcValues.displayValue = eval(calcValues.displayValue);   // eval will calculate string expression 
		updateDisplay();
		
	}
	
}




//clears display and resets all the tracking values 
const clearClick = document.querySelector('#clear');
clearClick.addEventListener("click", clear);
function clear(){
	
	calcValues.operator = false;
	calcValues.decimalPush = false;
	calcValues.displayValue = "0";
	updateDisplay();
}

// percent key function: multiply by .01 to get percent
const percentClick = document.querySelector('.percent');
percentClick.addEventListener("click", percent);
function percent(){
	equalSign();
	calcValues.displayValue = calcValues.displayValue * .01;
	updateDisplay();
}
// sign key function:   flips sign of operand by multiplying by -1
const sign = document.querySelector('.sign');
sign.addEventListener("click", flip);
function flip(){
	equalSign();
	calcValues.displayValue = calcValues.displayValue * -1;
	updateDisplay();
}

//decimal key function: adds decimal if it hasnt been pushed already
const dotClicked = document.querySelector('#decimal');
dotClicked.addEventListener("click", decimal);
function decimal(){
	
	if(calcValues.decimalPush==false){
		
		if(calcValues.operator==true){
			calcValues.displayValue = calcValues.displayValue + "0.";
			updateDisplay();
		}else{
			calcValues.displayValue = calcValues.displayValue + ".";
			updateDisplay();
			calcValues.decimalPush = true;
		}
		calcValues.operator=false;
	}
	
};

/*
																				reference variables , EventListener, and click functions for number keys

*/

// Code same for buttons 1-9
const nineClicked = document.querySelector('#nine');		//selecting button for reference using a const variable
nineClicked.addEventListener("click", nine);				//detecting button click
function nine(){
	
	//adding digit to display.
	if(calcValues.displayValue == "0" ){		//If zero clear before adding digit. Which Makes sure 0 isnt added to beginning of the users input	
		calcValues.displayValue ="";
		calcValues.displayValue = calcValues.displayValue + 9;
		updateDisplay();
	}else{
		calcValues.displayValue = calcValues.displayValue + 9;
		updateDisplay();
	}
	calcValues.operator=false;					//reset operator bool
};

const eightClicked = document.querySelector('#eight');
eightClicked.addEventListener("click", eight);
function eight(){
	if(calcValues.displayValue == "0" ){
		calcValues.displayValue ="";
		calcValues.displayValue = calcValues.displayValue + 8;
		updateDisplay();
	}else{
		calcValues.displayValue = calcValues.displayValue + 8;
		updateDisplay();
	}
	calcValues.operator=false;
};

const sevenClicked = document.querySelector('#seven');
sevenClicked.addEventListener("click", seven);
function seven(){
	if(calcValues.displayValue == "0" ){
		calcValues.displayValue ="";
		calcValues.displayValue = calcValues.displayValue + 7;
		updateDisplay();
	}else{
		calcValues.displayValue = calcValues.displayValue + 7;
		updateDisplay();
	}
	calcValues.operator=false;
};

const sixClicked = document.querySelector('#six');
sixClicked.addEventListener("click", six);
function six(){
	if(calcValues.displayValue == "0" ){
		calcValues.displayValue ="";
		calcValues.displayValue = calcValues.displayValue + 6;
		updateDisplay();
	}else{
		calcValues.displayValue = calcValues.displayValue + 6;
		updateDisplay();
	}
	calcValues.operator=false;
};

const fiveClicked = document.querySelector('#five');
fiveClicked.addEventListener("click", five);
function five(){
	if(calcValues.displayValue == "0" ){
		calcValues.displayValue ="";
		calcValues.displayValue = calcValues.displayValue + 5;
		updateDisplay();
	}else{
		calcValues.displayValue = calcValues.displayValue + 5;
		updateDisplay();
	}
	calcValues.operator=false;
};

const fourClicked = document.querySelector('#four');
fourClicked.addEventListener("click", four);
function four(){
	if(calcValues.displayValue == "0" ){
		calcValues.displayValue ="";
		calcValues.displayValue = calcValues.displayValue + 4;
		updateDisplay();
	}else{
		calcValues.displayValue = calcValues.displayValue + 4;
		updateDisplay();
	}
	calcValues.operator=false;
};

const threeClicked = document.querySelector('#three');
threeClicked.addEventListener("click", three);
function three(){
	if(calcValues.displayValue == "0" ){
		calcValues.displayValue ="";
		calcValues.displayValue = calcValues.displayValue + 3;
		updateDisplay();
	}else{
		calcValues.displayValue = calcValues.displayValue + 3;
		updateDisplay();
	}
	calcValues.operator=false;
};

const twoClicked = document.querySelector('#two');
twoClicked.addEventListener("click", two);
function two(){
	if(calcValues.displayValue == "0" ){
		calcValues.displayValue ="";
		calcValues.displayValue = calcValues.displayValue + 2;
		updateDisplay();
	}else{
		calcValues.displayValue = calcValues.displayValue + 2;
		updateDisplay();
	}
	calcValues.operator=false;
};

const oneClicked = document.querySelector('#one');
oneClicked.addEventListener("click", one);
function one(){
	if(calcValues.displayValue == "0" ){
		calcValues.displayValue ="";
		calcValues.displayValue = calcValues.displayValue + 1;
		updateDisplay();
	}else{
		calcValues.displayValue = calcValues.displayValue + 1;
		updateDisplay();
	}
	calcValues.operator=false;
};

const zeroClicked = document.querySelector('#zero');
zeroClicked.addEventListener("click", zero);
function zero(){
	
	if(calcValues.displayValue !== 0 && calcValues.displayValue !== "0"){ //making sure user cannot input more than one 0 when value is already 0
		calcValues.displayValue = calcValues.displayValue + 0;
		updateDisplay();
	}
	
	calcValues.operator=false;
};
