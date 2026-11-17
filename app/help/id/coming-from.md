---
title: Beralih dari perangkat lunak detailing lain
summary: Cara kebiasaan paket detailing lengkap dipetakan ke DetailCraft, dan perbedaan yang sering menjebak detailer berpengalaman.
keywords: beralih, migrasi, akrab, alur kerja, perbandingan, perbedaan, penomoran, komponen, katalog, gambar, kebiasaan
from: 39639a5d
---

Jika Anda mendetail di Tekla Structures, sebagian besar DetailCraft akan terasa familiar: grid, level, profil dari katalog, bagian dan rakitan, sambungan, penomoran, file NC, IFC. Skalanya sangat berbeda: Tekla Structures adalah sistem produksi penuh, dan DetailCraft adalah aplikasi browser yang kecil dan masih awal yang melakukan beberapa pekerjaan dari awal sampai akhir. Halaman ini menjelaskan di mana kebiasaan Anda terbawa dan di mana tidak.

:::tip
Jika tangan Anda sudah mengenal ribbon Tekla Structures, pilih gaya menu {{ui:Ribbon baja}} di {{ui:Pengaturan}} › {{ui:DetailCraft}} › {{ui:Menu, tombol, dan mouse}}: tab Modeling, Detailing, Edit, Drawings, Fabrication, dan View, dan tombol tengah menggeser. Jika Anda datang dari AutoCAD dan suka mengetik perintah, {{ui:Drafting klasik}} menambahkan baris perintah (BEAM, COLUMN, ENDPLATE, ZOOM …). Lihat [Menu, tombol, dan mouse](topic:menus-keys-and-mouse).
:::

## Peta cepat

| Yang biasa Anda pakai | Di DetailCraft |
|---|---|
| Membuat grid dengan koordinat di dialog grid | {{ui:Grid}} di panel kiri: label dan jarak antara garis, bukan koordinat absolut. Garis bernomor berjalan satu arah, garis berhuruf berjalan arah lain |
| Level sebagai koordinat Z grid | Daftar {{ui:Level}} tersendiri, nama dan elevasi per baris, diterapkan dengan {{ui:Terapkan level}} |
| Memilih titik di mana saja dengan snap | Klik hanya menempel ke perpotongan grid. Titik di luar grid diketik ke {{ui:Ujung (x, y, z mm)}} sebuah batang |
| Perintah kolom, balok, dan pelat | {{ui:Kolom}} ({{key:C}}), {{ui:Balok}} ({{key:B}}), {{ui:Bresing}} ({{key:R}}), {{ui:Pelat}} ({{key:P}}), {{ui:Fondasi}} ({{key:F}}) |
| Dialog properti bagian (klik ganda pada bagian) | Klik sekali: panel {{ui:Properti}} di kanan selalu aktif; tidak ada dialog dan tidak ada tombol Modify atau Apply |
| Posisi pada bidang, rotasi, dan pengaturan kedalaman | {{ui:Posisi}} (atas baja, di tengah, atau bawah pada garis) dan {{ui:Rotasi (°)}}. Tidak ada offset horizontal terpisah |
| Katalog profil | Daftar tetap 2.311 ukuran terbit (AISC W, S, C, L, HSS, Pipe; Eropa IPE, HEA, HEB, UPN; UK UB, UC, PFC, EA, UEA, SHS, RHS, CHS, dan penampang berongga dingin), ditambah pelat parametrik dan {{ui:Profil kustom}} milik Anda |
| Katalog material | Tujuh kelas dalam daftar: A992, A36, A572 Gr 50, A500 Gr C, S235, S275, S355 |
| Menerapkan komponen sambungan dan dialognya | Pilih balok, lalu pilih {{ui:Pelat ujung}}. Pengaturannya muncul di panel {{ui:Properti}}. Hanya ada dua sambungan (pelat ujung ke flens kolom, dan pelat dasar) |
| Sambungan otomatis, atau menyalin sambungan ke sambungan serupa | Pilih sambungan, lalu pilih {{ui:Terapkan ke yang serupa (n)}} |
| Penomoran dengan seri dan nomor awal | Tidak ada perintah: tanda diperbarui sendiri setelah setiap perubahan, dengan awalan tetap c, b, br, p dan C, B, BR, P |
| Dialog baut dan lubang | Lubang diketik menurut muka dan posisi. Baut hanya berasal dari sambungan |
| Alat potong, pas, dan potong poligon | Takikan (atas atau bawah, di kedua ujung) hanya pada profil I. Potongan mundur sambungan otomatis |
| Laporan dan templat | Tiga laporan tetap di tab di bagian bawah, dan unduhan CSV |
| Pembuatan gambar dan daftar gambar | Satu gambar kerja per tanda bagian, semua dibuat sekaligus, dipratinjau lalu diunduh sebagai satu PDF atau lembar demi lembar. Tidak ada yang disimpan atau disunting |
| Ekspor file NC | {{ui:File NC}}: satu file DSTV per tanda bagian, hanya profil I dan pelat, dizip |
| Ekspor IFC | {{ui:IFC}}: IFC4 dari seluruh model, dengan tulangan |
| Tulangan pada bagian beton apa pun | Tulangan hanya pada fondasi pad persegi panjang, dengan ukuran batang standar AS, dengan lapisan bawah dan besi stek |
| Model disimpan di folder proyek, multi-pengguna | Satu file `.detailcraft.json` yang Anda unduh. Pengguna tunggal, di komputer Anda |
| Riwayat urungkan | {{key:Mod+Z}} dan {{key:Mod+Y}}, hingga 200 langkah, disimpan sampai Anda membuka atau memulai model lain |

## Perbedaan yang menjebak orang

### Tanda berubah sendiri

Tidak ada langkah penomoran. Tanda dihitung ulang setelah setiap perubahan, jadi selalu mutakhir, tetapi juga bisa bernomor ulang: tambahkan kolom dan c3 kemarin mungkin sekarang menjadi c4. Tidak ada "riwayat penomoran" untuk menyimpan tanda lama. Selesaikan model, lalu terbitkan BOM, file NC, dan gambar kerja bersama-sama dari satu file yang disimpan.

### Tombol tengah mouse memperbesar; tidak menggeser

Di tampilan 3D: seret kiri untuk memutar, seret kanan untuk menggeser, roda untuk memperbesar, dan seret dengan tombol tengah juga memperbesar. Menahan {{key:Shift}} sambil menyeret kiri juga menggeser. Roda memperbesar ke arah tengah tampilan, bukan ke arah penunjuk. Tidak ada pemilihan titik pusat rotasi: model berputar di sekitar tengah tampilan. Lihat [Bergerak di sekitar tampilan 3D](topic:navigate-3d).

### Kolom menghadap satu arah secara default

Pada rotasi 0, sayap kolom menghadap sepanjang arah grid bernomor. Balok yang berjalan di antara garis grid berhuruf membingkai ke badan, dan pelat ujung ditolak di sana ("Balok yang membingkai ke badan kolom belum dibuat"). Putar kolom tersebut 90° sebelum menambahkan sambungan.

### Elevasi hanya pada garis berhuruf

{{ui:Elevasi}} hanya melihat sepanjang garis grid berhuruf. Tidak ada tampilan sepanjang garis bernomor, tidak ada tampilan tersimpan, dan tidak ada bidang kerja. Gunakan {{ui:3D}} atau {{ui:Tambah berdasarkan grid}} untuk bingkai pada garis bernomor.

### Pilihan, salin, dan pindah

Pilih beberapa bagian dengan {{key:Shift}}+klik atau {{key:Mod+A}}, lalu salin, potong, tempel (pada perpotongan grid, pada offset yang diketik, atau di tempat yang sama), dan duplikat, termasuk sambungannya ([Salin, tempel, dan duplikat](topic:copy-paste)). Tidak ada pemilihan jendela, filter pilihan, pindah, cermin, atau array, dan properti diubah satu batang sekaligus di panel {{ui:Properti}}.

### Grid tidak menyeret batang

Batang mempertahankan koordinatnya saat Anda mengubah jarak grid; tidak ada yang bergerak bersama garis grid. Ubah grid sebelum Anda menempatkan baja, atau sunting koordinat ujung setiap batang setelahnya.

### Sambungan tidak didesain

Kedua sambungan menempatkan pelat, lubang, baut, dan las dari angka yang Anda berikan. Tidak ada pemeriksaan desain apa pun, hanya peringatan tepi dan jarak (dari EN 1993-1-8 Tabel 3.3).

### Lubang tidak dipotong di tampilan 3D

Lubang tampil sebagai sumbat gelap. Itu lubang sungguhan di file NC, gambar kerja, dan file IFC. Takikan dipotong di tampilan.

### Berat bersifat kotor

Berat baja tidak mengurangi lubang atau takikan, dan berat baut tidak disertakan.

### Hanya milimeter

Semuanya diketik dan ditampilkan dalam milimeter, bahkan untuk profil AISC. Nama profil mempertahankan bentuk terbitnya (W12x50, HSS6x6x1/4).

### Tidak ada gambar untuk dikelola

Tidak ada daftar gambar, tidak ada editor gambar, tidak ada gambar susunan umum atau gambar rakitan. Gambar kerja dibuat saat Anda memintanya dan diunduh; untuk mengubahnya, ubah model dan buat ulang.

### Berjalan di browser

Menyimpan berarti mengunduh sebuah file. Pintasan keyboard yang disimpan browser untuk dirinya sendiri tidak dapat digunakan. Model Anda tidak pernah meninggalkan komputer Anda: lihat [Ke mana file Anda pergi](common:your-files).

## Yang tetap dikerjakan di perangkat lunak Anda saat ini

Saat ini DetailCraft cocok untuk bingkai kecil, memeriksa sebuah ide, mengajar, atau menghasilkan file NC dan gambar kerja untuk pekerjaan balok dan kolom sederhana. Tetap gunakan perangkat lunak yang Anda pakai sekarang untuk sambungan yang kompleks, gambar susunan umum, gambar pemasangan, proyek multi-pengguna, dan apa pun yang tercantum di [Yang belum dibuat](topic:not-built-yet).
