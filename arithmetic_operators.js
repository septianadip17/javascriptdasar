// kali ini kita akan belajar arithmetic operators
// dengan belajar ini, tujuan nya agar kita mengetahui operator-operator yg ada di Javascript
// kalau mau lihat article nya, bisa melihat kesini https://www.w3schools.com/js/js_operators.asp

// what is typeof, parseInt & Number?
// typeof adalah feature yg ada pada Javscript untuk melihat tipe data dari sebuah variable / constanta
// parseInt() / Number() adalah feature untuk merubah string ke number

// example of addition
const prompt = require('prompt-sync')();
console.log('Ini adalah aplikasi penjumlahan');
console.log('Silahkan masukkan angka pertama mu:');
firstNumber = prompt('> '); console.log("Ini adalah tipe data dari firstNumber " + typeof firstNumber); console.log('Silahkan masukkan angka kedua mu:'); secondNumber = prompt('> '); console.log("Ini adalah tipe data dari secondNumber " + typeof secondNumber); addition = parseInt(firstNumber) + parseInt(secondNumber); console.log("Hasil penjumlahan adalah " + addition); console.log("==================");
// example of substraction
console.log('Ini adalah aplikasi pengurangan');
console.log('Silahkan masukkan angka pertama mu:');
firstNumber = parseInt(prompt('> '));
console.log('Silahkan masukkan angka kedua mu:');
secondNumber = parseInt(prompt('> '));
substraction = firstNumber - secondNumber;
console.log("Hasil pengurangan adalah " + substraction);

console.log("==================");

// example of multiplication
console.log('Ini adalah aplikasi perkalian');
console.log('Silahkan masukkan angka pertama mu:');
firstNumber = prompt('> ');
console.log('Silahkan masukkan angka kedua mu:');
secondNumber = prompt('> ');
multiplication = parseInt(firstNumber) * parseInt(secondNumber);
console.log("Hasil perkalian adalah " + multiplication);

console.log("==================");

// example of division
console.log('Ini adalah aplikasi pembagian');
console.log('Silahkan masukkan angka pertama mu:');
firstNumber = prompt('> ');
console.log('Silahkan masukkan angka kedua mu:');
secondNumber = prompt('> ');
division = parseInt(firstNumber) / parseInt(secondNumber);
console.log("Hasil pembagian adalah " + division);

console.log("==================");

// example of modulus
console.log('Ini adalah aplikasi modulus');
console.log('Silahkan masukkan angka pertama mu:');
firstNumber = prompt('> ');
console.log('Silahkan masukkan angka kedua mu:');
secondNumber = prompt('> ');
modulus = parseInt(firstNumber) % parseInt(secondNumber);
console.log("Hasil modulus adalah " + modulus);

console.log("==================");

// example of increment (ini ipal yg buat)
console.log('Ini adalah aplikasi increment');
console.log('Silahkan masukkan angka pertama mu:');
firstNumber = parseInt(prompt('> '));
increment = firstNumber;
increment++;
console.log("Hasil increment adalah " + increment);

console.log("==================");

// example of decrement (ini ipal yg buat)
console.log('Ini adalah aplikasi decrement');
console.log('Silahkan masukkan angka pertama mu:');
firstNumber = parseInt(prompt('> '));
decrement = firstNumber; // 3
decrement--; // 3 > 2
decrement--; // 2 > 1
decrement--; // 1 > 0
decrement--; // 0 > -1
console.log("Hasil decrement adalah " + decrement); // -1

console.log(`========== Arithmetic ==========
ini adalah Hasil Arithmetic Kamu
Pengurangan: ${substraction}
Perkalian: ${multiplication}
Pembagian: ${division}
Modulus: ${modulus}
Increment: ${increment}
Decrement: ${decrement}
===============================`);

// catatan modulus
// 12 % 10
// angka berapa yang paling dekat dengan 12 ketika dibagi 10 hasil nya tidak koma? 10 / 10 = 1, sisa 2 (12 - 10)
// 24 % 10
// angka berapa yang paling dekat dengan 24 ketika dibagi 10 hasil nya tidak koma? 20 / 10 = 2, sisa 4 (24 - 20)
// 37 % 5
// angka berapa yang paling dekat dengan 37 ketika dibagi 5 hasil nya tidak koma? 35 / 5 = 5, sisa 2 (37 - 35)
// 15 % 7
// angka berapa yang paling dekat dengan 15 ketika dibagi 7 hasil nya tidak koma? 14 / 7 = 2, sisa 1 (15 - 14)
// 14 % 7
// angka berapa yang paling dekat dengan 14 ketika dibagi 7 hasil nya tidak koma? 14 / 7 = 2, sisa 0 (14 - 14)
// 13 % 7
// angka berapa yang paling dekat dengan 13 ketika dibagi 7 hasil nya tidak koma? 7 / 7 = 2, sisa 6 (13 - 7)