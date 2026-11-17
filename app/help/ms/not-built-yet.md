---
title: Belum dibina lagi
summary: Apa yang binaan DetailCraft awal ini belum boleh lakukan, dan apa yang boleh dibuat sebaliknya hari ini.
keywords: had, pengehadan, hilang, peta jalan, tidak disokong, akan datang, dirancang, penyelesaian, todo
from: ea411885
---

DetailCraft ialah binaan awal. Halaman ini menyenaraikan perkara yang belum dilakukannya, supaya anda dapat merancang sekitarnya. Tiada apa di sini ialah janji tarikh.

## Pemodelan

| Belum lagi | Sebaliknya, hari ini |
|---|---|
| Menyeret satu hujung anggota (meregangkannya) | Sunting {{ui:Mula}} atau {{ui:Hujung}} di bawah {{ui:Hujung (x, y, z mm)}} dalam panel {{ui:Sifat}} |
| Penapis pilihan (hanya rasuk, hanya satu profil) | Seret tetingkap, kemudian {{key:Shift}}+klik untuk mengeluarkan bahagian |
| Tatasusunan satu pilihan; memutar pada paksi condong; mencermin dalam satah condong | Salin dan tampal pada ofset, atau {{ui:Pendua}}; putar dan cermin berfungsi dalam pelan ([Pilih mengikut tetingkap, alih, putar, cermin, tukar banyak](topic:select-and-change)) |
| Titik di luar grid semasa mengklik | Letak pada grid, kemudian taip koordinat hujung |
| Dongakan sepanjang garisan grid bernombor; pandangan disimpan; satah kerja | Gunakan {{ui:3D}}, atau {{ui:Tambah mengikut grid}} |
| Lubang dilukis sebagai potongan sebenar dalam paparan 3D | Lubang ditunjukkan sebagai palam gelap; ia sebenar dalam setiap eksport |
| Takuk membulat atau bersudut, potongan dan kelengkapan lain | Takuk tegak pada bentuk I sahaja |
| Lubang yang anda tambah pada sudut dan tiub bulat | Lubang sudut datang daripada [plat gusset tupang](topic:brace-gussets) sahaja |
| Input imperial | Taip milimeter (25.4 setiap inci) |
| Menyunting atau mengalih keluar profil tersuai | Tambah profil yang dibetulkan dengan nama baharu |

## Tangga

| Belum lagi | Sebaliknya, hari ini |
|---|---|
| Pemegang tangan, pelantar, plat kaki, injakan jeriji, tangga lingkar dan tangga dog-leg | Anak tangga lurus sahaja; lihat [Tangga](topic:stairs) |
| Potongan hujung rasuk tangga terhadap lantai | Rasuk tangga potong tegak; potong dalam perisian bengkel anda |

## Sambungan

DetailCraft membina enam sambungan: plat gusset tupang (lihat [Plat gusset tupang](topic:brace-gussets)); sambatan dibolt antara dua keping bagi satu bentuk I (lihat [Sambatan](topic:splices)); mitre antara dua bentuk I yang bertemu pada sudut, dipotong sahaja atau dengan plat hujung dibolt (lihat [Sambungan mitre](topic:mitres)); plat hujung dibolt rata atau lanjutan daripada rasuk bentuk I yang mendatar dan tegak pada aras ke sayap atau web tiang bentuk I; tab ricih daripada rasuk (tegak, condong atau cerun) ke sayap atau web tiang; dan plat tapak tiang dengan empat bolt sauh.

| Belum lagi | Sebaliknya, hari ini |
|---|---|
| Plat hujung condong atau cerun | Gunakan [tab ricih](topic:shear-tabs), yang menerima rasuk condong dan cerun |
| Sudut klip; plat isi sambatan dan sambatan antara saiz berbeza; plat gusset penjuru yang dikimpal pada rasuk dan tiang, plat gusset bersudut | Perincikan dalam perisian lain, atau tambah plat dan lubang dengan tangan sebagai bahagian longgar; lihat [Sambatan](topic:splices), [Plat gusset tupang](topic:brace-gussets) |
| Pengukuh tapak bersudut atau bertirus; lubang grout; poket asas untuk gigi ricih | Pengukuh segi empat tepat; lihat [Plat tapak](topic:base-plates) |
| Haunch; mitre dikimpal dengan kimpalan hujung; pengukuh yang sejajar dengan sayap anggota lain | [Mitre](topic:mitres) dengan plat hujung dan pengukuh web, atau potongan mitre biasa; tambah plat lain dengan tangan sebagai bahagian longgar |
| Semakan reka bentuk sambungan (kekuatan) | Semak sambungan dengan pengiraan jurutera anda; DetailCraft hanya memberi amaran tentang jarak tepi dan jarak |
| Lubang berslot | Lubang bulat sahaja |

## Analisis

| Belum lagi | Sebaliknya, hari ini |
|---|---|
| Semakan reka bentuk melangkaui bentuk I keluli: tiub, sudut, kanal, bentuk dikimpal, bahagian langsing atau kelas 4, kilasan, sambungan; konkrit: kelangsingan ayunan, kilasan, perincian seismik, papak dan dinding | Tab {{ui:Analisis}} menyemak bentuk I keluli kepada AISC 360 atau EN 1993-1-1 ([Semak anggota keluli mengikut kod reka bentuk](topic:design-checks)); selebihnya ditinggalkan dengan tanda "tidak disemak"; jurutera menyemak semuanya |
| Analisis lengkokan, getaran | Peringkat kedua hanya P-Delta (elastik); tiada analisis lengkokan (modal, spektrum tindak balas, sejarah masa dan pushover terdapat dalam tab Analisis) |
| Semakan reka bentuk yang telah disemak oleh jurutera | Ia menjadi bantuan sehingga itu: semak dua atau tiga anggota dengan tangan atau dalam perisian jurutera anda sendiri sebelum anda bergantung padanya |
| Beban lantai, angin dan salji yang dibuat untuk anda daripada kawasan | Letakkan beban pada anggota dengan tangan, dalam kN/m atau kN |
| Ofset anggota, sambungan sipi, tupang tegangan sahaja, plat dan asas dalam rangka | Anggota dianalisis pada garis kerjanya; tupang membawa tegangan dan mampatan |

## Tetulang

| Belum lagi | Sebaliknya, hari ini |
|---|---|
| Tiang bulat, lingkaran (spiral), rasuk condong atau melengkung, papak selain segi empat, dinding yang tidak lurus | Rasuk, tiang, papak dan dinding segi empat ([Perincikan konkrit bertetulang](topic:reinforced-concrete)) |
| Bar dilenturkan ke dalam sambungan bertindih, sambungan bertindih berselang-seli, sambungan diletakkan mengikut pilihan anda | Sambungan bertindih pada langkah sama, setiap bar bertindih pada satu keratan (ACI Kelas B, EN α6 = 1.5) |
| Bar penjuru pada bukaan, tetulang ricih tebuk, perincian seismik (ACI 318-19 bab 18) | Trimmer di setiap sisi bukaan; semak selebihnya sendiri |
| Membaca fail program reka bentuk struktur itu sendiri | Eksport IFC daripadanya: IfcReinforcingBar-nya masuk sebagai bar ([Bar daripada fail IFC](topic:reinforced-concrete#bars-from-an-ifc-file)) |
| Kod bentuk selain lurus, satu lenturan dan U; jenis ACI 315 untuk bar lurus dan bar satu cangkuk | Tiga bentuk dicetak sebagai BS 8666 00, 11, 21 atau ACI Jenis 2; lihat [Rujukan tetulang](topic:rebar-reference) |
| Bar metrik selain BS 4449 H8–H40 (contoh CSA 10M–35M) | Nama metrik lembut ASTM #10–#36, atau bar BS |

## Lukisan dan eksport

| Belum lagi | Sebaliknya, hari ini |
|---|---|
| Helaian potret, A0, dan helaian saiz anda sendiri; pandangan susun atur umum pada grid condong | Landskap A4 hingga A1 dan ANSI B hingga D ([Lukisan susun atur umum dan himpunan](topic:drawings)); skalakan PDF untuk dicetak pada saiz lain |
| Simbol kimpalan pada lukisan bengkel satu bahagian; simbol selain fillet | Lukisan himpunan membawa simbol kimpalan fillet; lukisan bengkel memberi kimpalan sebagai teks |
| Menyunting lukisan dalam aplikasi | Tukar model dan buat semula lukisan; tanda PDF dalam aplikasi PDF seperti MarkupCraft |
| Lukisan sebagai DWG dengan objek dimensi, atau model pada skala penuh dalam ruang model dengan helaian sebagai layout | Setiap helaian ialah DWG atau DXF saiz penuh bagi kertas, dengan dimensi sebagai garisan dan angka ([Lukisan susun atur umum dan himpunan](topic:drawings#download)) |
| Lubang NC dalam tiub bulat, takuk pada sudut dan tiub bulat dalam fail NC | Tidak ditulis; lihat [Medan fail NC](topic:nc1-fields) |
| Bevel, penandaan dan kontur dalam pada fail NC | Tiada buat masa ini |
| Lubang bolt, bolt, kimpalan dan asas dalam eksport USD | Ia terdapat dalam output IFC, NC dan BOM; lihat [Eksport model keluli sebagai USD](topic:usd) |
| Membawa masuk sambungan, asas, lubang berslot atau segi empat tepat dan lubang dalam tiub bulat daripada fail IFC | {{ui:Import IFC}} membawa masuk rasuk, tiang, anggota, plat, grid, aras, lubang bulat, takuk, bolt dan bar tetulang, dan laporannya menyenaraikan apa yang ditinggalkan |
| Susun atur laporan tersuai | Tiga fail CSV |

## Panel

| Belum lagi | Sebaliknya, hari ini |
|---|---|
| Mengalih laporan di bahagian bawah ({{ui:Masalah}}, {{ui:Senarai bahan}}, {{ui:Jadual lenturan}}) | Hanya panel {{ui:Model}} dan {{ui:Sifat}} boleh dialihkan. Lihat [Susun panel](common:arrange-panels) |

## Bekerja bersama dan menyimpan

| Belum lagi | Sebaliknya, hari ini |
|---|---|
| Simpan awan dan penyegerakan antara komputer | Simpan fail `.detailcraft.json` dan kongsikannya seperti mana-mana fail. Simpan awan belum tersedia lagi |
| Kursor orang lain dan label "sedang menyunting" dalam sesi Live TeamWork; grid, aras dan fasa digabungkan item demi item | Suntingan masih digabungkan (grid, aras dan fasa digantikan sepenuhnya, perubahan kemudian menang); lihat [Perincikan satu struktur bersama, secara langsung](topic:work-live) |
| Pautan jemputan ke sesi Live TeamWork melalui internet | Sertai dengan kod pendek pada rangkaian yang sama |

## Platform

- DetailCraft dibuat untuk skrin desktop, komputer riba atau tablet. Ia juga berfungsi pada telefon: model mengekalkan skrin dan panel, dan laporan dibuka sebagai helaian dari bar di bahagian bawah, tetapi ruang untuk panel terhad.
- Penggunaan luar talian memerlukan DetailCraft disimpan untuk luar talian dahulu, dengan {{ui:Simpan untuk luar talian}} pada bar aplikasi; apabila ia memaparkan {{ui:Sedia untuk luar talian}}, semua dalam binaan ini berfungsi tanpa sambungan. Lihat [Bekerja luar talian](common:offline).

Jika salah satu jurang ini menghalang kerja anda, beritahu kami melalui [halaman sokongan](https://getcadcraft.com/support); ia membantu kami memutuskan apa yang hendak dibina seterusnya.
