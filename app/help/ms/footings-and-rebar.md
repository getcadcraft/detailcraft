---
title: Letak tapak asas dengan tetulang
summary: Letak tapak asas padat segi empat dengan rakit bawah dan bar penyambung, semak, dan muat turun jadual lenturan.
keywords: tapak asas, tapak padat, asas, tetulang, penetulangan, bar, rakit, bar penyambung, dowel, jadual lenturan, senarai bar, konkrit, kait, penutup konkrit
from: 41a048be
---

Topik ini berkaitan tapak padat segi empat. Rasuk, tiang, papak dan dinding terdapat dalam [Perincian konkrit bertetulang](topic:reinforced-concrete). Setiap tapak asas mendapat rakit bawah pada kedua-dua arah dan, jika anda mahu, bar penyambung yang menegak keluar daripadanya. Saiz bar ialah saiz US #3 hingga #11.

## Letak tapak asas

1. Pilih {{ui:Plan}} dan pilih aras bagi bahagian atas tapak asas.
2. Pilih {{ui:Footing}} dalam kumpulan {{ui:Place}}, atau tekan {{key:F}}.
3. Tetapkan tapak asas dalam panel {{ui:Properties}} (lihat di bawah), atau kekalkan nilai lalai.
4. Klik persilangan grid. Tapak asas itu berpusat di situ dengan bahagian atasnya pada aras. Bar status menyatakan, contohnya, "Tapak asas 2000 x 2000 x 600 di bawah A/1."

Anda juga boleh menggunakan borang {{ui:Add by grid}} di bahagian bawah panel.

Tapak asas dilukis lut sinar supaya anda dapat melihat bar-nya, yang dilukis sebagai tiub pepejal.

## Tetapan tapak asas

| Medan | Lalai | Nota |
|---|---|---|
| Panjang L (mm) | 2000 | Sepanjang x; 300 hingga 50000 |
| Lebar B (mm) | 2000 | Sepanjang y; 300 hingga 50000 |
| Kedalaman H (mm) | 600 | 150 hingga 10000 |
| Konkrit | 4000 psi | Teks, dicetak dalam eksport IFC |

**Rakit bawah**

| Medan | Lalai | Nota |
|---|---|---|
| Bar panjang | #5 | Bar yang berjalan sepanjang L, lapisan bawah |
| Jarak (mm) | 250 | Jarak terbesar yang dibenarkan; bar diagihkan sama rata pada jarak ini atau lebih rapat |
| Bar pendek | #5 | Bar yang berjalan sepanjang B, diletakkan di atas bar panjang |
| Jarak (mm) | 250 | Seperti di atas |
| Penutup (mm) | 75 | Penutup konkrit bersih pada setiap muka |
| Kait hujung | Hidup | Memusingkan kedua-dua hujung setiap bar rakit ke atas dalam kait 90° piawai (bentuk U); mati memberi bar lurus (bentuk S) |

**Bar penyambung**

| Medan | Lalai | Nota |
|---|---|---|
| Bar penyambung | Hidup | Matikan untuk tapak asas tanpa bar penyambung |
| Bar | #6 | |
| Bar sepanjang L / Bar sepanjang B | 2 / 2 | Grid bar, berpusat pada tapak asas |
| Jarak sepanjang L / Jarak sepanjang B | 250 / 250 | Antara pusat bar |
| Unjuran di atas bahagian atas | 600 | Sejauh mana bar menegak di atas bahagian atas tapak asas |
| Kait di bawah | Hidup | Kait 90° menghala ke luar, duduk di atas rakit (bentuk L) |

Di bawah medan, DetailCraft menunjukkan panjang kaki kait bagi bar panjang, contohnya "Panjang kaki kait untuk #5: 254 mm luar ke luar."

## Tukar tapak asas yang diletakkan

Pilih tapak asas (klik konkritnya jauh daripada mana-mana tiang, atau salah satu bar-nya). Anda mendapat medan yang sama serta {{ui:Pusat x}}, {{ui:Pusat y}}, {{ui:Atas z}} dan {{ui:Putaran (°)}}. Di bawahnya, jadual menyenaraikan bar tapak asas ini bersama tanda, bilangan dan panjangnya, serta isi padu konkrit dalam meter padu.

Setiap perubahan disemak sebelum disimpan. Perubahan yang tidak boleh dibina ditolak dan bar status menyatakan sebabnya, contohnya "Penutup tidak memberi ruang untuk bar dalam tapak asas ini.", "Tapak asas terlalu cetek untuk dua lapisan bar di dalam penutup." atau "Bar penyambung tidak muat di dalam tapak asas dengan penutup 75 mm."

Perubahan yang boleh dibina tetapi perlu diteliti disenaraikan di bawah tapak asas dan dalam tab {{ui:Problems}}:

- "Bar #11 pada 59.6 mm meninggalkan ruang bersih kurang daripada 35.8 mm (ACI 318-19 25.2.1)." Jarak bersih antara bar mestilah sekurang-kurangnya diameter bar dan sekurang-kurangnya 25.4 mm.
- "Kait #5 memerlukan kedalaman 254 mm; hanya 150 mm muat di dalam penutup." Kaki kait kemudian dipendekkan supaya muat, jadi ia bukan lagi kait piawai.
- "Kait penyambung masuk ke dalam penutup."
- "Bar penyambung lebih rapat daripada jarak bersih minimum."

## Tanda bar dan jadual lenturan

Bar yang serupa (saiz, bentuk dan dimensi sama hingga milimeter) berkongsi satu tanda bar merentasi semua tapak asas. Tanda ditulis sebagai `<nombor bar>F<n>`: 5F1, 5F2 bagi bar #5, 6F1 bagi bar #6 pertama, dan seterusnya. Tapak asas dengan saiz, konkrit, rakit dan bar penyambung yang sama berkongsi satu tanda tapak asas: F1, F2 …

1. Buka tab {{ui:Bending schedule}} di bahagian bawah. Setiap baris ialah satu tanda bar: saiz, bentuk, dimensi A, B dan C, bilangan, panjang potongan, jumlah panjang, jisim per meter, berat setiap bar, jumlah berat, dan kegunaan bar itu.
2. Pilih {{ui:Download CSV}} dalam tab itu, atau {{ui:Bending}} dalam menu {{ui:More}} kumpulan {{ui:Output}}, untuk `<name> bending schedule.csv`.

Bentuk ialah kod DetailCraft sendiri, bukan kod piawai: S lurus, L satu lenturan, U dua lenturan. Dimensi ialah luar ke luar; panjang potongan ialah panjang paksi tengah tepat melalui lenturan. Lihat [Rujukan tetulang](topic:rebar-reference).

## Apa yang DetailCraft tidak semak

- Panjang pembangunan dan panjang sambungan lewatan, serta sama ada bar penyambung cukup panjang untuk tiang di atasnya.
- Bahagian saiz agregat bagi peraturan jarak bersih (ia tidak mengetahui campuran).
- Apa-apa tentang tiang atau plat tapak di atasnya: tapak asas dan keluli adalah berasingan.

Lihat juga [Apa yang belum dibina](topic:not-built-yet).
