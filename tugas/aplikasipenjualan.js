const prompt = require('prompt-sync')();
console.log(" -=SELAMAT DATANG DI APLIKASI PENJUALAN =-");
console.log("Berikut ini list daftar barang yang kita punya: ");
console.log("1. Beras - Rp. 24000");
console.log("2. Gula - Rp. 17000")
console.log("3. Garam - Rp. 7000")
console.log("4. Cabai - Rp. 15000")
console.log("5. Bumbu Dapur - Rp. 2500")
console.log("Silakan masukkan nomor list daftar barang yang ingin anda beli: ")
barangToko = prompt('> ')

//cara 2
// kata1 = ("Barang yang anda beli adalah ")
// kata2 = (", dengan harga ")
// kata3 = (" Silakan bayar ke kasir.")
// if (barangToko == "1"){
//     result = kata1 + "Beras" + kata2 + "Rp. 24000." + kata3;
// }else if(barangToko == "2"){
//     result = kata1 + "Gula" + kata2 + "Rp. 17000." + kata3;
// }else if (barangToko == "3"){
//     result = kata1 + "Garam" + kata2 + "Rp. 7000." + kata3; 
// }else if(barangToko == "4"){
//     result = kata1 + "Cabai" + kata2 + "Rp. 15000." + kata3;
// }else if(barangToko == "5"){
//     result = kata1 + "Bumbu Dapur" + kata2 + "Rp. 2500." + kata3; 
// }else {
//     console.log("Barang yang anda beli tidak ditemukan, silakan ulangi pesanan anda.")
// }

//cara 3
hargaBarang = [24000, 17000, 7000, 15000, 2500]

if (barangToko == "1"){
    result = (`Barang yang anda beli adalah Beras dengan harga Rp. ${hargaBarang[0]}. Silakan bayar ke kasir.`)
}else if(barangToko == "2"){
    result = (`Barang yang anda beli adalah Gula dengan harga Rp. ${hargaBarang[1]}. Silakan bayar ke kasir.`)
}else if (barangToko == "3"){
    result = (`Barang yang anda beli adalah Garam dengan harga Rp. ${hargaBarang[2]}. Silakan bayar ke kasir.`)
}else if(barangToko == "4"){
    result = (`Barang yang anda beli adalah Cabai dengan harga Rp. ${hargaBarang[3]}. Silakan bayar ke kasir.`)
}else if(barangToko == "5"){
    result = (`Barang yang anda beli adalah Bumbu Dapur dengan harga Rp. ${hargaBarang[4]}. Silakan bayar ke kasir.`)
}else {
    console.log("Barang yang anda beli tidak ditemukan, silakan ulangi pesanan anda.")
}

// cara 1
// if (barangToko == "1"){
//     result = ("Barang yang anda beli adalah Beras dengan harga Rp. 24000. Silakan bayar ke kasir.")
// }else if(barangToko == "2"){
//     result = ("Barang yang anda beli adalah Gula dengan harga Rp. 17000. Silakan bayar ke kasir.")
// }else if (barangToko == "3"){
//     result = ("Barang yang anda beli adalah Garam dengan harga Rp. 7000. Silakan bayar ke kasir.")
// }else if(barangToko == "4"){
//     result = ("Barang yang anda beli adalah Cabai dengan harga Rp. 15000. Silakan bayar ke kasir.")
// }else if(barangToko == "5"){
//     result = ("Barang yang anda beli adalah Bumbu Dapur dengan harga Rp. 2500. Silakan bayar ke kasir.")
// }else {
//     console.log("Barang yang anda beli tidak ditemukan, silakan ulangi pesanan anda.")
// }
console.log(result);