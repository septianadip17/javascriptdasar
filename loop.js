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

@@@@@@@
@*    @
@**   @
@***  @
@**** @
@@@@@@@

*     *
 *   *
  * *
   *
  * *
 *   *   
*     *

if (1 == 1) {
    console.log(a)
} else if (2 == 2) {
    console.log(b)
}

if (1 == 1) {
    console.log(a)
}

if (2 == 2) {
    console.log(b)
}

*/

// const prompt = require('prompt-sync')();
// max = prompt('Masukkan angka yang kamu inginkan: ');

// for (i = 1; i <= max; i++) {
//     for (j = 1; j <= max; j++) {
//         console.log((max + 1 - i))
//         return;
//         // if (j == i) {
//         //     process.stdout.write(j.toString())
//         // } else if (j == (max + 1 - i)) {
//         //     process.stdout.write(j.toString())
//         // } else {
//         //     process.stdout.write(' ')
//         // }
//     }
//     console.log()
// }
