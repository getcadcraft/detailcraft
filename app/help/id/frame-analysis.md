---
title: Analisis rangka
summary: Gaya, reaksi, dan lendutan balok, kolom, dan bresing sebagaimana digambar, di bawah kasus beban dan kombinasi yang Anda atur. Alat bantu analisis, bukan pemeriksaan kode; pemeriksaan desain adalah langkah terpisah.
keywords: analisis, analisis struktur, analisis rangka, metode kekakuan, beban, kasus beban, kombinasi, beban mati, beban hidup, berat sendiri, berat sendiri, reaksi, momen lentur, gaya geser, gaya aksial, lendutan, bentuk terlendut, tumpuan, sendi, jepit, pelepasan, laporan, pdf, csv, craftscript, frame3d
from: ba0081bc
---

Tab {{ui:Analisis}} di bagian bawah mencari gaya pada setiap balok, kolom, dan bresing di model, reaksi di dasar kolom, dan seberapa jauh batang melentur, untuk beban yang Anda berikan.

:::warning
Ini adalah **alat bantu analisis, bukan pemeriksaan kode**. Analisis tidak menerapkan kode desain apa pun: analisis tidak menentukan dimensi batang, tidak memeriksa kapasitas atau sambungan, dan tidak memilih faktor beban. Insinyur memeriksa model, beban, dan tumpuannya, lalu memutuskan arti angka-angka tersebut. Untuk pemeriksaan batang terhadap ASCE 7 / AISC 360 atau EN 1990 / EN 1993-1-1, lihat [Periksa batang baja terhadap kode desain](topic:design-checks), langkah terpisah yang juga merupakan alat bantu.
:::

## Menjalankannya

1. Buka tab {{ui:Analisis}}.
2. Pilih satu atau lebih batang di tampilan, pilih {{ui:Kasus}}, {{ui:Beban}} dan {{ui:Arah}}, ketik nilainya, lalu tekan {{ui:Tambah beban}}. Beban yang tersebar sepanjang batang dalam kN/m, beban titik dalam kN. {{ui:Ke bawah (gravitasi)}} adalah yang paling umum.
3. Tekan {{ui:Jalankan analisis}}.

Tabel mencantumkan gaya aksial N terbesar, gaya geser Vz dan Vy, momen lentur My dan Mz, torsi T, serta lendutan setiap batang, dengan momen terbesar di atas; klik nama batang untuk memilihnya. Di bawahnya terdapat reaksi di setiap tumpuan. {{ui:Pada model}} menggambar bentuk terlendut, atau satu aksi sebagai diagram di samping setiap batang dengan nilai terbesarnya tertulis di posisinya. Hasil menjadi usang begitu model berubah: jalankan ulang.

Setiap beban, kasus, dan pengaturan adalah satu langkah urungkan ({{key:Mod+Z}}) dan disimpan di berkas model.

## Kasus beban dan kombinasi

Analisis dimulai dengan tiga kasus: **Mati** (berat sendiri batang, dari penampang yang digambar dan 7850 kg/m³), **Hidup** (kosong), dan **Mati + hidup**. Tambahkan kasus Anda sendiri (angin, salju …) dan kombinasi: kombinasi menjumlahkan kasus dengan faktor yang Anda ketik. Analisisnya linear, sehingga setiap kasus diselesaikan sekali dan kombinasi adalah jumlahnya. Ketik faktornya sendiri, atau pilih kode desain dan biarkan {{ui:Buat kombinasi}} menulis kombinasi kode tersebut ([Periksa batang baja terhadap kode desain](topic:design-checks)).

## Bahan penyusun rangka

- Balok, kolom, dan bresing, masing-masing pada garis kerjanya (garis yang Anda gambar), dengan properti penampang nyata yang dihitung dari bentuk luarnya. Pelat, tangga, fondasi, dan baut tidak termasuk dalam rangka.
- Sebuah batang dipecah di tempat ujung batang lain bertumpu padanya, sehingga balok yang menyambung ke kolom di tengah tinggi akan tersambung di situ.
- **Dasar kolom**: jepit (di awal) atau sendi (tertahan di tempatnya dan terhadap puntir, bebas berputar). Pelat dasar selalu membentuk tumpuan.
- **Ujung balok**: pelat ujung bersifat kaku, pelat geser bersifat sendi. {{ui:Ujung balok tanpa sambungan}} mengatur sisanya. **Bresing** bersifat sendi di kedua ujungnya.
- Pilih satu batang untuk memberi ujungnya, atau dasar kolom, aturan tersendiri.
- Baja di mana pun: E = 200 GPa, G = 77 GPa.

Jika rangka dapat bergerak tanpa melenturkan apa pun, yaitu mekanisme seperti dasar sendi tanpa bresing pada satu arah, proses berhenti dan menyebutkan di mana serta ke arah mana. Tahan di situ dengan tumpuan, sambungan kaku, atau bresing.

## Tanda

N > 0 adalah tarik. My > 0 menempatkan sisi −z lokal batang dalam tarik: balok yang melendut di bawah gravitasi memiliki My > 0. Mz > 0 menempatkan sisi −y lokal dalam tarik. Lendutan diukur dari garis lurus di antara ujung batang. Sumbu z lokal batang menunjuk ke atas (untuk kolom: sepanjang X); sumbu lokalnya ikut berputar mengikuti rotasi batang.

## Laporan

{{ui:Laporan (PDF)}} dan {{ui:Laporan (CSV)}} memuat semuanya: asumsi tempat rangka dibangun, penampang, kasus dan kombinasi, lalu untuk setiap kasus dan kombinasi, reaksi (beserta jumlah beban dan reaksi yang saling menyeimbangkan), gaya batang dan perpindahan, serta amplop dari setiap kasus. {{ui:Ekspor sebagai CraftScript}} menulis rangka yang sama sebagai skrip untuk ruang kerja Script PartCraft, tempat fungsi pustaka `frame3d` menyelesaikannya langkah demi langkah dalam kode yang mudah dibaca.

## Metode

Metode kekakuan langsung, linear dan orde pertama kecuali Anda centang Orde kedua (P-Delta): kolom-balok dua simpul dengan empat kekakuan, yaitu aksial, puntir, dan dua lentur (tanpa deformasi geser, tanpa lengkung puntir), pelepasan ujung melalui kondensasi statis, serta beban sepanjang batang melalui fungsi bentuk batang itu sendiri. Hasilnya diperiksa terhadap kasus buku teks klasik (kantilever, balok sederhana, jepit, dan menerus, portal, kisi dalam puntir, dan rangka batang).

**Orde kedua (P-Delta).** Centang *Orde kedua (P-Delta)* di samping Jalankan: setiap kombinasi diselesaikan lagi dengan gaya aksial batang bekerja pada rangka yang sudah terlendut (setiap batang dipotong menjadi 4 bagian, sehingga lentur di antara ujung batang ikut dihitung), sampai gaya aksial stabil. Baris hasil menampilkan jumlah putaran dan seberapa besar goyangan bertambah; momen, lendutan, pemeriksaan desain, dan laporan kemudian memakai hasil ini. Di atas beban kritis elastis rangka, proses berhenti dan menyatakannya. Metode ini elastis dengan rotasi kecil, hanya lentur, tanpa reduksi kekakuan atau beban nosional (bukan metode analisis langsung AISC dengan sendirinya); pelat, dinding, dan lantai kaku tetap orde pertama.

**Frekuensi alami (elemen hingga).** Blok {{ui:Elemen hingga: frekuensi alami}} di bawah hasil mencari moda terendah dari model yang sama dengan mesin elemen hingga: balok dengan pelepasan ujungnya, pelat dan dinding sebagai cangkang empat simpul datar, lantai kaku, serta tumpuan. Pilih jumlah moda (3, 6, 10, atau 20) dan elemen pelat (cangkang empat simpul untuk pelat tebal atau tipis, atau elemen pelat tipis), lalu tekan {{ui:Cari frekuensi}}. Tabel memberikan frekuensi setiap moda dalam Hz, periodenya dalam detik, dan massa modal efektifnya sepanjang X, Y, dan Z sebagai bagian dari massa yang dapat bergerak. {{ui:Tampilkan pada model}} menggambar moda mana pun dengan cara bentuk terlendut digambar. Massa adalah densitas material dikali volume: beban tidak menambah massa, dan material tanpa densitas tidak memiliki massa. Laporan (PDF, CSV) memuat tabel ini. Metode ini hanya elastis dan untuk gerakan kecil, dan tidak ada beban gempa atau angin yang dibuat di sini berdasarkan kode. Bukan pemeriksaan kode; insinyur Anda meninjau hasilnya.

**Spektrum respons, riwayat waktu, dan pushover.** Tiga blok lagi berada di bawah frekuensi, memakai model elemen hingga yang sama. Massa untuk semuanya adalah densitas material ditambah beban ke bawah dari kasus yang Anda centang, masing-masing dikali faktor yang Anda ketik (misalnya Mati 1 dan Hidup sebesar bagian yang Anda hitung sebagai massa).

{{ui:Spektrum respons}} membaca setiap moda dari spektrum yang Anda berikan (tabel periode dan percepatan, atau bentuk ASCE 7 dari SDS, SD1, dan TL; {{ui:Gunakan nilai blok Seismik}} menyalin nilai itu dari blok Seismik), lalu menggabungkan moda dengan CQC, SRSS, aturan sepuluh persen, atau jumlah mutlak, kemudian menggabungkan arah X, Y, dan Z (100 % + 30 % atau SRSS). Hasilnya mencakup gaya geser dasar, simpangan antar lantai, gaya ujung batang, dan tabel moda yang memberi peringatan jika moda yang dipakai membawa kurang dari 90 % massa. Anda dapat menskalakan hasil dengan faktor atau sampai gaya geser dasar yang Anda ketik; blok ini tidak pernah menghitung gaya geser dasar itu sendiri. Hasilnya tidak memiliki tanda.

{{ui:Riwayat waktu}} menjalankan percepatan tanah dengan superposisi moda (eksak untuk garis lurus di antara titik rekaman) atau dengan integrasi langsung (percepatan rata-rata Newmark dengan redaman Rayleigh). Masukannya berupa sinus atau pulsa buatan (selalu diberi label sintetis), rekaman yang Anda tempel, atau berkas teks yang Anda buka (waktu dan percepatan, satu percepatan per baris dengan langkah tetap, atau berkas bergaya PEER dengan header DT=; dalam g atau m/s²). Hasilnya mencakup perpindahan atap dan gaya geser dasar terhadap waktu, simpangan setiap lantai, serta amplop gaya ujung batang. Model dengan rekaman yang sangat panjang hanya menyimpannya untuk sesi ini.

{{ui:Pushover}} mendorong atap ke samping dalam langkah kecil (pola seperti moda pertama, atau seragam), dengan sendi plastis di ujung batang yang berbentuk profil I. Sendi meleleh pada momen plastis, yang berkurang seiring bertambahnya gaya aksial (dihitung dari bentuk yang digambar, lengkung sudut diabaikan); pengerasan bersifat opsional, P-delta bersifat opsional, dan kombinasi gravitasi dapat diterapkan lebih dulu. Hasilnya mencakup kurva kapasitas (gaya geser dasar terhadap perpindahan atap), sendi pertama yang meleleh, serta keadaan dan rotasi plastis setiap sendi. {{ui:Jalankan riwayat waktu nonlinear}} menjalankan sendi yang sama di bawah rekaman blok Riwayat waktu untuk model kecil. Sendi hanya terbentuk di ujung batang (letakkan simpul di tempat sendi seharusnya terbentuk di dalam bentang); batang yang dilepas di kedua ujungnya tidak mendapatkannya; leleh dan tekuk bresing tidak dimodelkan; pelat dan dinding tetap elastis; dan tidak ada kriteria penerimaan yang diberikan. Bukan pemeriksaan kode; insinyur Anda meninjau hasilnya. Pengaturan disimpan bersama model, dan laporan memuat tabelnya.

Belum dibuat: analisis tekuk, koreksi massa yang hilang untuk spektrum respons, penskalaan rekaman, kriteria penerimaan untuk sendi (respons dinamis tersedia, seperti di atas), beban area dan angin yang dibuatkan untuk Anda (gaya gempa pada lantai ada di [Periksa batang beton dan buat beban seismik](topic:concrete-and-seismic)), offset batang, bresing hanya-tarik. Lihat [Belum dibuat](topic:not-built-yet).
