---
title: Periksa elemen beton dan buat beban seismik
summary: Atur tulangan balok dan kolom beton, periksa menurut ACI 318-19, buat gaya lateral ekuivalen menurut ASCE 7-22 pada lantai kaku, dan lihat simpangan tingkat. Alat bantu untuk insinyur memeriksa.
keywords: beton, beton bertulang, ACI 318, ACI 318-19, tulangan, balok, kolom, geser, pengikat, seismik, gempa, gaya lateral ekuivalen, ELF, ASCE 7-22, simpangan, simpangan tingkat, lantai, diafragma kaku, berat tingkat, utilisasi, utilization, struktural, insinyur
from: 94d3001d
---

Blok {{ui:Elemen beton}} dan {{ui:Beban seismik}} di tab {{ui:Analisis}} memeriksa balok dan kolom beton bertulang, serta membuat gaya samping gempa pada lantai-lantai sebuah bingkai. Keduanya mengikuti proses yang dijalankan di tab {{ui:Analisis}} dan disimpan bersama model.

:::warning
Hasilnya **untuk diperiksa oleh insinyur**: alat bantu sampai seorang insinyur telah meninjaunya. Pemeriksaan beton memakai gaya orde pertama, kecuali bahwa kolom pada bingkai yang Anda sebut non-sway didesain untuk momen terbesarnya, tanpa pembesaran sway, tanpa desain torsi, tanpa detail seismik (pasal 18 ACI), dan tanpa detail pengikat. Beban seismik tidak memperhitungkan faktor redundansi, efek seismik vertikal, amplifikasi torsi, dan efek P-delta. Beban angin belum dibuat.
:::

## Gambar elemen

Gambar elemen beton sebagai persegi panjang: profil {{ui:Pelat}} seperti `PL400x400` untuk kolom dan `PL300x600` untuk balok memberi penampangnya. Kolom dan balok ditempatkan seperti elemen lainnya.

## Atur penampang

Blok {{ui:Elemen beton}} mencantumkan setiap penampang yang digunakan elemen. Tekan {{ui:Siapkan sebagai beton…}} pada yang berupa beton. DetailCraft membaca lebar **b** (sepanjang sumbu y elemen itu sendiri) dan kedalaman **h** (sepanjang z) dari profil yang digambar, lalu meminta:

- **selimut** ke pusat batang, dan **batang atas**, **bawah**, dan **samping** (berapa banyak dan diameter berapa) untuk balok, atau **rangka batang kolom** (batang sepanjang b dan sepanjang h, diameter berapa, dan sengkang spiral) untuk kolom;
- **pengikat**: kaki, diameter, dan jaraknya;
- elemen itu **berfungsi sebagai apa**: balok, kolom, atau diputuskan dari gayanya (elemen vertikal, atau yang memikul lebih dari 0.10 f′c Ag, adalah kolom).

Tetapkan f′c, tegangan leleh batang fy dan tegangan leleh pengikat fyt (paling tinggi 420 MPa yang diperhitungkan untuk geser), K, dan apakah bingkai sway atau non-sway di atasnya. Penampang yang diatur sebagai beton dianalisis sebagai beton: E = 4700 √f′c, 2400 kg/m³, dan secara default dengan **penampang retak** (kolom 0.70 Ig, balok 0.35 Ig; ACI 318-19 Tabel 6.6.3.1.1(a)). Pilih {{ui:Penampang bruto}} untuk mematikannya.

## Buat kombinasi dan periksa

Beri kasus beban jenisnya, lalu {{ui:Buat kombinasi}}: ACI 318-19 memakai kombinasi kekuatan ASCE 7 (§5.3.1). Tekan {{ui:Periksa beton}} dan setiap elemen mendapat utilisasi, diberi warna pada model seperti pemeriksaan baja: lentur dan tulangan minimum (22.2, 9.6.1.2), regangan terkendali tarik (9.3.3.1), geser dengan pengikat (22.5, 9.6.3), jarak pengikat, dan beban aksial dengan momen untuk kolom (22.4, dengan metode Bresler untuk lentur dua arah). Elemen yang penampangnya yang digambar berbeda dari b × h yang Anda ketik terbaca *sebagian diperiksa*, begitu pula kolom langsing atau torsi di atas ambang: hal-hal itu tidak didesain.

Elemen yang melebihi kapasitasnya dicantumkan di {{ui:Masalah}}; terima satu dengan alasan, atau perbaiki penampangnya.

## Lantai dan beban seismik

Lantai adalah level tempat bingkai dipegang bersama oleh pelat kaku (**diafragma kaku**). Di blok {{ui:Beban seismik}} tekan {{ui:Cari lantai}}: ia mengambil level tempat dua balok atau lebih bertemu. Lalu beri setiap lantai **berat seismiknya**, diketik atau dibaca: {{ui:Ambil berat dari kasus}} menjumlahkan beban vertikal dari kasus yang Anda beri faktor (kasus mati adalah 1; tambahkan 0.25 pada kasus hidup gudang atau salju pada atap datar, seperti yang diminta ASCE 7-22 12.7.2). Beban vertikal setiap nodus masuk ke lantai pada atau di atasnya, jadi kolom di antara dua lantai memberikan separuh bebannya ke masing-masing lantai.

Isi nilai desain: SDS, SD1, S1, R, Ie, Cd, TL, sistem struktur (untuk periode), dan kategori risiko. {{ui:Buat kasus seismik}} kemudian menghitung periode dari tinggi bangunan (12.8.2.1), gaya geser dasar V = Cs W (12.8.1), menyebarkannya ke atas lantai (12.8.3), dan menulis empat kasus beban, dalam X dan Y dengan torsi tak terduga 5 % pada masing-masing arah (12.8.4.2). Gaya tingkat dan pemeriksaan simpangan tingkat (12.8.6, Tabel 12.12-1, simpangan Cd δxe / Ie terhadap 0.020 hsx) muncul setelah sebuah proses; simpangan yang melampaui batasnya juga menjadi masalah. Tekan {{ui:Buat kombinasi}} lagi untuk memasukkan kasus seismik ke dalam kombinasi.

**Periode dari analisis.** Periode perkiraan Ta berasal dari tinggi bangunan. Ketika Anda sudah menjalankan analisis dengan kasus seismik, {{ui:Ambil periode dari analisis}} membaca seberapa jauh setiap lantai bergerak di bawah gaya dan menghitung periode dengan metode Rayleigh, T = 2π √(Σ w δ² / (g Σ f δ)), sekali untuk X dan sekali untuk Y; kasus seismik dibuat ulang dengannya. Periode yang dipakai tidak pernah lebih dari Cu·Ta (ASCE 7-22 12.8.2), jadi model yang lunak tidak dapat menurunkan geser dasar di bawah batas itu. Ambil periode lagi setelah proses kedua: ia stabil dalam satu atau dua langkah. Hapus centang {{ui:Periode dari analisis}} untuk kembali ke Ta.

**Kolom langsing (ACI 318-19 6.6.4.5).** Untuk bingkai yang Anda sebut non-sway, kolom yang k·ℓu/r-nya lebih dari 34 + 12·M1/M2 (paling tinggi 40) didesain untuk momen yang diperbesar Mc = δns · M2: δns = Cm / (1 − Pu / 0.75 Pc), Pc = π² (EI)eff / (k ℓu)² dengan (EI)eff = 0.4 Ec Ig / (1 + βdns), dan momen minimum Pu (15 + 0.03 h). βdns (0.6 untuk awal) adalah bagian dari beban aksial terfaktor yang bersifat tetap (sustained): ketikkan sendiri. Kolom yang Pu-nya mencapai 0.75 Pc gagal dengan pemeriksaannya sendiri. Laporan mencantumkan angka setiap kolom langsing. Pada bingkai **sway**, kolom langsing tetap "sebagian diperiksa": pembesarannya memerlukan analisis orde kedua, yang belum dibuat.

**Pelat.** Ketika model memiliki pelat, blok {{ui:Tulangan pelat}} mengambil momen pelat dari setiap kombinasi kekuatan dan, dengan aturan Wood–Armer (lentur dan puntir bersama), menghitung baja yang dibutuhkan setiap lapisan per meter: bawah dan atas, dalam x dan dalam y. Anda memberi tebal, selimut, dan batangnya; tabel menampilkan yang dibutuhkan dibanding yang diberikan, serta geser satu arah dibanding φVc, dan lapisan yang kurang adalah masalah dengan klausulnya. Lendutan, geser pons di kolom, dan batang tepi di bukaan tidak tercakup, dan momen di atas tumpuan konvergen lambat dengan pelat empat nodus.

Setiap lantai yang Anda cantumkan menjadi diafragma kaku dalam analisis: balok-baloknya tidak memikul gaya aksial dari pergerakan lantai. Ekspor CraftScript tidak dibuat untuk model dengan lantai.

## Laporan

{{ui:Laporan (PDF)}} dan {{ui:Laporan (CSV)}} mendapat tambahan tabel beton (asumsi, utilisasi per elemen, setiap klausul), parameter seismik dan geser dasar, gaya pada lantai, serta tabel simpangan.
