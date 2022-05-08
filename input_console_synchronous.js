// kenapa kita harus belajar input console (synchronous)
// karena di pelajaran javascript dasar ini, kita akan menerima input dari user melalui console
// input dari console ini hanya untuk "pembelajaran" dan tidak atau sangat jarang di gunakan dalam kasus real pekerjaan / project
// pembelajaran ini berdasarkan artikel ini https://www.codecademy.com/article/getting-user-input-in-node-js

// untuk menjalankan javascript di terminal / cmd
// gunakan command berikut `node {nama file}`
// example: node input_console_synchronous.js

const prompt = require('prompt-sync')(); // ini adalah library dari Javascript untuk menerima input dari user
var name = prompt('What is your name? '); // ini adalah code untuk meminta user menginputkan nama melalui console
console.log(`Hey there ${name}`); // ini adalah console log (print)