---
title: Gambar tata letak umum dan gambar rakitan
summary: Buat denah, tampak, dan satu gambar rakitan per tanda rakitan dari model, pada lembar A4 sampai A1 atau ANSI B sampai D, terbitkan dengan huruf revisi, lalu unduh sebagai PDF, DWG, atau DXF.
keywords: garis tersembunyi, penghapusan garis tersembunyi, putus-putus, awan revisi, awan, segitiga revisi, denah baut angkur, batang angkur, jadwal batang, jadwal pelat dasar, jarak, terbitkan, penerbitan, revisi, rev, tabel revisi, terbitkan ulang, log penerbitan, transmittal, dwg, dxf, file cad, ekspor gambar, gambar, tata letak umum, ga, denah, tampak, gambar rakitan, ukuran lembar, ukuran kertas, a4, a3, a2, a1, ansi b, ansi c, ansi d, tabloid, 11 x 17, 22 x 34, pdf, cetak, skala, kepala gambar, referensi model
from: 709f8604
---

Pilih {{ui:Drawings}} di grup {{ui:Output}}. DetailCraft membuat seluruh set dari model seperti keadaannya saat ini. Tidak ada yang disimpan: ubah model, buka {{ui:Drawings}} lagi, dan set dibuat ulang.

## Isi set

- **Denah**, satu per level yang memiliki sesuatu di atasnya, dilihat dari atas.
- **Tampak**, satu per garis grid yang memiliki batang dalam jarak 1 m darinya.
- **Denah baut angkur**, ketika model memiliki pelat dasar: setiap pelat dasar dilihat dari atas beserta kolom dan batang angkurnya, grid dengan dimensinya, detail tipikal setiap pola batang (BP1, BP2 …) dengan jarak batang dan jarak tepi, serta dua jadwal: batang angkur menurut tanda (R1, R2 …: jumlah, diameter, panjang, proyeksi di atas pelat, penanaman, mutu) dan pelat dasar menurut grid (kolom, pola, pelat, batang, puncak pelat). Kolom di luar grid ditentukan letaknya dengan koordinatnya.
- **Gambar rakitan**, satu per tanda rakitan: tampak depan, atas, dan ujung, dimensi berantai ke lubang dan tepi pelat, daftar part, baut dan batang lepas, serta catatan las dan lubang. Setiap pelat yang dilas memiliki simbol las fillet di tampak depan (AWS A2.4): panah menunjuk ke sambungan, segitiga di bawah garis acuan berarti sisi panah, angka di kirinya adalah ukuran las dalam mm, dan lingkaran di tempat panah bertemu garis berarti keliling penuh.

**Garis tersembunyi.** Denah dan tampak tidak menggambar garis part yang sepenuhnya tertutup oleh part lain di depannya (balok yang terlihat dari ujung, di belakang kolom). Gambar rakitan menggambar pelat putus-putus di tempat part utama menutupinya: di belakang badan pada tampak depan (dilihat dari sisi −u part), dan di bawah sayap atas pada tampak atas. Part yang berada pada kedalaman yang sama, atau tumpang tindih dalam kedalaman, keduanya digambar penuh.

Setiap lembar memiliki kepala gambar dengan nomor gambar, skala, nama model, tanggal, nomor lembar beserta ukuran lembar, dan referensi model: kode yang dibuat dari model tersimpan, sehingga cetakan dapat dicocokkan dengan model asalnya.

## Pilih ukuran lembar

Pilih ukuran di daftar di bagian atas jendela {{ui:Drawings}}: A4, A3, A2, A1, ANSI B (11 × 17 in), ANSI C (17 × 22 in), atau ANSI D (22 × 34 in). Setiap lembar berorientasi lanskap. Set dibuat ulang pada ukuran baru seketika, dan ukuran yang sama dipakai untuk gambar kerja. Ukuran ini juga ada di [pengaturan DetailCraft](topic:settings#drawings), dan peramban ini mengingatnya.

- Lembar yang lebih besar menggambar dengan skala yang lebih besar. Skala selalu skala standar (1:10, 1:20, 1:25, 1:50, 1:100, dan seterusnya).
- Teks tetap berukuran sama di setiap lembar, sehingga tetap terbaca saat dicetak.
- Pada lembar kecil, rakitan yang panjang dan tipis dapat memperoleh skala yang lebih besar pada kedalamannya daripada pada panjangnya. Judul tampilan kemudian menyebut kedua skala, dan dimensi yang berlaku.

## Terbitkan gambar dan revisi

Baris di atas pratinjau menyatakan posisi lembar yang ditampilkan: **Belum diterbitkan**, **Rev B, diterbitkan …; tidak berubah sejak itu**, atau, dalam merah, **Berubah sejak rev B: perlu terbit ulang**. Daftar lembar menandai lembar yang sudah diterbitkan dengan revisinya, dan lembar yang perlu diterbitkan ulang.

- Ketik tujuan penerbitan (awalnya "Diterbitkan untuk fabrikasi") lalu pilih {{ui:Issue this sheet}}, atau {{ui:Issue changed sheets}} untuk setiap lembar yang baru atau berubah sejak penerbitan terakhirnya.
- Penerbitan pertama sebuah lembar adalah revisi A, lalu B, C, dan seterusnya (I dan O dilewati).
- Kepala gambar menampilkan nomor gambar dengan revisinya ("A-B1  rev B"), dan tabel revisi di sampingnya mendaftar penerbitan terbaru: revisi, tanggal, dan deskripsi. Pada lembar kecil ditampilkan sebanyak yang muat.
- Sebuah lembar "berubah" ketika yang digambar di atasnya berubah: part yang dipindahkan, lubang baru, tanda yang dinomori ulang. Tanggal, jumlah lembar, dan tabel revisi itu sendiri tidak dihitung. Mengubah ukuran lembar mengubah setiap lembar.
- Log penerbitan disimpan dalam file model, dan penerbitan adalah satu langkah urungkan. [File KISS](topic:kiss-export) membawa revisi terbaru setiap gambar.

### Awan revisi

Mulai dari penerbitan kedua sebuah lembar, setiap part atau pondasi yang berubah digambar di dalam awan revisi dengan segitiga revisi yang memuat hurufnya.

- Selama sebuah lembar berubah sejak penerbitan terakhirnya, awan menunjukkan apa yang berubah sejak itu, dengan revisi yang akan datang di dalam segitiga (rev B sudah diterbitkan dan berubah: segitiganya menunjukkan C).
- Setelah Anda menerbitkannya, awan tetap berada pada lembar revisi tersebut, seperti pada set cetak, sampai lembar berubah lagi.
- Setiap lembar hanya mengawan perubahan yang ditampilkannya. Denah dan tampak tidak menggambar lubang atau cope, sehingga yang diawan adalah batang yang dipindahkan, diputar, atau diubah ukurannya, atau yang tandanya berubah. Gambar rakitan dan denah baut angkur juga mengawan lubang dan cope yang baru atau dipindahkan.
- Penomoran ulang tanda ikut dihitung: ketika sebuah perubahan membuat balok menjadi rakitan baru, balok yang tandanya naik (B1 menjadi B2) diawan pada denah dan tampak.
- Part yang dihapus tidak meninggalkan apa pun untuk diawan.
- Lembar yang diterbitkan sebelum awan revisi hadir (DetailCraft 0.4) mulai diawan dari penerbitan berikutnya.
- Awan ada dalam unduhan PDF, DXF, dan DWG, dan tidak pernah dihitung sebagai perubahan itu sendiri.

## Unduh

Pilih format di daftar di samping tombol, lalu {{ui:This sheet}} untuk lembar yang ditampilkan atau {{ui:All sheets}} untuk seluruh set.

- **PDF**: untuk dicetak atau dikirim. {{ui:All sheets}} membuat satu PDF, satu halaman per lembar, dan setiap halaman berukuran yang dipilih.
- **DWG**, dalam format 2018, 2013, 2010, 2007, 2004, atau 2000: untuk membuka lembar di program CAD. Pilih format lama untuk program yang lebih lama.
- **DXF (R12)**: versi yang hampir semua program CAD dapat membukanya.

Lembar DWG atau DXF digambar dalam ukuran penuh: satu satuan gambar adalah satu milimeter di kertas, sehingga tercetak pada 1:1 dan setiap tampilan mempertahankan skala yang tertulis di judulnya. Setiap pena adalah layer tersendiri: DC-OUTLINE, DC-THICK, DC-THIN, DC-HIDDEN, DC-CENTER, DC-GRID, dan seterusnya, dengan ketebalan garis (DWG) dan putus-putusnya. Kata-kata berupa teks dalam gaya teks DetailCraft (Arial). Dimensi adalah garis dan angka yang Anda lihat, bukan objek dimensi. {{ui:All sheets}} memasukkan file DWG atau DXF dalam satu zip, satu file per lembar.

:::note
DXF R12 tidak memiliki ketebalan garis dan tidak memiliki isian: layer mempertahankan namanya, jadi atur pena menurut layer saat Anda mencetak, dan bentuk berisi dibiarkan keluar (bilah status menyebutkan berapa banyak).
:::

Cetak pada 100% (tanpa "fit to page") di kertas berukuran sama jika Anda ingin skala yang tertulis tetap berlaku.
