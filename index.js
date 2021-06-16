const inputObj = {
    userInput: 0,
    get getValue() {        
       return this.userInput; 
    },
    set setValue(value) { // second - set value  // 7
        this.userInput = value;
    },
};

function getChangedValue() { // First   //  Can parse value by creating new function onchange on input
    inputObj.setValue = +document.getElementById("inputVal").value ;  // 7 
}

function display() {
    document.getElementById("inputVal").value = inputObj.getValue;
}

function increment() { // Third - hit function
    var incVal = inputObj.getValue; // get value set by setValue   7
    incVal = ++incVal;  // 7+1
    inputObj.setValue = incVal;

    console.log(incVal);
    display();
}
function decrement() {
    var decVal = inputObj.getValue;
    decVal = --decVal;
    inputObj.setValue = decVal;
    console.log(decVal);
    display();    
}
function addition() {
    var addVal = inputObj.getValue;
    addVal += addVal;
    inputObj.setValue = addVal;

    console.log(addVal);
    display();
}
function multiplication() {
    var mulVal = inputObj.getValue;
    mulVal *= mulVal;
    inputObj.setValue = mulVal;

    console.log(mulVal);
    display();
}


