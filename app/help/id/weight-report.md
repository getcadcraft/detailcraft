---
title: Laporan material dan berat per fase
summary: Panjang potong, jumlah, berat, dan luas cat untuk setiap fase, beserta baut dan tulangannya, sebagai tabel, CSV, atau PDF.
keywords: laporan, berat, tonase, kg, cat, luas cat, luas permukaan, pelapisan, panjang potong, daftar material, fase, csv, pdf
from: 337d6d92
---

Di grup {{ui:Keluaran}}, buka {{ui:Lainnya}} dan pilih {{ui:Laporan berat per fase}}, atau buka tab {{ui:Per fase}} di bawah tampilan. Laporan ini memuat:

- **Ringkasan per fase**: untuk setiap fase, jumlah bagian, berat baja, luas cat, baut dan batang angkur, serta tulangan; lalu totalnya.
- **Satu tabel per fase**: setiap tanda part di dalamnya dengan jenis, profil, material, panjang potong, jumlah, berat per unit, berat, dan luas cat-nya; lalu baut dan batang angkurnya.

{{ui:Unduh CSV}} menyimpan tabel yang sama dalam satu file CSV (`<name> weight report.csv`). {{ui:Unduh PDF}} membuat laporan pada ukuran lembar dari [Pengaturan DetailCraft](topic:settings#drawings), dengan ringkasan di awal, setiap fase sesudahnya, tabel panjang yang dilanjutkan ke halaman berikutnya, dan setiap halaman diberi nomor.

## Cara menghitung angkanya

- **Berat** bersifat kotor, seperti dalam daftar material: berat profil per meter dikalikan panjang potong. Lubang dan coak tidak dikurangkan.
- **Luas cat** adalah bagian luar profil sepanjang panjang potong: untuk bentuk I setiap sisi flens dan badan, untuk pelat kedua sisinya dan tepinya, untuk pipa hanya bagian luarnya. Ujung dan lubang tidak dihitung.
- **Tulangan** adalah berat batang di pondasi fase tersebut, dari [jadwal pembengkokan](topic:footings-and-rebar).
- Pelat dan baut sambungan dihitung dalam fase batang utamanya. Lihat [Fase](topic:phases).

Dengan [tanda per fase](topic:phases#marks-per-phase) aktif, setiap fase memiliki tandanya sendiri (1-b1, 2-b1). Jika tidak aktif, sebuah tanda dapat muncul di lebih dari satu fase: setiap fase mencantumkan potongan yang dimilikinya.
