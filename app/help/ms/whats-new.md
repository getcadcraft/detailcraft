---
title: Perkara baharu dalam 0.8 dan 0.8.1
summary: Filem pendirian daripada carta beban kren, autopilot sambungan, peta kesesakan tetulang, semakan asas, panel rangka kayu dan keluli nipis, semakan kebolehbinaan dan kebolehcapaian kimpalan, stok pembekal, apa yang pecah dahulu, semakan semula langsung, lebih banyak semakan konkrit dan pembetulan 0.8.1.
keywords: perkara baharu, what's new, nota keluaran, changelog, perubahan, 0.8, 0.8.1, versi, ciri baharu, pendirian, kren, carta beban, filem, autopilot, sambungan, tetulang, kesesakan, asas, tapak asas, mat, enapan, rangka, kayu, keluli nipis, senarai potongan, kebolehbinaan, kebolehcapaian kimpalan, pembekal, stok, masa penghantaran, apa yang pecah dahulu, langsung, konkrit, seismik, slab, bahasa, pembantu
from: 6e33e052
---

Ini ialah perubahan dalam DetailCraft 0.8 (1 November 2026) dan 0.8.1 (2 November 2026), berbanding dengan 0.7. 0.7 menyemak anggota keluli; 0.8 merancang angkatan, mencadangkan sambungan, menyemak asas dan tetulang, serta merangka dinding, lantai dan bumbung kayu dan keluli nipis.

## Baharu

### Pendirian

- **Pelan pendirian dan filem.** Dalam tab {{ui:Erection}}, terangkan kren (di mana ia berdiri, cangkuk tertingginya, rigging yang tiada dalam carta) dan taip baris carta bebannya. DetailCraft mengangkat model satu himpunan pada satu masa, mengikut tertib fasa dan tingkat demi tingkat, dan menyemak setiap angkatan terhadap carta pada jejarinya serta margin yang anda tetapkan. {{ui:Save movie}} menulis satu fail HTML yang dimainkan luar talian dalam mana-mana pelayar, termasuk telefon. Angkatan yang melebihi carta, melepasinya atau terlalu tinggi berada dalam {{ui:Problems}}. Ia ialah pelan daripada nombor anda, bukan pelan angkatan. Lihat [Pelan pendirian dan filem](topic:erection-movie).

### Sambungan

- **Autopilot sambungan.** Tab {{ui:Autopilot}} melihat setiap sambungan yang tiada sambungan dan mencadangkan satu daripada bentuknya: plat tapak, tab ricih, plat hujung bagi rasuk yang anda tandakan sebagai rasuk momen, penyambung dan plat gusset. Berikan beban seragam atau ricih hujung tunggal, dan bilangan bolt mengikut kekuatan reka bentuk bolt. {{ui:Add them all}} menambah cadangan sebagai satu langkah buat asal. Ia ialah nilai permulaan untuk disemak, bukan reka bentuk sambungan.
- **Semakan kebolehbinaan.** {{ui:Problems}} untuk bolt yang tidak dapat dicapai oleh sepana, bolt yang terlalu rapat untuk soket, kimpalan fillet di luar had saiznya, dan bahagian berongga yang menakung air. Kebolehcapaian kimpalan baharu: kimpalan fillet satu lilitan yang tidak dapat dicapai oleh mulut obor tukang kimpal disenaraikan bersama bahagian yang menghalangnya dan bahagian kimpalan yang terjejas. Lihat [Semakan kebolehbinaan](topic:constructability).

### Asas dan tetulang

- **Semakan asas.** Tab {{ui:Foundation}} menyemak tapak asas, tapak asas gabungan dan tikar pada tanah yang anda terangkan: galas, gelincir dan guling daripada beban perkhidmatan; lenturan, ricih, tebukan, perkembangan dan keluli minimum daripada beban terfaktor (ACI 318-19). Tiang berhampiran tepi atau sudut disemak dengan keratan yang dipotong oleh tepi tapak asas. Enapan datang daripada modulus tanah, tikar fleksibel diselesaikan atas spring daripada modulus subgred, dan kumpulan cerucuk serta dinding penahan mempunyai panel sendiri. Beban tiang boleh ditaip atau diambil daripada {{ui:Analysis}}. Lihat [Semakan asas](topic:foundation-checks).
- **Peta kesesakan tetulang.** Tab {{ui:Congestion}} melukis peta haba bagi setiap tapak asas seperti dilihat dari atas: di mana bar memberi terlalu sedikit ruang untuk konkrit turun, berbanding peraturan jarak bersih dan, jika anda memberinya, agregat terbesar dan kepala penggetar. Lihat [Peta kesesakan tetulang](topic:rebar-congestion).

### Rangka dan bekalan

- **Rangka kayu dan keluli nipis.** Tab {{ui:Framing}} merangka panel dinding, lantai dan bumbung dengan setiap keping, senarai potongan, stok untuk dibeli dan lukisan bengkel mengikut skala. {{ui:Place as members}} meletakkan keping-keping itu dalam model, dan {{ui:PDF sheets}} menyimpan satu helaian bagi setiap panel. Saiz, jarak dan header ialah milik anda: DetailCraft tidak menyemak sama ada ia menanggung beban. Lihat [Panel rangka kayu dan keluli nipis](topic:framing-panels).
- **Stok pembekal dan masa penghantaran.** Tab {{ui:Supply}} membaca senarai stok pembekal (CSV) dan menunjukkan, bagi setiap bahagian yang dibeli oleh senarai potongan, sama ada terdapat cukup stok dan berapa lama penantian. Kekurangan dan bahagian lewat disenaraikan dalam {{ui:Problems}}. Tiada apa-apa dipesan. Lihat [Stok pembekal dan masa penghantaran](topic:supplier-stock).

### Analisis dan reka bentuk

- **Apa yang pecah dahulu?** Dalam tab {{ui:Analysis}}, butang ini mencari gabungan kekuatan yang mengawal, anggota yang paling lemah, sejauh mana beban boleh bertambah sebelum anggota pertama mencapai hadnya, dan plat hujung atau tab ricih yang paling lemah apabila kekuatan ricih bolt-boltnya diketahui. Ia memerlukan gabungan dan kod reka bentuk dahulu. Galas, ricih blok, kimpalan dan prying tidak disemak. Pembantu anda yang bersambung juga boleh bertanya perkara yang sama.
- **Langsung.** Tandakan {{ui:Live: solve again after each edit}} dan rangka akan diselesaikan semula selepas setiap suntingan.
- **Konkrit, dan lebih banyak.** Tiang langsing dalam rangka tanpa goyang direka untuk momen terbesarnya (ACI 318-19 6.6.4.5). Tempoh seismik boleh diambil daripada analisis dengan kaedah Rayleigh. Slab yang dibuat daripada plat mendapat keluli yang diperlukan setiap lapisan daripada momennya, dan ricih satu hala. Lihat [Semak anggota konkrit dan buat beban seismik](topic:concrete-and-seismic).
- **Untuk jurutera menyemak.** Keputusan asas, konkrit dan Apa yang pecah dahulu ialah bantuan sahaja. Beban angin belum dibina.

### Dalam setiap aplikasi

- **Bahasa.** Bantuan tersedia dalam 54 bahasa. Bahasa selain Inggeris ialah draf mesin sehingga penutur asli membacanya; sepuluh ialah baharu (Lithuania, Latvia, Bosnia, Marathi, Telugu, Albania, Afrikaans, Filipino, Swahili, Uzbek).
- **Baris bar alat.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} memilih wrap, 2 baris atau 1 baris. Bar yang sudah muat kekal seperti sedia ada; yang lain boleh digulung ke sisi.
- **Grid sifat.** Medan asas menggunakan grid kongsi: kategori boleh dilipat dan ketumpatan padat. Pengiraan ditaip seperti 2*450 masih berfungsi.
- **Peranti input.** Pad sentuh, pen, tetikus 3D, pengawal dan MIDI boleh memacu aplikasi. Lihat [Bergerak dalam 3D](topic:navigate-3d).
- **Panel Problems.** Amaran bagi semakan baharu di atas muncul dalam panel {{ui:Problems}} yang sama seperti sebelumnya.
- **Sambungkan AI anda.** Pembantu anda sendiri, disambungkan melalui CadCraft Studio, berfungsi dengan kesemua lapan aplikasi dan hanya melihat apa yang anda benarkan. Sambungan satu klik, penyambung dihoskan dan kunci API anda dalam Studio masih akan datang. Lihat [Gunakan DetailCraft dengan pembantu AI](topic:use-with-ai-assistants).

## Dibetulkan dalam 0.8.1

- **Bahasa dalam Studio.** Studio dan edisi pakej boleh bertukar bahasa semasa larian; sebelum ini hanya Inggeris. Ia belum diuji pada setiap platform: beritahu kami jika bahasa tidak bertukar.
- **Pilihan tingkap bersilang.** Pemasang 0.8.1 membawa kelakuan pilih-mengikut-tingkap yang sudah betul dalam binaan web 0.8; pemasang lama tidak.
- **Tablet dalam potret.** Ruang grid yang berlebihan diberikan kepada kanvas, dan susun atur helaian bermula pada 760 px atau kurang.

## Belum ada dalam versi ini

- **Hantar NC ke mesin** belum dikeluarkan.
- **Beban angin** bagi konkrit belum dibina, dan semakan konkrit serta asas adalah untuk jurutera menyemak.
- **Penandatanganan kod.** Pemasang Windows dan .dmg macOS belum ditandatangani, jadi Windows mungkin memberi amaran dan macOS meminta klik kanan, kemudian Open.

Perubahan lebih awal terdapat dalam [Perkara baharu dalam 0.7](topic:whats-new-0-7).
