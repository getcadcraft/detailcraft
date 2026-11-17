---
title: Tangga
summary: Pasang tangga baja lurus dari tanjakan, langkah, dan lebarnya: dua ibu tangga dan pelat injakan, satu rakitan yang dilas.
keywords: tangga, tangga lurus, ibu tangga, injakan, tanjakan, langkah, nosing, lari tangga, tangga baja, ibc 1011, blondel
from: 62fa3845
---

Tangga baja lurus: dua ibu tangga (kanal dengan ujungnya menghadap ke dalam, atau batang datar yang berdiri tegak) dan pelat injakan di setiap langkah, dilas di antara keduanya. DetailCraft menghitung jumlah tanjakan dari tinggi naik, memeriksanya terhadap batas kode bangunan, dan membuat tangga menjadi satu rakitan pabrik.

## Letakkan tangga

1. Pilih {{ui:Stair}} di grup {{ui:Place}}, atau tekan {{key:S}}.
2. Atur tangga di sisi kanan: **arah naik** (0° naik sepanjang +x, 90° sepanjang +y), **tinggi naik** (0 = sampai ke level berikutnya), **langkah**, **lebar bersih** di antara ibu tangga, **tanjakan tertinggi yang diizinkan**, **ibu tangga**, **tebal pelat injakan**, **nosing**, dan materialnya.
3. Klik perpotongan grid: itu adalah kaki tanjakan pertama, pada garis tengah tangga.

Bilah status menyebutkan berapa tanjakan yang dibuat. Pilih tangga (klik ibu tangga atau injakan) untuk mengubah pengaturannya, posisinya, atau fasenya; properti juga menampilkan tanjakan, injakan, panjang, pitch, dan 2 × tanjakan + langkah.

## Yang dihitung DetailCraft

- **Tanjakan.** Sesedikit mungkin yang membuat setiap tanjakan berada di bawah atau sama dengan tanjakan tertinggi yang diizinkan: tinggi naik 3000 mm pada 178 mm atau kurang menghasilkan 17 tanjakan sebesar 176.5 mm. Jumlah injakan satu lebih sedikit dari tanjakan (lantai atas adalah langkah terakhir).
- **Injakan.** Pelat sepanjang langkah + nosing dalamnya (280 + 25 = PL6x305 secara default) dan selebar lebar bersih, bagian atasnya berada di tinggi setiap tanjakan, tepi depannya (nosing) berada di depan garis tanjakan.
- **Ibu tangga.** Pada pitch tangga, dari tempat keduanya bertemu lantai bawah sampai tempat keduanya bertemu lantai atas, tepat di luar lebar bersih; tepi atasnya 50 mm di atas garis nosing. Ujung kanal menghadap ke dalam tangga; batang datar seperti PL12x250 berdiri tegak.
- **Las.** Setiap injakan ke kedua ibu tangga. Injakan dan ibu tangga kanan dilas ke ibu tangga kiri, sehingga tangga memperoleh satu tanda rakitan (ST1) dan gambar rakitannya sendiri; ibu tangga mendapat tanda part st…, injakan mendapat p….
- **Pemeriksaan.** Peringatan saat tanjakan berada di luar 4 sampai 7 in. (102 sampai 178 mm) atau langkah di bawah 11 in. (279 mm), batas IBC 2021 bagian 1011.5.2; saat 2 × tanjakan + langkah di luar 600 sampai 650 mm (aturan kenyamanan umum); dan saat ibu tangga terlalu dangkal untuk menopang injakan. Profil ibu tangga yang tidak dikenal menghentikan tangga agar tidak dibangun.

## Baik diketahui

- Pindah, putar, cerminkan, salin, tempel, hapus, dan fase bekerja pada tangga seperti pada batang. Rotasi memutar arah naik; cermin mengirimnya ke arah sebaliknya.
- Ibu tangga diekspor ke IFC sebagai IfcMember dan injakan sebagai IfcPlate; keduanya masuk ke berkas NC dan daftar material. Pemeriksaan benturan membiarkan bagian tangga itu sendiri, karena bagian-bagiannya sudah dilas bersama.
- Tangga lurus sederhana ini adalah satu lari dengan injakan pelat. Untuk bordes, pegangan dengan baluster, injakan pan berlipat atau kisi-kisi, set aturan yang Anda pilih, daftar potong, dan gambar lubang ibu tangga, centang {{ui:Use the steel stair generator}} di alat Stair (lihat Generator tangga baja).
- Ibu tangga dipotong tegak lurus: potongan ujungnya terhadap lantai tidak dibuat.
- DetailCraft tidak mendesain tangga: ibu tangga dan injakan tidak diperiksa kekuatan atau lendutannya.
