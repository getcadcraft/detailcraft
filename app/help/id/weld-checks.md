---
title: Periksa las di tempat batang bertemu
summary: Setelah pemeriksaan desain, uji las fillet dan las tumpul di sekeliling setiap batang tempat ia bertemu batang lain atau tumpuan, terhadap AISC 360-16 Bab J atau EN 1993-1-8, dan lihat kelompok las mana yang paling banyak dipakai serta di bawah kombinasi mana. Ini adalah bantuan sampai seorang insinyur telah meninjaunya.
keywords: las, pemeriksaan las, las fillet, las tumpul, penetrasi penuh, AISC 360, EN 1993-1-8, kelompok las, utilisasi, utilization, kapasitas, sambungan, connection, struktur, insinyur
from: e8eebbe6
---

Blok {{ui:Pemeriksaan las}} di tab {{ui:Analisis}}, di bawah {{ui:Pemeriksaan desain}}, mengambil gaya dari rangka terakhir yang diselesaikan dan kombinasi kekuatan yang Anda buat, lalu menguji las di sekeliling setiap batang pada setiap sambungan: tempat batang bertemu batang lain, atau berdiri di atas tumpuan.

:::warning
Ini adalah **bantuan sampai seorang insinyur telah meninjaunya**. Ini memeriksa las yang digambar mengelilingi penampang, sebagai satu kelompok, dari gaya ujung rangka itu sendiri. Ini tidak membaca ukuran atau panjang las yang Anda gambar di gambar kerja, dan tidak memeriksa baut, pelat, tumpu, geser blok, atau prying. Hasilnya bukan stempel pengesahan.
:::

## Jalankan

1. Selesaikan rangka di tab {{ui:Analisis}} dan pilih {{ui:Standar desain}} di {{ui:Pemeriksaan desain}}, lalu tekan {{ui:Buat kombinasi}} (pemeriksaan las memerlukan kombinasi kekuatan yang sama).
2. Di {{ui:Pemeriksaan las}}, atur {{ui:Kaki fillet (mm, 0 = dinding, paling besar 8)}}. 0 berarti kaki mengikuti dinding penampang yang lebih tipis, sampai 8 mm. Untuk standar AISC, {{ui:Kekuatan logam las F_EXX (MPa)}} adalah kekuatan logam las (482.6 MPa adalah elektroda E70). Untuk EN 1993, mutu baja menentukan kekuatan logam las dan faktor korelasinya.
3. Tekan {{ui:Periksa las}}.

Setiap baris tabel adalah satu kelompok las (satu ujung sambungan dari sebuah batang). Angkanya: **utilisasi** dari pemeriksaan yang menentukan, keadaannya (lolos atau gagal), serta pemeriksaan dan pasal mana yang menentukan di bawah kombinasi mana. Kelompok yang tidak dapat dinilai akan menyebutkan alasannya (tidak ada mutu baja, tidak ada faktor korelasi untuk mutu itu di EN 1993-1-8 Tabel 4.1, tidak ada las pada penampang itu) alih-alih menampilkan angka.

Mengubah kaki atau logam las, atau mengedit model, menghapus tabel karena tabel itu untuk nilai lama. Tekan {{ui:Periksa las}} lagi.

## Yang diperiksa

- **ASCE 7 + AISC 360:** logam las fillet (sudut beban terhadap las diperhitungkan, J2.4), keruntuhan geser logam dasar (J4.2), dan las tumpul penetrasi penuh (Tabel J2.5).
- **EN 1990 + EN 1993:** las fillet dengan metode sederhana EN 1993-1-8 4.5.3.3 dan las tumpul dari 4.7.1.
- Peringatan detailing terhadap kaki minimum dan maksimum serta panjang minimum, beserta nilai yang dibandingkan.

Kelompok las diperlakukan sebagai penampang garis dan dibebani dengan metode vektor elastis: setiap bagian las menerima gaya dari gaya aksial batang, kedua geser, torsi, dan kedua momen lentur, dijumlahkan sebagai vektor.

## Yang tidak diperiksa

Las penetrasi parsial, fillet miring, las pasak dan las slot, las terputus-putus, metode pusat sesaat, metode arah EN, kelelahan, dan geser blok logam dasar belum dibuat. Beberapa konstanta standar ditulis dari standar dan belum dibandingkan dengan salinan cetak; laporan mencantumkan asal setiap angka ({{ui:Laporan (PDF)}} memuat tabel las setelah Anda memeriksa). Lihat [Periksa batang baja](topic:design-checks) dan [Belum dibuat](topic:not-built-yet).
