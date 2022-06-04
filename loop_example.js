// loop example:

// for (;;){
//     const prompt = require('prompt-sync')();
//     console.log("Kucing, Anjing, Kambing");
//     suaraBinatang = prompt ("Pilih suara binatang kalian: ");

//     if (suaraBinatang == 'kucing') {
//         console.log('meong')
//     } else if (suaraBinatang == 'anjing') {
//         console.log('guk guk')
//     } else if (suaraBinatang == 'kambing') {
//         console.log('mbee')
//     } else {
//         console.log('Binatang yang anda pilih tidak ada!')
//     }

//     console.log();
//     choice = prompt('Apakah kamu ingin mengulang (Y/n)? ');
//     if (choice != "y") {
//         console.log("Aplikasi akan di hentikan");
//         break; // berfungsi untuk menghentikan looping
//     }
// }


/**
 * Input 5
 * Clue: Looping nya ada 2, loop nested (kalau di cari di google)
 * Loop nested itu adalah loop yang ada di dalam loop
 * 
 * 1 1 1 1 1
 * 2 2 2 2 2
 * 3 3 3 3 3
 * 4 4 4 4 4
 * 5 5 5 5 5
 */

// for (i=1; i<=5; i++) {
//     for (j = 1; j<=5; j++) {
//         process.stdout.write(i.toString());
//     }
//     console.log()
// }

/**
 * Input 7 (bisa bebas)
 * 
 * 7
 * 6
 * 5
 * dst
 * 1
 */

//  const prompt = require('prompt-sync')();
//  max = prompt('Masukkan angka yang kamu inginkan: ');

//  // ketika i = 0, maka loop berhenti
//  for (i = max; i >= 1 ; i--) { // i-- ini bertugas untuk mengurangi value dari i disetiap satu looping selesai
//      console.log(i)
//  }


// // for (i = 1; i <= max ; i++) {
// //     console.log(i)
// // }

// for (i = 1; i <= max ; i++) {
//     if (i % 3 == 0) {
//     console.log(i)
//     }
// }



/**
 * 1
 * 2
 * 3
 * 4
 * 5
 * 6
 * 9
 * 10
 */

// for (i = 1; i <= max ; i++) {
//     if (i >= 9) {
//         console.log(i);
//     } else if (i <= 6) {
//         console.log(i);
//     }
// }

// for (i = 1; i <= max ; i++) {
//     if (i >= 9 || i <= 6) {
//         console.log(i);
//     }
// }

// for (i = 1; i <= max ; i++) {
//     if (i != 7 && i != 8) {
//         console.log(i);
//     }
// }

// for (i = 1; i <= max ; i++) {
//     if (i != 7) {
//         console.log(i);
//     } else if (i != 8) {
//         console.log(i);
//     }
// }


/**
 * Input: 6
 * 
 * Output:
 * 1
 * 2
 * 4
 * 8
 * 16
 * 32
 */

// const prompt = require('prompt-sync')();
// max = prompt('Masukkan angka yang kamu inginkan: ');

// var data = 0;
// for (i = 1; i <= max ; i++) {
//     if (i <= 2) {
//         data = i;
//         console.log(data);
//     } else {
//          data = data * 2;
//     console.log(data);
//     }
// }


/**
 * Input: 10
 * 
 * 10
 * 9
 * dst
 * 1
 */

// const prompt = require('prompt-sync')();
// max = prompt('Masukkan angka yang kamu inginkan: ');

// for (i = 1; i <= max ; i++) { 
//     console.log(i)
// }


/*

*
*+
*+*
*+*+
*+*+*

*+*+*
*+*+
*+*
*+
*

1(i)   * (new line / enter)
       1(j)
2(i)   *+ (new line / enter)
       12(j)
3(i)   *+* (new line / enter)
       123(j)
4(i)   *+*+ (new line / enter)
       1234(j)
5(i)   *+*+* (new line / enter)
       12345(j)

console.log() // digunakan untuk print sesuatu, setelah melakukan print akan membuat barisan baru (new line / enter)
process.stdout.write(); // digunakan untuk print sesuatu, setelah melakukan print tidak akan membuat barisan baru (new line / enter)
*/

const prompt = require('prompt-sync')();
max = prompt('Masukkan angka yang kamu inginkan: ');

for (i = 1; i <= max; i++) {
    for (j = 1; j <= i; j++) {
        if (j % 2) { // ganjil atau genap
            process.stdout.write('*');
        } else {
            process.stdout.write('+');
        }
    }
    console.log() // digunakan untuk print sesuatu, setelah melakukan print akan membuat barisan baru (new line / enter)
}

for (i = 1; i <= 6; i++){
       for (j = 1; j <= i; j++){
           if (j == 1 || j == i ){
               process.stdout.write('*')
           } else {
               process.stdout.write(' ')
           }
       }
       console.log();
}