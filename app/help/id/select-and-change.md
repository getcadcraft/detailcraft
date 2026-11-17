---
title: Pilih dengan jendela, pindahkan, putar, cerminkan, ubah banyak
summary: Seret jendela untuk memilih, seret part yang dipilih untuk memindahkannya, pindahkan, putar, atau cerminkan pilihan (atau salinannya), atau ubah profil, material, posisi, atau rotasi banyak batang sekaligus.
keywords: laso, pagar, seleksi bebas, seret, seret dan lepas, pindah dengan seret, snap, jendela, silang, kotak pilih, seret pilih, pilih banyak, pindahkan, putar, cerminkan, balik, salin, ubah banyak, beberapa batang, profil, material, posisi, rotasi, bervariasi, garis grid
from: 50b16f9a
---

Masing-masing dari hal ini adalah satu langkah urungkan: satu {{key:Mod+Z}} membatalkan semuanya.

## Pilih dengan jendela

- Di {{ui:Plan}} dan {{ui:Elevation}}, seret dengan tombol kiri dari tempat kosong. Di {{ui:3D}}, tahan {{key:Shift}} lalu seret (seret biasa akan memutar model).
- Seret **ke kanan** untuk jendela: ia mengambil apa yang sepenuhnya berada di dalam, digambar dengan tepi tegas.
- Seret **ke kiri** untuk jendela silang: ia mengambil semua yang disentuhnya, digambar putus-putus.
- Tahan {{key:Shift}} saat memulai seret untuk menambah ke pilihan alih-alih menggantinya.
- Denah atau tampak hanya menawarkan apa yang ditampilkannya: part yang terpotong di atas denah, atau lebih dari 1 m dari garis grid tampak, tidak dipilih.
- {{key:Esc}} saat menyeret membatalkan jendela.

### Laso

Pilih **Laso** di bawah {{ui:Dragging to select}} di [pengaturan DetailCraft](topic:settings), dan seret yang sama akan menggambar garis bebas alih-alih persegi panjang.

- Gerakan samping pertama menentukan cara pemilihannya: **ke kanan**, apa yang sepenuhnya berada di dalam (garis tegas); **ke kiri**, apa yang disentuhnya (putus-putus).
- Tekan {{key:Space}} saat menyeret untuk berpindah antara di dalam, menyentuh, dan **pagar**: garis terbuka yang mengambil apa pun yang dilintasinya (titik-titik, oranye).
- {{key:Shift}} untuk menambah dan {{key:Esc}} untuk membatalkan bekerja seperti pada jendela.

:::touch
Pada layar sentuh, satu jari menggeser denah dan tampak seperti biasa; pilih part dengan mengetuknya.
:::

Di {{ui:Plan}} dan {{ui:Elevation}}, geser dengan tombol kanan atau tengah saat alat {{ui:Select}} aktif.

## Seret part untuk memindahkannya

1. Pilih part terlebih dahulu (klik, {{key:Shift}}+klik, atau jendela).
2. Tekan salah satu part yang dipilih lalu seret. Seluruh pilihan bergerak; garis putus-putus menunjukkan tujuannya.
3. Lepaskan untuk menempatkannya. {{key:Esc}} sebelum melepas mengembalikan semuanya.

- Di {{ui:3D}} dan {{ui:Plan}}, part bergerak melintasi level. Tahan {{key:Mod}} saat memulai seret di {{ui:3D}} untuk memindahkannya naik dan turun.
- Di {{ui:Elevation}}, part bergerak dalam tampak: sepanjang garis grid dan naik turun.
- Part yang Anda pegang menempel pada perpotongan grid saat ujungnya berada dalam beberapa piksel darinya (perpotongan menyala dan bilah status menyebut namanya). Di tempat lain, pergerakan berjalan dalam langkah 10 mm.
- Menekan part yang tidak dipilih tetap memutar atau menggeser tampilan, sehingga seret tidak pernah memindahkan sesuatu secara tidak sengaja.
- Seret ini adalah satu langkah urungkan, seperti {{ui:Move}}. Sambungan mengikuti batangnya.

## Ubah properti pada banyak batang

Pilih dua batang atau lebih. Di bawah **Ubah pada semuanya** di panel {{ui:Properties}}:

- {{ui:Profile}}, {{ui:Position}}: untuk balok, kolom, dan bresing di antaranya.
- {{ui:Plate thickness (mm)}} dan {{ui:Plate width (mm)}}: untuk pelat.
- {{ui:Material}} dan {{ui:Rotation (°)}}: untuk semuanya.

Kolom menampilkan **Bervariasi** saat batang tidak sama. Pilih atau ketik nilai, dan setiap batang yang berlaku akan menerimanya; bilah status menyebutkan berapa yang berubah dan berapa yang mempertahankan nilainya sendiri.

Kolom angka di panel {{ui:Properties}} juga menerima perhitungan: `2*450`, `4500/3`, `(1200-2*25)/2`, `6-1/2`. Perhitungan yang tidak dapat dibaca ditolak, dan bilah status menunjukkan letak kesalahannya.

## Pindahkan, putar, atau cerminkan

Pilih batang dan fondasi (satu saja juga bisa), lalu gunakan **Pindahkan, putar, cerminkan** di panel {{ui:Properties}}. Sambungan tidak dipindahkan sendiri: mereka mengikuti batangnya. Jika Anda memindahkan balok tetapi tidak kolomnya, bilah status menyebutkan berapa sambungan yang kini menghubungkan batang yang dipindahkan dengan yang tetap, dan [Masalah](topic:troubleshooting) menyebutkan jika sambungan tersebut tidak lagi pas.

- **Pindahkan:** ketik x, y, dan z dalam milimeter lalu pilih {{ui:Move}}. Atau pilih {{ui:Pick two points}} (atau tekan {{key:M}}): klik perpotongan grid asal, lalu tujuannya. Garis putus-putus mengikuti penunjuk.
- **Putar di denah:** ketik sudutnya (berlawanan arah jarum jam, dilihat dari atas) dan pilih poros putarnya: pusat pilihan, atau perpotongan grid. Kolom ikut berputar bersama bingkai.
- **Cerminkan:** pilih garis grid. Bayangan cermin adalah profil yang sama yang diputar ke arah sebaliknya: profil I mempertahankan sayapnya, kanal menghadap arah sebaliknya (sisi atas dan bawahnya bertukar), dan lubang serta coak ikut bersama part.
- Centang **Pertahankan yang asli (buat salinan)** untuk membiarkan pilihan tetap di tempatnya dan memindahkan, memutar, atau mencerminkan salinan. Sambungannya ikut serta saat {{ui:Copy end plates and base plates with their members}} aktif di [pengaturan DetailCraft](topic:settings).

Memutar berporos pada garis vertikal dan mencerminkan berada pada bidang vertikal, sehingga level tetap datar dan fondasi tetap tegak.
