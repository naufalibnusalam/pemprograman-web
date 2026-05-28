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
