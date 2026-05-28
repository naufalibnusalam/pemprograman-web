// Deklarasi fungsi
function sapa(nama) {
    return "Halo, " + nama + "!";
}
console.log(sapa("Budi")); // "Halo, Budi!"

// Arrow function (ES6)
const tambah = (a, b) => a + b;
console.log(tambah(3, 4)); // 7

// Fungsi dengan default parameter
function hitungLuas(panjang, lebar = 10) {
    return panjang * lebar;
}
console.log(hitungLuas(5)); // 50
console.log(hitungLuas(5, 5)); // 25
