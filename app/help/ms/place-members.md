---
title: Letak tiang, rasuk dan tupang
summary: Pilih profil, bahan dan kedudukan, kemudian klik persilangan grid atau taip koordinatnya untuk meletakkan anggota keluli.
keywords: tiang, rasuk, tupang, anggota, letak, profil, bahan, putaran, kedudukan, ofset, selit, tambah mengikut grid
from: d6db0dc1
---

Anggota diletakkan pada persilangan grid: tiang pada satu persilangan, rasuk atau tupang antara dua. Tetapkan [grid dan aras](topic:grids-and-levels) dahulu.

## Pilih alat dan pilihannya

1. Pilih {{ui:Tiang}} ({{key:C}}), {{ui:Rasuk}} ({{key:B}}) atau {{ui:Tupang}} ({{key:R}}) dalam kumpulan {{ui:Letak}}.
2. Panel {{ui:Sifat}} di sebelah kanan menjadi "Letak tiang" (atau rasuk, atau tupang) dan menunjukkan pilihan untuk anggota seterusnya:
   - {{ui:Profil}}: pilih daripada senarai. Saiz dikumpulkan mengikut katalog (bentuk W, Kanal, Sudut, HSS, IPE, HEA, HEB, UB, UC, PFC, EA, UEA, SHS, RHS, CHS, dan profil tersuai anda). Lihat [Katalog profil](topic:profile-catalog).
   - {{ui:Bahan}}: A992, A36, A572 Gr 50, A500 Gr C, S235, S275 atau S355.
   - {{ui:Kedudukan}}: di mana keratan terletak pada garisan antara dua titik: {{ui:Bahagian atas keluli pada garisan}}, {{ui:Berpusat pada garisan}} atau {{ui:Bahagian bawah pada garisan}}.
   - {{ui:Putaran (°)}}: memusingkan keratan mengelilingi paksi anggota itu sendiri.
   - {{ui:Hingga}} (tiang sahaja): {{ui:Aras seterusnya ke atas}}, atau nama aras.
3. Di bawah pilihan, kotak {{ui:Profil}} menyenaraikan dimensi keratan yang dipilih, luas, jisim per meter dan katalog ia datang.

Nilai lalai ialah W12x50 dalam A992 bagi tiang (berpusat), W16x26 dalam A992 bagi rasuk (bahagian atas keluli pada garisan) dan HSS6x6x1/4 dalam A500 Gr C bagi tupang (berpusat). Pilihan kekal ditetapkan sehingga anda menukarnya.

## Letak dengan klik

### Tiang

1. Pilih {{ui:Pelan}} dan pilih aras tempat tiang bermula.
2. Pilih {{ui:Tiang}}.
3. Gerakkan penunjuk berdekatan persilangan. Titik terdekat menyala dan bar status menamakannya.
4. Klik. Tiang berjalan dari aras itu ke aras seterusnya (atau ke aras {{ui:Hingga}}). Bar status menyatakan, contohnya, "Tiang W12x50 pada A/1, Aras 1 hingga Aras 2."
5. Teruskan mengklik untuk meletakkan lebih banyak. Tekan {{key:Esc}} apabila selesai.

Jika tiada aras di atas aras yang anda klik, bar status berkata "Tiada aras di atas Aras 2 untuk tiang dicapai. Tambah aras dahulu."

### Rasuk

1. Pilih {{ui:Pelan}} dan pilih aras rasuk.
2. Pilih {{ui:Rasuk}}.
3. Klik persilangan pertama. Bar status berkata "Dari A/1 pada Aras 2. Sekarang klik hujung yang satu lagi (Esc membatalkan)." Garis putus mengikut penunjuk.
4. Klik persilangan kedua. Rasuk muncul.
5. Klik lagi untuk memulakan rasuk seterusnya, atau tekan {{key:Esc}}.

{{key:Esc}} selepas klik pertama membatalkan titik itu sahaja; Esc kedua meletakkan alat itu ke tepi.

### Tupang

Tupang berjalan antara dua persilangan pada aras yang berbeza, jadi ia paling mudah dibuat dalam {{ui:Dongakan}}.

1. Pilih {{ui:Dongakan}} dan pilih garisan grid berhuruf tempat tupang berada.
2. Pilih {{ui:Tupang}}.
3. Klik hujung bawah, kemudian hujung atas.

Dongakan hanya wujud untuk garisan grid berhuruf. Bagi tupang dalam rangka sepanjang garisan bernombor (dari A ke B), gunakan {{ui:3D}} atau borang {{ui:Tambah mengikut grid}} di bawah.

:::touch
Pada skrin sentuh, ketik dekat persilangan: ketikan memilih titik terdekat dalam jarak pendek dan tidak berbuat apa-apa jika tiada titik berdekatan. Tiada sorotan sebelum anda ketik, jadi semak mesej bar status selepas setiap ketikan. Seretan satu jari memutar atau menggerakkan paparan dan bukannya meletakkan.
:::

## Letak mengikut grid, tanpa klik

Setiap alat peletakan mempunyai borang {{ui:Tambah mengikut grid}} di bahagian bawah panel {{ui:Sifat}}. Ia berfungsi dengan papan kekunci sahaja dan tidak memerlukan paparan 3D.

1. Pilih alat, contohnya {{ui:Rasuk}}.
2. Dalam {{ui:Tambah mengikut grid}}, pilih {{ui:Dari grid (huruf)}}, {{ui:Dari grid (nombor)}} dan {{ui:Dari aras}}.
3. Pilih {{ui:Ke grid (huruf)}}, {{ui:Ke grid (nombor)}} dan {{ui:Ke aras}}.
4. Pilih {{ui:Tambah}}.

Bagi tiang atau asas, borang hanya mempunyai satu titik: {{ui:Grid (huruf)}}, {{ui:Grid (nombor)}} dan {{ui:Aras}}.

## Ubah anggota selepas meletakkannya

1. Tekan {{key:Esc}} (atau pilih {{ui:Pilih}}, {{key:V}}) dan klik anggota itu.
2. Dalam panel {{ui:Sifat}}, tukar {{ui:Nama}}, {{ui:Profil}}, {{ui:Bahan}}, {{ui:Kedudukan}} atau {{ui:Putaran (°)}}.
3. Untuk mengalihkannya, sunting x, y dan z bagi {{ui:Mula}} atau {{ui:Hujung}} di bawah {{ui:Hujung (x, y, z mm)}}. Nama grid bagi setiap hujung ditunjukkan di bawahnya, atau koordinatnya apabila ia berada di luar grid.

Setiap perubahan ialah satu langkah buat asal. Di bawah medan, anda melihat {{ui:Tanda bahagian}}, {{ui:Himpunan}}, {{ui:Panjang potongan}}, {{ui:Berat}} (kasar: lubang dan takuk tidak ditolak) dan katalog mana profil itu datang.

Anggota belum boleh diseret atau disusun tatasusunan. Untuk membuat anggota lain yang serupa, salin dan tampal, atau pendua ({{key:Mod+D}}): lihat [Salin, tampal dan pendua](topic:copy-paste).

## Padam anggota

Pilih anggota dan tekan {{key:Delete}} atau {{key:Backspace}}, atau pilih {{ui:Padam}}. Sambungan padanya turut dipadam. {{key:Mod+Z}} mengembalikan semuanya.

## Perkara yang perlu diketahui

- **Arah tiang menghadap.** Pada {{ui:Putaran (°)}} 0, sayap tiang menghadap sepanjang x, ke arah garisan grid bernombor berdekatan. Rasuk dari grid 1 ke grid 2 dicantum pada sayap; rasuk dari A ke B dicantum pada web. Plat hujung hanya dibina pada sayap, jadi jika rasuk anda berjalan dari A ke B, beri tiang-tiang itu putaran 90.
- **Rasuk pada aras tergantung di bawahnya** dengan {{ui:Bahagian atas keluli pada garisan}} sebagai lalai. Pilih {{ui:Berpusat pada garisan}} jika aras anda ialah garis tengah anggota.
- **Tiang berjalan aras ke aras.** Bagi tiang melalui dua tingkat, tetapkan {{ui:Hingga}} ke aras yang lebih tinggi.
- **Rasuk condong** dibenarkan (pilih hujung pada aras yang berbeza), tetapi plat hujung belum dibina padanya.

Seterusnya: [Sambungkan rasuk ke tiang dengan plat hujung](topic:end-plates).
