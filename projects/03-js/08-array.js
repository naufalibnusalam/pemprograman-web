let angka = [10, 20, 30, 40, 50];

console.log(angka.length);        // 5 (jumlah elemen)
console.log(angka[0]);            // 10 (elemen pertama, indeks mulai dari 0)

angka.push(60);      // Tambah di akhir
console.log(angka);

angka.pop();         // Hapus dari akhir
console.log(angka);

console.log(angka.includes(30));  // true

// Method penting
console.log("\nforEach:");
angka.forEach(n => console.log(n));                  // Loop

let ganda = angka.map(n => n * 2);                   // Ubah semua
console.log("\nmap (ganda):", ganda);

let genap = angka.filter(n => n % 2 === 0);          // Saring
console.log("\nfilter (genap):", genap);

let total = angka.reduce((acc, n) => acc + n, 0);    // Jumlahkan
console.log("\nreduce (total):", total);
