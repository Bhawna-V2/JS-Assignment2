var inputVal = document.getElementById("inputVal").value;
var intVal;
var val;




function getChangedValue() {  //  Can parse value by creating new function onchange on input
    var inputVal = document.getElementById("inputVal").value ;  
    intVal = parseInt(inputVal); // Parsing string value to integer
    console.log(intVal);
}

const inputObj = {
    userInput: intVal,
    get getValue() {        
       return this.userInput;
    },
    set setValue(value) {
        this.userInput = value;
    },
};

// inputObj.setValue = this.userInput;

function display() {
    document.getElementById("inputVal").innerHTML = inputObj.setValue;
}

function increment() {
    //alert("ok");
    val = inputObj.getValue;
    console.log(val);
    //alert("ok1");
    val = val++;
    inputObj.setValue;


    // val = ++intVal;
    // intVal = val;
    console.log(val); 
    display();
}
function decrement() {
    val = inputObj.getValue()
    val = val--;
    inputObj.setValue(val);

    // val = --intVal;
    // intVal = val;
    // console.log(intVal); 
    display();
}
function addition() {
    val = inputObj.getValue()
    val += val;
    inputObj.setValue(val);

    // val += intVal;
    // intVal = val;
    // console.log(intVal); 
    display();
}
function multiplication() {
    val = inputObj.getValue()
    val *= val;
    inputObj.setValue(val);

    // val *= intVal;
    // intVal = val;
    // console.log(intVal); 
    display();
}


