/**
 * If else adalah if else
 * adalah conditional statements. If else itu terbagi menjadi beberapa bagian, antara lain:
 * 1. if adalah jika
 * 2. else if adalah lain jika
 * 3. else adalah lain
 * 
 * setiap bagian tersebut memiliki makna atau tujuan nya masing-masing
 */

// val = 1243;

// function ifElseFunction() {
//     if (val === 1) {
//         return "sepeda";
//     } else if (val == 2) {
//         return "motor";
//     } else if (val <= 3) {
//         return "mobil";
//     } else if (val >= 4 && val < 5) {
//         return "lambo";
//     } else if (val != 5) {
//         return "becak";
//     } else {
//         return "krukut";
//     }
// }

// console.log(ifElseFunction());


const prompt = require('prompt-sync')();
suaraBinatang = prompt ('masukan nama binatang yg kamu sukai: ');


if (suaraBinatang == 'kucing') {
    console.log('meong')
} else if (suaraBinatang == 'anjing') {
    console.log('guk guk')
} else if (suaraBinatang == 'kambing') {
    console.log('mbee')
} else if (suaraBinatang == 'sapi') {
    console.log(moo)
} else {
    console.log('bukan suara binatang')
}