---
title: Apa yang baharu dalam 0.9 (terdahulu)
summary: Saiz keluli UK Blue Book dan sudut tidak sama, lukisan bengkel bagi setiap bahagian dalam satu set PDF, Profil saya bagi keratan tersuai, P-Delta dan frekuensi tabii, beban angin ASCE 7, tapak dan gabungan seismik, serta kursor langsung dengan Ikut.
keywords: apa yang baharu 0.9, keluaran terdahulu, apa yang baharu, nota keluaran, log perubahan, 0.9, keluli UK, blue book, ub, uc, pfc, shs, rhs, chs, sudut tidak sama, lukisan bengkel, set helaian, tanda bahagian, pdf, profil saya, profil tersuai, P-Delta, tertib kedua, frekuensi tabii, elemen terhingga, jisim modal, beban angin, ASCE 7, seismik, kelas tapak, USGS, gabungan beban, LRFD, ASD, langsung, kursor, ikut, orang, tip alat, 0.8, 0.8.1, versi, ciri baharu, pendirian, kren, carta beban, filem, autopilot, sambungan, tetulang, kesesakan, asas, tapak asas, rakit, mendapan, rangka, kayu, tolok nipis, senarai potongan, kebolehbinaan, capaian kimpalan, pembekal, stok, masa tunggu, apa yang pecah dahulu, konkrit, seismik, papak, bahasa, pembantu
from: ab0c7f05
---

Ini yang berubah dalam DetailCraft 0.9, berbanding dengan 0.8.1. 0.9 membawa saiz keluli UK, lukisan bengkel bagi setiap bahagian sekali gus, tab {{ui:Analisis}} yang lebih besar untuk rangka, dan paparan kursor antara satu sama lain apabila anda bekerjasama.

## Baharu

### Keluli UK dan lukisan bengkel

- **Saiz keluli UK.** Senarai profil kini mengandungi 976 saiz daripada Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS dan RHS, dengan keratan berongga yang dibentuk sejuk diasingkan (namanya bermula dengan CF). Nama ditulis dengan keluarga dahulu, seperti UB305x165x40 atau SHS100x100x5.0, dan menaip nama seperti yang digunakan dalam lukisan juga berfungsi: 305x165x40 UB, L100x100x10, SHS100x5. Lihat [Katalog profil](topic:profile-catalog).
- **Sudut tidak sama.** Sudut UEA mengekalkan kedua-dua kaki melalui IFC masuk dan keluar serta melalui fail NC, dan cermin memusingkan keratan hujung demi hujung.
- **Setiap lukisan bengkel sekali gus.** Pilih {{ui:Lukisan bengkel}} dalam kumpulan {{ui:Output}} tanpa apa-apa yang dipilih. Tetingkap itu menyenaraikan setiap tanda bahagian, memratonton mana-mana daripadanya, dan {{ui:Muat turun semua}} menyimpan satu PDF dengan satu halaman bagi setiap tanda, setiap satu bertajuk "Helaian 3 daripada 42". {{ui:Muat turun PDF}} menyimpan yang sedang anda lihat. Saluran, sudut dan keratan berongga kini turut mendapat helaian. Lihat [Hasilkan lukisan bengkel](topic:shop-drawings).
- **Profil saya.** Profil tersuai kini boleh disimpan untuk setiap model baharu. Dalam borang Profil tersuai, biarkan {{ui:Simpan dalam Profil saya}} ditanda; senarai {{ui:Profil saya}} di bawahnya mempunyai {{ui:Simpan}}, {{ui:Guna di sini}} dan {{ui:Alih keluar}}. Senarai itu disimpan dalam penyemak imbas ini (sehingga 200), bukan dalam akaun anda. Lihat [Plat dan profil](topic:plates-and-profiles).

### Analisis

- **Tertib kedua (P-Delta).** Tandakan {{ui:Tertib kedua (P-Delta)}} di sebelah Jalankan dalam tab {{ui:Analisis}} dan daya paksi bertindak pada rangka yang terpesong. Plat dan lantai tegar kekal peringkat pertama, dengan amaran. Lihat [Daya, tindak balas dan pesongan](topic:frame-analysis).
- **Frekuensi tabii.** Blok {{ui:Elemen terhingga: frekuensi tabii}} di bawah hasil mencari mod terendah bagi model yang sama, dengan tempoh dan jisim modal berkesan, dan memaparkan satu mod pada model. Lihat [Daya, tindak balas dan pesongan](topic:frame-analysis).
- **Beban angin dan tapak seismik.** Tiga blok baharu dalam tab {{ui:Analisis}}: {{ui:Beban angin (prosedur arah ASCE 7)}}, {{ui:Tapak dan sistem seismik (ASCE 7)}} dan {{ui:Gabungan beban ASCE 7}}. Lihat [Angin, tapak seismik dan gabungan ASCE 7](topic:wind-seismic-combinations).

### Bekerjasama

- **Kursor dan nama.** Dalam sesi Langsung, penunjuk setiap orang dilukis dalam model dengan nama dan warnanya, dan apa yang mereka pilih mendapat kotak.
- **Ikuti seseorang.** Buka {{ui:Orang}} dalam sesi dan pilih {{ui:Ikut}} pada satu nama; paparan anda bergerak bersama mereka. Hos boleh memilih {{ui:Minta semua orang mengikut saya}}. Lihat [Ikuti seseorang dalam sesi Langsung](topic:follow-in-live).

### Dalam setiap aplikasi

- Tip alat ialah tip alat Bootstrap, kad tip permulaan mempunyai butang tutup, jalur tab boleh diskrol ke sisi apabila tidak muat, dan nama tab penyemak imbas memaparkan dokumen yang dibuka diikuti DetailCraft dan CadCraft.

## Dibetulkan

- Profil tersuai hilang apabila anda memulakan model baharu.
- Saluran, sudut dan keratan berongga tidak ada dalam set lukisan bengkel.

## Had sebenar

- Blok angin, seismik dan elemen terhingga ialah bantuan semakan. Jurutera anda menyemak keputusannya; ia bukan semakan kod. Carian USGS diuji pada pengganti, bukan pada perkhidmatan sebenar.
- Elemen terhingga dan P-Delta disemak dengan jawapan manual dan bentuk tertutup, bukan bangunan sebenar. Analisis lengkokan belum dibina.
- Belum ada pembuat keluli UK yang mencuba saiz UK, dan fail NC untuk sudut tidak sama belum dijalankan pada mesin.
- Set lukisan bengkel hanya PDF.
- Bahasa selain Bahasa Inggeris ialah draf mesin.
- Pemasang Windows tidak ditandatangani kod (Maklumat lanjut, kemudian Tetap jalankan); imej cakera macOS tidak dinotarikan (klik kanan, kemudian Buka).

Perubahan terdahulu ada dalam nota 0.8 dan 0.8.1 di bahagian bawah halaman ini.

## Terdahulu: 0.8 dan 0.8.1

Ini yang berubah dalam DetailCraft 0.8 (1 November 2026) dan 0.8.1 (2 November 2026), berbanding dengan 0.7. 0.7 menyemak anggota keluli; 0.8 merancang angkatan, mencadangkan sambungan, menyemak asas dan tetulang, serta merangka dinding, lantai dan bumbung kayu serta tolok nipis.

### Baharu

**Pendirian**

- **Pelan pendirian dan filem.** Dalam tab {{ui:Pendirian}}, huraikan sebuah kren (di mana ia berdiri, cangkuk tertingginya, pengikat yang tiada dalam carta) dan taip baris carta beban kren itu. DetailCraft mengangkat model satu pemasangan pada satu masa, mengikut tertib fasa dan tingkat demi tingkat, dan menyemak setiap angkatan dengan carta pada jejarinya serta margin yang anda tetapkan. {{ui:Simpan filem}} menulis satu fail HTML yang dimainkan luar talian dalam mana-mana pelayar, juga pada telefon. Angkatan yang melebihi carta, melepasinya atau terlalu tinggi berada dalam {{ui:Masalah}}. Ia ialah pelan daripada nombor anda, bukan pelan angkat. Lihat [Pelan pendirian dan filem](topic:erection-movie).

**Sambungan**

- **Autopilot sambungan.** Tab {{ui:Autopilot}} memeriksa setiap sambungan yang tiada sambungan dan mencadangkan satu daripada bentuknya: plat tapak, tab ricihan, plat hujung bagi rasuk yang anda tandakan sebagai rasuk momen, sambatan dan gusset. Berikan beban seragam atau ricih hujung tunggal, dan bilangan bolt mengikut kekuatan reka bentuk bolt. {{ui:Tambah semuanya}} menambah cadangan sebagai satu langkah buat asal. Ia ialah nilai permulaan untuk disemak, bukan reka bentuk sambungan.
- **Semakan kebolehbinaan.** {{ui:Masalah}} bagi bolt yang tidak dapat dicapai oleh pembaris pelaras, bolt terlalu rapat untuk soket, kimpalan fillet di luar had saiznya, dan keratan berongga yang menakung air. Capaian kimpalan baharu: kimpalan fillet keliling yang tidak dapat dicapai oleh penyembur kimpalan disenaraikan bersama bahagian yang menghalang dan peratusan kimpalan yang terjejas. Lihat [Semakan kebolehbinaan](topic:constructability).

**Asas dan tetulang**

- **Semakan asas.** Tab {{ui:Asas}} menyemak tapak asas, tapak asas gabungan dan rakit pada tanah yang anda huraikan: galas, gelincir dan guling daripada beban perkhidmatan; lenturan, ricihan, tebukan, perkembangan dan keluli minimum daripada beban terfaktor (ACI 318-19). Kolum yang berdekatan tepi atau bucu disemak dengan keratan yang dipotong oleh tepi tapak asas. Mendapan datang daripada modulus tanah, rakit fleksibel diselesaikan atas spring daripada modulus subgred, dan kumpulan cerucuk serta dinding penahan mempunyai panel sendiri. Beban kolum boleh ditaip atau diambil daripada {{ui:Analisis}}. Lihat [Semakan asas](topic:foundation-checks).
- **Peta kesesakan tetulang.** Tab {{ui:Kesesakan}} melukis peta haba bagi setiap tapak asas seperti dilihat dari atas: di mana bar meninggalkan ruang yang terlalu sedikit untuk konkrit turun, berbanding peraturan jarak bersih dan, jika anda memberikannya, agregat terbesar dan kepala penggetar. Lihat [Peta kesesakan tetulang](topic:rebar-congestion).

**Rangka dan bekalan**

- **Rangka kayu dan tolok nipis.** Tab {{ui:Rangka}} merangka panel dinding, lantai dan bumbung dengan setiap keping, senarai potongan, stok untuk dibeli dan lukisan bengkel mengikut skala. {{ui:Letakkan sebagai anggota}} meletakkan keping dalam model, dan {{ui:Helaian PDF}} menyimpan satu helaian bagi setiap panel. Saiz, jarak dan kepala ialah milik anda: DetailCraft tidak menyemak sama ada ia menanggung beban. Lihat [Panel rangka kayu dan tolok nipis](topic:framing-panels).
- **Stok pembekal dan masa tunggu.** Tab {{ui:Bekalan}} membaca senarai stok pembekal (CSV) dan menunjukkan, bagi setiap keratan yang dibeli oleh senarai potongan, sama ada terdapat cukup stok dan berapa lama penantian. Kekurangan dan keratan lewat berada dalam {{ui:Masalah}}. Tiada apa-apa yang dipesan. Lihat [Stok pembekal dan masa tunggu](topic:supplier-stock).

**Analisis dan reka bentuk**

- **Apa yang pecah dahulu?** Dalam tab {{ui:Analisis}}, butang ini mencari kombinasi kekuatan yang menentukan, anggota paling lemah, sejauh mana beban boleh bertambah sebelum anggota pertama mencapai hadnya, dan plat hujung atau tab ricihan paling lemah jika kekuatan ricihan boltnya diketahui. Ia memerlukan kombinasi dan kod reka bentuk dahulu. Galas, ricihan blok, kimpalan dan pengungkitan tidak disemak. Pembantu yang disambungkan anda boleh meminta perkara yang sama.
- **Langsung.** Tandakan {{ui:Langsung: selesaikan semula selepas setiap suntingan}} dan rangka diselesaikan semula selepas setiap suntingan.
- **Konkrit, dan lain-lain.** Kolum langsing dalam rangka tanpa goyang direka untuk momen terbesarnya (ACI 318-19 6.6.4.5). Tempoh seismik boleh diambil daripada analisis melalui kaedah Rayleigh. Papak yang diperbuat daripada plat mendapat keluli yang diperlukan setiap lapisan daripada momennya, dan ricihan satu hala. Lihat [Semak anggota konkrit dan hasilkan beban seismik](topic:concrete-and-seismic).
- **Untuk jurutera menyemak.** Hasil asas, konkrit dan Apa yang pecah dahulu ialah bantuan. Beban angin belum dibina.

**Dalam setiap aplikasi**

- **Bahasa.** Bantuan tersedia dalam 54 bahasa. Bahasa selain Bahasa Inggeris ialah draf mesin sehingga penutur asli membacanya; sepuluh ialah baharu (Lithuania, Latvia, Bosnia, Marathi, Telugu, Albania, Afrikaans, Filipino, Swahili, Uzbek).
- **Baris bar alat.** {{ui:Tetapan}} › {{ui:Umum}} › {{ui:Baris bar alat}} memilih balut, 2 baris atau 1 baris. Bar yang sudah muat kekal seperti sedia ada; yang lain boleh diskrol ke sisi.
- **Grid sifat.** Medan asas menggunakan grid kongsi: kategori boleh dilipat dan ketumpatan padat. Pengiraan yang ditaip seperti 2*450 masih berfungsi.
- **Peranti input.** Pad sentuh, pen, tetikus 3D, pengawal dan MIDI boleh mengendalikan aplikasi. Lihat [Navigasi dalam 3D](topic:navigate-3d).
- **Panel masalah.** Amaran semakan baharu di atas muncul dalam panel {{ui:Masalah}} yang sama seperti sebelum ini.
- **Sambungkan AI anda.** Pembantu anda sendiri, disambungkan melalui CadCraft Studio, berfungsi dengan kesemua lapan aplikasi dan hanya melihat apa yang anda benarkan. Sambungan satu klik, penyambung yang dihoskan dan kunci API anda sendiri dalam Studio belum ada lagi. Lihat [Gunakan DetailCraft dengan pembantu AI](topic:use-with-ai-assistants).

### Dibetulkan dalam 0.8.1

- **Bahasa dalam Studio.** Studio dan edisi berpek boleh bertukar bahasa semasa berjalan; sebelum ini hanya Bahasa Inggeris. Ia belum diuji pada setiap platform: beritahu kami jika bahasa tidak berubah.
- **Pilihan tingkap bersilang.** Pemasang 0.8.1 membawa kelakuan pilih mengikut tingkap yang sudah betul dalam binaan web 0.8; pemasang lama tidak.
- **Tablet dalam potret.** Ruang grid yang berlebihan diberikan kepada kanvas, dan susun atur helaian bermula pada 760 px atau kurang.

### Belum ada dalam versi ini

- **Hantar NC ke mesin** belum dikeluarkan.
- **Beban angin** bagi konkrit belum dibina, dan semakan konkrit serta asas adalah untuk jurutera menyemak.
- **Tandatangan kod.** Pemasang Windows dan .dmg macOS tidak ditandatangani, jadi Windows mungkin memberi amaran dan macOS meminta klik kanan, kemudian Buka.

Perubahan terdahulu ada dalam [Apa yang baharu dalam 0.7](topic:whats-new-0-7).
