---
title: Perkara baharu dalam 0.7 (terdahulu)
summary: Semakan reka bentuk bagi I-shape keluli dengan gabungan beban daripada ASCE 7 atau EN 1990 dan semakan anggota kepada AISC 360 atau EN 1993-1-1, eksport USD model keluli, alat pembantu untuk USD, reben Keluli dengan butang besar dan kecil, panel yang boleh dikemas dan kotak dialog yang boleh dialihkan.
keywords: perkara baharu 0.7, keluaran terdahulu, nota keluaran, senarai perubahan, perubahan, 0.7, versi, ciri baharu, semakan reka bentuk, reka bentuk keluli, utilisation, utilization, gabungan beban, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocode, Annex Negara, beban hidup bumbung, had pesongan, usd, usda, usdc, usdz, openusd, pembantu, mcp, reben keluli, reben, butang berpecah, unit, padat, panel, kotak dialog, Portugis
from: 54a7a8f0
---

Ini ialah perkara yang berubah dalam DetailCraft 0.7, berbanding 0.6. Analisis rangka 0.6 kini mempunyai langkah kedua: menyemak anggota keluli mengikut kod reka bentuk.

## Baharu

### Sambungan mitre (0.7.1)

- **Dua I-shape bertemu pada sudut**, seperti sudut portal atau bubungan: pilih kedua-duanya, pilih {{ui:Mitre}} dalam menu {{ui:Lagi}} kumpulan {{ui:Sambung}}, dan kedua-dua hujung dipotong pada satah yang membahagi dua sudut. Plat hujung yang dibolt bersama dan pengejang web ialah kotak semak dalam kotak dialog Mitre yang baharu; medan bernombor dalam kotak dialog itu sepadan dengan lukisan sambungan anda yang dibuat semasa anda menaip. Mitre mengikut anggota apabila anggota itu dialihkan dan terbawa ke lukisan, fail NC (potongan condong), IFC dan senarai bahan. Lihat [Sambungan mitre](topic:mitres).

### Semakan reka bentuk

- **Gabungan beban daripada kod.** Dalam tab {{ui:Analisis}}, blok baharu {{ui:Semakan reka bentuk}} mempunyai {{ui:Kod reka bentuk}}: ASCE 7 + AISC 360 (Amerika Syarikat, LRFD) atau EN 1990 + EN 1993-1-1 (Eurocode). Beri setiap kes beban jenisnya (mati, hidup, beban hidup bumbung baharu, salji, angin, seismik), tekan {{ui:Buat kombinasi}}, dan DetailCraft menulis kombinasi kekuatan dan kebolehkhidmatan kod bagi kes anda. Kombinasi yang anda taip sendiri kekal. Lihat [Buat kombinasi](topic:design-checks#make-the-combinations).
- **Nilai Annex Negara.** Bagi Eurocode, faktor bermula pada nilai yang disyorkan; {{ui:Nilai Annex Negara}} membolehkan anda menaip nilai negara anda, dan ia disimpan dalam model. Lihat [Buat kombinasi](topic:design-checks#make-the-combinations).
- **Semak anggota.** {{ui:Semak anggota}} menyemak setiap I-shape keluli bagi tegangan, mampatan dengan lengkukan, lenturan dengan lengkukan sisi-kilas, ricih, lenturan dengan daya paksi dan pesongan berbanding {{ui:Had pesongan}} yang anda tetapkan. Jadual menunjukkan penggunaan setiap anggota, semakan yang menentukan dan kombinasinya, dan anggota diwarnakan pada model (biru, hijau, jingga, merah, kelabu untuk tidak disemak). Lihat [Semak anggota](topic:design-checks#check-the-members).
- **Dalam laporan.** {{ui:Laporan (PDF)}} dan {{ui:Laporan (CSV)}} menambah edisi kod, tetapan, penggunaan mengikut anggota dan setiap klausa yang digunakan. Lihat [Laporan](topic:design-checks#the-report).
- **Alat bantu sehingga jurutera menyemaknya.** Ia hanya menggunakan daya tertib pertama. Tiub, sudut, saluran, bentuk kimpalan dan bahagian langsing atau kelas 4 dibaca "belum disemak", dengan sebab; kilasan, sambungan dan konkrit tidak disemak. Lihat [Apa yang tidak disemak](topic:design-checks#what-is-not-checked).

### USD

- **Eksport model keluli sebagai USD.** {{ui:USD}} dalam kumpulan {{ui:Output}} menulis model sebagai {{ui:Teks (.usda)}}, {{ui:Binari (.usdc)}} atau {{ui:Pakej (.usdz)}} untuk program pemaparan dan pemasangan adegan: setiap himpunan memuatkan bahagiannya, setiap bahagian ialah keratannya yang dilanjutkan sepanjang panjangnya dengan potongan hujung, dan setiap bahagian membawa tanda bahagian, profil, gred, panjang dan berat. Lubang bolt, bolt, kimpalan dan asas tidak berada dalam jejaring USD. Lihat [Eksport model keluli sebagai USD](topic:usd).

### Pembantu AI

- **USD untuk pembantu.** Pembantu anda sendiri, disambungkan melalui CadCraft Studio, boleh mengeksport model sebagai USD (`usd_export`), dan dalam Studio menulisnya ke folder yang anda benarkan. Lihat [Apa yang boleh diminta oleh pembantu](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Diubah

- **Reben Keluli** mempunyai butang besar dan kecil: {{ui:Rasuk}} besar bersebelahan {{ui:Tiang}}, {{ui:Tupang}} dan {{ui:Plat}} kecil pada {{ui:Pemodelan}} › {{ui:Ahli}}; {{ui:Plat hujung}} besar pada {{ui:Perincian}} › {{ui:Sambungan}}, dengan {{ui:Penyambung}} dan {{ui:Plat gusset}} berkongsi satu butang berpecah; {{ui:Tampal}} besar pada {{ui:Sunting}} › {{ui:Papan keratan}}, dengan {{ui:Tampal di tempat yang sama}} dan {{ui:Pendua}} di sebalik anak panah kumpulan. {{ui:Fabrikasi}} › {{ui:Pertukaran}} mempunyai {{ui:Eksport USD}} bersebelahan IFC. Gaya menu lain kekal seperti sebelum ini. Lihat [Menu, kekunci dan tetikus](topic:menus-keys-and-mouse#the-three-styles).
- [Analisis rangka](topic:frame-analysis) kini menunjuk kepada semakan reka bentuk, dan gabungannya boleh dibuat mengikut kod.

## Dalam setiap aplikasi

- **Unit.** {{ui:Tetapan}} › {{ui:Umum}} › {{ui:Unit}} mempunyai satu senarai setiap satu bagi panjang, luas, isipadu, sudut dan cerun, dengan saiz tepat yang diberikan oleh takrif unit (kaki tinjauan AS ialah unit tersendiri). Matikan unit yang tidak pernah anda guna dan ia keluar daripada senarai unit; tandakan satu bintang dan kerja baharu bermula dalam unit itu. Fail sentiasa menyimpan unitnya sendiri. Kotak DetailCraft sendiri belum mengikut senarai ini: panjangnya masih ditaip dalam milimeter. Lihat [Unit, nilai yang ditaip dan senarai unit](common:unit-lists).
- **Ketumpatan reka letak yang lebih padat dan panel yang boleh dikemas.** {{ui:Tetapan}} › {{ui:Umum}} › {{ui:Ketumpatan reka letak}} › {{ui:Padat}} memuatkan lebih banyak pada skrin (skrin sentuh dan telefon mengekalkan butang besar mereka). Setiap panel sisi mempunyai bar tajuk nipis: seret untuk melekapkan atau menerapungkan panel, lepaskan pada bar panel lain untuk berkongsi satu bingkai sebagai tab, sematkan untuk meluncur ke tepi, atau sembunyikannya dan kembalikan dari tepi. Lihat [Susun panel](common:arrange-panels#make-the-layout-denser).
- **Kotak dialog boleh dialihkan.** Seret kotak dialog mengikut bar tajuknya keluar dari laluan lukisan; ia kembali ke tempat anda tinggalkannya. Klik dua kali bar tajuk untuk memusatkannya semula. Lihat [Alihkan kotak dialog](common:arrange-panels#move-a-dialog).
- **Resipi untuk pembantu AI.** Sepuluh permintaan yang siap dikerjakan untuk pembantu anda sendiri (kemas kini lukisan, plot satu set, semak lukisan, tanya soalan model, jumlahkan pengukuran kuantiti, cuba varian bahagian…), setiap satu dengan alat yang dipanggilnya dan kebenaran yang diperlukan, dan setiap satu diulang oleh ujian kami. Aplikasi tidak mengandungi AI. Lihat [Resipi untuk pembantu AI](common:assistants-recipes).
- **Bahasa.** **Português (Portugal)** baharu dalam {{ui:Tetapan}} › {{ui:Umum}} › {{ui:Bahasa}}. Ia, **Português (Brasil)**, **Español (México)** dan **Bahasa Indonesia** kini mempunyai setiap perkataan aplikasi, sebagai draf yang belum disemak oleh penutur asli. Topik bantuan dalam bahasa Inggeris.
- **CadCraft Studio** menyatakan sebab semakan kemas kini gagal (tiada fail untuk sistem anda lagi, tiada rangkaian, tandatangan tidak sah) dan bukan sekadar "Selesai", dan berhenti memunculkan semula kad Perkara baharu yang anda tutup sehingga ada keluaran yang lebih baharu.

## Belum ada dalam versi ini

- **0.7 tidak ditandatangani kod.** Penandatanganan dan pakej Microsoft Store dipindahkan ke 0.8 kerana pengesahan sijil belum selesai. Semak SHA-256 di sebelah setiap fail di getcadcraft.com/download. Pada Windows, jika SmartScreen menghentikan pemasang, pilih {{ui:Maklumat lanjut}}, kemudian {{ui:Jalankan juga}}. Pada Mac, kali pertama, klik kanan CadCraft Studio dan pilih {{ui:Buka}}. CadCraft Studio belum ada dalam kedai aplikasi, dan belum ada binaan iPad atau iPhone.
- Senarai sudut dan cerun dalam {{ui:Unit}} disimpan, tetapi belum ada kotak yang membacanya.
- **Semakan reka bentuk belum disemak oleh jurutera.** Ujian kami membandingkannya dengan nilai jadual yang dicetak dan formula yang dikira dengan tangan, belum dengan contoh kerja panduan reka bentuk. Sehingga disemak, ia hanyalah alat bantu: semak secara manual anggota yang penting.
- Semakan reka bentuk menggunakan daya tertib pertama (tiada kesan tertib kedua) dan hanya menyemak I-shape. Belum dibina: tiub, sudut, saluran, bentuk kimpalan, bahagian langsing (AISC) atau kelas 4 (Eurocode) dalam lenturan, kilasan, lengkukan ricih bersama lenturan, sambungan, lesu, api, perincian seismik dan konkrit. Bahagian langsing dalam mampatan menggugurkan semakan mampatan, dan anggota dibaca "lulus, sebahagiannya disemak".
- Analisis rangka masih tertib pertama dan linear, dan belum dicuba oleh jurutera pada kerja sebenar.
- Lubang bolt, bolt, kimpalan dan asas tidak berada dalam eksport USD.

Perkara lain ada dalam [Apa yang belum dibina](topic:not-built-yet).
