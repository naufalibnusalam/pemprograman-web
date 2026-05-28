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
