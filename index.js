// function inputValue() {
//     //alert("ok");
//     var inputObj = {
//         inputVal: document.getElementById("inputVal").value,
//         // get addValue() {
//         //   console.log(this.inputVal);
//         // },
      
//         // set addValue(value) {
//         //     this.inputVal = value;
//         // }
        
//     };

//     var data = inputObj.inputVal;
//     data++;
//     console.log(inputObj.inputVal);

// }


var inputVal = document.getElementById("inputVal").value;
var intVal = parseInt(inputVal);
var val = 1;

var inputObj = {
    userInput: inputVal,
    get addValue() {
        console.log(this.userInput);
    },
    set addValue(value) {
        this.userInput = value;
    }
}

function addition() {
    val += inputVal;
    inputVal = val;
    console.log(inputVal);
}





// function inputValue() {    
//     var inputVal = document.getElementById("inputVal").value;
//     for (var i=0; i<inputVal.length ; i++)
//     { 
//         inputVal[i]++;
//         console.log(inputVal[i]);
//     }
    
// };


