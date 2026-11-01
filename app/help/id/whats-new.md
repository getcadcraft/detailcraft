---
title: Yang baru di 0.7
summary: Pemeriksaan desain profil I baja dengan kombinasi beban dari ASCE 7 atau EN 1990 dan pemeriksaan batang menurut AISC 360 atau EN 1993-1-1, ekspor USD model baja, alat asisten untuk USD, pita Baja dengan tombol besar dan kecil, panel yang dapat dirapikan, dan dialog yang dapat dipindahkan.
keywords: yang baru, rilis, catatan rilis, changelog, perubahan, 0.7, versi, fitur baru, pemeriksaan desain, desain baja, utilisasi, kombinasi beban, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocode, National Annex, beban hidup atap, batas lendutan, usd, usda, usdc, usdz, openusd, asisten, mcp, pita baja, pita, tombol terbagi, satuan, ringkas, panel, dialog, portugis
from: 17d1e0bb
---

Berikut perubahan di DetailCraft 0.7 dibandingkan 0.6. Analisis rangka pada 0.6 kini memiliki langkah kedua: memeriksa batang baja terhadap standar desain.

## Baru

### Sambungan mitre (0.7.1)

- **Dua profil I bertemu pada sudut**, seperti sendi portal atau puncak atap: pilih keduanya, pilih {{ui:Mitre}} di menu {{ui:Lainnya}} pada grup {{ui:Sambung}}, dan kedua ujung dipotong pada bidang yang membagi dua sudut. Pelat ujung yang dibaut bersama dan pengaku badan adalah kotak centang di dialog Mitre yang baru, yang kolom bernomornya cocok dengan gambar sambungan Anda yang dibuat seiring Anda mengetik. Mitre mengikuti batang saat dipindahkan, dan berlanjut ke gambar, file NC (potongan miring), IFC, dan daftar material. Lihat [Sambungan mitre](topic:mitres).

### Pemeriksaan desain

- **Kombinasi beban dari standar.** Di tab {{ui:Analisis}}, blok {{ui:Pemeriksaan desain}} yang baru memiliki {{ui:Standar desain}}: ASCE 7 + AISC 360 (AS, LRFD) atau EN 1990 + EN 1993-1-1 (Eurocode). Beri setiap kasus beban jenisnya (mati, hidup, hidup atap yang baru, salju, angin, seismik), tekan {{ui:Buat kombinasi}}, dan DetailCraft menulis kombinasi kekuatan dan kelayanan dari standar tersebut untuk kasus Anda. Kombinasi yang Anda ketik sendiri tetap ada. Lihat [Membuat kombinasi](topic:design-checks#make-the-combinations).
- **Nilai National Annex.** Untuk Eurocode, faktor dimulai dari nilai yang direkomendasikan; {{ui:Nilai Lampiran Nasional}} memungkinkan Anda mengetik nilai negara Anda, dan nilai itu disimpan dalam model. Lihat [Membuat kombinasi](topic:design-checks#make-the-combinations).
- **Periksa batang.** {{ui:Periksa batang}} memeriksa setiap profil I baja untuk tarik, tekan dengan tekuk, lentur dengan tekuk torsi-lateral, geser, lentur dengan gaya aksial, dan lendutan terhadap {{ui:Batas lendutan}} yang Anda atur. Tabel menunjukkan utilisasi setiap batang, pemeriksaan yang menentukan beserta kombinasinya, dan batang diberi warna pada model (biru, hijau, kuning tua, merah, abu-abu untuk tidak diperiksa). Lihat [Memeriksa batang](topic:design-checks#check-the-members).
- **Dalam laporan.** {{ui:Laporan (PDF)}} dan {{ui:Laporan (CSV)}} menambahkan edisi standar, pengaturan, utilisasi per batang, dan setiap pasal yang dipakai. Lihat [Laporan](topic:design-checks#the-report).
- **Alat bantu sampai ditinjau insinyur.** Hanya memakai gaya orde pertama. Tabung, siku, kanal, profil las, dan bagian langsing atau kelas 4 tertulis "tidak diperiksa", beserta alasannya; torsi, sambungan, dan beton tidak diperiksa. Lihat [Apa yang tidak diperiksa](topic:design-checks#what-is-not-checked).

### USD

- **Mengekspor model baja sebagai USD.** {{ui:USD}} di grup {{ui:Keluaran}} menulis model sebagai {{ui:Teks (.usda)}}, {{ui:Biner (.usdc)}}, atau {{ui:Paket (.usdz)}} untuk program render dan perakitan scene: setiap rakitan memuat part-nya, setiap part adalah penampangnya yang ditarik sepanjang bentangnya dengan coak dipotong, dan masing-masing membawa tanda part, profil, mutu, panjang, dan beratnya. Lubang baut, baut, las, dan fondasi tidak ada dalam mesh USD. Lihat [Mengekspor model baja sebagai USD](topic:usd).

### Asisten AI

- **USD untuk asisten.** Asisten Anda sendiri, yang terhubung melalui CadCraft Studio, dapat mengekspor model sebagai USD (`usd_export`), dan di Studio menuliskannya ke folder yang Anda izinkan. Lihat [Apa yang dapat diminta asisten](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Diubah

- **Pita Baja** memiliki tombol besar dan kecil: {{ui:Balok}} besar di samping {{ui:Kolom}}, {{ui:Bresing}}, dan {{ui:Pelat}} kecil pada {{ui:Pemodelan}} › {{ui:Batang}}; {{ui:Pelat ujung}} besar pada {{ui:Detailing}} › {{ui:Sambungan}}, dengan {{ui:Sambungan lewatan}} dan {{ui:Pelat buhul}} berbagi satu tombol terbagi; {{ui:Tempel}} besar pada {{ui:Edit}} › {{ui:Papan klip}}, dengan {{ui:Tempel di tempat yang sama}} dan {{ui:Duplikat}} di balik panah grup. {{ui:Fabrikasi}} › {{ui:Pertukaran}} memiliki {{ui:Ekspor USD}} di samping IFC. Gaya menu lainnya tampak seperti sebelumnya. Lihat [Menu, tombol, dan mouse](topic:menus-keys-and-mouse#the-three-styles).
- [Menganalisis rangka](topic:frame-analysis) kini menunjuk ke pemeriksaan desain, dan kombinasinya dapat dibuat oleh standar.

## Di setiap aplikasi

- **Satuan.** {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Satuan}} memiliki satu daftar masing-masing untuk panjang, luas, volume, sudut, dan kemiringan, dengan ukuran persis sesuai definisi satuannya (kaki survei AS adalah satuan tersendiri). Matikan satuan yang tidak pernah Anda pakai dan satuan itu keluar dari daftar; beri bintang pada satu satuan dan pekerjaan baru dimulai dengannya. File selalu mempertahankan satuannya sendiri. Kotak milik DetailCraft sendiri belum mengikuti daftar: panjangnya masih diketik dalam milimeter. Lihat [Satuan, nilai yang diketik, dan daftar satuan](common:unit-lists).
- **Tata letak lebih padat dan panel yang dapat dirapikan.** {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Kepadatan tata letak}} › {{ui:Padat}} memuat lebih banyak di layar (layar sentuh dan ponsel tetap memakai tombol besar). Setiap panel samping memiliki bilah judul ramping: seret untuk menambatkan atau mengambangkan panel, letakkan di bilah panel lain untuk berbagi satu bingkai sebagai tab, sematkan agar menggeser ke tepi, atau sembunyikan dan panggil kembali dari tepi. Lihat [Menata panel](common:arrange-panels#make-the-layout-denser).
- **Dialog dapat dipindahkan.** Seret dialog pada bilah judulnya agar menyingkir dari gambar; dialog kembali ke tempat Anda meninggalkannya. Klik ganda bilah judul untuk memusatkannya lagi. Lihat [Memindahkan dialog](common:arrange-panels#move-a-dialog).
- **Resep untuk asisten AI.** Sepuluh permintaan contoh untuk asisten Anda sendiri (merapikan gambar, mem-plot satu set, memeriksa gambar, mengajukan pertanyaan ke model, menjumlahkan takeoff, mencoba varian part…), masing-masing dengan alat yang dipanggil dan izin yang diperlukan, dan masing-masing diputar ulang oleh pengujian kami. Aplikasi tidak memuat AI. Lihat [Resep untuk asisten AI](common:assistants-recipes).
- **Bahasa.** **Português (Portugal)** baru di {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Bahasa}}. Bahasa itu, **Português (Brasil)**, **Español (México)**, dan **Bahasa Indonesia** kini memiliki setiap kata dalam aplikasi, sebagai draf yang belum ditinjau penutur asli. Topik bantuan berbahasa Inggris.
- **CadCraft Studio** menyebutkan mengapa pemeriksaan pembaruan gagal (belum ada file untuk sistem Anda, tidak ada jaringan, tanda tangan tidak valid) alih-alih hanya "Selesai", dan berhenti memunculkan kembali kartu Yang baru yang sudah Anda tutup sampai ada rilis yang lebih baru.

## Belum ada di versi ini

- **0.7 belum ditandatangani kode.** Penandatanganan, dan paket Microsoft Store, dipindahkan ke 0.8 karena validasi sertifikat belum selesai. Periksa SHA-256 di samping setiap file pada getcadcraft.com/download. Di Windows, jika SmartScreen menghentikan pemasang, pilih {{ui:Info selengkapnya}}, lalu {{ui:Tetap jalankan}}. Di Mac, pada kali pertama, klik kanan CadCraft Studio dan pilih {{ui:Buka}}. CadCraft Studio belum ada di toko aplikasi, dan belum ada build untuk iPad atau iPhone.
- Daftar sudut dan kemiringan di {{ui:Satuan}} tersimpan, tetapi belum ada kolom isian yang membacanya.
- **Pemeriksaan desain belum ditinjau insinyur.** Pengujian kami membandingkannya dengan nilai tabel cetak dan rumus yang dihitung manual, belum dengan contoh hitungan dari panduan desain. Sampai ditinjau, pemeriksaan ini hanyalah alat bantu: periksa batang yang penting secara manual.
- Pemeriksaan desain memakai gaya orde pertama (tanpa efek orde kedua) dan hanya memeriksa profil I. Belum dibuat: tabung, siku, kanal, profil las, bagian langsing (AISC) atau kelas 4 (Eurocode) pada lentur, torsi, tekuk geser bersama lentur, sambungan, kelelahan, api, detailing seismik, dan beton. Bagian langsing yang tertekan menghilangkan pemeriksaan tekan, dan batang tertulis "lulus, diperiksa sebagian".
- Analisis rangka masih orde pertama dan linear, dan belum dicoba insinyur pada pekerjaan nyata.
- Lubang baut, baut, las, dan fondasi tidak ada dalam ekspor USD.

Selebihnya ada di [Apa yang belum dibuat](topic:not-built-yet).
