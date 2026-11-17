---
title: Tambah lubang dan coak
summary: Ketik lubang pada badan, sayap, dan pelat, serta coak sayap di ujung balok, diukur dari ujung potong bagian tersebut.
keywords: lubang, lubang, lubang baut, coak, takik, potong, coping, bor, tekan, lubang badan, lubang sayap
from: 33d12398
---

Lubang dan coak diketik berdasarkan posisi. Keduanya termasuk dalam batang dan ikut berpindah bersamanya.

Lubang yang dibuat oleh sambungan (pelat ujung, pelat dasar) ditambahkan untuk Anda; Anda tidak perlu mengetiknya. Lubang tersebut tercantum sebagai "… lubang dari sambungan (edit sambungan)".

## Dari mana posisi diukur

- **x** berjalan sepanjang bagian dari **awal potongnya**: ujung awal setelah sambungan mana pun memotongnya kembali. Jadi x = 0 adalah ujung baja yang sebenarnya, bukan titik grid.
- **y** diukur melintang muka dari pusat penampang:
   - pada **badan**: ke atas (positif) atau ke bawah dari tengah tinggi;
   - pada **sayap** atau **pelat**: melintang lebar, dari garis tengah.
- Awal batang adalah titik pertama yang Anda klik saat memasangnya. Baris {{ui:Ujung (x, y, z mm)}} menunjukkan ujung mana yang mana.

## Menambah lubang

1. Pilih batang.
2. Di kotak {{ui:Lubang}} pada panel {{ui:Properti}}, pilih {{ui:Muka}}: {{ui:Badan}}, {{ui:Sayap atas}}, atau {{ui:Sayap bawah}} (untuk bentuk I, kanal, atau tabung persegi), atau {{ui:Muka pelat}} (untuk pelat).
3. Ketik {{ui:x memanjang (mm)}}, {{ui:y melintang (mm)}}, dan {{ui:Diameter (mm)}}. Formulir dimulai dari x 100, y 0, diameter 22.
4. Pilih {{ui:Tambah lubang}}.

Bilah status menampilkan "Lubang ditambahkan. x dari awal potong; y dari pusat penampang (badan: ke atas, sayap/pelat: melintang)." Lubang muncul di daftar, dan di tampilan sebagai sumbat gelap menembus muka.

Untuk menghapus lubang, pilih × di sebelahnya pada daftar.

Siku dan tabung bulat belum dapat menerima lubang: kotak {{ui:Lubang}} mereka menyatakan hal itu.

:::note
Di tampilan 3D, lubang digambar sebagai sumbat gelap, bukan dipotong menembus baja. Lubang tersebut adalah lubang nyata pada berkas NC, gambar kerja, dan ekspor IFC.
:::

Lubang yang x-nya berada di luar salah satu ujung bagian akan tampil di tab {{ui:Masalah}} sebagai "lubang berada di luar ujung bagian".

## Menambah coak

Coak hanya untuk bentuk I: coak memotong sayap atas atau bawah (dan kedalaman badan tersebut) di satu ujung, sehingga balok melewati batang lain.

1. Pilih batang berbentuk I.
2. Di kotak {{ui:Coak}}, pilih {{ui:Akhir}} ({{ui:Awal}} atau {{ui:Akhir}}) dan {{ui:Sisi}} ({{ui:Atas}} atau {{ui:Bawah}}).
3. Ketik {{ui:Panjang (mm)}} (sepanjang balok dari ujung itu) dan {{ui:Kedalaman (mm)}} (ke bawah dari atas, atau ke atas dari bawah). Formulir dimulai dari 100 x 40.
4. Pilih {{ui:Tambah coak}}.

Tampilan menunjukkan coak yang terpotong dari baja. Daftar tertulis, misalnya, "Atas di awal: 100 x 40". Hapus dengan tanda ×-nya.

Coak berbentuk persegi: belum ada jari-jari pada sudut dalam.

## Cara lubang dan coak memengaruhi tanda

Dua bagian hanya mendapat tanda bagian yang sama jika lubang dan coaknya cocok dalam batas 1 mm, dengan memperhitungkan bagian yang dibalik. Menambah lubang pada salah satu balok dalam satu kelompok akan memberinya tanda baru. Lihat [Aturan tanda](topic:mark-rules).
