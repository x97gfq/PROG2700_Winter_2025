let previousKey = "";
let currentKey = "";
let operator = "";

document.getElementById("addition").addEventListener('click', function() {
    operator = "addition";
});

document.getElementById("calculate").addEventListener('click', function() {
    if (operator === "addition") {
        let result = previousKey + currentKey;
        document.getElementById("calculator-screen").value = result;
    }
});

document.getElementById("btn1").addEventListener('click', function() {
    if (previousKey === "" && currentKey != "") {
        previousId = currentKey;
    }
    currentKey = 1; 
});

document.getElementById("btn2").addEventListener('click', function() {
    if (previousKey === "" && currentKey != "") {
        previousId = currentKey;
    }
    currentKey = 2; 
});

document.getElementById("btn3").addEventListener('click', function() {
    if (previousKey === "" && currentKey != "") {
        previousId = currentKey;
    }
    currentKey = 3;
});
