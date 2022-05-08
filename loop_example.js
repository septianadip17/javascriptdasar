// loop example:

for (;;){
    const prompt = require('prompt-sync')();
    console.log("Kucing, Anjing, Kambing");
    suaraBinatang = prompt ("Pilih suara binatang kalian: ");

    if (suaraBinatang == 'kucing') {
        console.log('meong')
    } else if (suaraBinatang == 'anjing') {
        console.log('guk guk')
    } else if (suaraBinatang == 'kambing') {
        console.log('mbee')
    } else {
        console.log('Binatang yang anda pilih tidak ada!')
    }

    console.log();
    choice = prompt('Apakah kamu ingin mengulang (Y/n)? ');
    if (choice != "y") {
        console.log("Aplikasi akan di hentikan");
        break; // berfungsi untuk menghentikan looping
    }
}


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

for (i=1; i<=5; i++) {
    for (j = 1; j<=5; j++) {
        process.stdout.write(i.toString());
    }
    console.log()
}

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