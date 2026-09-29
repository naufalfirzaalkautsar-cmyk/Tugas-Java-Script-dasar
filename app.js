/**
 * ============================================================
 * TUGAS MANDIRI — PEMROGRAMAN INTERNET (JAVASCRIPT DASAR)
 * Program Studi : Pendidikan Sistem dan Teknologi Informasi
 * Universitas   : Universitas Pendidikan Indonesia
 * Study Case    : Sistem Poin & Keanggotaan Member Kedai Kopi
 * Berkas        : app.js (STARTER CODE MAHASISWA)
 * ============================================================
 *
 * PETUNJUK PENGERJAAN:
 * 1. Buka file index.html di browser (klik dua kali atau via Live Server).
 * 2. Buka tab Developer Tools dengan menekan tombol F12 -> pilih tab "Console".
 * 3. Kerjakan tugas ini secara bertahap dari AKTIVITAS 1 sampai AKTIVITAS 6
 *    dengan melengkapi bagian bertanda "// TODO:".
 * 4. Simpan progres pekerjaanmu dengan melakukan minimal 3 kali Git Commit
 *    sesuai panduan di PANDUAN_TUGAS_MANDIRI.md.
 * ============================================================
 */


// ============================================================
// AKTIVITAS 1: Setup Berkas & Integrasi JavaScript Eksternal
// ============================================================
// Menampilkan judul sistem ke tab Console (F12)
console.log("=== SISTEM POIN MEMBER KEDAI KOPI ===");

// TODO 1: Tulis satu baris console.log() untuk memastikan file app.js sudah terhubung!
// Contoh output: "Skrip app.js berhasil terhubung!"
console.log("Skripjs sudah terhubung!!!");



// ============================================================
// AKTIVITAS 2: Variabel & Dialog Interaktif
// ============================================================

// ---- BAGIAN 2A: VARIABEL IDENTITAS KEDAI KOPI ----
// TODO 2A:
// 1. Buat konstanta "NAMA_KEDAI" bertipe string (misal: "Kopi PSTI Kampus").
// 2. Buat variabel "namaKasir" (misal: "Kak Eko") dan "shiftKerja" menggunakan "let".
// 3. Cetak nilai NAMA_KEDAI, namaKasir, dan shiftKerja ke Console menggunakan console.log().
const NAMA_TOKO = "Kedai kopirja";
let NAMA_PEGAWAI = "Ilyas Ismail bin mail"
let SHIFT_KERJA = "07.00 - 12.00"

console.log("TOKO : " + NAMA_TOKO);
console.log("NAMA KASIR : " + NAMA_PEGAWAI);
console.log("JAM KERJA : " + SHIFT_KERJA);



// ---- DEMO PERBEDAAN LET vs CONST ----
// TODO 2B:
// Ubah (re-assign) nilai variabel "namaKasir" dengan nama kasir lain,
// lalu cetak ke Console untuk membuktikan bahwa variabel "let" nilainya dapat diubah.
NAMA_PEGAWAI = "Tio sadang";
console.log("Nama Kasir : " + NAMA_PEGAWAI);



// ---- BAGIAN 2B: INPUT INTERAKTIF & PENGANDAIAN DASAR ----
// TODO 2C:
// 1. Tampilkan pop-up salam pembuka selamat datang menggunakan alert().
// 2. Tampilkan dialog prompt() untuk meminta nama pengunjung, simpan hasilnya ke variabel "namaPelanggan".
// 3. Gunakan percabangan "if - else":
//    - JIKA namaPelanggan ada isinya: tampilkan alert sapaan dan log ke console.
//    - JIKA namaPelanggan kosong / klik Cancel: beri nilai default "Pelanggan Setia" dan tampilkan alert pemberitahuan.
alert("Selamat datang Para pelanggan yang ku sayangi");
let NAMA_PELANGGAN = prompt("Halo! Masukkan namamu untuk memulaii : ");
if (NAMA_PELANGGAN) {
    alert("Halo, " + NAMA_PELANGGAN + "Selamat Menikmati Minuman kami");
    console.log("Pelanggan terhormat : " + NAMA_PELANGGAN);
} else {
    alert("Selamat Datang Pelanggan yang Terhormat");
    NAMA_PELANGGAN = "Pelanggan yang diagung agungkan";
    console.log("Pelanggan terhormat : " + NAMA_PELANGGAN);
}



// ============================================================
// AKTIVITAS 3: Operasi Aritmatika — Akumulasi Poin Transaksi
// ============================================================
// Catatan: Gunakan bilangan bulat (integer murni tanpa desimal/float).

// TODO 3:
// 1. Buat 3 variabel poin transaksi: "poinKopi", "poinMakanan", dan "poinMerchandise"
//    (isi dengan angka bulat bebas, misal: 45, 35, 20).
// 2. Buat variabel "totalPoin" yang menjumlahkan ketiga variabel poin di atas.
// 3. Cetak rincian perolehan poin dan totalPoin ke Console menggunakan console.log().
let HARGA_KOPIKKM = 30;
let HARGA_THAITEA = 20;
let HARGA_LEMINERAL = 5;

// Jumlahnya
let TOTAL_HARGA = HARGA_KOPIKKM + HARGA_LEMINERAL + HARGA_THAITEA;
// rata rata
let RATARATA = TOTAL_HARGA / 3;

console.log("--- Rincian Harga" + NAMA_PELANGGAN + "---");
console.log("Harga Kopi Kenangan Mantan : " + HARGA_KOPIKKM);
console.log("Harga Thai tea : " + HARGA_THAITEA);
console.log("Harga Lemineral : " + HARGA_LEMINERAL);
console.log("Total Harga yang diperoleh : " + TOTAL_HARGA)



// ============================================================
// AKTIVITAS 4: Percabangan if-else — Penentuan Tier Membership
// ============================================================

// TODO 4:
// 1. Buat variabel "tierMember" dan "benefit" bertipe string kosong ("").
// 2. Gunakan percabangan "if - else if - else" berdasarkan nilai "totalPoin":
//    - totalPoin >= 100 : tierMember = "Platinum", benefit = "Diskon 20% + Gratis 1 Minuman Signature"
//    - totalPoin >= 70  : tierMember = "Gold", benefit = "Diskon 10% di setiap transaksi"
//    - totalPoin >= 40  : tierMember = "Silver", benefit = "Diskon 5% untuk menu minuman"
//    - selain itu       : tierMember = "Bronze", benefit = "Member Reguler (kumpulkan poin untuk naik tier)"
// 3. Cetak hasil tierMember dan benefit ke Console.
// 4. Tampilkan ringkasan hasil member (nama, total poin, tier, benefit) via dialog alert().
let tierMember = "";
let benefit = "";

if (TOTAL_HARGA >= 25) {
    tierMember = "MYHTICAL IMMORTAL";
    benefit = "diskon harian s.d 25%";
} else if (TOTAL_HARGA >= 18) {
    tierMember = "LEGENDARY";
    benefit = "diskon mingguan s.d 20%";
} else {
    tierMember = "EPICAL ABADI"
    benefit = "voucher diskon 2 rb";
}

console.log("TIER anda adalah : " + tierMember + "Benefit yang anda dapat : " + benefit);

alert(
    "Total Harga : " + NAMA_PELANGGAN + ":\n" +
    "Total Harga : " + TOTAL_HARGA + "\n" +
    "Tier anda : " + tierMember + "Benefit anda : " + benefit
);

// ============================================================
// AKTIVITAS 5: Function — Membuat Fungsi yang Bisa Dipakai Ulang
// ============================================================

// TODO 5A:
// Buat fungsi "hitungTotalPoin(p1, p2, p3)" yang menerima 3 parameter nilai poin,
// menjumlahkannya, dan mengembalikan (return) nilai total penjumlahannya.
function hitungTotalPoin(harga1, harga2, harga3) {
    let JUMLAH = harga1 + harga2 + harga3
    return JUMLAH;
}

function TENTUKAN_TIER(TIER) {
    if (TIER >= 25) return "MYHTICAL IMMORTAL - diskon harian 25%";
    if (TIER >= 18) return "LEGEND - diskon mingguan 20%";
    return "EPICAL ABADI - voucher 2 rb";
}

// TODO 5B:
// Buat fungsi "tentukanTierMember(poin)" yang menerima 1 parameter nilai poin,
// dan mengembalikan (return) string nama tier beserta keterangannya.
let HARGA_TOTALAN = hitungTotalPoin(30, 20, 5);

let TIER_ANDA = TENTUKAN_TIER(TOTAL_HARGA);



// TODO 5C:
// Buktikan bahwa fungsi di atas bisa dipakai ulang (reusable):
// 1. Hitung total poin dan tentukan tier untuk simulasi Pelanggan B (misal poin: 35, 25, 20).
// 2. Hitung total poin dan tentukan tier untuk simulasi Pelanggan C (misal poin: 15, 10, 5).
// 3. Cetak data Pelanggan B dan C ke tab Console.
let TOTAL_HARGA_PELANGGAN_A = hitungTotalPoin(25, 25, 25);
let TIER_PELANGGAN_A = TENTUKAN_TIER(TOTAL_HARGA_PELANGGAN_A);

let TOTAL_HARGA_PELANGGAN_B = hitungTotalPoin(5, 10, 5);
let TIER_PELANGGAN_B = TENTUKAN_TIER(TOTAL_HARGA_PELANGGAN_B);

console.log("=== DATA PELANGGAN A ===");
console.log("TOTAL HARGA PELANGGAN A : " + TOTAL_HARGA_PELANGGAN_A);
console.log("TIER PELANGGAN A : " + TIER_PELANGGAN_A);

console.log("=== DATA PELANGGAN B ===");
console.log("TOTAL HARGA PELANGGAN B : " + TOTAL_HARGA_PELANGGAN_B);
console.log("TIER PELANGGAN B : " + TIER_PELANGGAN_B);

// ============================================================
// AKTIVITAS 6: Array & For Loop — Daftar Menu Rekomendasi
// ============================================================

// TODO 6A:
// Buat variabel Array bernama "menuRekomendasi" yang berisi minimal 5 nama menu kopi/makanan.

let MENUSPESIAL = [
    "Es teh manis",
    "Teh Tarik",
    "Cappucino ala kapalino",
    "americano el fazio",
    "Sayur Kol"
];



// TODO 6B:
// Gunakan perulangan "for loop" untuk mencetak setiap menu ke Console dengan format:
// "1. Nama Menu", "2. Nama Menu", dst. Gunakan (i + 1) untuk nomor urutnya.

for (let i = 0; i < MENUSPESIAL.length; i++) {
    console.log((i + 1) + ". " + MENUSPESIAL[1]);
}


// TODO 6C:
// Cetak jumlah total menu di akhir daftar menggunakan properti ".length".
// Akhiri program dengan: console.log("=== TUGAS MANDIRI SELESAI DENGAN SUKSES! ===");

console.log("Total Pesanan : " + MENUSPESIAL.length);
