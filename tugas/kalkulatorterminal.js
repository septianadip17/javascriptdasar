const prompt = require('prompt-sync')();
console.log("hello world")
console.log("ayo pilih operatormu! (+, -, /, *)")
operator = prompt(' ');
if (operator == "+" || operator == "-" || operator == "/" || operator == "*") {
    console.log("sip.")
} else {
    console.log('Masukkan operator yang benar:)')
}
console.log(`Ini adalah operator yang kamu pilih "${operator}"`);
console.log("lanjut, masukkan angka pertamamu: ")
firstNumber = prompt('> ');
console.log("lanjut, masukkan angka keduamu: ")
secondNumber = prompt('> ');
if (operator == "+") {
    result = parseInt(firstNumber) + parseInt(secondNumber)
} else if (operator == "-") {
    result = parseInt(firstNumber) - parseInt(secondNumber)
} else if (operator == "/") {
    result = parseInt(firstNumber) / parseInt(secondNumber)
} else if (operator == "*") {
    result = parseInt(firstNumber) * parseInt(secondNumber)
} else {
    console.log("ayo ulang!")
}
console.log(result)