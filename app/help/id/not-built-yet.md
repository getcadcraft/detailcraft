---
title: Yang belum dibuat
summary: Apa yang belum dapat dilakukan build DetailCraft awal ini, dan apa yang bisa dilakukan sebagai gantinya saat ini.
keywords: batasan, keterbatasan, hilang, peta jalan, tidak didukung, akan datang, direncanakan, solusi sementara, todo
from: ea411885
---

DetailCraft adalah build awal. Halaman ini mencantumkan hal-hal yang belum dapat dilakukannya, agar Anda dapat merencanakannya. Tidak ada yang tercantum di sini berupa janji tanggal.

## Pemodelan

| Belum | Sebagai gantinya, saat ini |
|---|---|
| Menyeret salah satu ujung batang (meregangkannya) | Edit {{ui:Awal}} atau {{ui:Akhir}} di bawah {{ui:Ujung (x, y, z mm)}} pada panel {{ui:Properti}} |
| Filter pilihan (hanya balok, hanya satu profil) | Seret jendela, lalu {{key:Shift}}+klik untuk mengeluarkan part |
| Array pilihan; memutar pada sumbu miring; mencerminkan pada bidang miring | Salin dan tempel dengan offset, atau {{ui:Duplikat}}; putar dan cerminkan berfungsi pada denah ([Pilih dengan jendela, pindahkan, putar, cerminkan, ubah banyak sekaligus](topic:select-and-change)) |
| Titik di luar grid saat mengklik | Letakkan pada grid, lalu ketik koordinat ujungnya |
| Tampak sepanjang garis grid bernomor; tampilan tersimpan; bidang kerja | Gunakan {{ui:3D}}, atau {{ui:Tambah berdasarkan grid}} |
| Lubang digambar sebagai potongan nyata di tampilan 3D | Lubang tampak sebagai sumbat gelap; lubang itu nyata di setiap ekspor |
| Coak membulat atau miring, potongan lain, dan aksesori | Coak persegi pada profil I saja |
| Lubang yang Anda tambahkan pada siku dan pipa bundar | Lubang siku hanya berasal dari [pelat buhul bresing](topic:brace-gussets) |
| Input imperial | Ketik milimeter (25.4 per inci) |
| Mengedit atau menghapus profil kustom | Tambahkan profil yang sudah diperbaiki dengan nama baru |

## Tangga

| Belum | Sebagai gantinya, saat ini |
|---|---|
| Pegangan tangan, bordes, pelat ujung, injakan kisi, tangga spiral dan tangga dog-leg | Hanya anak tangga lurus; lihat [Tangga](topic:stairs) |
| Potongan ujung ibu tangga terhadap lantai | Ibu tangga dipotong persegi; potong di perangkat lunak bengkel Anda |

## Sambungan

DetailCraft membuat enam sambungan: pelat buhul bresing (lihat [Pelat buhul bresing](topic:brace-gussets)); sambungan baut antara dua potongan dari satu profil I (lihat [Sambungan lewatan](topic:splices)); sambungan miring antara dua profil I yang bertemu pada sudut, hanya dipotong atau dengan pelat ujung yang dibaut (lihat [Sambungan miring](topic:mitres)); pelat ujung baut rata atau diperpanjang dari balok level, profil I tegak ke flens atau badan kolom profil I; pelat geser dari balok (persegi, miring, atau berlereng) ke flens atau badan kolom; dan pelat dasar kolom dengan empat baut angkur.

| Belum | Sebagai gantinya, saat ini |
|---|---|
| Pelat ujung miring atau berlereng | Gunakan [pelat geser](topic:shear-tabs), yang menerima balok miring dan berlereng |
| Siku klip; pelat pengisi sambungan lewatan dan sambungan antarukuran berbeda; pelat buhul sudut yang dilas ke balok dan kolom; pelat buhul bersudut miring | Detail di perangkat lunak lain, atau tambahkan pelat dan lubang secara manual sebagai part lepas; lihat [Sambungan lewatan](topic:splices), [Pelat buhul bresing](topic:brace-gussets) |
| Pengaku dasar bersudut miring atau meruncing; lubang grout; kantong fondasi untuk shear lug | Pengaku persegi; lihat [Pelat dasar](topic:base-plates) |
| Haunch; sambungan miring las dengan las tumpul; pengaku sejajar dengan flens batang lain | [Sambungan miring](topic:mitres) dengan pelat ujung dan pengaku badan, atau sambungan miring polos; tambahkan pelat lain secara manual sebagai part lepas |
| Pemeriksaan desain sambungan (kekuatan) | Periksa sambungan dengan perhitungan insinyur Anda; DetailCraft hanya memberi peringatan tentang jarak tepi dan spasi |
| Lubang slot | Lubang bundar saja |

## Analisis

| Belum | Sebagai gantinya, saat ini |
|---|---|
| Pemeriksaan desain selain profil I baja: tabung, siku, kanal, bentuk las, part ramping atau kelas 4, torsi, sambungan; beton: kelangsingan goyang, torsi, detail seismik, pelat lantai dan dinding | Tab {{ui:Analisis}} memeriksa profil I baja sesuai AISC 360 atau EN 1993-1-1 ([Periksa batang baja sesuai standar desain](topic:design-checks)); sisanya ditandai "tidak diperiksa"; seorang insinyur meninjau semuanya |
| Analisis tekuk, getaran | Orde kedua hanya P-Delta (elastis); tidak ada analisis tekuk (modal, spektrum respons, riwayat waktu, dan pushover ada di tab Analisis) |
| Pemeriksaan desain yang telah ditinjau insinyur | Sampai saat itu hanya sebagai bantuan: periksa dua atau tiga batang secara manual atau di perangkat lunak insinyur Anda sendiri sebelum mengandalkannya |
| Beban lantai, angin, dan salju yang dihitung otomatis dari luas | Masukkan beban pada batang secara manual, dalam kN/m atau kN |
| Offset batang, sambungan eksentris, bresing tarik-saja, pelat dan fondasi dalam rangka | Batang dianalisis pada garis kerjanya; bresing memikul tarik dan tekan |

## Tulangan

| Belum | Sebagai gantinya, saat ini |
|---|---|
| Kolom bundar, spiral, balok miring atau melengkung, pelat selain persegi, dinding yang tidak lurus | Balok, kolom, pelat, dan dinding persegi ([Detail beton bertulang](topic:reinforced-concrete)) |
| Batang dibengkokkan ke sambungan lewatan, sambungan lewatan berselang-seling, sambungan lewatan di lokasi pilihan Anda | Sambungan lewatan pada langkah yang sama, setiap batang dilewatkan pada satu potongan (ACI Class B, EN α6 = 1.5) |
| Batang sudut pada bukaan, tulangan geser tembus, detail seismik (ACI 318-19 pasal 18) | Trimmer di setiap sisi bukaan; periksa sisanya sendiri |
| Membaca file milik program desain struktur | Ekspor IFC dari program itu: IfcReinforcingBar-nya masuk sebagai batang ([Batang dari file IFC](topic:reinforced-concrete#bars-from-an-ifc-file)) |
| Kode bentuk selain lurus, satu tekukan, dan U; tipe ACI 315 untuk batang lurus dan berkait satu | Tiga bentuk tercetak sebagai BS 8666 00, 11, 21 atau ACI Tipe 2; lihat [Referensi tulangan](topic:rebar-reference) |
| Batang metrik selain BS 4449 H8–H40 (misalnya CSA 10M–35M) | Nama soft-metric ASTM #10–#36, atau batang BS |

## Gambar dan ekspor

| Belum | Sebagai gantinya, saat ini |
|---|---|
| Lembar potret, A0, dan lembar dengan ukuran Anda sendiri; tampilan denah umum pada grid miring | Lembar lanskap A4 hingga A1 dan ANSI B hingga D ([Gambar susunan umum dan rakitan](topic:drawings)); skalakan PDF untuk mencetak pada ukuran lain |
| Simbol las pada gambar kerja satu part; simbol selain fillet | Gambar rakitan memuat simbol las fillet; gambar kerja menuliskan las sebagai teks |
| Mengedit gambar di aplikasi | Ubah model dan buat ulang gambar; tandai PDF di aplikasi PDF seperti MarkupCraft |
| Gambar sebagai DWG dengan objek dimensi, atau model dalam skala penuh di ruang model dengan lembar sebagai layout | Setiap lembar adalah DWG atau DXF ukuran penuh dari kertas, dengan dimensi sebagai garis dan angka ([Gambar susunan umum dan rakitan](topic:drawings#download)) |
| Lubang NC pada pipa bundar, coak pada siku dan pipa bundar dalam file NC | Tidak ditulis; lihat [Isian file NC](topic:nc1-fields) |
| Miring tepi, penandaan, dan kontur dalam dalam file NC | Belum ada saat ini |
| Lubang baut, baut, las, dan fondasi dalam ekspor USD | Ada di keluaran IFC, NC, dan BOM; lihat [Ekspor model baja sebagai USD](topic:usd) |
| Memasukkan sambungan, fondasi, lubang slot atau persegi, dan lubang pada pipa bundar dari file IFC | {{ui:Impor IFC}} memasukkan balok, kolom, batang, pelat, grid, level, lubang bundar, coak, baut, dan batang tulangan, dan laporannya mencantumkan apa yang ditinggalkan |
| Tata letak laporan kustom | Tiga file CSV |

## Panel

| Belum | Sebagai gantinya, saat ini |
|---|---|
| Memindahkan laporan di bagian bawah ({{ui:Masalah}}, {{ui:Daftar material}}, {{ui:Daftar pembengkokan}}) | Hanya panel {{ui:Model}} dan {{ui:Properti}} yang dapat dipindahkan. Lihat [Atur panel](common:arrange-panels) |

## Bekerja bersama dan menyimpan

| Belum | Sebagai gantinya, saat ini |
|---|---|
| Penyimpanan cloud dan sinkronisasi antarkomputer | Simpan file `.detailcraft.json` dan bagikan seperti file biasa. Penyimpanan cloud belum tersedia |
| Kursor orang lain dan label "sedang menyunting" dalam sesi Live TeamWork; grid, level, dan fase digabung item per item | Perubahan tetap digabung (grid, level, dan fase digabung utuh, perubahan yang lebih baru menang); lihat [Susun satu struktur bersama, secara langsung](topic:work-live) |
| Tautan undangan ke sesi Live TeamWork melalui internet | Bergabung dengan kode pendek di jaringan yang sama |

## Platform

- DetailCraft dibuat untuk layar desktop, laptop, atau tablet. Aplikasi ini juga berfungsi di ponsel: model tetap memakai layar dan panel, dan laporan terbuka sebagai lembar dari bilah di bagian bawah, tetapi ruang untuk panel sangat terbatas.
- Penggunaan offline memerlukan DetailCraft yang sudah disimpan untuk offline terlebih dahulu, dengan {{ui:Simpan untuk offline}} di bilah aplikasi; setelah tertulis {{ui:Siap offline}}, semuanya dalam build ini berfungsi tanpa koneksi. Lihat [Bekerja offline](common:offline).

Jika salah satu kekurangan ini menghambat pekerjaan Anda, sampaikan lewat [halaman dukungan](https://getcadcraft.com/support); ini membantu kami memutuskan apa yang akan dibangun berikutnya.
