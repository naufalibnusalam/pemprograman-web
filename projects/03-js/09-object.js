let mahasiswa = {
    nama: "Budi",
    umur: 20,
    jurusan: "Informatika",
    spiSapa: function() {
        return `Halo, saya ${this.nama}`;
    }
};

console.log(mahasiswa.nama);       // "Budi"
console.log(mahasiswa["umur"]);    // 20
console.log(mahasiswa.spiSapa()); // "Halo, saya Budi"
