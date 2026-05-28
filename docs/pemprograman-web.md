# 📘 Pemrograman Dasar Website

> Materi lengkap untuk pemula yang ingin belajar membuat website dari nol.

---

## Daftar Isi

1. [Pengenalan Web](#1-pengenalan-web)
2. [HTML — Struktur Halaman](#2-html--struktur-halaman)
3. [CSS — Tampilan & Gaya](#3-css--tampilan--gaya)
4. [JavaScript — Interaktivitas](#4-javascript--interaktivitas)
5. [Responsive Design](#5-responsive-design)
6. [Proyek Latihan](#6-proyek-latihan)
7. [Referensi & Sumber Belajar](#7-referensi--sumber-belajar)

---

## 1. Pengenalan Web

### Apa itu Website?

Website adalah kumpulan halaman yang saling terhubung dan dapat diakses melalui **browser** (Chrome, Firefox, Safari, dll) menggunakan protokol **HTTP/HTTPS**.

### Bagaimana Website Bekerja?

```
[Browser/Client] ---request---> [Server]
[Browser/Client] <--response--- [Server]
```

1. **User** mengetik URL di browser (contoh: `https://google.com`)
2. **Browser** mengirim *request* ke server
3. **Server** memproses dan mengirim *response* (file HTML, CSS, JS)
4. **Browser** merender halaman untuk ditampilkan

### Teknologi Dasar Web (Frontend)

| Teknologi  | Fungsi                        | Analogi          |
|------------|-------------------------------|------------------|
| **HTML**   | Struktur & konten halaman     | Kerangka rumah   |
| **CSS**    | Tampilan & desain             | Cat & dekorasi   |
| **JavaScript** | Interaktivitas & logika   | Listrik & mesin  |

### Tools yang Dibutuhkan

- **Text Editor**: VS Code (direkomendasikan), Sublime Text, atau Atom
- **Browser**: Google Chrome (dengan DevTools — tekan `F12`)
- **Terminal**: Untuk menjalankan perintah (opsional di awal)

---

## 2. HTML — Struktur Halaman

### Apa itu HTML?

**HTML** (*HyperText Markup Language*) adalah bahasa markup untuk membuat struktur halaman web. HTML menggunakan **tag** untuk menandai elemen.

### Struktur Dasar HTML

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Halaman Pertamaku</title>
</head>
<body>
    <h1>Halo, Dunia!</h1>
    <p>Ini adalah halaman pertama saya.</p>
</body>
</html>
```

**Penjelasan:**
- `<!DOCTYPE html>` — Deklarasi tipe dokumen (HTML5)
- `<html>` — Elemen root, pembungkus seluruh halaman
- `<head>` — Metadata (tidak terlihat di halaman)
- `<body>` — Konten yang terlihat di browser

### Tag-Tag Penting HTML

#### Heading (Judul)

```html
<h1>Heading 1 — Paling Besar</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6 — Paling Kecil</h6>
```

#### Paragraf & Teks

```html
<p>Ini adalah paragraf.</p>
<strong>Teks tebal (penting)</strong>
<em>Teks miring (penekanan)</em>
<br> <!-- Baris baru -->
<hr> <!-- Garis horizontal -->
```

#### Link (Tautan)

```html
<a href="https://google.com">Kunjungi Google</a>
<a href="halaman2.html">Halaman 2</a>
<a href="#bagian1">Ke Bagian 1</a> <!-- Link internal -->
<a href="https://google.com" target="_blank">Buka di tab baru</a>
```

#### Gambar

```html
<img src="foto.jpg" alt="Deskripsi gambar" width="300">
<img src="https://example.com/gambar.png" alt="Gambar dari internet">
```

> **Tips:** Selalu isi atribut `alt` untuk aksesibilitas.

#### List (Daftar)

```html
<!-- Unordered List (tanpa nomor) -->
<ul>
    <li>Apel</li>
    <li>Jeruk</li>
    <li>Mangga</li>
</ul>

<!-- Ordered List (dengan nomor) -->
<ol>
    <li>Langkah pertama</li>
    <li>Langkah kedua</li>
    <li>Langkah ketiga</li>
</ol>
```

#### Tabel

```html
<table border="1">
    <thead>
        <tr>
            <th>Nama</th>
            <th>Umur</th>
            <th>Kota</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Budi</td>
            <td>20</td>
            <td>Jakarta</td>
        </tr>
        <tr>
            <td>Siti</td>
            <td>22</td>
            <td>Bandung</td>
        </tr>
    </tbody>
</table>
```

#### Form (Formulir)

```html
<form action="/kirim" method="POST">
    <label for="nama">Nama:</label>
    <input type="text" id="nama" name="nama" placeholder="Masukkan nama" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="contoh@email.com" required>

    <label for="pesan">Pesan:</label>
    <textarea id="pesan" name="pesan" rows="4" placeholder="Tulis pesan..."></textarea>

    <label for="kota">Kota:</label>
    <select id="kota" name="kota">
        <option value="jakarta">Jakarta</option>
        <option value="bandung">Bandung</option>
        <option value="surabaya">Surabaya</option>
    </select>

    <button type="submit">Kirim</button>
</form>
```

#### Elemen Semantik HTML5

```html
<header>  <!-- Bagian atas halaman --></header>
<nav>     <!-- Navigasi --></nav>
<main>    <!-- Konten utama --></main>
<section> <!-- Bagian/seksi --></section>
<article> <!-- Artikel/konten mandiri --></article>
<aside>   <!-- Konten samping/sidebar --></aside>
<footer>  <!-- Bagian bawah halaman --></footer>
```

#### Div & Span

```html
<!-- div: container blok (mengambil seluruh lebar) -->
<div class="container">
    <p>Konten di dalam div</p>
</div>

<!-- span: container inline (sebaris teks) -->
<p>Warna <span style="color: red;">merah</span> ini menggunakan span.</p>
```

---

## 3. CSS — Tampilan & Gaya

### Apa itu CSS?

**CSS** (*Cascading Style Sheets*) digunakan untuk mengatur tampilan dan layout halaman web.

### 3 Cara Menulis CSS

```html
<!-- 1. Inline CSS -->
<p style="color: blue; font-size: 18px;">Teks biru</p>

<!-- 2. Internal CSS -->
<head>
    <style>
        p { color: blue; }
    </style>
</head>

<!-- 3. External CSS (DIREKOMENDASIKAN) -->
<head>
    <link rel="stylesheet" href="style.css">
</head>
```

### Selector CSS

```css
/* Element Selector */
h1 { color: navy; }

/* Class Selector (bisa dipakai berkali-kali) */
.judul { font-size: 24px; }

/* ID Selector (unik, sekali pakai) */
#header { background-color: #333; }

/* Descendant Selector */
.container p { color: gray; }

/* Pseudo-class */
a:hover { color: red; }
button:active { transform: scale(0.95); }

/* Pseudo-element */
p::first-letter { font-size: 2em; }
```

### Properti CSS yang Sering Digunakan

#### Warna & Background

```css
.elemen {
    color: #333;                           /* Warna teks */
    background-color: #f5f5f5;             /* Warna latar */
    background-image: url('bg.jpg');       /* Gambar latar */
    background-size: cover;                /* Ukuran gambar latar */
    opacity: 0.8;                          /* Transparansi */
}
```

#### Tipografi (Teks)

```css
.teks {
    font-family: 'Arial', sans-serif;
    font-size: 16px;
    font-weight: bold;       /* normal, bold, 100-900 */
    text-align: center;      /* left, right, center, justify */
    text-decoration: none;   /* underline, line-through */
    line-height: 1.6;
    letter-spacing: 1px;
}
```

#### Box Model

Setiap elemen HTML adalah sebuah "kotak" dengan 4 lapisan:

```
+---------------------------+
|         MARGIN            |  ← Jarak luar
|  +---------------------+  |
|  |      BORDER         |  |  ← Garis tepi
|  |  +---------------+  |  |
|  |  |    PADDING     |  |  |  ← Jarak dalam
|  |  |  +---------+  |  |  |
|  |  |  | CONTENT |  |  |  |  ← Isi konten
|  |  |  +---------+  |  |  |
|  |  +---------------+  |  |
|  +---------------------+  |
+---------------------------+
```

```css
.kotak {
    width: 300px;
    height: 200px;
    padding: 20px;              /* Jarak dalam */
    margin: 10px auto;          /* Jarak luar, auto = tengah */
    border: 2px solid #333;     /* Garis tepi */
    border-radius: 8px;         /* Sudut melengkung */
    box-sizing: border-box;     /* Padding dihitung dalam width */
}
```

#### Display

```css
.blok    { display: block; }        /* Mengambil seluruh lebar */
.sebaris { display: inline; }       /* Sebaris, tidak bisa set width/height */
.ib      { display: inline-block; } /* Sebaris, bisa set width/height */
.hilang  { display: none; }         /* Tidak ditampilkan */
```

### Flexbox — Layout Modern

Flexbox memudahkan penataan elemen secara horizontal atau vertikal.

```css
.flex-container {
    display: flex;
    justify-content: center;     /* Perataan horizontal */
    align-items: center;         /* Perataan vertikal */
    gap: 16px;                   /* Jarak antar item */
    flex-wrap: wrap;             /* Item pindah baris jika penuh */
}

.flex-item {
    flex: 1;                     /* Item mengisi ruang sama rata */
}
```

**Nilai `justify-content`:**
- `flex-start` — Rata kiri (default)
- `flex-end` — Rata kanan
- `center` — Tengah
- `space-between` — Jarak merata, tanpa jarak di tepi
- `space-around` — Jarak merata, dengan jarak di tepi

**Nilai `align-items`:**
- `flex-start` — Atas
- `flex-end` — Bawah
- `center` — Tengah
- `stretch` — Meregangkan (default)

### CSS Grid — Layout 2 Dimensi

```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);  /* 3 kolom sama rata */
    grid-template-rows: auto;
    gap: 20px;
}

/* Item menempati 2 kolom */
.item-lebar {
    grid-column: span 2;
}
```

### Transisi & Animasi

```css
/* Transisi (perubahan halus saat hover, dll) */
.tombol {
    background-color: #3498db;
    transition: background-color 0.3s ease, transform 0.2s ease;
}
.tombol:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
}

/* Animasi (pergerakan otomatis) */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
}
.muncul {
    animation: fadeIn 0.5s ease forwards;
}
```

---

## 4. JavaScript — Interaktivitas

### Apa itu JavaScript?

**JavaScript (JS)** adalah bahasa pemrograman yang membuat halaman web menjadi interaktif dan dinamis.

### Cara Menambahkan JavaScript

```html
<!-- 1. Internal JS -->
<script>
    alert('Halo!');
</script>

<!-- 2. External JS (DIREKOMENDASIKAN) -->
<script src="script.js"></script>

<!-- 3. Letakkan sebelum </body> atau gunakan defer -->
<script src="script.js" defer></script>
```

### Variabel

```javascript
// let — bisa diubah nilainya
let nama = "Budi";
nama = "Siti"; // OK

// const — tidak bisa diubah
const PI = 3.14;
// PI = 3.15; // ERROR!

// var — cara lama (hindari penggunaan)
var umur = 20;
```

### Tipe Data

```javascript
let teks = "Hello";          // String
let angka = 42;              // Number
let desimal = 3.14;          // Number
let benar = true;            // Boolean (true/false)
let kosong = null;           // Null
let belumAda;                // Undefined
let daftar = [1, 2, 3];     // Array
let objek = {                // Object
    nama: "Budi",
    umur: 20
};
```

### Operator

```javascript
// Aritmatika
5 + 3   // 8  (tambah)
5 - 3   // 2  (kurang)
5 * 3   // 15 (kali)
5 / 3   // 1.67 (bagi)
5 % 3   // 2  (sisa bagi / modulus)

// Perbandingan
5 == "5"    // true  (sama nilai, beda tipe OK)
5 === "5"   // false (sama nilai DAN tipe — GUNAKAN INI)
5 !== 3     // true  (tidak sama)
5 > 3       // true
5 <= 3      // false

// Logika
true && false   // false (DAN)
true || false   // true  (ATAU)
!true           // false (TIDAK)
```

### Percabangan (Kondisi)

```javascript
let nilai = 85;

if (nilai >= 90) {
    console.log("A — Sangat Baik");
} else if (nilai >= 80) {
    console.log("B — Baik");
} else if (nilai >= 70) {
    console.log("C — Cukup");
} else {
    console.log("D — Perlu Perbaikan");
}

// Ternary Operator (kondisi singkat)
let status = nilai >= 75 ? "Lulus" : "Tidak Lulus";
```

### Perulangan (Loop)

```javascript
// For Loop
for (let i = 0; i < 5; i++) {
    console.log("Iterasi ke-" + i);
}

// While Loop
let j = 0;
while (j < 5) {
    console.log("While ke-" + j);
    j++;
}

// For...of (untuk array)
let buah = ["Apel", "Jeruk", "Mangga"];
for (let item of buah) {
    console.log(item);
}
```

### Fungsi

```javascript
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
```

### Array (Daftar)

```javascript
let angka = [10, 20, 30, 40, 50];

angka.length;        // 5 (jumlah elemen)
angka[0];            // 10 (elemen pertama, indeks mulai dari 0)
angka.push(60);      // Tambah di akhir
angka.pop();         // Hapus dari akhir
angka.includes(30);  // true

// Method penting
angka.forEach(n => console.log(n));                  // Loop
let ganda = angka.map(n => n * 2);                   // Ubah semua
let genap = angka.filter(n => n % 2 === 0);          // Saring
let total = angka.reduce((acc, n) => acc + n, 0);    // Jumlahkan
```

### Object (Objek)

```javascript
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
```

### DOM Manipulation

DOM (*Document Object Model*) memungkinkan JavaScript mengakses dan mengubah elemen HTML.

```javascript
// Mengambil elemen
let judul = document.getElementById("judul");
let tombol = document.querySelector(".btn");
let items = document.querySelectorAll(".item");

// Mengubah konten
judul.textContent = "Judul Baru";
judul.innerHTML = "<em>Judul Miring</em>";

// Mengubah style
judul.style.color = "blue";
judul.style.fontSize = "24px";

// Mengubah class
judul.classList.add("aktif");
judul.classList.remove("aktif");
judul.classList.toggle("aktif");

// Membuat elemen baru
let paragrafBaru = document.createElement("p");
paragrafBaru.textContent = "Paragraf baru!";
document.body.appendChild(paragrafBaru);
```

### Event (Kejadian)

```javascript
let tombol = document.getElementById("tombol");

// addEventListener (DIREKOMENDASIKAN)
tombol.addEventListener("click", function() {
    alert("Tombol diklik!");
});

// Arrow function
tombol.addEventListener("click", () => {
    alert("Tombol diklik!");
});

// Event umum:
// click     — saat diklik
// mouseover — saat mouse di atas elemen
// keydown   — saat tombol keyboard ditekan
// submit    — saat form dikirim
// input     — saat nilai input berubah
// load      — saat halaman selesai dimuat
```

### Contoh Praktis: Counter

```html
<h2 id="angka">0</h2>
<button id="tambah">+</button>
<button id="kurang">−</button>

<script>
    let count = 0;
    const angkaEl = document.getElementById("angka");

    document.getElementById("tambah").addEventListener("click", () => {
        count++;
        angkaEl.textContent = count;
    });

    document.getElementById("kurang").addEventListener("click", () => {
        count--;
        angkaEl.textContent = count;
    });
</script>
```

---

## 5. Responsive Design

### Apa itu Responsive Design?

Website yang tampilannya menyesuaikan dengan ukuran layar (desktop, tablet, HP).

### Viewport Meta Tag

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Media Queries

```css
/* Default: untuk semua layar */
.container {
    width: 1200px;
    margin: 0 auto;
}

/* Tablet (max-width: 768px) */
@media (max-width: 768px) {
    .container {
        width: 100%;
        padding: 0 16px;
    }
}

/* Mobile (max-width: 480px) */
@media (max-width: 480px) {
    h1 { font-size: 24px; }
    .grid { grid-template-columns: 1fr; }
}
```

### Tips Responsive

```css
/* Gunakan satuan relatif */
.responsive {
    width: 100%;          /* Persentase */
    max-width: 1200px;    /* Batas maksimal */
    font-size: 1rem;      /* Relatif terhadap root */
    padding: 2vw;         /* Relatif terhadap viewport */
}

/* Gambar responsif */
img {
    max-width: 100%;
    height: auto;
}
```

---

## 6. Proyek Latihan

### Proyek 1: Halaman Profil Pribadi

Buat halaman profil sederhana dengan:
- Foto profil
- Nama, bio, dan deskripsi singkat
- Link ke media sosial
- Menggunakan HTML & CSS

### Proyek 2: Halaman Landing Page

Buat landing page dengan:
- Navbar dengan link navigasi
- Hero section dengan gambar & teks
- Section fitur (menggunakan Flexbox/Grid)
- Footer

### Proyek 3: Aplikasi To-Do List

Buat aplikasi to-do list interaktif dengan:
- Input untuk menambah tugas
- Tombol hapus untuk setiap tugas
- Tandai tugas selesai (strikethrough)
- Menggunakan HTML, CSS, dan JavaScript

### Proyek 4: Kalkulator

Buat kalkulator dengan:
- Tampilan angka
- Tombol angka 0-9
- Operasi: +, -, ×, ÷
- Tombol sama dengan (=) dan clear (C)

---

## 7. Referensi & Sumber Belajar

### Dokumentasi Resmi
- [MDN Web Docs](https://developer.mozilla.org/id/) — Referensi paling lengkap
- [W3Schools](https://www.w3schools.com/) — Tutorial interaktif untuk pemula

### Latihan Interaktif
- [freeCodeCamp](https://www.freecodecamp.org/) — Kursus gratis dengan sertifikat
- [Codecademy](https://www.codecademy.com/) — Belajar coding interaktif
- [CSS Tricks](https://css-tricks.com/) — Tips & trik CSS

### Tools Berguna
- [CodePen](https://codepen.io/) — Editor online untuk eksperimen
- [Can I Use](https://caniuse.com/) — Cek kompatibilitas browser
- [Google Fonts](https://fonts.google.com/) — Font gratis

---

> **💡 Tips Belajar:**
> 1. **Praktik setiap hari** — Coding adalah skill, semakin sering latihan semakin mahir
> 2. **Jangan copy-paste** — Ketik ulang kode untuk memahami lebih dalam
> 3. **Baca error message** — Pesan error adalah petunjuk untuk memperbaiki kode
> 4. **Gunakan DevTools** — Tekan F12 di browser untuk inspect & debug
> 5. **Buat proyek nyata** — Cara terbaik belajar adalah dengan membuat sesuatu

---

*Materi disusun untuk pemula. Selamat belajar! 🚀*
