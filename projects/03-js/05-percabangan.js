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
console.log("Status: " + status);
