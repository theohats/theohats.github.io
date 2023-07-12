function calculate(){
var firstNumber = document.getElementById("first").value;

    var secondNumber = document.getElementById("second").value;
    var sign = document.getElementById("modifier").value;
    console.log(sign);
    if(isNaN(firstNumber) || isNaN(secondNumber)){
        document.getElementById("displayAnswer").innerHTML = "values can only be a number";
    }
var answer = eval(firstNumber + sign + secondNumber);
document.getElementById("displayAnswer").innerHTML = answer;
}
