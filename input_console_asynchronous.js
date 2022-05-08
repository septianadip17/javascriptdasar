// kenapa kita harus belajar input console (asynchronous)
// karena di pelajaran javascript dasar ini, kita akan menerima input dari user melalui console
// input dari console ini hanya untuk "pembelajaran" dan tidak atau sangat jarang di gunakan dalam kasus real pekerjaan / project
// pembelajaran ini berdasarkan artikel ini https://www.codecademy.com/article/getting-user-input-in-node-js

// untuk menjalankan javascript di terminal / cmd
// gunakan command berikut `node {nama file}`
// example: node input_console_asynchronous.js

// untuk code dibawah ini, sama seperti `const prompt = require('prompt-sync')();`
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// code dibawah ini untuk menerima input melalui console / terminal
// sama seperti `var name = prompt('What is your name? ');`
readline.question('What is your name? ', name => {
    console.log(`Hey there ${name}!`);
    readline.close();
});