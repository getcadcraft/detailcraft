---
title: Letak plat dan tambah profil tersuai
summary: Letakkan plat lepas mengikut ketebalan dan lebar, dan tentukan keratan I, kanal, sudut, tiub atau bar rata anda sendiri.
keywords: plat, rata, profil tersuai, profil pengguna, berparameter, keratan, bentuk, keratan rentas, pl
from: c24c3b51
---

## Letak plat

Plat diletakkan seperti rasuk: ia berjalan antara dua persilangan, dengan lebarnya merentasi dan ketebalannya ke atas.

1. Pilih {{ui:Plat}} dalam kumpulan {{ui:Letak}}, atau tekan {{key:P}}.
2. Dalam panel {{ui:Sifat}}, tetapkan {{ui:Ketebalan (mm)}} dan {{ui:Lebar (mm)}}. Lalainya ialah 20 x 200 dalam A36.
3. Tetapkan {{ui:Bahan}} dan {{ui:Putaran (°)}} jika perlu. Putaran 90 menegakkan plat di tepinya.
4. Klik dua persilangan, atau gunakan borang {{ui:Tambah mengikut grid}}.

Nama profil plat ditulis `PL<thickness>x<width>`, contohnya PL20x200. Panjangnya ialah jarak antara dua titik itu.

Untuk menukar saiz plat yang telah diletakkan, pilih plat itu dan tukar {{ui:Ketebalan (mm)}} atau {{ui:Lebar (mm)}}.

Plat yang anda letakkan ialah bahagian tersendiri (tanda p, himpunan P). Plat hujung dan plat tapak yang dibuat oleh sambungan juga ialah plat, tetapi anda menukarnya melalui sambungannya; lihat [Plat hujung](topic:end-plates).

## Tambah profil tersuai

Apabila keratan yang anda perlukan tiada dalam katalog, buat ia daripada dimensinya. Profil tersuai tergolong dalam model dan disimpan bersama model itu. Untuk menggunakannya dalam setiap model baharu, simpannya dalam {{ui:Profil saya}}, seperti yang diterangkan dalam "Simpan profil untuk model baharu" di bawah.

1. Dalam panel {{ui:Model}} di sebelah kiri, buka {{ui:Profil tersuai}}.
2. Taip {{ui:Nama}}, contohnya `W8x18-custom` atau `RHS 120x80x5`. Ia tidak boleh menjadi nama katalog atau kelihatan seperti nama plat.
3. Pilih {{ui:Bentuk}}: {{ui:Bentuk I}}, {{ui:Kanal}}, {{ui:Sudut sama}}, {{ui:Tiub segi empat tepat}}, {{ui:Tiub bulat}} atau {{ui:Bar rata}}.
4. Isi dimensi yang muncul, semuanya dalam milimeter:

| Bentuk | Dimensi |
|---|---|
| Bentuk I | Kedalaman d, lebar sayap bf, web tw, sayap tf, jejari fillet r (boleh 0) |
| Kanal | Kedalaman d, lebar sayap bf, web tw, sayap tf (bucu tegak) |
| Sudut sama | Lebar b (setiap kaki), tebal t |
| Tiub segi empat tepat | Tinggi h, lebar b, tebal t (jejari bucu luar 2t) |
| Tiub bulat | Diameter D, tebal t |
| Bar rata | Lebar b, tebal t |

5. Biarkan {{ui:Simpan dalam Profil saya}} ditanda untuk memilikinya dalam setiap model baharu (lihat di bawah), atau nyahtanda untuk menyimpannya dalam model ini sahaja.
6. Pilih {{ui:Tambah profil}}.

Bar status berkata "Profil "…" ditambah; ia terdapat dalam setiap senarai profil di bawah Tersuai." Ia muncul dalam senarai di bawah borang dan di hujung setiap senarai {{ui:Profil}}.

DetailCraft menyemak bahawa bentuk itu boleh wujud. Anda akan melihat mesej seperti "Web dan sayap tidak muat dalam kedalaman dan lebar.", "Jejari fillet terlalu besar untuk sayap." atau "Dinding terlalu tebal." Betulkan nombornya dan pilih {{ui:Tambah profil}} sekali lagi.

### Apa yang diperoleh profil tersuai

- Jisim per meter daripada luas × 7850 kg/m³ (saiz katalog menggunakan berat yang diterbitkan).
- Bentuk I tersuai menerima lubang, takuk, plat hujung, fail NC dan lukisan bengkel seperti bentuk I katalog.
- Bar rata tersuai berkelakuan seperti plat.
- Kanal dan tiub tersuai menerima lubang; sudut dan tiub bulat belum lagi.

Anda tidak boleh menyunting atau mengalih keluar profil tersuai daripada model selepas ia ditambah (gunakan {{key:Mod+Z}} serta-merta jika anda tersilap). Beri profil yang dibetulkan nama baharu.

## Simpan profil untuk model baharu

{{ui:Profil saya}}, di bawah borang, ialah senarai profil tersuai anda sendiri. Ia disimpan dalam pelayar ini, pada komputer ini, bukan dalam fail model dan bukan dalam akaun anda.

- Profil yang ditambah dengan {{ui:Simpan dalam Profil saya}} ditanda masuk ke dalam senarai. Setiap model baharu, termasuk yang DetailCraft buka apabila anda memulakannya, bermula dengan kesemuanya dalam senarai profilnya.
- Profil yang sudah ada dalam model tetapi tiada dalam senarai mempunyai butang {{ui:Simpan}} di sebelahnya.
- Dalam model yang tiada salah satu profil anda (fail lama, contohnya), pilih {{ui:Guna di sini}} untuk menambahnya.
- {{ui:Alih keluar}} mengeluarkan profil daripada senarai. Model yang sudah menggunakannya mengekalkan salinan mereka sendiri.
- Model yang anda buka mengekalkan profil yang disimpan dalam failnya. Membuka fail tidak pernah menukar senarai anda.
- Nama yang sudah ada dalam senarai dengan dimensi berbeza ditolak: beri yang baharu nama lain.
- Mengosongkan data tapak pelayar, atau menggunakan pelayar atau komputer lain, bermula dengan senarai kosong. Tetingkap persendirian tidak dapat menyimpannya; aplikasi memberitahu anda.
