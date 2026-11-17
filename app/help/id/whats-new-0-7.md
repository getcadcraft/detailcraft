---
title: Yang baru di 0.7 (sebelumnya)
summary: Pemeriksaan desain profil I baja dengan kombinasi beban dari ASCE 7 atau EN 1990 dan pemeriksaan batang terhadap AISC 360 atau EN 1993-1-1, ekspor USD dari model baja, alat asisten untuk USD, pita Steel dengan tombol besar dan kecil, panel yang dapat dirapikan, dan dialog yang dapat dipindahkan.
keywords: yang baru 0.7, rilis sebelumnya, catatan rilis, changelog, perubahan, 0.7, versi, fitur baru, pemeriksaan desain, desain baja, utilisasi, utilization, kombinasi beban, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocode, National Annex, beban hidup atap, batas lendutan, usd, usda, usdc, usdz, openusd, asisten, mcp, pita steel, pita, tombol terpisah, satuan, kompak, panel, dialog, portugis
from: 54a7a8f0
---

Ini yang berubah di DetailCraft 0.7, dibandingkan dengan 0.6. Analisis rangka pada 0.6 kini memiliki langkah kedua: pemeriksaan batang baja terhadap standar desain.

## Baru

### Sambungan mitre (0.7.1)

- **Dua profil I yang bertemu dengan sudut**, misalnya lutut portal atau bubungan: pilih keduanya, pilih {{ui:Mitre}} di menu {{ui:Lainnya}} pada grup {{ui:Sambung}}, dan kedua ujungnya dipotong pada bidang yang membagi sudut menjadi dua. Pelat ujung yang dibaut bersama dan pengaku badan adalah kotak centang di dialog Mitre baru, yang kolom bernomornya cocok dengan gambar sambungan Anda yang dibuat saat Anda mengetik. Mitre mengikuti batang saat batang dipindahkan, dan terbawa ke gambar, file NC (potongan miring), IFC dan daftar material. Lihat [Sambungan mitre](topic:mitres).

### Pemeriksaan desain

- **Kombinasi beban dari standar.** Di tab {{ui:Analisis}}, blok {{ui:Pemeriksaan desain}} yang baru memiliki {{ui:Standar desain}}: ASCE 7 + AISC 360 (US, LRFD) atau EN 1990 + EN 1993-1-1 (Eurocode). Beri setiap kasus beban jenisnya (mati, hidup, beban hidup atap yang baru, salju, angin, seismik), tekan {{ui:Buat kombinasi}}, dan DetailCraft menulis kombinasi kekuatan dan kemampuan layan dari standar untuk kasus-kasus Anda. Kombinasi yang Anda ketik sendiri tetap ada. Lihat [Membuat kombinasi](topic:design-checks#make-the-combinations).
- **Nilai National Annex.** Untuk Eurocode, faktor dimulai dari nilai yang direkomendasikan; {{ui:Nilai National Annex}} memungkinkan Anda mengetik nilai negara Anda, dan nilai tersebut disimpan dalam model. Lihat [Membuat kombinasi](topic:design-checks#make-the-combinations).
- **Periksa batang.** {{ui:Periksa batang}} memeriksa setiap profil I baja terhadap tarik, tekan dengan tekuk, lentur dengan tekuk torsi-lateral, geser, lentur dengan gaya aksial, dan lendutan terhadap {{ui:Batas lendutan}} yang Anda atur. Tabel menampilkan utilisasi setiap batang, pemeriksaan yang menentukan beserta kombinasinya, dan batang diberi warna pada model (biru, hijau, kuning tanah, merah, abu-abu untuk batang yang belum diperiksa). Lihat [Periksa batang](topic:design-checks#check-the-members).
- **Di laporan.** {{ui:Laporan (PDF)}} dan {{ui:Laporan (CSV)}} menambahkan edisi standar, pengaturan, utilisasi per batang, dan setiap klausul yang dipakai. Lihat [Laporan](topic:design-checks#the-report).
- **Alat bantu sampai insinyur meninjaunya.** Hanya memakai gaya orde pertama. Pipa, siku, kanal, bentuk las, serta bagian langsing atau bagian kelas 4 tertulis "belum diperiksa", dengan alasannya; torsi, sambungan dan beton belum diperiksa. Lihat [Yang belum diperiksa](topic:design-checks#what-is-not-checked).

### USD

- **Ekspor model baja sebagai USD.** {{ui:USD}} di grup {{ui:Keluaran}} menulis model sebagai {{ui:Teks (.usda)}}, {{ui:Biner (.usdc)}} atau {{ui:Paket (.usdz)}} untuk program rendering dan perakitan adegan: setiap rakitan memuat part-partnya, setiap part adalah penampangnya yang memanjang sepanjang panjangnya dengan coak yang sudah dipotong, dan masing-masing membawa tanda part, profil, mutu, panjang dan beratnya. Lubang baut, baut, las dan fondasi tidak ada dalam mesh USD. Lihat [Ekspor model baja sebagai USD](topic:usd).

### Asisten AI

- **USD untuk asisten.** Asisten Anda sendiri, yang terhubung melalui CadCraft Studio, dapat mengekspor model sebagai USD (`usd_export`), dan di Studio dapat menuliskannya ke folder yang Anda izinkan. Lihat [Yang dapat diminta asisten](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Diubah

- **Pita Steel** memiliki tombol besar dan kecil: {{ui:Balok}} besar di samping {{ui:Kolom}}, {{ui:Bresing}} dan {{ui:Pelat}} kecil pada {{ui:Pemodelan}} › {{ui:Batang}}; {{ui:Pelat ujung}} besar pada {{ui:Detailing}} › {{ui:Sambungan}}, dengan {{ui:Sambungan lewatan}} dan {{ui:Pelat buhul}} berbagi satu tombol terpisah; {{ui:Tempel}} besar pada {{ui:Edit}} › {{ui:Papan klip}}, dengan {{ui:Tempel di tempat yang sama}} dan {{ui:Duplikat}} di balik panah grup. {{ui:Fabrikasi}} › {{ui:Pertukaran}} memiliki {{ui:Ekspor USD}} di samping IFC. Gaya menu lainnya tampil seperti sebelumnya. Lihat [Menu, tombol pintas dan mouse](topic:menus-keys-and-mouse#the-three-styles).
- [Analisis rangka](topic:frame-analysis) kini menunjuk ke pemeriksaan desain, dan kombinasinya dapat dibuat menurut standar.

## Di setiap aplikasi

- **Satuan.** {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Satuan}} memiliki satu daftar masing-masing untuk panjang, luas, volume, sudut dan kemiringan, dengan ukuran persis sesuai definisi satuannya (US survey foot adalah satuan tersendiri). Matikan satuan yang tidak pernah Anda pakai dan satuan itu keluar dari daftar satuan; beri tanda bintang pada satu satuan dan pekerjaan baru dimulai dengannya. Sebuah file selalu menyimpan satuannya sendiri. Kotak milik DetailCraft belum mengikuti daftar: panjangnya masih diketik dalam milimeter. Lihat [Satuan, nilai yang diketik dan daftar satuan](common:unit-lists).
- **Tata letak lebih rapat dan panel yang dapat dirapikan.** {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Kepadatan tata letak}} › {{ui:Padat}} memuat lebih banyak di layar (layar sentuh dan ponsel tetap memakai tombol besarnya). Setiap panel samping memiliki bilah judul ramping: seret untuk menambatkan atau membuat panel mengambang, lepaskan di bilah panel lain untuk berbagi satu bingkai sebagai tab, sematkan agar panel meluncur ke tepi, atau sembunyikan dan panggil kembali dari tepi. Lihat [Atur panel](common:arrange-panels#make-the-layout-denser).
- **Dialog dapat dipindahkan.** Seret dialog dengan bilah judulnya agar tidak menghalangi gambar; dialog kembali ke tempat Anda meninggalkannya. Klik dua kali bilah judul untuk memusatkannya lagi. Lihat [Pindahkan dialog](common:arrange-panels#move-a-dialog).
- **Resep untuk asisten AI.** Sepuluh contoh permintaan untuk asisten Anda sendiri (merapikan gambar, mencetak set, memeriksa gambar, mengajukan pertanyaan tentang model, menjumlahkan takeoff, mencoba varian part…), masing-masing dengan alat yang dipanggilnya dan izin yang dibutuhkannya, dan masing-masing diulang oleh pengujian kami. Aplikasinya sendiri tidak mengandung AI. Lihat [Resep untuk asisten AI](common:assistants-recipes).
- **Bahasa.** **Português (Portugal)** baru di {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Bahasa}}. Bahasa itu, **Português (Brasil)**, **Español (México)** dan **Bahasa Indonesia** kini memiliki setiap kata aplikasi, sebagai draf yang belum ditinjau penutur asli. Topik bantuan berbahasa Inggris.
- **CadCraft Studio** menyebutkan alasan pemeriksaan pembaruan gagal (belum ada file untuk sistem Anda, tidak ada jaringan, tanda tangan tidak valid) alih-alih hanya "Selesai", dan berhenti memunculkan kembali kartu Yang baru yang sudah Anda tutup sampai ada rilis yang lebih baru.

## Belum ada di versi ini

- **0.7 tidak ditandatangani kodenya.** Penandatanganan, dan paket Microsoft Store, dipindahkan ke 0.8 karena validasi sertifikat belum selesai. Periksa SHA-256 di samping setiap file di getcadcraft.com/download. Di Windows, jika SmartScreen menghentikan installer, pilih {{ui:Info lainnya}}, lalu {{ui:Tetap jalankan}}. Di Mac, untuk pertama kali, klik kanan CadCraft Studio dan pilih {{ui:Buka}}. CadCraft Studio belum ada di toko aplikasi, dan belum ada build untuk iPad atau iPhone.
- Daftar sudut dan kemiringan di {{ui:Satuan}} disimpan, tetapi belum ada kotak yang membacanya.
- **Pemeriksaan desain belum ditinjau insinyur.** Pengujian kami membandingkannya dengan nilai tabel tercetak dan rumus yang dihitung manual, belum dengan contoh terhitung dari panduan desain. Sampai ditinjau, ini adalah alat bantu: periksa secara manual batang-batang yang penting.
- Pemeriksaan desain memakai gaya orde pertama (tanpa efek orde kedua) dan hanya memeriksa profil I. Belum dibuat: pipa, siku, kanal, bentuk las, bagian langsing (AISC) atau bagian kelas 4 (Eurocode) dalam lentur, torsi, tekuk geser bersama lentur, sambungan, kelelahan, api, detailing seismik dan beton. Bagian langsing yang menerima tekan tidak mengikuti pemeriksaan tekan, dan batang tercantum sebagai "lulus, sebagian diperiksa".
- Analisis rangka masih orde pertama dan linear, dan belum pernah dicoba insinyur pada proyek nyata.
- Lubang baut, baut, las dan fondasi tidak ada dalam ekspor USD.

Selebihnya ada di [Yang belum dibuat](topic:not-built-yet).
