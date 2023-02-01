const prompt = require('prompt-sync')();
console.log(" -=SELAMAT DATANG DI APLIKASI PENJUALAN =-");
console.log("Berikut ini list daftar barang yang kita punya: ");
console.log("1. Beras - Rp. 24000 2. Gula - Rp. 17000 3. Garam - Rp. 7000 4. Cabai - Rp. 15000 5. Bumbu Dapur - Rp. 2500");
console.log("Silakan masukkan nomor list daftar barang yang ingin anda beli: ")
barangToko = prompt('> ')
if (barangToko == "1"){
    result = ("Barang yang anda beli adalah Beras dengan harga Rp. 24000. Silakan bayar ke kasir.")
}else if(barangToko == "2"){
    result = ("Barang yang anda beli adalah Gula dengan harga Rp. 17000. Silakan bayar ke kasir.")
}else if (barangToko == "3"){
    result = ("Barang yang anda beli adalah Garam dengan harga Rp. 7000. Silakan bayar ke kasir.")
}else if(barangToko == "4"){
    result = ("Barang yang anda beli adalah Cabai dengan harga Rp. 15000. Silakan bayar ke kasir.")
}else if(barangToko == "5"){
    result = ("Barang yang anda beli adalah Bumbu Dapur dengan harga Rp. 2500. Silakan bayar ke kasir.")
}else {
    console.log("Barang yang anda beli tidak ditemukan, silakan ulangi pesanan anda.")
}
console.log(result);