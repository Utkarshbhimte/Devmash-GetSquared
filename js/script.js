var inputBox = document.getElementById('input');
var outputBox = document.getElementById('output');
var button = document.getElementById('calc');

// Variables to perform Mathematical Operations
var input;
var output;

button.addEventListener("click", function() {

  //Getting the Value from the Input box
    input = parseInt(inputBox.value);
    console.log(input);

    output = input * input;
    console.log(output);

    //Injectung them to Output
    outputBox.innerHTML = output;

});
