---
title: Panel rangka kayu dan baja ringan
summary: Rangkai panel dinding, lantai, dan atap dari kayu atau baja ringan, dengan setiap potongan, daftar potong, gambar kerja, dan stok yang harus dibeli.
keywords: rangka, kayu, kayu gergaji, baja ringan, canai dingin, stud, balok lantai, kasau, header, king stud, jack stud, cripple, daftar potong, gambar kerja, panel
from: 3e38ffb9
---

Tab {{ui:Rangka}} merangkai panel yang Anda deskripsikan dan memberikan apa yang dibutuhkan tim pemasangan rangka dan toko kayu. Panel disimpan di berkas model.

:::warning
Ukuran, jarak, dan header adalah tanggung jawab Anda. DetailCraft tidak memeriksa apakah stud pada jarak tersebut memikul dinding itu atau apakah header mampu melintasi bukaan itu: itu adalah tugas tabel kode Anda dan insinyur Anda.
:::

## Menambah panel

Pilih {{ui:Tambah dinding}}, {{ui:Tambah lantai}}, atau {{ui:Tambah atap}}, lalu isi dimensinya dalam milimeter, materialnya (kayu atau baja ringan), dan ukuran batangnya. Ukuran kayu menggunakan nama nominal beserta ukuran sebenarnya setelah dihaluskan (2×4 berukuran 38 × 89 mm). Stud baja diberi nama menurut tinggi dan tebal, misalnya `C92-1.2`.

## Dinding

Dinding memiliki pelat bawah, satu atau lebih pelat atas (satu rel untuk baja), stud ujung, stud pada jarak yang Anda berikan, dan untuk setiap bukaan: dua king stud, dua jack stud, sebuah header dengan ukuran dan lapisan yang Anda pilih, serta cripple di atas header (dan di bawah ambang jendela). Berikan setiap bukaan jaraknya dari ujung kiri, lebarnya, serta bukaan kasar bagian atas dan bawahnya yang diukur dari subfloor; pintu memiliki bagian bawah 0.

## Lantai dan atap

Lantai memiliki balok lantai melintang di sepanjang lebarnya dalam arah bentangnya, balok rim di kedua ujung, dan, jika Anda centang, blocking di tengah bentang. Panel atap berbentuk gable: sepasang kasau pada jarak yang Anda berikan (panjangnya mencakup tritisan sepanjang kemiringan) dan satu papan nok.

## Yang Anda dapatkan

Setiap panel menampilkan potongan-potongannya pada gambar berskala dengan setiap potongan diberi tanda, daftar potong menurut tanda, dan total. Tabel {{ui:Stok yang harus dibeli}} menyusun semua potongan dari seluruh panel ke dalam panjang stok, yaitu panjang terpendek yang memuat potongan setiap batang. {{ui:Simpan gambar kerja (SVG)}} menulis gambarnya; tombol {{ui:CSV}} menulis setiap daftar potong dan daftar stok.

## Menempatkan panel di model

Di bawah setiap panel, tentukan letaknya (x, y, z dalam milimeter dan sudutnya) lalu tekan {{ui:Tempatkan sebagai batang}}: setiap potongan menjadi batang di model, dengan penampang sebenarnya sesuai ukurannya dan berat materialnya (sekitar 500 kg/m³ untuk kayu, dan baja untuk stud). Dinding berjalan sepanjang sudut dari ujung kiri bawahnya dengan bagian bawahnya di z; balok lantai terletak dengan sisi bawahnya di z; elevasi gable atap berjalan sepanjang sudut dengan z di bagian atas pelat dinding. Setiap lapisan header adalah satu batang yang berdampingan. Menekannya lagi akan mengganti batang yang ditempatkan sebelumnya, dan {{ui:Buang batang yang sudah ditempatkan}} mengeluarkannya; setiap aksi adalah satu langkah urungkan. Analisis tidak menyertakan batang-batang ini: mereka bukan batang rangka baja.

## Lembar PDF

{{ui:Lembar PDF}} menyimpan satu halaman A3 untuk setiap panel: panel berskala dengan setiap potongan diberi tanda, dimensi keseluruhan, daftar potong, dan strip judul.

Masalah di panel {{ui:Masalah}}: bukaan terlalu dekat dengan ujung dinding atau dengan bukaan lain, header yang tidak muat di bawah pelat atas, atau potongan yang lebih panjang dari stok terpanjang.

Panel {{ui:Masalah}} juga mencantumkan **Antarmuka (LOD 350)** untuk panel dinding dan dinding beton: bukaan yang melewati ujung atau bagian atas dindingnya, dua bukaan yang saling tumpang tindih, serta bukaan dinding beton yang lebih lebar dari 1000 mm tanpa batang pengaku bukaan. Ini adalah saran, aturan yang sama dengan yang dijalankan audit BimCraft; lebar adalah nilai awal CadCraft, bukan standar.
