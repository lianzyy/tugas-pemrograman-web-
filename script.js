
const daftarKata = [
    {
        kata: "BUKU",
        petunjuk: "Benda yang digunakan untuk membaca dan belajar."
    },
    {
        kata: "PENSIL",
        petunjuk: "Alat untuk menulis yang bisa diraut."
    },
    {
        kata: "PAYUNG",
        petunjuk: "Benda yang digunakan untuk melindungi diri dari hujan."
    },
    {
        kata: "KOMPUTER",
        petunjuk: "Alat elektronik untuk mengolah data."
    },
    {
        kata: "SEPEDA",
        petunjuk: "Kendaraan yang digerakkan dengan cara dikayuh."
    }
];

let indeks = 0;
let skor = 0;
let sudahBenar = false;

// Menampilkan petunjuk kata
function tampilkanKata() {
    document.getElementById("petunjuk").textContent =
        daftarKata[indeks].petunjuk;

    document.getElementById("jawaban").value = "";
    document.getElementById("jawaban").disabled = false;
    document.getElementById("hasil").textContent = "";

    document.getElementById("nomor").textContent =
        "Kata: " + (indeks + 1) + " dari " + daftarKata.length;

    sudahBenar = false;
}

// Memeriksa jawaban pemain
function periksaJawaban() {
    const input = document.getElementById("jawaban");
    const jawaban = input.value.trim().toUpperCase();
    const hasil = document.getElementById("hasil");

    if (sudahBenar) {
        hasil.textContent = "Klik Kata Berikutnya untuk melanjutkan.";
        return;
    }

    if (jawaban === "") {
        hasil.textContent = "Silakan masukkan jawaban terlebih dahulu!";
        hasil.style.color = "#b45309";
        return;
    }

    if (jawaban === daftarKata[indeks].kata) {
        skor += 10;
        document.getElementById("skor").textContent =
            "Skor: " + skor;

        hasil.textContent = "Benar! Kamu mendapat 10 poin.";
        hasil.style.color = "#15803d";

        sudahBenar = true;
        input.disabled = true;
    } else {
        hasil.textContent = "Jawaban salah. Coba lagi!";
        hasil.style.color = "#dc2626";
    }
}

// Berpindah ke kata berikutnya
function kataBerikutnya() {
    if (!sudahBenar) {
        document.getElementById("hasil").textContent =
            "Jawab kata ini dengan benar terlebih dahulu!";
        document.getElementById("hasil").style.color = "#b45309";
        return;
    }

    if (indeks === daftarKata.length - 1) {
        document.getElementById("petunjuk").textContent =
            "Semua kata sudah berhasil diselesaikan!";

        document.getElementById("jawaban").value = "";
        document.getElementById("jawaban").disabled = true;
        document.getElementById("hasil").textContent =
            "Permainan selesai! Skor akhir: " + skor;

        document.getElementById("nomor").textContent =
            "5 dari 5 kata selesai";

        document.querySelector(".berikutnya").textContent =
            "Main Lagi";

        document.querySelector(".berikutnya").onclick = mulaiLagi;
        return;
    }

    indeks++;
    tampilkanKata();
}

// Mengulang permainan dari awal
function mulaiLagi() {
    indeks = 0;
    skor = 0;

    document.getElementById("skor").textContent = "Skor: 0";
    document.querySelector(".berikutnya").textContent =
        "Kata Berikutnya";
    document.querySelector(".berikutnya").onclick = kataBerikutnya;

    tampilkanKata();
}

// Menampilkan kata pertama saat halaman dibuka
tampilkanKata();
