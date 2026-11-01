---
title: Perkara baharu dalam 0.7
summary: Semakan reka bentuk bagi bentuk-I keluli dengan gabungan beban daripada ASCE 7 atau EN 1990 dan semakan ahli kepada AISC 360 atau EN 1993-1-1, eksport USD model keluli, alat pembantu untuk USD, reben Keluli dengan butang besar dan kecil, panel yang kemas sendiri, dan kotak dialog yang boleh digerakkan.
keywords: perkara baharu, nota keluaran, senarai perubahan, perubahan, 0.7, versi, ciri baharu, semakan reka bentuk, reka bentuk keluli, nisbah penggunaan, gabungan beban, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocode, Annex Negara, beban hidup bumbung, had pesongan, usd, usda, usdc, usdz, openusd, pembantu, mcp, reben keluli, reben, butang pisah, unit, padat, panel, kotak dialog, Portugis
from: 17d1e0bb
---

Ini ialah perubahan dalam DetailCraft 0.7, berbanding 0.6. Analisis rangka 0.6 kini mempunyai langkah kedua: menyemak ahli keluli mengikut kod reka bentuk.

## Baharu

### Sambungan mitre (0.7.1)

- **Dua bentuk-I bertemu pada sudut**, seperti lutut portal atau rabung: pilih kedua-duanya, pilih {{ui:Mitre}} dalam menu {{ui:Lagi}} kumpulan {{ui:Sambung}}, dan kedua-dua hujung dipotong pada satah yang membahagi dua sudut. Plat hujung yang diboltkan bersama dan pengaku badan ialah kotak tanda dalam kotak dialog Mitre baharu, yang medan bernombornya sepadan dengan lukisan sambungan anda yang dibuat semasa anda menaip. Mitre mengikut ahli apabila ia bergerak, dan dibawa ke lukisan, fail NC (potongan senget), IFC dan senarai bahan. Lihat [Sambungan mitre](topic:mitres).

### Semakan reka bentuk

- **Gabungan beban daripada kod.** Dalam tab {{ui:Analisis}}, blok {{ui:Semakan reka bentuk}} baharu mempunyai {{ui:Kod reka bentuk}}: ASCE 7 + AISC 360 (AS, LRFD) atau EN 1990 + EN 1993-1-1 (Eurocode). Berikan setiap kes beban jenisnya (mati, hidup, beban hidup bumbung baharu, salji, angin, seismik), tekan {{ui:Buat kombinasi}}, dan DetailCraft menulis gabungan kekuatan dan kebolehkhidmatan kod bagi kes anda. Gabungan yang anda taip sendiri kekal. Lihat [Buat gabungan](topic:design-checks#make-the-combinations).
- **Nilai Annex Negara.** Bagi Eurocode, faktor bermula pada nilai yang disyorkan; {{ui:Nilai Annex Negara}} membolehkan anda menaip nilai negara anda, dan ia disimpan dalam model. Lihat [Buat gabungan](topic:design-checks#make-the-combinations).
- **Semak ahli.** {{ui:Semak anggota}} menyemak setiap bentuk-I keluli bagi tegangan, mampatan dengan lengkokan, lenturan dengan lengkokan sisi-kilasan, ricih, lenturan dengan daya paksi dan pesongan berbanding {{ui:Had pesongan}} yang anda tetapkan. Jadual menunjukkan nisbah penggunaan setiap ahli, semakan yang mengawal dan gabungannya, dan ahli diwarnakan pada model (biru, hijau, ocre, merah, kelabu untuk tidak disemak). Lihat [Semak ahli](topic:design-checks#check-the-members).
- **Dalam laporan.** {{ui:Laporan (PDF)}} dan {{ui:Laporan (CSV)}} menambah edisi kod, tetapan, nisbah penggunaan mengikut ahli dan setiap klausa yang digunakan. Lihat [Laporan](topic:design-checks#the-report).
- **Bantuan sehingga jurutera menyemaknya.** Ia hanya menggunakan daya tertib pertama. Tiub, sudut, saluran, bentuk kimpalan dan bahagian langsing atau kelas 4 dibaca "tidak disemak", dengan sebab; kilasan, sambungan dan konkrit tidak disemak. Lihat [Apa yang tidak disemak](topic:design-checks#what-is-not-checked).

### USD

- **Eksport model keluli sebagai USD.** {{ui:USD}} dalam kumpulan {{ui:Output}} menulis model sebagai {{ui:Teks (.usda)}}, {{ui:Binari (.usdc)}} atau {{ui:Pakej (.usdz)}} untuk program pemaparan dan pemasangan adegan: setiap himpunan memegang bahagiannya, setiap bahagian ialah keratannya yang dijalankan sepanjang panjangnya dengan potongan hujung dipotong, dan setiap satu membawa tanda bahagian, profil, gred, panjang dan berat. Lubang bolt, bolt, kimpalan dan tapak asas tidak berada dalam jejaring USD. Lihat [Eksport model keluli sebagai USD](topic:usd).

### Pembantu AI

- **USD untuk pembantu.** Pembantu anda sendiri, disambungkan melalui CadCraft Studio, boleh mengeksport model sebagai USD (`usd_export`), dan dalam Studio menulisnya ke folder yang anda benarkan. Lihat [Apa yang boleh diminta pembantu](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Berubah

- **Reben Keluli** mempunyai butang besar dan kecil: {{ui:Rasuk}} besar bersebelahan {{ui:Tiang}}, {{ui:Tupang}} dan {{ui:Plat}} kecil pada {{ui:Pemodelan}} › {{ui:Ahli}}; {{ui:Plat hujung}} besar pada {{ui:Perincian}} › {{ui:Sambungan}}, dengan {{ui:Penyambung}} dan {{ui:Plat gusset}} berkongsi satu butang pisah; {{ui:Tampal}} besar pada {{ui:Sunting}} › {{ui:Papan keratan}}, dengan {{ui:Tampal di tempat yang sama}} dan {{ui:Pendua}} di sebalik anak panah kumpulan. {{ui:Fabrikasi}} › {{ui:Pertukaran}} mempunyai {{ui:Eksport USD}} bersebelahan IFC. Gaya menu lain kelihatan seperti sebelumnya. Lihat [Menu, kekunci dan tetikus](topic:menus-keys-and-mouse#the-three-styles).
- [Analisis rangka](topic:frame-analysis) kini merujuk kepada semakan reka bentuk, dan gabungannya boleh dibuat mengikut kod.

## Dalam setiap aplikasi

- **Unit.** {{ui:Tetapan}} › {{ui:Umum}} › {{ui:Unit}} mempunyai satu senarai bagi setiap panjang, luas, isi padu, sudut dan cerun, dengan saiz tepat yang diberikan oleh takrifan unit (kaki tinjauan AS ialah unitnya sendiri). Matikan unit yang tidak pernah anda gunakan dan ia keluar daripada senarai unit; bintangkan satu dan kerja baharu bermula dengannya. Fail sentiasa mengekalkan unitnya sendiri. Kotak DetailCraft sendiri belum mengikut senarai: panjangnya masih ditaip dalam milimeter. Lihat [Unit, nilai ditaip dan senarai unit](common:unit-lists).
- **Susun atur lebih padat dan panel yang kemas sendiri.** {{ui:Tetapan}} › {{ui:Umum}} › {{ui:Ketumpatan reka letak}} › {{ui:Padat}} memuatkan lebih banyak pada skrin (skrin sentuh dan telefon mengekalkan butang besarnya). Setiap panel sisi mempunyai bar tajuk nipis: seret untuk melekapkan atau menerapungkan panel, lepaskan pada bar panel lain untuk berkongsi satu bingkai sebagai tab, pin untuk meluncur ke tepi, atau sembunyikannya dan bawanya kembali dari tepi. Lihat [Susun panel](common:arrange-panels#make-the-layout-denser).
- **Kotak dialog boleh digerakkan.** Seret kotak dialog mengikut bar tajuknya keluar dari laluan lukisan; ia kembali ke tempat anda tinggalkannya. Klik dua kali bar tajuk untuk memusatkannya semula. Lihat [Alih kotak dialog](common:arrange-panels#move-a-dialog).
- **Resipi untuk pembantu AI.** Sepuluh permintaan yang telah dilaksanakan untuk pembantu anda sendiri (kemaskan lukisan, plot satu set, semak lukisan, tanya model satu soalan, jumlahkan pengukuran kuantiti (takeoff), cuba varian bahagian…), setiap satu dengan alat yang dipanggilnya dan kebenaran yang diperlukannya, dan setiap satu dimainkan semula oleh ujian kami. Aplikasi tidak mengandungi AI. Lihat [Resipi untuk pembantu AI](common:assistants-recipes).
- **Bahasa.** **Português (Portugal)** baharu dalam {{ui:Tetapan}} › {{ui:Umum}} › {{ui:Bahasa}}. Ia, **Português (Brasil)**, **Español (México)** dan **Bahasa Indonesia** kini mempunyai setiap perkataan aplikasi, sebagai draf yang belum disemak oleh penutur asli. Topik bantuan dalam bahasa Inggeris.
- **CadCraft Studio** memberitahu sebab semakan kemas kini gagal (belum ada fail untuk sistem anda, tiada rangkaian, tandatangan tidak sah) dan bukannya sekadar "Selesai", dan berhenti memunculkan semula kad Perkara baharu yang anda tutup sehingga ada keluaran yang lebih baharu.

## Belum ada dalam versi ini

- **0.7 tidak ditandatangani kod.** Penandatanganan, dan pakej Microsoft Store, dipindahkan ke 0.8 kerana pengesahan sijil belum selesai. Semak SHA-256 di sebelah setiap fail di getcadcraft.com/download. Pada Windows, jika SmartScreen menghentikan pemasang, pilih {{ui:Maklumat lanjut}}, kemudian {{ui:Tetap jalankan}}. Pada Mac, kali pertama, klik kanan CadCraft Studio dan pilih {{ui:Buka}}. CadCraft Studio belum berada dalam kedai aplikasi, dan belum ada binaan iPad atau iPhone.
- Senarai sudut dan cerun dalam {{ui:Unit}} disimpan, tetapi belum ada kotak yang membacanya.
- **Semakan reka bentuk belum disemak oleh jurutera.** Ujian kami membandingkannya dengan nilai jadual bercetak dan formula yang dikira dengan tangan, belum lagi dengan contoh kerja panduan reka bentuk. Sehingga disemak, ia hanyalah bantuan: semak ahli yang penting dengan tangan.
- Semakan reka bentuk menggunakan daya tertib pertama (tiada kesan tertib kedua) dan hanya menyemak bentuk-I. Belum dibina: tiub, sudut, saluran, bentuk kimpalan, bahagian langsing (AISC) atau kelas 4 (Eurocode) dalam lenturan, kilasan, lengkokan ricih bersama lenturan, sambungan, lesu, kebakaran, perincian seismik dan konkrit. Bahagian langsing dalam mampatan membiarkan semakan mampatan dikeluarkan, dan ahli dibaca "lulus, sebahagiannya disemak".
- Analisis rangka masih tertib pertama dan linear, dan belum dicuba oleh jurutera pada kerja sebenar.
- Lubang bolt, bolt, kimpalan dan tapak asas tidak ada dalam eksport USD.

Yang lain terdapat dalam [Apa yang belum dibina](topic:not-built-yet).
