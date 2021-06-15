function inputValue() {
    //alert("ok");
    var inputObj = {
        inputVal: document.getElementById("inputVal").value,
        get addValue() {
          console.log(this.inputVal);
        },
      
        set addValue(value) {
            this.inputVal = value;
        }
        
    };

    var data = inputObj.inputVal;
    data++;
    console.log(inputObj.inputVal);

}




// function inputValue() {    
//     var inputVal = document.getElementById("inputVal").value;
//     for (var i=0; i<inputVal.length ; i++)
//     { 
//         inputVal[i]++;
//         console.log(inputVal[i]);
//     }
    
// };


