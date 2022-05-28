/**
 * looping adalah perulangan1
 */

/** 
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
    const prompt = require('prompt-sync')();
    max = prompt('Masukkan angka yang kamu inginkan: ');

    for (i = max; i >= 1; i--) {
        for (j = max; j >= 1; j--) {
            process.stdout.write(j.toString());
            await sleep(500);
        }
        console.log();
    }
}

demo(); */

/*

*+*+*
*+*+
*+*
*+
*

*/

const prompt = require('prompt-sync')();
max = prompt('Masukkan angka yang kamu inginkan: ');

for (i = 1; i <= max; i++){
    for (j = max; j >= i; j--){
        if (j % 2) {
            process.stdout.write('*')
        } else {
            process.stdout.write('+');
        }
    }
    console.log()
}