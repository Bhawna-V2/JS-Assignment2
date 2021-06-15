var inputVal = document.getElementById("inputVal").value;
var intVal;
var val = 1;

var inputObj = {
    userInput: intVal,
    get addValue() {        
        console.log(this.userInput);
    },
    set setValue(value) {
        this.userInput = value;
    },
}
function display() {
    document.getElementById("inputVal").innerHTML = inputObj.userInput;
}

function getChangedValue() {  //  Can parse value by creating new function onchange on input
    var inputVal = document.getElementById("inputVal").value ;  
    intVal = parseInt(inputVal); // Parsing string value to integer
    console.log(intVal);
}

function increment() {
    val = ++intVal;
    intVal = val;
    console.log(intVal); 
    display();
}
function decrement() {
    val = --intVal;
    intVal = val;
    console.log(intVal); 
    display();
}
function addition() {
    val += intVal;
    intVal = val;
    console.log(intVal); 
    display();
}
function multiplication() {
    val *= intVal;
    intVal = val;
    console.log(intVal); 
    display();
}


