---
title: Semak anggota konkrit dan buat beban seismik
summary: Sediakan bar rasuk dan tiang konkrit, semak mengikut ACI 318-19, buat daya sisi setara ASCE 7-22 pada lantai tegar, dan lihat hanyutan tingkat. Bantuan untuk jurutera menyemak.
keywords: konkrit, konkrit bertetulang, ACI 318, ACI 318-19, tetulang, rasuk, tiang, ricih, tali, seismik, gempa bumi, daya sisi setara, ELF, ASCE 7-22, hanyutan, hanyutan tingkat, lantai, diafragma tegar, berat tingkat, utilisasi, utilization, struktur, jurutera
from: 94d3001d
---

Blok {{ui:Anggota konkrit}} dan {{ui:Beban seismik}} dalam tab {{ui:Analisis}} menyemak rasuk dan tiang konkrit bertetulang, dan membuat daya sisi gempa bumi pada lantai sesebuah rangka. Kedua-duanya mengikut larian tab {{ui:Analisis}} dan disimpan bersama model.

:::warning
Keputusan adalah **untuk semakan oleh jurutera**: satu bantuan sehingga seseorang telah menyemaknya. Semakan konkrit menggunakan daya tertib pertama, kecuali bahawa tiang dalam rangka yang anda panggil tidak bergoyang direka untuk momen terbesarnya, tanpa pembesaran goyangan, tanpa reka bentuk kilas, tanpa perincian seismik (bab 18 ACI) dan tanpa perincian tali. Beban seismik tidak mengambil kira faktor lebihan, kesan seismik menegak, pembesaran kilas dan kesan P-delta. Beban angin belum dibina.
:::

## Lukis anggota

Lukis anggota konkrit sebagai segi empat tepat: profil {{ui:Plat}} seperti `PL400x400` untuk tiang dan `PL300x600` untuk rasuk memberikan keratan. Tiang dan rasuk diletakkan seperti mana-mana anggota lain.

## Sediakan keratan

Blok {{ui:Anggota konkrit}} menyenaraikan setiap keratan yang digunakan anggota. Tekan {{ui:Sediakan sebagai konkrit…}} pada yang merupakan konkrit. DetailCraft membaca lebar **b** (sepanjang paksi y anggota sendiri) dan kedalaman **h** (sepanjang z) daripada profil yang dilukis, kemudian meminta:

- **penutup** ke pusat bar, dan bar **atas**, **bawah** dan **sisi** (berapa dan diameter yang mana) bagi rasuk, atau **sangkar tiang** (bar sepanjang b dan sepanjang h, diameter yang mana, tali spiral) bagi tiang;
- **tali**: kaki, diameter dan jarak;
- apa yang **anggota itu bertindak sebagai**: rasuk, tiang, atau ditentukan daripada dayanya (anggota tegak, atau yang membawa lebih daripada 0.10 f′c Ag, ialah tiang).

Tetapkan f′c, hasil bar fy dan hasil tali fyt (paling tinggi 420 MPa dikira untuk ricih), K dan sama ada rangka ialah bergoyang atau tidak bergoyang di atasnya. Keratan yang disediakan sebagai konkrit dianalisis sebagai konkrit: E = 4700 √f′c, 2400 kg/m³, dan secara lalai dengan **keratan retak** (tiang 0.70 Ig, rasuk 0.35 Ig; ACI 318-19 Jadual 6.6.3.1.1(a)). Pilih {{ui:Keratan kasar}} untuk mematikannya.

## Buat kombinasi dan semak

Berikan jenis kepada kes beban, kemudian {{ui:Buat kombinasi}}: ACI 318-19 mengambil kombinasi kekuatan ASCE 7 (§5.3.1). Tekan {{ui:Semak konkrit}} dan setiap anggota mendapat penggunaan, diwarnakan pada model seperti semakan keluli: lenturan dan keluli minimum (22.2, 9.6.1.2), terikan terkawal tegangan (9.3.3.1), ricih dengan tali (22.5, 9.6.3), jarak tali, dan beban paksi dengan momen untuk tiang (22.4, dengan kaedah Bresler bagi lenturan dua hala). Anggota yang keratan lukisannya berbeza daripada b × h yang anda taip dibaca sebagai *separa disemak*, begitu juga tiang langsing atau kilas di atas ambang: itu tidak direka.

Anggota yang melebihi kapasitinya disenaraikan dalam {{ui:Masalah}}; terima satu dengan sebab, atau betulkan keratan.

## Lantai dan beban seismik

Lantai ialah aras tempat rangka dipegang bersama oleh papak tegar (**diafragma tegar**). Dalam blok {{ui:Beban seismik}} tekan {{ui:Cari tingkat}}: ia mengambil aras tempat dua atau lebih rasuk bertemu. Kemudian berikan setiap lantai **berat seismiknya**, ditaip atau dibaca. {{ui:Ambil berat daripada kes}} menjumlahkan beban menegak bagi kes yang anda beri faktor (kes mati ialah 1; tambah 0.25 pada kes hidup penyimpanan atau salji pada bumbung rata seperti yang diminta ASCE 7-22 12.7.2). Beban menegak setiap nod pergi ke lantai pada atau di atasnya, jadi tiang di antara dua lantai memberi separuh beratnya kepada setiap satu.

Isikan nilai reka bentuk: SDS, SD1, S1, R, Ie, Cd, TL, sistem struktur (untuk tempoh) dan kategori risiko. {{ui:Buat kes seismik}} kemudian mengira tempoh daripada ketinggian bangunan (12.8.2.1), ricih asas V = Cs W (12.8.1), mengagihkannya ke atas lantai (12.8.3) dan menulis empat kes beban, dalam X dan Y dengan kilas tidak sengaja 5 % setiap arah (12.8.4.2). Daya tingkat dan semakan hanyutan tingkat (12.8.6, Jadual 12.12-1, hanyutan Cd δxe / Ie berbanding 0.020 hsx) muncul selepas larian; hanyutan yang melebihi had juga merupakan masalah. Tekan {{ui:Buat kombinasi}} sekali lagi untuk membawa kes seismik ke dalam kombinasi.

**Tempoh daripada analisis.** Tempoh anggaran Ta datang daripada ketinggian bangunan. Apabila anda telah menjalankan analisis dengan kes seismik, {{ui:Ambil tempoh daripada analisis}} membaca sejauh mana setiap lantai bergerak di bawah daya dan mengira tempoh dengan kaedah Rayleigh, T = 2π √(Σ w δ² / (g Σ f δ)), sekali untuk X dan sekali untuk Y; kes seismik dibuat semula dengannya. Tempoh yang digunakan tidak pernah melebihi Cu·Ta (ASCE 7-22 12.8.2), jadi model yang lembut tidak boleh menurunkan ricih asas di bawah itu. Ambil tempoh sekali lagi selepas larian kedua: ia menetap dalam satu atau dua langkah. Nyahtanda {{ui:Tempoh daripada analisis}} untuk kembali ke Ta.

**Tiang langsing (ACI 318-19 6.6.4.5).** Bagi rangka yang anda panggil tidak bergoyang, tiang yang k·ℓu/r-nya melebihi 34 + 12·M1/M2 (paling tinggi 40) direka untuk momen terbesar Mc = δns · M2: δns = Cm / (1 − Pu / 0.75 Pc), Pc = π² (EI)eff / (k ℓu)² dengan (EI)eff = 0.4 Ec Ig / (1 + βdns), dan momen minimum Pu (15 + 0.03 h). βdns (0.6 untuk permulaan) ialah bahagian beban paksi terfaktor yang ditanggung: taip nilai anda sendiri. Tiang yang Pu-nya mencapai 0.75 Pc gagal dengan semakannya sendiri. Laporan menyenaraikan nombor setiap tiang langsing. Dalam rangka **bergoyang**, tiang langsing masih "separa disemak": pembesarannya memerlukan analisis tertib kedua, yang belum dibina.

**Papak.** Apabila model mempunyai plat, blok {{ui:Tetulangan papak}} mengambil momen plat bagi setiap kombinasi kekuatan dan, mengikut peraturan Wood–Armer (lenturan dan kilasan bersama), mengira keluli yang diperlukan setiap lapisan per meter: bawah dan atas, dalam x dan dalam y. Anda memberi ketebalan, penutup dan bar; jadual menunjukkan yang diperlukan berbanding yang diberi dan ricih satu hala berbanding φVc, dan lapisan yang kurang ialah masalah dengan klausanya. Lenturan, tebukan di tiang dan bar pemangkas pada bukaan tidak dilindungi, dan momen di atas penyokong menumpu perlahan dengan plat empat nod.

Setiap lantai yang anda senaraikan menjadi diafragma tegar dalam analisis: rasuknya tidak membawa daya paksi daripada pergerakan lantai. Eksport CraftScript tidak dibuat untuk model dengan lantai.

## Laporan

{{ui:Laporan (PDF)}} dan {{ui:Laporan (CSV)}} memperoleh jadual konkrit (andaian, penggunaan mengikut anggota, setiap klausa), parameter seismik dan ricih asas, daya pada lantai dan jadual hanyutan.
