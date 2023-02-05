const prompt = require('prompt-sync')();

buyAgain = true;
while (buyAgain) {
    console.log("-= SELAMAT DATANG DI APLIKASI PENJUALAN=-")
    console.log("Beras - Rp. 24000")
    console.log("Gula - Rp. 17000")
    console.log("Garam - Rp. 7000")
    console.log("Cabai - Rp. 17000")
    console.log("Bumbu Dapur - Rp. 2500")
    console.log("Toge - Rp. 4000")
    console.log("Ayam - Rp. 50000")
    console.log("Sayur Campur - Rp. 10000 ")
    console.log("Jagung - Rp. 5000")
    console.log("Beef - 99000")
    console.log("Silakan masukkan barang yang ingin anda beli: ")
    barangToko = prompt("> ").toLowerCase()
    console.log("Berapa banyak? ")
    jumlahBeli = prompt("> ")

    var barang, harga

    if (barangToko == "beras") {
        barang = "Beras"
        harga = 24000
    } else if (barangToko == "gula") {
        barang = "Gula"
        harga = 17000
    } else if (barangToko == "garam") {
        barang = "Garam"
        harga = 7000
    } else if (barangToko == "cabai") {
        barang = "Bumbu Dapur"
        harga = 2500
    } else if (barangToko == "toge") {
        barang = "Toge"
        harga = 4000
    } else if (barangToko == "ayam") {
        barang = "Ayam"
        harga = 50000
    } else if (barangToko == "sayur campur") {
        barang = "Sayur Campur"
        harga = 10000
    } else if (barangToko == "jagung") {
        barang = "Jagung"
        harga = 5000
    } else if (barangToko == "beef") {
        barang = "Beef"
        harga = 99000
    } else {
        console.log("Barang yang anda masukkan tidak ada.")
        return;
    }

    console.log(`Barang yang anda beli adalah ${barang} sebanyak ${jumlahBeli} dengan harga ${harga * parseInt(jumlahBeli)}`)
    console.log("Apakah anda mau belanja lagi? (Y/n)");
    beliLagi = prompt("> ")


    if (beliLagi == "y") {
        buyAgain == true;
    } else {
        buyAgain == false;
        console.log("Terima kasih telah berbelanja di Toko Ini.");
        return;
    }

};