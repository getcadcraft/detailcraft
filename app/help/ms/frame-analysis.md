---
title: Analisis rangka
summary: Daya, tindak balas dan pesongan rasuk, tiang dan tupang seperti yang dilukis, di bawah kes beban dan kombinasi yang anda tetapkan. Alat bantu analisis, bukan semakan kod; semakan reka bentuk ialah langkah berasingan.
keywords: analisis, analisis struktur, analisis rangka, kaedah kekukuhan, beban, kes beban, kombinasi, beban mati, beban hidup, berat sendiri, berat anggota, tindak balas, momen lentur, ricihan, daya paksi, pesongan, bentuk pesongan, penyokong, berpin, tetap, pelepasan, laporan, pdf, csv, craftscript, frame3d
from: ba0081bc
---

Tab {{ui:Analysis}} di bahagian bawah mencari daya dalam setiap rasuk, tiang dan tupang model, tindak balas di tapak tiang dan sejauh mana anggota melentur, bagi beban yang anda berikan.

:::warning
Ia ialah **alat bantu analisis, bukan semakan kod**. Analisis tidak menggunakan sebarang kod reka bentuk: ia tidak menentukan saiz anggota, tidak menyemak kapasiti atau sambungan, dan tidak memilih faktor beban. Jurutera menyemak model, bebannya dan penyokongnya, dan memutuskan maksud nombor-nombor itu. Untuk semakan anggota mengikut ASCE 7 / AISC 360 atau EN 1990 / EN 1993-1-1, lihat [Semak anggota keluli mengikut kod reka bentuk](topic:design-checks), langkah berasingan yang juga merupakan alat bantu.
:::

## Jalankan

1. Buka tab {{ui:Analysis}}.
2. Pilih satu atau lebih anggota dalam paparan, pilih {{ui:Case}}, {{ui:Load}} dan {{ui:Direction}}, taip nilai dan tekan {{ui:Add load}}. Beban yang tersebar sepanjang anggota dalam kN/m, beban titik dalam kN. {{ui:Down (gravity)}} ialah yang biasa digunakan.
3. Tekan {{ui:Run analysis}}.

Jadual menyenaraikan daya paksi N terbesar bagi setiap anggota, ricihan Vz dan Vy, momen lentur My dan Mz, kilasan T dan pesongannya, dengan momen terbesar dahulu; klik nama anggota untuk memilihnya. Di bawahnya ialah tindak balas di setiap penyokong. {{ui:On the model}} melukis bentuk pesongan, atau satu tindakan sebagai gambar rajah di sebelah setiap anggota dengan nilai terbesarnya ditulis di kedudukannya. Keputusan menjadi lapuk sebaik sahaja model berubah: jalankan semula.

Setiap beban, kes dan tetapan ialah satu langkah buat asal ({{key:Mod+Z}}) dan disimpan dalam fail model.

## Kes beban dan kombinasi

Analisis bermula dengan tiga: **Dead** (berat sendiri anggota, daripada keratan yang dilukis dan 7850 kg/m³), **Live** (kosong) dan **Dead + live**. Tambah kes anda sendiri (angin, salji …) dan kombinasi: kombinasi menjumlahkan kes dengan faktor yang anda taip. Analisis ini linear, jadi setiap kes diselesaikan sekali dan kombinasi ialah hasil tambah. Taip faktor sendiri, atau pilih kod reka bentuk dan biarkan {{ui:Make combinations}} menulis kombinasi kod itu ([Semak anggota keluli mengikut kod reka bentuk](topic:design-checks)).

## Rangka terdiri daripada

- Rasuk, tiang dan tupang, setiap satu pada garis kerjanya (garis yang anda lukis), dengan sifat keratan sebenar dikira daripada garis luarnya. Plat, tangga, tapak asas dan bolt bukan sebahagian daripada rangka.
- Anggota dibahagikan apabila hujung anggota lain jatuh padanya, jadi rasuk yang bersambung ke tiang pada separuh ketinggian menyambung di situ.
- **Tapak tiang**: tetap (hujung mula) atau berpin (dipegang di tempatnya dan dihalang daripada memutar, bebas berpusing). Plat tapak sentiasa menjadi penyokong.
- **Hujung rasuk**: plat hujung adalah tegar, tab ricih adalah berpin. {{ui:Beam ends with no connection}} menetapkan yang selebihnya. **Tupang** berpin pada kedua-dua hujung.
- Pilih satu anggota untuk memberi hujungnya, atau tapak tiang, peraturan tersendiri.
- Keluli di mana-mana: E = 200 GPa, G = 77 GPa.

Jika rangka boleh bergerak tanpa melentur apa-apa — mekanisme, contohnya tapak berpin tanpa tupang dalam satu arah — larian berhenti dan menyatakan di mana dan arah mana; tahan di situ dengan penyokong, sambungan tegar atau tupang.

## Tanda

N > 0 ialah tegangan. My > 0 meletakkan sisi −z tempatan anggota dalam tegangan: rasuk yang melendut di bawah graviti mempunyai My > 0. Mz > 0 meletakkan sisi −y tempatan dalam tegangan. Pesongan diukur dari garis lurus antara hujung anggota. Paksi z tempatan anggota menghala ke atas (bagi tiang: sepanjang X); paksi tempatannya berpusing mengikut putaran anggota.

## Laporan

{{ui:Report (PDF)}} dan {{ui:Report (CSV)}} memuatkan semua: andaian rangka dibina, keratan, kes dan kombinasi, kemudian bagi setiap kes dan kombinasi tindak balas (dengan hasil tambah beban dan tindak balas, yang seimbang), daya anggota dan sesaran, serta sampul setiap kes. {{ui:Export as CraftScript}} menulis rangka yang sama sebagai skrip untuk ruang kerja Skrip PartCraft, tempat fungsi perpustakaan `frame3d` menyelesaikannya langkah demi langkah dalam kod yang boleh dibaca.

## Kaedah

Kaedah kekukuhan langsung, linear dan tertib pertama melainkan anda menanda Tertib kedua (P-Delta): pengelompok tiang-rasuk dua nod dengan kekukuhan paksi, kilasan dan dua lenturan (tiada ubah bentuk ricih, tiada lengkung piawai), pelepasan hujung melalui pemeluwapan statik, serta beban sepanjang anggota melalui fungsi bentuk anggota itu sendiri. Jawapannya disemak terhadap kes teks klasik (kantilever, rasuk ringkas, tetap dan selanjar, rangka portal, grid dalam kilasan, kekuda).

**Tertib kedua (P-Delta).** Tanda *Tertib kedua (P-Delta)* di sebelah Jalankan: setiap kombinasi diselesaikan semula dengan daya paksi anggota bertindak pada rangka yang terpesong (setiap anggota dipotong kepada 4 bahagian, supaya lenturan anggota antara hujungnya turut dikira), sehingga daya paksi stabil. Baris keputusan memberi bilangan laluan dan sejauh mana goyangan bertambah; momen, pesongan, semakan reka bentuk dan laporan kemudian menggunakan keputusan ini. Di atas beban kritikal anjal rangka, larian berhenti dan menyatakannya. Ia anjal dengan putaran kecil, lenturan sahaja, tanpa pengurangan kekukuhan atau beban tersirat (bukan kaedah analisis langsung AISC dengan sendirinya); slab, dinding dan lantai tegar kekal tertib pertama.

**Frekuensi tabii (elemen terhingga).** Blok {{ui:Finite elements: natural frequencies}} di bawah keputusan mencari mod terendah bagi model yang sama dengan enjin elemen terhingga: rasuk dengan pelepasan hujungnya, slab dan dinding sebagai cengkerang empat nod rata, lantai tegar, penyokong. Pilih bilangan mod (3, 6, 10 atau 20) dan elemen slab (cengkerang empat nod bagi slab tebal atau nipis, atau elemen slab nipis), kemudian tekan {{ui:Find the frequencies}}. Jadual memberi frekuensi setiap mod dalam Hz, tempohnya dalam saat dan jisim modal berkesan sepanjang X, Y dan Z sebagai bahagian jisim yang boleh bergerak; {{ui:Show on the model}} melukis mana-mana mod dengan cara bentuk pesongan dilukis. Jisim ialah ketumpatan bahan didarab isipadu: beban tidak menambah jisim, dan bahan tanpa ketumpatan tiada jisim. Laporan (PDF, CSV) memuatkan jadual itu. Ia hanya anjal dan pergerakan kecil, dan tiada beban gempa atau angin dijana daripada kod di sini. Bukan semakan kod; jurutera anda menyemak keputusan.

**Spektrum sambutan, sejarah masa dan tolakan statik (pushover).** Tiga blok lagi terletak di bawah frekuensi, menggunakan model elemen terhingga yang sama. Jisim bagi kesemuanya ialah ketumpatan bahan ditambah beban ke bawah bagi kes yang anda tandakan, setiap satu didarab faktor yang anda taip (contohnya Dead pada 1 dan Live pada bahagian yang anda kira sebagai jisim).

{{ui:Response spectrum}} membaca setiap mod daripada spektrum yang anda berikan (jadual tempoh dan pecutan, atau bentuk ASCE 7 daripada SDS, SD1 dan TL; butang {{ui:Use the Seismic block values}} menyalin nilai itu daripada blok Seismik), dan menggabungkan mod melalui CQC, SRSS, peraturan sepuluh peratus atau hasil tambah mutlak, kemudian menggabungkan arah X, Y dan Z (100 % + 30 % atau SRSS). Ia memberi ricihan tapak, anjakan tingkat, daya hujung anggota dan jadual mod yang memberi amaran apabila mod yang digunakan membawa kurang daripada 90 % jisim. Anda boleh menskalakan keputusan dengan faktor atau sehingga ricihan tapak yang anda taip; blok itu tidak pernah mengira ricihan tapak itu sendiri. Keputusan tidak mempunyai tanda.

{{ui:Time history}} menjalankan pecutan tanah melalui superposisi mod (tepat bagi garis lurus rekod antara titik) atau melalui kamiran langsung (Newmark purata pecutan dengan redaman Rayleigh). Input ialah gelombang sinus atau denyut buatan (sentiasa dilabel sintetik), rekod yang anda tampal, atau fail teks yang anda buka (masa dan pecutan, satu pecutan setiap baris dengan langkah, atau fail bergaya PEER dengan pengepala DT=; dalam g atau m/s²). Ia memberi sesaran bumbung dan ricihan tapak berbanding masa, anjakan setiap aras, dan sampul daya hujung anggota. Model dengan rekod yang sangat panjang hanya menyimpannya untuk sesi ini.

{{ui:Pushover}} menolak bumbung ke sisi dalam langkah kecil (corak seperti mod pertama, atau seragam), dengan sendi plastik di hujung anggota yang mempunyai bentuk I. Sendi mengalah pada momen plastik, yang berkurang apabila daya paksi bertambah (dikira daripada bentuk yang dilukis, lekuk diabaikan); pengerasan adalah pilihan, P-delta adalah pilihan, dan kombinasi graviti boleh digunakan dahulu. Ia memberi lengkung kapasiti (ricihan tapak berbanding sesaran bumbung), sendi pertama, dan keadaan serta putaran plastik setiap sendi. {{ui:Run the nonlinear time history}} menjalankan sendi yang sama di bawah rekod blok Sejarah masa pada model kecil. Sendi terbentuk di hujung anggota sahaja (letakkan nod di tempat sendi patut terbentuk di dalam rentang); anggota yang dilepaskan di kedua-dua hujung tidak mendapat sendi, dan mengalah serta lengkukan tupang tidak dimodelkan; slab dan dinding kekal anjal; tiada kriteria penerimaan diberikan. Bukan semakan kod; jurutera anda menyemak keputusan. Tetapan disimpan bersama model, dan laporan memuatkan jadual.

Belum dibina: analisis lengkukan, pembetulan jisim hilang bagi spektrum sambutan, penskalaan rekod, kriteria penerimaan bagi sendi (tindak balas dinamik ada, di atas), kawasan dan beban angin yang dibuat untuk anda (daya gempa pada lantai ada dalam [Semak anggota konkrit dan buat beban seismik](topic:concrete-and-seismic)), ofset anggota, tupang hanya-tegangan. Lihat [Belum dibina](topic:not-built-yet).
