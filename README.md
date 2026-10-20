A. Database Kata dan Variabel Global

javascript
const daftarKata = [ ... ]; // Menyimpan 5 objek kata dan petunjuknya
let indeks = 0;             // Menunjuk kata urutan ke berapa yang sedang aktif (dimulai dari 0)
let skor = 0;               // Menyimpan jumlah skor pemain
let sudahBenar = false;     // Status untuk mengunci input jika tebakan sudah benar
Use code with caution.
• daftarKata berfungsi sebagai bank data. Di dalamnya ada 5 kata kunci: BUKU, PENSIL, PAYUNG, KOMPUTER, dan SEPEDA.

B. Menampilkan Pertanyaan (tampilkanKata)

Fungsi ini berjalan otomatis di awal game dan setiap kali pemain pindah ke kata berikutnya.
• daftarKata[indeks].petunjuk: Mengambil teks petunjuk berdasarkan urutan indeks saat ini.
• document.getElementById("jawaban").value = "": Mengosongkan kembali kotak ketik jawaban.
• sudahBenar = false: Meriset status tebakan menjadi "belum benar" agar pemain bisa mengetik lagi.

C. Memeriksa Jawaban (periksaJawaban)

Fungsi ini aktif ketika pemain menekan tombol "Periksa Jawaban".
• input.value.trim().toUpperCase(): Mengambil jawaban pemain, menghapus spasi kosong di awal/akhir (trim), dan mengubahnya menjadi HURUF KAPITAL (toUpperCase). Itulah mengapa jika pemain mengetik "buku" atau "Buku", jawabannya akan tetap dianggap benar karena disamakan menjadi "BUKU".
• Jika Benar: Variabel skor ditambah 10, status sudahBenar diubah menjadi true, dan kolom input dimatikan (input.disabled = true) agar pemain tidak bisa memanipulasi jawaban lagi.
• Jika Salah: Muncul teks peringatan berwarna merah tanpa menambah skor.

D. Pindah Pertanyaan & Selesai (kataBerikutnya & mulaiLagi)

• kataBerikutnya() memiliki sistem proteksi: jika pemain belum menjawab benar (!sudahBenar), game akan memaksa pemain menebak dulu dan tidak mengizinkan lompat ke kata selanjutnya.
• Jika indeks sudah mencapai kata terakhir (daftarKata.length - 1), game akan langsung memicu kondisi "Permainan Selesai!", menampilkan skor akhir, dan mengubah fungsi tombol menjadi mulaiLagi untuk meriset game ke awal.
