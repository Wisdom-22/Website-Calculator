
//console.log(typeof variableName);
function insertOne(){
    //var calculate = calculate + 1;
    var calculate = document.getElementById('operations').innerHTML.concat(1);
    document.getElementById('operations').innerHTML = calculate;
}

function insertTwo(){
    //var calculate = calculate + 2;
    var calculate = document.getElementById('operations').innerHTML.concat(2);
    document.getElementById('operations').innerHTML = calculate;
}

function insertThree(){
    var calculate = document.getElementById('operations').innerHTML.concat(3);
    document.getElementById('operations').innerHTML = calculate;
    console.log(typeof calculate);
}

function insertFour(){
    var calculate = document.getElementById('operations').innerHTML.concat(4);
    document.getElementById('operations').innerHTML = calculate;
}

function insertFive(){
    var calculate = document.getElementById('operations').innerHTML.concat(5);
    document.getElementById('operations').innerHTML = calculate;
}

function insertSix(){
    var calculate = document.getElementById('operations').innerHTML.concat(6);
    document.getElementById('operations').innerHTML = calculate;
}

function insertSeven(){
    var calculate = document.getElementById('operations').innerHTML.concat(7);
    document.getElementById('operations').innerHTML = calculate;
}

function insertEight(){
    var calculate = document.getElementById('operations').innerHTML.concat(8);
    document.getElementById('operations').innerHTML = calculate;
}

function insertNine(){
    var calculate = document.getElementById('operations').innerHTML.concat(9);
    document.getElementById('operations').innerHTML = calculate;
}

function insertZero(){
    //var calculate = calculate + 0;
     var calculate = document.getElementById('operations').innerHTML.concat(0); 
     document.getElementById('operations').innerHTML = calculate;
     //console.log(typeof calculate);
}

function insertDoubleZero(){
    var calculate = document.getElementById('operations').innerHTML.concat('00');
    document.getElementById('operations').innerHTML = calculate;
}

function insertDecimalPoint(){
    var calculate = document.getElementById('operations').innerHTML.concat('.');
    document.getElementById('operations').innerHTML = calculate;
}

function backspace(){
    var text = document.getElementById('operations').innerHTML;
    var newText = text.substring(0, text.length - 1);
    document.getElementById('operations').innerHTML = newText;
}

function cancel(){
    document.getElementById('operations').innerHTML = '';
}

function insertPercentage(){
    var value =  document.getElementById('operations').innerHTML;
    value = parseFloat(value);
    value = value / 100;
    document.getElementById('operations').innerHTML = value;
}

function calculateSquared(){
    var value = document.getElementById('operations').innerHTML;
    value = value * value;
    document.getElementById('operations').innerHTML = value;
}

function insertPlus(){
    var calculate = document.getElementById('operations').innerHTML.concat("+");
    document.getElementById('operations').innerHTML = calculate;
}

function insertMinus(){
    var calculate = document.getElementById('operations').innerHTML.concat("-");
    document.getElementById('operations').innerHTML = calculate;
}

function insertDivide(){
    var calculate = document.getElementById('operations').innerHTML.concat("/");
    document.getElementById('operations').innerHTML = calculate;
}

function insertMultiplication(){
    var calculate = document.getElementById('operations').innerHTML.concat("*");
    document.getElementById('operations').innerHTML = calculate;
}

function calculate(){
    var calculate = document.getElementById('operations').innerHTML;
    calculate = eval(calculate);
    document.getElementById('operations').innerHTML = calculate;
}

function insertSquareRoot(){
    var calculate = document.getElementById('operations').innerHTML;
    calculate = Math.sqrt(calculate);
    document.getElementById('operations').innerHTML = calculate;
}

function insertPlusMinus(){
    var value = document.getElementById('operations').innerHTML;
    value = parseFloat(value);
    if(value < 0){
        value =  -1 * value
    }else if(value > 0){
        value = -1 * value;
    }
    document.getElementById('operations').innerHTML = value;
}

function insertFactorial(){
    var value = document.getElementById('operations').innerHTML;
    var answer = 0;
    value = parseInt(value);
    for(let i = 0; i<=value; i++){
        answer = answer + i;
    }
    document.getElementById('operations').innerHTML = answer;
}




