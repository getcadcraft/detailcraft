---
title: Periksa benturan
summary: Temukan batang, pelat, dan fondasi yang saling masuk, dengan mengecualikan bagian yang memang dimaksudkan sambungan untuk bertemu, dan buka setiap benturan.
keywords: benturan, pemeriksaan benturan, tabrakan, interferensi, tumpang tindih, berpotongan, benturan keras, koordinasi, periksa model
from: 04d72d3b
---

Buka tab {{ui:Benturan}} di bawah tampilan dan pilih {{ui:Periksa sekarang}}. DetailCraft memeriksa setiap pasangan bagian pada fase yang ditampilkan: baja ke baja, dan baja ke fondasi. Tab mencantumkan setiap benturan, yang terdalam lebih dahulu, dengan:

- kedua bagian, menurut tanda bagian (atau tanda fondasi) dan profilnya;
- **Tumpang tindih (mm)**: seberapa jauh sebuah titik pada satu bagian berada di dalam bagian yang lain, sampai muka terdekat;
- **Dekat**: perpotongan grid dan level tempat benturan berada, atau koordinatnya;
- {{ui:Tampilkan}}: memilih kedua bagian dan membawa tempat itu ke tengah tampilan.

Judul tab menunjukkan berapa banyak benturan yang ditemukan pemeriksaan terakhir. Pemeriksaan tidak berjalan sendiri: setelah Anda mengubah model, daftar akan memberi tahu hal itu, dan {{ui:Periksa sekarang}} menjalankannya lagi.

## Yang bukan benturan

- Bagian yang hanya bersentuhan: pelat yang menempel pada flens, pelat dasar di atas fondasinya, dua batang ujung-ke-ujung. **Toleransi (mm)** menetapkan seberapa jauh dua bagian boleh saling masuk sebelum dihitung (awalnya 1 mm; hingga 50).
- Bagian yang disambung oleh sebuah sambungan: pelat ujung dengan balok dan dengan flens kolom tempat ia dibaut, balok dan kolom pada sambungan itu, pelat dasar dengan kolomnya, pelat sambungan lewatan dengan kedua potongannya, bresing dengan pelat buhulnya (celah tabung tidak dipotong di model). Sambungan memang dimaksudkan untuk bertemu.
- Lug geser pelat dasar di dalam fondasi di bawahnya (ia berada di kantong grout).
- Baut dan batang angkur (mereka melewati lubang), dan tulangan.
- Bagian di fase yang tersembunyi. Lihat [Fase](topic:phases).

Bresing atau balok yang masuk ke kolom tanpa sambungan di antara keduanya **adalah** benturan: sambungan itu masih memerlukan sambungan. Bresing pada bingkai contoh menunjukkan hal ini: ia tidak punya pelat buhul. Pilih bresing itu lalu pilih {{ui:Pelat buhul}} ([Pelat buhul bresing](topic:brace-gussets)) dan benturannya akan hilang.

## Perlu diketahui

- Tumpang tindih mengukur kedalaman ke dalam material, jadi batang yang masuk ke badan atau flens kolom yang tipis hanya menunjukkan beberapa milimeter meskipun masuknya jauh.
- Bagian diperiksa seperti yang dipotong: takikan dan potongan mundur balok pada pelat ujungnya diperhitungkan. Lubang tidak.
