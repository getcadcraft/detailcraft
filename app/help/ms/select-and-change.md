---
title: Pilih dengan tetingkap, alih, putar, cermin, tukar banyak
summary: Seret tetingkap untuk memilih, seret bahagian yang dipilih untuk mengalihkannya, alih, putar atau cermin pilihan (atau salinannya), atau tukar profil, bahan, kedudukan atau putaran bagi banyak anggota sekali gus.
keywords: lasso, pagar, pemilihan bebas tangan, seret, seret dan lepas, alih dengan seret, snap, tetingkap, silang, pilih kotak, pilih seret, pilih banyak, alih, putar, cermin, balik, salin, tukar banyak, beberapa anggota, profil, bahan, kedudukan, putaran, pelbagai, garis grid
from: 50b16f9a
---

Setiap satu daripada ini ialah satu langkah buat asal: satu {{key:Mod+Z}} membatalkan semuanya.

## Pilih dengan tetingkap

- Dalam {{ui:Plan}} dan {{ui:Elevation}}, seret dengan butang kiri dari tempat kosong. Dalam {{ui:3D}}, tahan {{key:Shift}} dan seret (seretan biasa memusingkan model).
- Seret **ke kanan** untuk tetingkap: ia mengambil apa yang berada sepenuhnya di dalam, dilukis dengan tepi pepejal.
- Seret **ke kiri** untuk tetingkap silang: ia mengambil apa sahaja yang disentuhnya, dilukis putus-putus.
- Tahan {{key:Shift}} semasa anda mula menyeret untuk menambah pada pilihan dan bukan menggantikannya.
- Pelan atau dongakan hanya menawarkan apa yang ditunjukkannya: bahagian yang dipotong di atas pelan, atau lebih 1 m dari garis grid dongakan, tidak dipilih.
- {{key:Esc}} semasa menyeret melepaskan tetingkap.

### Lasso

Pilih **Lasso** di bawah {{ui:Seret untuk memilih}} dalam [tetapan DetailCraft](topic:settings), dan seretan yang sama akan melukis garisan bebas tangan dan bukan segi empat tepat.

- Gerakan sisi pertama menentukan cara ia memilih: **ke kanan**, apa yang berada sepenuhnya di dalam (garisan pepejal); **ke kiri**, apa yang disentuhnya (putus-putus).
- Tekan {{key:Space}} semasa menyeret untuk bertukar antara dalam, sentuh dan **pagar**: garisan terbuka yang mengambil apa sahaja yang dilintasinya (titik-titik, oren).
- {{key:Shift}} untuk menambah dan {{key:Esc}} untuk melepaskannya berfungsi seperti tetingkap.

:::touch
Pada skrin sentuh, satu jari menggerakkan pelan dan dongakan seperti sebelum ini; pilih bahagian dengan mengetuknya.
:::

Dalam {{ui:Plan}} dan {{ui:Elevation}}, gerakkan (pan) paparan dengan butang kanan atau tengah semasa alat {{ui:Pilih}} dihidupkan.

## Seret bahagian untuk mengalihkannya

1. Pilih bahagian dahulu (klik, {{key:Shift}}+klik atau tetingkap).
2. Tekan pada salah satu bahagian yang dipilih dan seret. Keseluruhan pilihan bergerak; garis luar putus-putus menunjukkan ke mana ia pergi.
3. Lepaskan untuk meletakkannya. {{key:Esc}} sebelum anda melepaskan akan meletakkan semuanya semula.

- Dalam {{ui:3D}} dan {{ui:Plan}}, bahagian bergerak merentasi aras. Tahan {{key:Mod}} semasa anda mula menyeret dalam {{ui:3D}} untuk menggerakkannya naik dan turun.
- Dalam {{ui:Elevation}} ia bergerak dalam dongakan: sepanjang garis grid dan naik turun.
- Bahagian yang anda pegang melekat pada persilangan grid apabila hujungnya datang dalam beberapa piksel daripadanya (persilangan menyala dan bar status menamakannya). Di tempat lain, pergerakan berlaku dalam langkah 10 mm.
- Menekan pada bahagian yang tidak dipilih masih memusing atau menggerakkan paparan, jadi seretan tidak pernah mengalihkan sesuatu secara tidak sengaja.
- Seretan ialah satu langkah buat asal, seperti {{ui:Alih}}. Sambungan mengikut anggotanya.

## Tukar sifat pada banyak anggota

Pilih dua atau lebih anggota. Di bawah **Tukar pada semua** dalam panel {{ui:Sifat}}:

- {{ui:Profile}}, {{ui:Position}}: untuk rasuk, tiang dan tupang antara mereka.
- {{ui:Plate thickness (mm)}} dan {{ui:Plate width (mm)}}: untuk plat.
- {{ui:Material}} dan {{ui:Rotation (°)}}: untuk semua.

Medan menunjukkan **Pelbagai** apabila anggota tidak sepakat. Pilih atau taip nilai dan setiap anggota yang terpakai akan mengambilnya; bar status menyatakan berapa banyak yang berubah dan berapa banyak yang mengekalkan nilai sendiri.

Medan nombor dalam panel {{ui:Sifat}} juga menerima pengiraan: `2*450`, `4500/3`, `(1200-2*25)/2`, `6-1/2`. Pengiraan yang tidak dapat dibaca ditolak, dan bar status menyatakan di mana ia salah.

## Alih, putar atau cermin

Pilih anggota dan tapak asas (satu pun berfungsi), kemudian guna **Alih, putar, cermin** dalam panel {{ui:Sifat}}. Sambungan tidak dialihkan sendiri: ia mengikut anggotanya. Jika anda mengalihkan rasuk tetapi bukan tiangnya, bar status menyatakan berapa sambungan kini menyambungkan anggota yang dialihkan kepada yang kekal, dan [Masalah](topic:troubleshooting) memberitahu jika ia tidak lagi sesuai.

- **Alih:** taip x, y dan z dalam milimeter dan pilih {{ui:Alih}}. Atau pilih {{ui:Pilih dua titik}} (atau tekan {{key:M}}): klik persilangan grid untuk bergerak dari, kemudian yang untuk bergerak ke. Garis luar putus-putus mengikut penunjuk.
- **Putar dalam pelan:** taip sudut (lawan jam, dilihat dari atas) dan pilih apa yang hendak dipusingkan: tengah pilihan, atau persilangan grid. Tiang berpusing bersama bingkai.
- **Cermin:** pilih garis grid. Imej cermin ialah profil yang sama dipusingkan ke arah lain: bentuk-I mengekalkan flangenya, saluran menghadap arah lain (bahagian atas dan bawahnya bertukar), dan lubang serta potongan hujung mengikut bahagian.
- Tandakan **Simpan yang asal (buat salinan)** untuk membiarkan pilihan di tempatnya dan mengalihkan, memutar atau mencermin salinan. Sambungannya turut sama apabila {{ui:Salin plat hujung dan plat tapak bersama anggotanya}} dihidupkan dalam [tetapan DetailCraft](topic:settings).

Memutar berlaku sekitar garis menegak dan mencermin berlaku dalam satah menegak, jadi aras kekal rata dan tapak asas kekal tegak.
