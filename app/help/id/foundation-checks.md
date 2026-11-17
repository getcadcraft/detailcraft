---
title: Pemeriksaan fondasi
summary: Periksa fondasi telapak, fondasi gabungan dan pelat rakit pada tanah yang Anda deskripsikan, penurunan, pelat rakit lentur di atas pegas, grup tiang, dan dinding penahan. Alat bantu bagi insinyur untuk memeriksa.
keywords: fondasi, fondasi telapak, fondasi gabungan, pelat rakit, penurunan, modulus tanah dasar, pegas, kolom tepi, kolom sudut, daya dukung, geser, guling, geser pons, geser satu arah, lentur, penyaluran, tulangan minimum, grup tiang, dinding penahan, ACI 318-19
from: 6961ad52
---

:::warning
Ini adalah pemeriksaan tingkat awal untuk ditinjau insinyur, bukan persetujuan desain. Tekanan daya dukung izin dan koefisien gesek adalah tanggung jawab Anda: DetailCraft tidak mengetahui tanah Anda.
:::

Tab {{ui:Fondasi}} memeriksa fondasi di model terhadap beban kolom yang Anda berikan.

## Mendeskripsikan tanah

Ketik {{ui:Tekanan daya dukung izin}} dan {{ui:Koefisien gesek dasar}}. Keduanya mulai dari 0, artinya belum diisi: pemeriksaan kemudian menampilkan tekanan sebagai catatan dan tidak menyatakan lulus. Untuk penurunan, ketik modulus tanah {{ui:Es}} (MPa), angka Poisson tanah, dan penurunan yang Anda izinkan (25 mm sebagai awal). Untuk pelat rakit lentur, ketik modulus tanah dasar {{ui:ks}}. Timbunan di atas fondasi, berat satuan tanah, faktor keamanan untuk geser dan guling (1.5 sebagai awal), serta kuat leleh tulangan juga tersedia di sini.

## Memberikan beban

Setiap fondasi memiliki daftar beban kolom. Gunakan {{ui:Tambah beban kolom}} dan isi baris layanan (untuk daya dukung, geser, dan guling) serta baris terfaktor (untuk pemeriksaan kekuatan): beban vertikal P ke bawah, gaya horizontal Vx dan Vy di bagian atas fondasi, momen Mx dan My, posisi kolom di atas fondasi, serta ukurannya.

Atau jalankan tab {{ui:Analisis}} dan tekan {{ui:Ambil beban kolom dari Analisis}}: setiap tumpuan yang berdiri di atas fondasi menjadi beban kolom, dari himpunan layanan dan himpunan terfaktor yang Anda pilih. Momen My positif membebani sisi +x fondasi lebih berat; momen Mx positif membebani sisi −y lebih berat.

## Yang diperiksa

Dari beban layanan, dengan berat fondasi dan timbunan sendiri ditambahkan:

- **Daya dukung:** tekanan di bawah fondasi kaku. Di dalam sepertiga tengah, seluruh dasar bersentuhan; di luar itu, sebagian dasar terangkat dan puncak tekanannya lebih tinggi. Resultan di luar dasar dinyatakan gagal.
- **Geser:** gesekan dikali beban vertikal, dibandingkan dengan gaya horizontal.
- **Guling:** jarak resultan dari tepi.
- **Penurunan:** penurunan elastis dari tekanan rata-rata pada ruang setengah dengan modulus yang Anda berikan, di tengah dan di sudut (solusi Timoshenko dan Goodier untuk persegi panjang lentur), dibandingkan dengan batas. Ini adalah batas atas untuk fondasi kaku dan tidak memperhitungkan lapisan tanah dengan kedalaman terbatas, pelepasan akibat tanah galian, serta konsolidasi. Tanpa modulus, tekanan ditampilkan sebagai catatan.

Dari beban kolom terfaktor saja (ACI 318-19):

- **Lentur** pada muka kolom, dengan tulangan minimum (0.0018 untuk batang 420 MPa) dan batang yang Anda gambar.
- **Geser satu arah** pada jarak d dari muka.
- **Geser pons** pada jarak d/2 di sekeliling setiap kolom, dengan momen kolom. Untuk kolom dekat tepi, penampang kritis terpotong oleh tepi fondasi (tiga sisi di tepi, dua sisi di sudut, ACI 318-19 22.6.4.1 dan αs yang lebih kecil pada Tabel 22.6.5.2), dan momen terhadap pusat penampang itu sendiri mencakup pergeseran beban.
- **Penyaluran** batang melewati muka kolom, lurus atau dengan kaitnya.
- **Kedalaman** di atas batang bawah (150 mm).

Fondasi gabungan atau pelat rakit dianggap kaku, dan gaya geser serta momen berasal dari statika pada potongan melintang di seluruh lebar.

## Pelat rakit lentur di atas pegas

Centang {{ui:Analisis fondasi ini sebagai pelat rakit lentur di atas pegas}} ketika fondasi memikul banyak kolom dan fondasi kaku terlalu kasar. Fondasi menjadi pelat elemen empat simpul di atas tumpuan pegas (berupa {{ui:ks}} yang Anda ketik, terkumpul pada simpul), dan beban setiap kolom disebar ke simpul di jejak kakinya sendiri. Tabel kedua memberikan tekanan tanah dan penurunan terbesar (serta selisih antara yang terbesar dan yang terkecil), momen lentur ke dua arah beserta tulangan yang dibutuhkannya, tarik di bagian atas terhadap kuat beton polos (fondasi tidak memiliki batang atas), geser satu arah pada jarak d dari kolom, dan geser pons berdasarkan tekanan pegas itu sendiri. Mesh diperhalus sampai satu kolom lebarnya tiga elemen; pelat besar membutuhkan beberapa detik. Berat pelat sendiri dan tanah di atasnya saling meniadakan sehingga tidak dihitung.

Setiap pemeriksaan yang gagal tercantum di panel {{ui:Masalah}} beserta klausulnya.

## Grup tiang dan dinding penahan

{{ui:Tambah grup tiang}} menempatkan kisi tiang di bawah poer kaku: ketik beban dan momen serta berapa besar yang boleh dipikul satu tiang dalam tekan dan dalam tarik (angka dari desain tiang, bukan dari tab ini). Reaksi setiap tiang adalah P/n ditambah bagiannya dari momen (metode elastis), dan tekan terbesar serta tarik apa pun diperiksa.

{{ui:Tambah dinding penahan}} memeriksa dinding kantilever di atas timbunan datar, per meter: tekanan aktif Rankine, guling terhadap ujung kaki, geser, dan tekanan dasar. Tekanan pasif di depan kaki tidak dihitung. Asisten Anda dapat menjalankan pemeriksaan yang sama dengan `pile_group_check` dan `retaining_wall_check`.

Grup tiang, dinding, dan sakelar pelat rakit disimpan di berkas model, dan pemeriksaan yang gagal tercantum di {{ui:Masalah}}.
