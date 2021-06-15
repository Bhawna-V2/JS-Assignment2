var inputVal = document.getElementById("inputVal").value;
var intVal;
var val = 1;

function getChangedValue() {
    var inputVal = document.getElementById("inputVal").value
    intVal = parseInt(inputVal); 
    console.log(intVal);
}

var inputObj = {
    userInput: intVal,
    get addValue() {        
        console.log(this.userInput);
    },
    set addValue(value) {
        this.userInput = value;
    },
}
    
//document.getElementById("userInput").innerHTML = inputObj.userInput;



function increment() {
    val = ++intVal;
    intVal = val;
    console.log(intVal); 
}
function decrement() {
    val = --intVal;
    intVal = val;
    console.log(intVal); 
}
function addition() {
    val += intVal;
    intVal = val;
    console.log(intVal); 
}
function multiplication() {
    val *= intVal;
    intVal = val;
    console.log(intVal); 
}


