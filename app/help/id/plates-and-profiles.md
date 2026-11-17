---
title: Letakkan pelat dan tambahkan profil kustom
summary: Letakkan pelat lepas berdasarkan tebal dan lebar, dan tentukan bagian I, kanal, siku, tabung, atau batang pipih sendiri.
keywords: pelat, pipih, profil kustom, profil pengguna, parametrik, potongan, bentuk, penampang melintang, pl
from: c24c3b51
---

## Letakkan pelat

Pelat diletakkan seperti balok: membentang di antara dua perpotongan, dengan lebarnya melintang dan tebalnya ke atas.

1. Pilih {{ui:Pelat}} di grup {{ui:Letakkan}}, atau tekan {{key:P}}.
2. Di panel {{ui:Properti}}, atur {{ui:Tebal (mm)}} dan {{ui:Lebar (mm)}}. Defaultnya adalah 20 x 200 dalam A36.
3. Atur {{ui:Material}} dan {{ui:Rotasi (°)}} jika perlu. Rotasi 90 menegakkan pelat pada sisinya.
4. Klik dua perpotongan, atau gunakan formulir {{ui:Tambah berdasarkan grid}}.

Nama profil pelat ditulis `PL<tebal>x<lebar>`, misalnya PL20x200. Panjangnya adalah jarak antara kedua titik.

Untuk mengubah ukuran pelat yang sudah diletakkan, pilih pelat itu dan ubah {{ui:Tebal (mm)}} atau {{ui:Lebar (mm)}}.

Pelat yang Anda letakkan adalah part tersendiri (tanda p, rakitan P). Pelat ujung dan pelat dasar yang dibuat oleh sambungan juga merupakan pelat, tetapi Anda mengubahnya lewat sambungannya; lihat [Pelat ujung](topic:end-plates).

## Tambahkan profil kustom

Saat potongan yang Anda butuhkan tidak ada di katalog, buat dari dimensinya. Profil kustom menjadi bagian dari model dan disimpan bersamanya. Untuk memakainya di setiap model baru, simpan di {{ui:Profil saya}}, dijelaskan di "Simpan profil untuk model baru" di bawah.

1. Di panel {{ui:Model}} di sebelah kiri, buka {{ui:Profil kustom}}.
2. Ketik {{ui:Nama}}, misalnya `W8x18-custom` atau `RHS 120x80x5`. Nama itu tidak boleh berupa nama katalog atau menyerupai nama pelat.
3. Pilih {{ui:Bentuk}}: {{ui:Profil I}}, {{ui:Kanal}}, {{ui:Siku sama kaki}}, {{ui:Pipa persegi}}, {{ui:Pipa bundar}} atau {{ui:Pelat strip}}.
4. Isi dimensi yang muncul, semuanya dalam milimeter:

| Bentuk | Dimensi |
|---|---|
| Profil I | Tinggi d, lebar flens bf, badan tw, flens tf, radius fillet r (boleh 0) |
| Kanal | Tinggi d, lebar flens bf, badan tw, flens tf (sudut persegi) |
| Siku sama kaki | Lebar b (tiap kaki), tebal t |
| Pipa persegi | Tinggi h, lebar b, tebal t (radius sudut luar 2t) |
| Pipa bundar | Diameter D, tebal t |
| Pelat strip | Lebar b, tebal t |

5. Biarkan {{ui:Simpan di Profil saya}} tercentang agar profil ada di setiap model baru (lihat di bawah), atau hilangkan centangnya untuk menyimpannya hanya di model ini.
6. Pilih {{ui:Tambah profil}}.

Bilah status menyebutkan "Profil "…" ditambahkan; ada di setiap daftar profil di bawah Kustom." Profil itu muncul dalam daftar di bawah formulir dan di akhir setiap daftar {{ui:Profil}}.

DetailCraft memeriksa bahwa bentuk itu mungkin ada. Anda akan melihat pesan seperti "Badan dan flens tidak muat dalam tinggi dan lebar.", "Radius fillet terlalu besar untuk flens." atau "Dindingnya terlalu tebal." Perbaiki angkanya dan pilih {{ui:Tambah profil}} lagi.

### Yang didapat profil kustom

- Massa per meter dari luas × 7850 kg/m³ (ukuran katalog memakai berat yang diterbitkan).
- Profil I kustom menerima lubang, coak, pelat ujung, file NC, dan gambar kerja seperti profil I katalog.
- Batang pipih kustom berperilaku seperti pelat.
- Kanal dan tabung kustom menerima lubang; siku dan pipa bundar belum.

Anda tidak dapat mengedit atau menghapus profil kustom dari model setelah ditambahkan (gunakan {{key:Mod+Z}} segera jika Anda membuat kesalahan). Beri nama baru untuk profil yang sudah diperbaiki.

## Simpan profil untuk model baru

{{ui:Profil saya}}, di bawah formulir, adalah daftar profil kustom Anda sendiri. Daftar itu disimpan di peramban ini, di komputer ini, bukan di file model dan bukan di akun Anda.

- Profil yang ditambahkan dengan {{ui:Simpan di Profil saya}} tercentang masuk ke daftar. Setiap model baru, termasuk yang dibuka DetailCraft saat Anda memulainya, dimulai dengan semua profil itu di daftar profilnya.
- Profil yang sudah ada di model tetapi tidak ada di daftar memiliki tombol {{ui:Simpan}} di sebelahnya.
- Di model yang tidak memiliki salah satu profil Anda (misalnya file lama), pilih {{ui:Gunakan di sini}} untuk menambahkannya.
- {{ui:Keluarkan}} mengeluarkan profil dari daftar. Model yang sudah memakainya tetap memiliki salinannya sendiri.
- Model yang Anda buka menyimpan profil yang tersimpan di filenya. Membuka file tidak pernah mengubah daftar Anda.
- Nama yang sudah ada di daftar dengan dimensi berbeda ditolak: beri profil yang baru nama lain.
- Menghapus data situs peramban, atau memakai peramban atau komputer lain, dimulai dengan daftar kosong. Jendela privat tidak dapat menyimpannya; aplikasi akan memberitahukannya.
