---
title: Pemecahan masalah
summary: Arti pesan DetailCraft dan apa yang harus dilakukan, dari tampilan 3D yang hilang sampai sambungan yang tidak dapat dibangun.
keywords: masalah, kesalahan, tidak berfungsi, bantuan, perbaikan, pesan, ditolak, webgl, kosong, peringatan, tidak dapat, isu
from: f8c3b2b1
---

Sebagian besar penolakan dijelaskan di bilah status di bagian bawah layar, atau di tab {{ui:Masalah}}. Baca itu terlebih dahulu. Pesan di bawah dikutip seperti yang ditampilkan DetailCraft.

## Tampilan 3D hilang

**"Peramban ini tidak dapat memulai grafis 3D (WebGL). Model, laporan, dan ekspor tetap berfungsi."**

Peramban tidak dapat memulai WebGL, grafis 3D yang digunakan DetailCraft untuk menggambar.

1. Perbarui peramban ke versi terbaru.
2. Aktifkan akselerasi perangkat keras dan mulai ulang peramban (lihat di bawah).
3. Perbarui driver grafis Anda, atau coba peramban lain. Desktop jarak jauh dan mesin virtual sering tidak memiliki WebGL.
4. Sementara itu Anda tetap dapat bekerja: tempatkan batang dengan formulir {{ui:Tambah berdasarkan grid}}, baca laporan, dan ekspor. Hanya mengklik di dalam tampilan yang membutuhkan WebGL.

:::chromium
Untuk mengaktifkan akselerasi perangkat keras, buka **Pengaturan, Sistem** dan aktifkan **Gunakan akselerasi grafis jika tersedia**, lalu jalankan ulang.
:::

:::firefox
Untuk mengaktifkan akselerasi perangkat keras, buka **Pengaturan, Umum, Performa**, hapus centang **Gunakan pengaturan performa yang disarankan**, dan centang **Gunakan akselerasi perangkat keras jika tersedia**. Mulai ulang Firefox.
:::

:::safari
Safari memiliki WebGL aktif secara default. Perbarui macOS jika tampilan masih tidak mau dimulai, dan periksa bahwa tidak ada ekstensi yang memblokirnya.
:::

Informasi lebih lanjut di [Peramban dan komputer](common:browsers).

## Mengklik di tampilan tidak melakukan apa-apa

- **Tidak ada perpotongan di dekat klik.** Alat penempatan hanya menempel ke perpotongan grid. Klik yang jauh dari setiap titik tidak melakukan apa-apa. Dekatkan penunjuk sampai titiknya menyala.
- **Alatnya {{ui:Pilih}} dan Anda mengklik ruang kosong.** Itu menghapus pilihan.
- **Anda menyeret.** Tekan dan lepas yang berjarak lebih dari beberapa piksel adalah seretan: itu memutar atau menggeser tampilan.
- **Bagiannya terpotong.** Di {{ui:Denah}} dan {{ui:Tampak}}, baja di luar potongan disembunyikan dan tidak dapat diklik. Beralih ke {{ui:3D}}.
- **Perpotongan berada di level yang salah.** Di {{ui:3D}}, perpotongan di beberapa level dapat tumpang tindih di layar; klik mengambil yang terdekat. Gunakan {{ui:Denah}} atau {{ui:Tampak}}.

## Pesan penempatan

| Pesan | Yang harus dilakukan |
|---|---|
| Tidak ada level di atas Level 2 untuk dijangkau kolom. Tambahkan level terlebih dahulu. | Tambahkan level di {{ui:Level}}, atau klik level yang lebih rendah |
| Pilih perpotongan lain untuk ujung satunya. | Anda mengklik titik yang sama dua kali |
| Kedua ujung berada di titik yang sama. | Di {{ui:Tambah berdasarkan grid}}, pilihan "Dari" dan "Ke" sama |
| Tambahkan garis grid di sebelah kiri untuk menempatkan batang. | Model tidak memiliki garis grid di satu arah |
| Profil tidak dikenal "…" | Profil tidak ada di katalog atau profil kustom model. Pilih dari daftar |
| Ketik angka. | Kolom angka dibiarkan kosong atau berisi teks |

## Sambungan tidak dapat dibangun

### "Balok ini tidak berakhir pada garis kolom."

Pelat ujung memerlukan ujung balok tepat pada garis kolom vertikal, di antara bagian bawah dan atasnya (dalam 1 mm). Periksa {{ui:Ujung (x, y, z mm)}} balok dan posisi kolom.

### "Balok ini menyambung ke badan kolom atau pada sudut"

Atau di {{ui:Masalah}}: "Balok yang menyambung ke badan kolom belum dibuat: putar kolom 90° atau gunakan sambungan lain."

Balok menyambung ke badan kolom. Pilih kolom dan atur {{ui:Rotasi (°)}} ke 90, lalu coba lagi. Sambungan miring belum dibuat.

### "Pelat ujung hanya dibuat untuk balok datar (balok ini miring)."

Kedua ujung balok harus berada pada ketinggian yang sama.

### "Pelat ujung memerlukan balok tegak (rotasi 0)."

Atur {{ui:Rotasi (°)}} balok kembali ke 0.

### "Pelat ujung memerlukan balok bentuk I." / "Pelat ujung memerlukan kolom bentuk I."

Hanya bentuk I (W, IPE, HEA, HEB, atau I kustom) yang menerima pelat ujung.

### "Ujung balok tidak lagi berada pada garis kolom."

Anda memindahkan balok atau kolom setelah menambahkan sambungan. Pindahkan kembali, atau hapus sambungannya.

### "Sambungan memotong elemen ini hingga tidak tersisa."

Sambungan di kedua ujung memotong elemen lebih jauh daripada panjangnya, misalnya balok yang sangat pendek di antara dua kolom yang dalam. Periksa ujung elemen dan tebal pelatnya.

### "Tidak ada sambungan lain seperti ini … yang tidak memiliki sambungan."

{{ui:Serupa}} hanya menyalin ke sambungan dengan profil balok, profil kolom, dan jenis sambungan yang sama (balok ke flens) yang belum memiliki sambungan.

### "Kedua ujung sudah memiliki sambungan." / "Kolom ini sudah memiliki pelat dasar."

Pilih sambungan yang ada untuk mengubahnya, atau hapus dahulu.

## Peringatan di tab Masalah

Peringatan tidak menghentikan sambungan atau pondasi dari dibangun; peringatan meminta Anda memeriksanya. Peringatan tepi dan jarak memakai minimum EN 1993-1-8 Tabel 3.3 (tepi 1.2 × lubang, pitch 2.2 × lubang, gauge 2.4 × lubang). Jika proyek Anda memakai aturan lain, peringatan mungkin tidak berlaku; DetailCraft tidak merancang sambungan.

"a hole is off the end of the part" berarti x lubang kurang dari 0 atau lebih dari panjang potong. Ingat bahwa x diukur dari awal potongan, setelah sambungan memotong bagian itu kembali.

## Perubahan pondasi ditolak

| Pesan | Yang harus dilakukan |
|---|---|
| Selimut beton tidak menyisakan ruang untuk tulangan di pondasi ini. | Buat pondasi lebih besar atau selimut lebih kecil |
| Pondasi terlalu dangkal untuk dua lapis tulangan di dalam selimut. | Buat lebih dalam atau kurangi selimut |
| Besi stek tidak muat di dalam pondasi dengan selimut 75 mm. | Lebih sedikit besi stek, jarak lebih rapat, atau pondasi lebih besar |
| Jarak tulangan harus 50–1000 mm. | Ketik jarak dalam rentang itu |
| Panjang harus 300–50000 mm. | Ukuran pondasi memiliki batas: panjang dan lebar 300 sampai 50000, kedalaman 150 sampai 10000 |

## Grid dan level ditolak

| Pesan | Yang harus dilakukan |
|---|---|
| Grid bernomor: beri satu jarak di antara setiap pasang garis (4). | Hitung celahnya: lima garis membutuhkan empat jarak |
| Grid berhuruf: jarak harus berupa milimeter positif. | Tidak boleh nol, negatif, atau teks |
| Grid bernomor: label grid harus berbeda. | Dua garis memiliki label yang sama |
| Paling banyak 60 garis grid per arah. | Pisahkan model |
| Pertahankan setidaknya satu level. | Anda menghapus setiap baris level |
| Setiap level harus memiliki nama. / Dua level bernama "…". | Beri setiap level nama yang berbeda |

## Membuka file gagal

| Pesan | Penyebab |
|---|---|
| DetailCraft membuka model miliknya sendiri (.detailcraft.json). Impor IFC belum dibuat. | File bukan file `.json` |
| Ini bukan model DetailCraft (bukan JSON). | File rusak, atau merupakan JSON lain |
| Ini bukan model DetailCraft. | File JSON dari program lain |
| Model ini disimpan oleh DetailCraft yang lebih baru (format 2). | Buka di DetailCraft yang lebih baru yang menyimpannya |
| File itu terlalu besar untuk menjadi model DetailCraft. | Lebih dari 50 MB |

Ketika file terbuka dengan peringatan seperti "2 batang tidak valid dan dikeluarkan.", sisa model baik-baik saja. Jangan menimpa file asli sebelum Anda memeriksa apa yang dikeluarkan.

## Ekspor

| Pesan | Penyebab |
|---|---|
| Belum ada yang diekspor. | {{ui:IFC}} dengan model kosong |
| Tidak ada bagian bentuk I atau pelat untuk menulis file NC. | Model hanya berisi kanal, siku, atau pipa |
| Tidak ditulis (sejauh ini hanya bentuk I dan pelat): … | Tanda-tanda tersebut bukan bentuk I atau pelat; sisanya sudah ditulis |
| Tidak ada pondasi, jadi tidak ada tulangan untuk dijadwalkan. | {{ui:Pembengkokan}} tanpa pondasi |
| … karakter di luar font PDF dicetak sebagai "?". | Nama model atau kelas memiliki karakter yang tidak dimiliki font PDF |

{{ui:Gambar kerja}} abu-abu: model belum memiliki bagian apa pun.

## Unduhan tidak muncul

Setiap simpan dan ekspor adalah unduhan peramban. Periksa daftar unduhan peramban Anda. Jika peramban meminta izin sebelum mengunduh beberapa file, atau memblokir unduhan dari situs ini, izinkan. Di Safari, periksa tombol unduhan di bilah alat.

## Tombol keyboard tidak berfungsi

- Kursor berada di kolom teks atau angka: tombol alat dan {{key:Delete}} diabaikan di sana agar Anda dapat mengetik. Tekan {{key:Tab}} atau klik tampilan.
- Sebuah dialog terbuka: tutup dahulu.
- Peramban memegang keyboard (misalnya bilah alamat): klik di dalam DetailCraft.
- {{key:Ctrl+Shift+F}} memakai Control bahkan di Mac.

## Masalah offline

Tombol {{ui:Simpan untuk offline}} di bilah aplikasi menunjukkan kondisi salinan offline. Cara penyimpanan bekerja: [Bekerja offline](common:offline).

| Tombol menampilkan | Artinya | Yang harus dilakukan |
|---|---|---|
| {{ui:Simpan untuk offline}} | Belum ada salinan offline di peramban ini | Pilih saat online |
| Menyimpan 5 dari 20 | Penyimpanan sedang berlangsung | Tunggu {{ui:Siap offline}}; biarkan tab tetap terbuka |
| {{ui:Siap offline}} | DetailCraft, tampilan 3D, setiap ekspor, dan bantuan ini bekerja tanpa koneksi | Tidak perlu apa-apa. Klik untuk {{ui:Simpan lagi (ambil versi terbaru)}} atau {{ui:Hapus salinan offline}} |
| {{ui:Tidak dapat menyimpan}} | Beberapa file tidak terunduh | Periksa koneksi Anda, lalu klik untuk mencoba lagi |
| {{ui:Offline tidak tersedia}} | Jendela ini tidak dapat menyimpan salinan offline: jendela privat dan sebagian komputer terkelola memblokirnya | Gunakan jendela biasa, atau bekerja online |

Jika Anda offline dan tombolnya tidak menampilkan {{ui:Siap offline}}, jangan muat ulang atau tutup tab: apa yang sudah dimuat tetap berfungsi. Simpan model dengan {{key:Mod+S}} dan tunggu sampai Anda kembali online.

## Pekerjaan yang belum disimpan

Jika peramban menanyakan apakah Anda ingin meninggalkan halaman, DetailCraft memiliki perubahan yang belum disimpan. Pilih untuk tetap di halaman, lalu tekan {{key:Mod+S}}. DetailCraft tidak dapat memulihkan model setelah tab ditutup.

## Masih bermasalah

Catat apa yang Anda lakukan dan pesan persisnya, lalu beri tahu kami melalui [halaman dukungan](https://getcadcraft.com/support).
