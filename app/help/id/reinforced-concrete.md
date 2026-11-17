---
title: Rinci balok, kolom, pelat lantai dan dinding beton bertulang
summary: Tambah balok, kolom, pelat lantai dan dinding beton berdasarkan grid, beri tulangan, sengkang dan pengikat, periksa lewatan dan angkur terhadap ACI 318-19 atau EN 1992-1-1, serta buat gambar kerja dan lembar pembengkokan batang.
keywords: beton bertulang, tulangan, penulangan, balok, kolom, pelat lantai, dinding, sengkang, pengikat, kait, lewatan, sambungan lewatan, angkur, panjang penyaluran, ld, ldh, lbd, selimut beton, jarak, tulangan pembantu, bukaan, anyaman, tanda tulangan, daftar pembengkokan, bbs, gambar kerja, ACI 318, EN 1992, Eurocode 2, IfcReinforcingBar, impor IFC
from: 3835b7ec
---

Tab {{ui:Beton}} di bawah tampilan merinci tulangan balok, kolom, pelat lantai, dan dinding beton. Anda memberikan ukuran dan tulangannya; DetailCraft menempatkan setiap batang, memberinya nomor, memeriksa lewatan, angkur, selimut beton, dan jarak terhadap klausul asalnya, lalu menggambarkannya.

:::warning
DetailCraft merinci batang yang Anda berikan. Ia tidak merancangnya. Setiap hasil harus diperiksa oleh insinyur.
:::

## Buka tab Beton

Pilih tab {{ui:Beton}} di bawah tampilan. Di tata letak ribbon, {{ui:Beton}} ada di tab {{ui:Pemodelan}} di samping {{ui:Fondasi}}. Dengan baris perintah gaya drafting, ketik {{cmd:CONCRETE}}.

## Tambah elemen berdasarkan grid

Elemen beton ditempatkan pada garis grid dan level model, jadi atur itu dahulu (panel kiri).

1. Di {{ui:Tambah berdasarkan grid}}, pilih {{ui:Elemen}}: {{ui:Balok beton}}, {{ui:Kolom beton}}, {{ui:Pelat lantai}} atau {{ui:Dinding}}.
2. Pilih garis grid dan level:
   - balok berjalan dari satu perpotongan grid ke perpotongan lain, bagian atasnya pada level;
   - kolom berdiri pada perpotongan, dari satu level ke level lain;
   - pelat lantai mengisi persegi panjang di antara dua garis grid bernomor dan dua garis grid berhuruf, bagian atasnya pada level;
   - dinding berjalan di sepanjang garis tengahnya dari satu perpotongan ke perpotongan lain, dari satu level ke level lain.
3. Beri ukuran dan pilih {{ui:Tambah}}. Elemen dipilih dan kolomnya terbuka di panel {{ui:Properti}}.

Setiap elemen mulai dengan tulangan yang merupakan nilai awal, bukan rancangan: ubah menjadi milik insinyur.

## Ubah tulangan

Pilih elemen (di tampilan, atau namanya di tab {{ui:Beton}}). Panel {{ui:Properti}} menampilkan:

| Elemen | Yang Anda atur |
|---|---|
| Balok | Lebar, tinggi, selimut beton bersih; tulangan atas dan bawah (ukuran, jumlah, lurus atau kait 90° di ujung); tulangan samping; sengkang (ukuran, kait 135° atau 90°, jarak yang pertama dari muka tumpuan, panjang dan jarak zona ujung, jarak di antaranya); {{ui:Panjang tumpuan di awal (mm)}} dan di ujung; panjang lewatan |
| Kolom | Lebar, kedalaman melintang, rotasi, selimut beton; tulangan memanjang di setiap muka; pengikat seperti sengkang; apa yang dilakukan tulangan di bagian atas (lewatan dengan kolom di atasnya, kait ke dalam lantai, atau berhenti) |
| Pelat lantai | Tebal, ukuran, atas, selimut beton; anyaman bawah dan anyaman atas tiap arah (ukuran dan jarak); batang-U di sekeliling tepi; tulangan pembantu; bukaan |
| Dinding | Tebal, selimut beton, satu atau dua lapis, tulangan horizontal dan vertikal, batang-U di ujung, tulangan vertikal dilewatkan di atas atau tidak, tulangan pembantu, bukaan |

Setiap perubahan adalah satu langkah urungkan. Perubahan yang tidak dapat dibangun ditolak dan bilah status menjelaskan alasannya, misalnya "Bukaan tidak muat di dalam elemen dengan selimut betonnya."

Sengkang dan pengikat tertutup, dengan kedua kait di satu sudut. Batang balok masuk ke kolom beton di ujungnya sampai ke muka jauh kolom dikurangi selimut beton; jika tidak ada kolom di sana, isi {{ui:Panjang tumpuan di awal (mm)}} dan di ujung.

## Sambungan lewatan dan angkur

Batang yang lebih panjang dari {{ui:Panjang batang stok (mm)}} (12000 sebagai awal) dipotong menjadi beberapa bagian panjang sama, dilewatkan. Tabel {{ui:Sambungan lewatan dan angkur}} mencantumkan setiap lewatan dan setiap angkur: apa yang diperlukan, dengan klausul dan syaratnya, dan apa yang dimiliki detail.

- Panjang lewatan 0 berarti "sesuai kebutuhan": panjang yang diberikan oleh kode, dibulatkan ke atas menjadi 25 mm.
- Ketik panjang lewatan Anda sendiri untuk menggunakannya. Jika lebih pendek dari yang diperlukan, itu masalah (lihat di bawah), dan ditandai * di tabel.
- Angkur diukur dari muka tumpuan ke ujung batang di dalam tumpuan. Balok tanpa tumpuan yang diketahui menyatakan hal itu daripada memeriksanya.
- Kolom yang berdiri di atas fondasi melewatkan dengan besi stek fondasi, dan kolom di atas kolom lain dengan tulangan kolom tersebut: lewatan mereka juga diperiksa.

**ACI 318-19** (SI): batang lurus dalam tarik 25.4.2.3 (tabel, dengan ψt, ψe, ψg, λ), kait standar 25.4.3.1 (ψr 1.6 dan ψo 1.25 diambil kecuali diketahui lain), batang dalam tekan 25.4.9.2, lewatan tarik 25.5.2.1 (Kelas B, atau Kelas A di pengaturan), lewatan tekan 25.5.5.1.

**EN 1992-1-1**: angkur 8.4.4 dengan fbd dari 8.4.2 (ikatan baik atau buruk), lewatan 8.7.3 dengan α6 untuk setiap batang yang dilewatkan pada satu penampang. γc, γs dan αct mulai dari nilai yang direkomendasikan; atur sesuai annex nasional Anda.

## Pemeriksaan

Setiap pemeriksaan yang gagal ada di panel Masalah shell (sumber {{ui:Pemeriksaan penulangan}}), dan di daftar {{ui:Pemeriksaan}} elemen:

| Pemeriksaan | ACI 318-19 | EN 1992-1-1 |
|---|---|---|
| Selimut beton | Tabel 20.5.1.3.1, menurut paparan | Batas ikatan, Tabel 4.2 (selimut beton tahan lama diberikan oleh Anda) |
| Jarak bersih batang | 25.2.1 (balok, pelat, dinding), 25.2.3 (kolom) | 8.2 (2) |
| Jarak sengkang | 9.7.6.2.2 | 9.2.2 (6) |
| Tulangan minimum balok | 9.6.1.2 | 9.2.1.1 (1) |
| Tulangan samping balok lebih dari 900 mm dalam | 9.7.2.3 | tidak diperiksa |
| Rasio tulangan kolom, jumlah batang | 10.6.1.1, 10.7.3.1 | 9.5.2 |
| Pengikat: jarak, ukuran, pengikat silang | 25.7.2.1, 25.7.2.2, 25.7.2.3 | 9.5.3 (1), (3), (4) |
| Jarak pelat, tulangan minimum | 7.7.2.3, 24.4.3.2 | 9.3.1.1 |
| Jarak dinding, tulangan minimum, dua lapis | 11.7.2.1, 11.7.3.1, 11.6.1, 11.7.2.3 | 9.6.2, 9.6.3 |
| Lewatan, angkur | seperti di atas | seperti di atas |

Ukuran agregat tidak diketahui, sehingga jarak bersih diperiksa tanpa itu.

## Bukaan, tulangan pembantu dan tulangan tepi

Pilih {{ui:Tambah bukaan}} di bawah pelat lantai atau dinding yang dipilih, lalu atur posisi dan ukurannya. Batang yang dipotongnya berhenti pada selimut beton dari tepinya. Tulangan pembantu ditambahkan di setiap sisi, dalam lapis yang sama, membawa setengah luas batang yang terpotong, dengan panjang angkur melewati bukaan. Itu aturan awal DetailCraft, bukan klausul kode: ubah {{ui:Tulangan pembantu}} menjadi milik insinyur. Tulangan sudut tidak ditambahkan.

Batang-U di sekeliling tepi bebas pelat lantai dan di ujung dinding memiliki kaki sepanjang satu panjang lewatan.

## Tanda tulangan dan daftar pembengkokan

Batang yang identik berbagi satu tanda. Fondasi mempertahankan tanda F (5F1), balok mendapat B, kolom C, pelat lantai S dan dinding W (7B1, 8C1, 4S2). Tab {{ui:Daftar pembengkokan}} dan CSV-nya kini mencantumkan setiap batang struktur, fondasi lebih dulu. {{ui:Keluaran}} › {{ui:Lainnya}} › {{ui:Pembengkokan}} mengunduhnya.

## Gambar kerja

Pilih {{ui:Keluaran}} › {{ui:Lainnya}} › {{ui:Gambar tulangan}}, {{ui:Gambar tulangan}} di tab {{ui:Beton}}, atau {{ui:Gambar kerja}} di samping satu elemen. Setiap elemen mendapat lembar dengan tampak (denah untuk pelat lantai) yang menampilkan setiap batang dan tandanya, zona sengkang atau pengikat, dan lewatan yang diberi dimensi, serta potongan di tengah. Lembar daftar pembengkokan batang kemudian mencantumkan setiap tanda dengan sketsa bentuknya, dimensinya, jumlahnya, panjang potong dan beratnya.

Lembar dibuat dari model setiap kali, dan lagi setelah setiap perubahan selama jendela terbuka: kepala gambar memuat referensi model. Simpan {{ui:Lembar ini sebagai PDF}} atau {{ui:Semua lembar sebagai PDF}}.

## Batang dari file IFC

{{ui:File}} › {{ui:Impor IFC}} kini membaca IfcReinforcingBar: disk yang disapu sepanjang sumbunya kembali sebagai kaki lurus dan tekukan, dengan diameter, tanda dan elemen yang menahannya. Batang disimpan seperti yang dibaca (tidak diubah menjadi aturan balok atau pelat), ditampilkan di tampilan, didaftar di daftar pembengkokan, dan ditulis kembali dengan ekspor IFC. Laporan impor menyatakan berapa batang yang dibaca, dari ukuran apa, di berapa elemen, dan apa yang tertinggal beserta alasannya.

Balok, kolom, pelat lantai atau dinding dari file itu yang memuat tulangan, atau yang materialnya beton, tidak dianggap sebagai baja; laporan menyatakannya. Ekspor IFC milik DetailCraft membawa definisi setiap elemen beton, sehingga kembali sebagai dirinya sendiri, dan tulangannya dibuat ulang darinya.

:::note
Membaca file milik program desain struktur (bukan IFC) belum dibuat: ekspor IFC dari program tersebut.
:::

## Ekspor IFC

Balok beton, kolom, pelat lantai (dengan bukaan) dan dinding diekspor sebagai IfcBeam, IfcColumn, IfcSlab dan IfcWall, masing-masing dengan tulangannya sebagai IfcReinforcingBar (batang utama, pengikat untuk sengkang dan pengikat, batang tepi) yang diagregasi ke elemen tersebut. Setiap batang berupa disk yang disapu sepanjang sumbunya, dengan busur sejati di tekukan, serta tanda dan panjang potongnya.
