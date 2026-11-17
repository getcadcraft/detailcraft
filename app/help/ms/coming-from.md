---
title: Datang daripada perisian pemerincian lain
summary: Bagaimana tabiat pakej pemerincian penuh dipetakan kepada DetailCraft, dan perbezaan yang menangkap pemerinci berpengalaman.
keywords: peralihan, berhijrah, biasa, aliran kerja, perbandingan, perbezaan, penomboran, komponen, katalog, lukisan, tabiat
from: 39639a5d
---

Jika anda memerinci dalam Tekla Structures, kebanyakan DetailCraft akan kelihatan biasa: grid, aras, profil daripada katalog, bahagian dan himpunan, sambungan, penomboran, fail NC, IFC. Skalanya sangat berbeza: Tekla Structures ialah sistem pengeluaran penuh, dan DetailCraft ialah aplikasi pelayar yang kecil dan awal yang melaksanakan beberapa tugas dari mula hingga akhir. Halaman ini memberitahu anda di mana tabiat anda terbawa dan di mana ia tidak.

:::tip
Jika tangan anda biasa dengan reben Tekla Structures, pilih gaya menu {{ui:Reben keluli}} dalam {{ui:Tetapan}} › {{ui:DetailCraft}} › {{ui:Menu, kekunci dan tetikus}}: tab Pemodelan, Pemerincian, Sunting, Lukisan, Fabrikasi dan Paparan, dan butang tengah untuk pan. Jika anda datang dari AutoCAD dan suka menaip arahan, {{ui:Lukisan klasik}} menambah baris arahan (BEAM, COLUMN, ENDPLATE, ZOOM …). Lihat [Menu, kekunci dan tetikus](topic:menus-keys-and-mouse).
:::

## Peta pantas

| Anda biasa dengan | Dalam DetailCraft |
|---|---|
| Mencipta grid dengan koordinat dalam dialog grid | {{ui:Grid}} dalam panel kiri: label dan jarak antara garis, bukan koordinat mutlak. Garis bernombor berjalan satu arah, garis berhuruf arah yang lain |
| Aras sebagai koordinat Z grid | Senarai {{ui:Aras}} berasingan, nama dan ketinggian setiap baris, digunakan dengan {{ui:Guna aras}} |
| Memilih titik di mana-mana dengan snap | Klik melekat hanya pada persilangan grid. Titik di luar grid ditaip ke dalam {{ui:Hujung (x, y, z mm)}} anggota |
| Arahan tiang, rasuk dan plat | {{ui:Tiang}} ({{key:C}}), {{ui:Rasuk}} ({{key:B}}), {{ui:Tupang}} ({{key:R}}), {{ui:Plat}} ({{key:P}}), {{ui:Tapak asas}} ({{key:F}}) |
| Dialog sifat bahagian (klik dua kali bahagian) | Klik sekali: panel {{ui:Sifat}} di sebelah kanan sentiasa aktif; tiada dialog dan tiada butang Ubah atau Guna |
| Kedudukan pada satah, tetapan putaran dan kedalaman | {{ui:Kedudukan}} (bahagian atas keluli, berpusat atau bawah pada garis) dan {{ui:Putaran (°)}}. Tiada ofset mendatar berasingan |
| Katalog profil | Senarai tetap 2,311 saiz yang diterbitkan (AISC W, S, C, L, HSS, Pipe; Eropah IPE, HEA, HEB, UPN; UK UB, UC, PFC, EA, UEA, SHS, RHS, CHS dan bahagian berdinding sejuk), serta plat berparameter dan bahagian {{ui:Profil tersuai}} anda sendiri |
| Katalog bahan | Tujuh gred dalam senarai: A992, A36, A572 Gr 50, A500 Gr C, S235, S275, S355 |
| Menggunakan komponen sambungan dan dialognya | Pilih rasuk, pilih {{ui:Plat hujung}}. Tetapan muncul dalam panel {{ui:Sifat}}. Hanya dua sambungan wujud (plat hujung ke sayap tiang, plat tapak) |
| Sambungan automatik, atau menyalin sambungan ke sambungan yang serupa | Pilih sambungan, pilih {{ui:Guna pada yang serupa (n)}} |
| Penomboran dengan siri dan nombor mula | Tiada arahan: tanda dikemas kini sendiri selepas setiap perubahan, dengan awalan tetap c, b, br, p dan C, B, BR, P |
| Dialog bolt dan lubang | Lubang ditaip mengikut muka dan kedudukan. Bolt hanya datang daripada sambungan |
| Alat potong, muat dan potong poligon | Potongan hujung (atas atau bawah, di mana-mana hujung) pada gegelang-I sahaja. Potongan ke belakang sambungan adalah automatik |
| Laporan dan templat | Tiga laporan tetap dalam tab di bahagian bawah, dan muat turun CSV |
| Penciptaan lukisan dan senarai lukisan | Satu lukisan bengkel bagi setiap tanda bahagian, semua dibuat sekaligus, dipratonton kemudian dimuat turun sebagai satu PDF atau helaian demi helaian. Tiada apa-apa disimpan atau disunting |
| Eksport fail NC | {{ui:Fail NC}}: satu fail DSTV bagi setiap tanda bahagian, gegelang-I dan plat sahaja, dizip |
| Eksport IFC | {{ui:IFC}}: IFC4 bagi keseluruhan model, dengan tetulang |
| Tetulang dalam mana-mana bahagian konkrit | Tetulang hanya dalam tapak asas pad segi empat tepat, saiz bar US, dengan jaringan bawah dan bar permulaan |
| Model disimpan dalam folder projek, berbilang pengguna | Satu fail `.detailcraft.json` yang anda muat turun. Pengguna tunggal, pada komputer anda |
| Sejarah buat asal | {{key:Mod+Z}} dan {{key:Mod+Y}}, sehingga 200 langkah, disimpan sehingga anda membuka atau memulakan model lain |

## Perbezaan yang menyebabkan masalah

### Tanda berubah dengan sendirinya

Tiada langkah penomboran. Tanda dikira semula selepas setiap perubahan, jadi ia sentiasa terkini, tetapi ia juga boleh dinomborkan semula: tambah tiang dan c3 semalam mungkin kini menjadi c4. Tiada "sejarah penomboran" untuk menyimpan tanda lama. Siapkan model, kemudian keluarkan senarai bahan, fail NC dan lukisan bengkel bersama-sama daripada satu fail yang disimpan.

### Butang tengah tetikus menzum; ia tidak menggerakkan paparan

Dalam paparan 3D: seret kiri memutar, seret kanan untuk pan, roda menzum, dan seret dengan butang tengah juga menzum. Menahan {{key:Shift}} semasa seret kiri juga memanggil pan. Roda menzum ke arah tengah paparan, bukan ke arah penunjuk. Tiada pemilihan pusat putaran: model berputar sekitar tengah paparan. Lihat [Bergerak sekitar paparan 3D](topic:navigate-3d).

### Tiang menghadap satu arah secara lalai

Pada putaran 0, sayap tiang menghadap sepanjang arah grid bernombor. Rasuk yang berjalan antara garis grid berhuruf membingkai ke dalam badan, dan plat hujung ditolak di sana ("Rasuk yang membingkai ke dalam badan tiang belum dibina lagi"). Putar tiang tersebut 90° sebelum anda menambah sambungan.

### Dongakan hanya pada garis berhuruf

{{ui:Dongakan}} melihat sepanjang garis grid berhuruf sahaja. Tiada pandangan sepanjang garis bernombor, tiada pandangan tersimpan dan tiada satah kerja. Gunakan {{ui:3D}} atau {{ui:Tambah mengikut grid}} untuk rangka pada garis bernombor.

### Pemilihan, salin dan alih

Pilih beberapa bahagian dengan {{key:Shift}}+klik atau {{key:Mod+A}}, kemudian salin, potong, tampal (pada persilangan grid, pada ofset yang ditaip, atau di tempat yang sama) dan pendua, termasuk sambungan ([Salin, tampal dan pendua](topic:copy-paste)). Tiada pemilihan tetingkap, tiada penapis pemilihan, tiada alih, cermin atau tatasusunan, dan sifat ditukar satu anggota sekali dalam panel {{ui:Sifat}}.

### Grid tidak menarik anggota bersama

Anggota mengekalkan koordinat mereka apabila anda menukar jarak grid; tiada apa-apa bergerak bersama garis grid. Tukar grid sebelum anda meletakkan keluli, atau sunting koordinat hujung setiap anggota selepas itu.

### Sambungan tidak direka bentuk

Dua sambungan itu meletakkan plat, lubang, bolt dan kimpalan daripada nombor yang anda beri. Tiada semakan reka bentuk dalam apa-apa bentuk, hanya amaran tepi dan jarak (daripada EN 1993-1-8 Jadual 3.3).

### Lubang tidak dipotong dalam paparan 3D

Lubang ditunjukkan sebagai palam gelap. Ia ialah lubang sebenar dalam fail NC, lukisan bengkel dan fail IFC. Potongan hujung dipotong dalam paparan.

### Berat ialah kasar

Berat keluli tidak menolak lubang atau potongan hujung, dan berat bolt tidak disertakan.

### Milimeter sahaja

Semuanya ditaip dan ditunjukkan dalam milimeter, walaupun untuk bentuk AISC. Nama profil mengekalkan bentuk yang diterbitkan (W12x50, HSS6x6x1/4).

### Tiada lukisan untuk diurus

Tiada senarai lukisan, tiada editor lukisan, tiada lukisan susun atur umum atau lukisan pemasangan. Lukisan bengkel dibuat apabila anda memintanya dan dimuat turun; untuk menukarnya, tukar model dan buat semula.

### Ia berjalan dalam pelayar

Menyimpan memuat turun fail. Pintasan papan kekunci yang dikekalkan oleh pelayar untuk dirinya sendiri tidak boleh digunakan. Model anda tidak pernah meninggalkan komputer anda: lihat [Ke mana fail anda pergi](common:your-files).

## Apa yang perlu diteruskan dalam perisian semasa anda

Setakat ini DetailCraft sesuai untuk rangka kecil, menyemak idea, mengajar, atau menghasilkan fail NC dan lukisan bengkel untuk kerja rasuk dan tiang yang mudah. Teruskan menggunakan sambungan yang kompleks, lukisan susun atur umum, lukisan pemasangan, projek berbilang pengguna dan apa-apa yang disenaraikan dalam [Perkara yang belum dibina](topic:not-built-yet) dalam perisian yang anda gunakan sekarang.
