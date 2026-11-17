---
title: Perkara baharu dalam 0.9
summary: Saiz keluli UK daripada Blue Book dan sudut tidak sama, lukisan bengkel bagi setiap bahagian dalam satu set PDF, Profil saya untuk seksyen tersuai, P-Delta dan frekuensi tabii, beban angin ASCE 7, tapak seismik dan gabungan, serta kursor langsung dengan Ikut.
keywords: perkara baharu, apa yang baharu, nota keluaran, senarai perubahan, 0.9, keluli UK, blue book, ub, uc, pfc, shs, rhs, chs, sudut tidak sama, unequal angle, lukisan bengkel, set helaian, tanda bahagian, pdf, profil saya, profil tersuai, p-delta, tertib kedua, frekuensi tabii, elemen terhingga, jisim modal, beban angin, asce 7, seismik, kelas tapak, usgs, gabungan beban, lrfd, asd, langsung, kursor, ikut, orang, tip alat, nota keluaran, senarai perubahan, perubahan, 0.8, 0.8.1, versi, ciri baharu, pendirian, kren, carta beban, filem, autopilot, sambungan, tetulang, kesesakan, asas, tapak asas, rakit, enapan, rangka, kayu, ringan, senarai potongan, kebolehbinaan, akses kimpalan, pembekal, stok, masa menunggu, apa yang pecah dahulu, konkrit, seismik, papak, bahasa, pembantu
from: 4c95a2de
---

Ini ialah perkara yang berubah dalam DetailCraft 0.9, berbanding 0.8.1. 0.9 membawa saiz keluli UK, lukisan bengkel bagi setiap bahagian sekali gus, tab {{ui:Analisis}} yang lebih besar untuk rangka, dan paparan kursor rakan sekerja apabila anda bekerjasama.

## Baharu

### Keluli UK dan lukisan bengkel

- **Saiz keluli UK.** Senarai profil kini mengandungi 976 saiz daripada Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS dan RHS, dengan seksyen berongga terbentuk sejuk diasingkan (nama mereka bermula dengan CF). Nama ditulis dengan keluarga dahulu, seperti UB305x165x40 atau SHS100x100x5.0, dan menaip seperti yang ditulis dalam lukisan juga berfungsi: 305x165x40 UB, L100x100x10, SHS100x5. Lihat [Katalog profil](topic:profile-catalog).
- **Sudut tidak sama.** Sudut UEA mengekalkan kedua-dua kakinya melalui IFC masuk dan keluar serta melalui fail NC, dan cermin memusingkan keping hujung ke hujung.
- **Semua lukisan bengkel sekaligus.** Pilih {{ui:Lukisan bengkel}} dalam kumpulan {{ui:Output}} tanpa apa-apa yang dipilih. Tetingkap itu menyenaraikan setiap tanda bahagian, memaparkan pratonton mana-mana daripadanya, dan {{ui:Muat turun semua}} menyimpan satu PDF dengan satu halaman bagi setiap tanda, setiap satu bertajuk "Helaian 3 daripada 42". {{ui:Muat turun PDF}} menyimpan yang sedang anda lihat. Saluran, sudut dan seksyen berongga kini turut mendapat helaian. Lihat [Buat lukisan bengkel](topic:shop-drawings).
- **Profil saya.** Profil tersuai kini boleh disimpan untuk setiap model baharu. Dalam borang Profil tersuai, biarkan {{ui:Simpan dalam Profil saya}} ditanda; senarai {{ui:Profil saya}} di bawahnya mempunyai {{ui:Simpan}}, {{ui:Guna di sini}} dan {{ui:Alih keluar}}. Senarai disimpan dalam pelayar ini (sehingga 200), bukan dalam akaun anda. Lihat [Plat dan profil](topic:plates-and-profiles).

### Analisis

- **Peringkat kedua (P-Delta).** Tanda {{ui:Peringkat kedua (P-Delta)}} di sebelah {{ui:Jalankan}} dalam tab {{ui:Analisis}} dan daya paksi bertindak pada rangka yang terpesong. Plat dan lantai tegar kekal tertib pertama, dengan amaran. Lihat [Daya, tindak balas dan pesongan](topic:frame-analysis).
- **Frekuensi tabii.** Blok {{ui:Elemen terhingga: frekuensi tabii}} di bawah keputusan mencari mod terendah model yang sama, dengan tempoh dan jisim modal berkesan, dan memaparkan satu mod pada model. Lihat [Daya, tindak balas dan pesongan](topic:frame-analysis).
- **Beban angin dan tapak seismik.** Tiga blok baharu dalam tab {{ui:Analisis}}: {{ui:Beban angin (prosedur arah ASCE 7)}}, {{ui:Tapak dan sistem seismik (ASCE 7)}} dan {{ui:Gabungan beban ASCE 7}}. Lihat [Angin, tapak seismik dan gabungan ASCE 7](topic:wind-seismic-combinations).

### Bekerjasama

- **Kursor dan nama.** Dalam sesi Langsung, penunjuk setiap orang dilukis dalam model dengan nama dan warnanya, dan apa yang mereka pilih mendapat kotak.
- **Ikut seseorang.** Buka {{ui:Orang}} dalam sesi dan pilih {{ui:Ikut}} pada satu nama; pandangan anda bergerak mengikut mereka. Hos boleh memilih {{ui:Minta semua orang mengikut saya}}. Lihat [Ikut seseorang dalam sesi Langsung](topic:follow-in-live).

### Dalam setiap aplikasi

- Tip alat ialah tip alat Bootstrap, kad tip mula mempunyai butang tutup, jalur tab bergulung ke sisi apabila tidak muat, dan nama tab pelayar menamakan dokumen yang dibuka diikuti DetailCraft dan CadCraft.

## Diperbaiki

- Profil tersuai hilang apabila anda memulakan model baharu.
- Saluran, sudut dan seksyen berongga tiada dalam set lukisan bengkel.

## Had yang jujur

- Blok angin, seismik dan elemen terhingga ialah alat bantu semakan. Jurutera anda menyemak keputusan; ia bukan semakan kod. Carian USGS diuji pada perkhidmatan gantian, bukan pada perkhidmatan langsung.
- Elemen terhingga dan P-Delta disemak berbanding jawapan tangan dan bentuk tertutup, bukan bangunan sebenar. Analisis lengkukan belum dibina.
- Belum ada pembuat keluli UK yang mencuba saiz UK lagi, dan fail NC bagi sudut tidak sama belum dijalankan pada mesin.
- Set lukisan bengkel hanya PDF.
- Bahasa selain Inggeris ialah draf mesin.
- Pemasang Windows tidak ditandatangani kod ({{ui:Maklumat lanjut}}, kemudian {{ui:Jalankan juga}}); imej cakera macOS tidak dinotarikan (klik kanan, kemudian {{ui:Buka}}).

Perubahan terdahulu ada dalam nota 0.8 dan 0.8.1 di bahagian bawah halaman ini.

## Terdahulu: 0.8 dan 0.8.1

Ini ialah perkara yang berubah dalam DetailCraft 0.8 (1 November 2026) dan 0.8.1 (2 November 2026), berbanding 0.7. 0.7 menyemak anggota keluli; 0.8 merancang angkatan, mencadangkan sambungan, menyemak asas dan tetulang, serta membingkai dinding, lantai dan bumbung kayu dan ringan.

### Baharu

**Pendirian**

- **Pelan pendirian dan filem.** Dalam tab {{ui:Pendirian}}, terangkan kren (di mana ia berdiri, cangkuk tertingginya, pengikat yang tiada dalam carta) dan taip baris carta bebannya. DetailCraft mengangkat model satu himpunan pada satu masa, mengikut urutan fasa dan tingkat demi tingkat, dan menyemak setiap angkatan berbanding carta pada jejarinya serta margin yang anda tetapkan. {{ui:Simpan filem}} menulis satu fail HTML yang dimainkan luar talian dalam mana-mana pelayar, juga pada telefon. Angkatan yang melebihi carta, melepasinya atau terlalu tinggi ada dalam {{ui:Masalah}}. Ia ialah pelan daripada nombor anda, bukan pelan angkatan. Lihat [Pelan pendirian dan filem](topic:erection-movie).

**Sambungan**

- **Autopilot sambungan.** Tab {{ui:Autopilot}} melihat setiap sambungan yang tiada sambungan dan mencadangkan satu daripada bentuk: plat tapak, tab ricih, plat hujung bagi rasuk yang anda tanda sebagai rasuk momen, penyambung dan plat gusset. Beri beban seragam atau satu ricih hujung dan bilangan bolt mengikut kekuatan reka bentuk bolt. {{ui:Tambah semuanya}} menambah cadangan sebagai satu langkah buat asal. Ia ialah nilai permulaan untuk disemak, bukan reka bentuk sambungan.
- **Semakan kebolehbinaan.** {{ui:Masalah}} bagi bolt yang tidak dapat dicapai kunci, bolt yang terlalu rapat untuk soket, kimpalan sudut di luar had saiznya dan seksyen berongga yang menakung air. Akses kimpalan ialah ciri baharu: kimpalan sudut mengelilingi yang tidak dapat dicapai oleh obor kimpalan disenaraikan bersama bahagian yang menghalang dan bahagian kimpalan yang terjejas. Lihat [Semakan kebolehbinaan](topic:constructability).

**Asas dan tetulang**

- **Semakan asas.** Tab {{ui:Asas}} menyemak tapak asas, tapak asas gabungan dan rakit di atas tanah yang anda terangkan: galas, gelincir dan guling daripada beban perkhidmatan; lenturan, ricih, tebukan, pembangunan dan keluli minimum daripada beban terfaktor (ACI 318-19). Tiang berhampiran tepi atau sudut disemak dengan keratan yang dipotong oleh tepi tapak asas. Enapan datang daripada modulus tanah, rakit fleksibel diselesaikan atas spring daripada modulus subgred, dan kumpulan cerucuk serta dinding penahan mempunyai panel tersendiri. Beban tiang boleh ditaip atau diambil daripada {{ui:Analisis}}. Lihat [Semakan asas](topic:foundation-checks).
- **Peta kesesakan tetulang.** Tab {{ui:Kesesakan}} melukis peta haba bagi setiap tapak asas seperti dilihat dari atas: di mana bar tinggal ruang terlalu sedikit untuk konkrit masuk ke bawah, berbanding peraturan jarak bersih dan, jika anda berikan, agregat terbesar dan kepala penggetar. Lihat [Peta kesesakan tetulang](topic:rebar-congestion).

**Rangka dan bekalan**

- **Rangka kayu dan ringan.** Tab {{ui:Rangka}} membingkai panel dinding, lantai dan bumbung dengan setiap keping, senarai potongan, stok untuk dibeli dan lukisan bengkel mengikut skala. {{ui:Letakkan sebagai anggota}} meletakkan keping dalam model, dan {{ui:Helaian PDF}} menyimpan satu helaian bagi setiap panel. Saiz, jarak dan kepala ialah milik anda: DetailCraft tidak menyemak sama ada ia menanggung beban. Lihat [Panel rangka kayu dan ringan](topic:framing-panels).
- **Stok pembekal dan masa menunggu.** Tab {{ui:Bekalan}} membaca senarai stok pembekal (CSV) dan menunjukkan, bagi setiap seksyen yang dibeli oleh senarai potongan, sama ada stok mencukupi dan berapa lama menunggu. Kekurangan dan seksyen lewat ada dalam {{ui:Masalah}}. Tiada apa-apa dipesan. Lihat [Stok pembekal dan masa menunggu](topic:supplier-stock).

**Analisis dan reka bentuk**

- **Apa yang pecah dahulu?** Dalam tab {{ui:Analisis}}, butang ini mencari gabungan kekuatan yang menentukan, anggota yang paling lemah, sejauh mana beban boleh bertambah sebelum anggota pertama mencapai hadnya, dan plat hujung atau tab ricih yang paling lemah apabila kekuatan ricih bolt-boltnya diketahui. Ia memerlukan gabungan dan kod reka bentuk dahulu. Galas, ricih blok, kimpalan dan pengungkitan tidak disemak. Pembantu yang disambungkan anda boleh meminta perkara yang sama.
- **Langsung.** Tanda {{ui:Langsung: selesaikan semula selepas setiap suntingan}} dan rangka diselesaikan semula selepas setiap suntingan.
- **Konkrit, lebih lagi.** Tiang langsing dalam rangka tanpa goyangan direka untuk momen terbesarnya (ACI 318-19 6.6.4.5). Tempoh seismik boleh diambil daripada analisis dengan kaedah Rayleigh. Papak yang diperbuat daripada plat mendapat keluli yang diperlukan setiap lapisan daripada momennya, serta ricih sehala. Lihat [Semak ahli konkrit dan buat beban seismik](topic:concrete-and-seismic).
- **Untuk jurutera menyemak.** Keputusan asas, konkrit dan Apa yang pecah dahulu ialah alat bantu. Beban angin belum dibina.

**Dalam setiap aplikasi**

- **Bahasa.** Bantuan tersedia dalam 54 bahasa. Yang selain Inggeris ialah draf mesin sehingga penutur asli membacanya; sepuluh adalah baharu (Lithuania, Latvia, Bosnia, Marathi, Telugu, Albania, Afrikaans, Filipino, Swahili, Uzbek).
- **Baris bar alat.** {{ui:Tetapan}} › {{ui:Umum}} › {{ui:Baris bar alat}} memilih balut, 2 baris atau 1 baris. Bar yang sudah muat kekal seperti sedia ada; yang lain bergulung ke sisi.
- **Grid sifat.** Medan tapak asas menggunakan grid kongsi: kategori boleh dilipat dan ketumpatan padat. Aritmetik yang ditaip seperti 2*450 masih berfungsi.
- **Peranti input.** Pad sentuh, pen, tetikus 3D, pengawal dan MIDI boleh mengawal aplikasi. Lihat [Navigasi dalam 3D](topic:navigate-3d).
- **Panel masalah.** Amaran bagi semakan baharu di atas muncul dalam panel {{ui:Masalah}} yang sama seperti sebelum ini.
- **Sambungkan AI anda.** Pembantu anda sendiri, disambungkan melalui CadCraft Studio, berfungsi dengan kesemua lapan aplikasi dan hanya melihat apa yang anda benarkan. Sambungan satu klik, penyambung dihoskan dan kunci API anda dalam Studio masih akan datang. Lihat [Guna DetailCraft dengan pembantu AI](topic:use-with-ai-assistants).

### Diperbaiki dalam 0.8.1

- **Bahasa dalam Studio.** Studio dan edisi terpek boleh menukar bahasa semasa berjalan; sebelum ini hanya Inggeris. Ia belum diuji pada setiap platform: beritahu kami jika bahasa tidak berubah.
- **Pilihan tetingkap bersilang.** Pemasang 0.8.1 membawa kelakuan pilih-mengikut-tetingkap yang sudah betul dalam binaan web 0.8; pemasang lama tidak.
- **Tablet dalam potret.** Ruang ketinggian grid yang berlebihan diberikan kepada kanvas, dan susun atur helaian bermula pada 760 px atau kurang.

### Belum ada dalam versi ini

- **Hantar NC ke mesin** belum dikeluarkan.
- **Beban angin** bagi konkrit belum dibina, dan semakan konkrit serta asas untuk jurutera menyemak.
- **Tandatangan kod.** Pemasang Windows dan .dmg macOS tidak ditandatangani, jadi Windows mungkin memberi amaran dan macOS meminta klik kanan, kemudian Buka.

Perubahan terdahulu ada dalam [Perkara baharu dalam 0.7](topic:whats-new-0-7).
