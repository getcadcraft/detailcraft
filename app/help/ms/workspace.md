---
title: Lawatan skrin
summary: Setiap bar, panel dan tab dalam DetailCraft mengikut nama pada skrin, dan kegunaan setiap satu.
keywords: skrin, susun atur, bar alat, panel, sifat, bar status, laporan, antara muka, ui, tab
from: 94f81073
---

DetailCraft memenuhi tetingkap pelayar di bawah bar aplikasi. Dari atas ke bawah: bar alat, kemudian tiga lajur (panel {{ui:Model}}, paparan, panel {{ui:Properties}}), kemudian tab laporan, kemudian bar status.

## Bar aplikasi

Bar nipis di bahagian paling atas tergolong dalam laman CadCraft, bukan dalam model. Ia memaparkan nama dan versi aplikasi, pautan ke {{ui:About DetailCraft}}, {{ui:Help}} (atau {{key:F1}}) untuk bantuan ini, {{ui:Save for offline}}, butang mod skrin dan suis {{ui:Paper}} / {{ui:Model}}.

- {{ui:Save for offline}} menyimpan DetailCraft, paparan 3D dan bantuan ini dalam pelayar anda supaya ia dibuka tanpa sambungan. Ia memaparkan {{ui:Offline ready}} setelah disimpan; klik padanya kemudian untuk {{ui:Save again (get the newest version)}} atau {{ui:Remove the offline copy}}. Lihat [Bekerja secara luar talian](common:offline).
- {{ui:Paper}} memberi skrin cerah dan {{ui:Model}} skrin gelap. Paparan 3D mengikutinya serta-merta; tiada apa-apa dalam model anda berubah.
- Butang mod skrin dan {{key:Ctrl+Shift+F}} bertukar antara normal, skrin penuh, dan skrin penuh dengan bar disembunyikan. {{key:Ctrl+Shift+F}} menggunakan kekunci Control pada setiap komputer, termasuk Mac. Dengan bar disembunyikan, tuju ke tepi atas skrin (atau ketik) untuk memunculkannya semula. {{key:Esc}} keluar daripada skrin penuh.

## Bar alat

Bar alat mempunyai lima kumpulan. Letakkan kursor pada butang untuk melihat apa yang dilakukannya dan kekunci pintasnya.

| Kumpulan | Butang | Apa yang dilakukannya |
|---|---|---|
| {{ui:File}} | {{ui:New}}, {{ui:Open}}, {{ui:Import IFC}}, {{ui:Save}}, {{ui:Sample}} | Mula model, buka `.detailcraft.json` atau fail IFC yang disimpan, simpan satu, atau buka bingkai sampel |
| {{ui:Place}} | {{ui:Select}}, {{ui:Beam}}, {{ui:Column}}, {{ui:Brace}}, {{ui:Plate}}, {{ui:Footing}}, {{ui:Stair}} | Alat yang digunakan oleh klik seterusnya dalam paparan |
| {{ui:Connect}} | {{ui:End plates}}, {{ui:Base plate}}, dan dalam {{ui:More}}: {{ui:Shear tabs}}, {{ui:Splice}}, {{ui:Gusset}}, {{ui:Similar}} | Tambah sambungan pada rasuk, tiang atau tupang yang dipilih, atau salin sambungan yang dipilih ke setiap sambungan yang serupa |
| {{ui:Edit}} | {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:More}} | Langkah ke belakang dan ke hadapan melalui suntingan; salin pilihan dan tampalnya. {{ui:More}} membuka menu dengan {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}} dan {{ui:Select none}}, setiap satu dengan kekunci pintasnya |
| {{ui:Output}} | {{ui:IFC}}, {{ui:NC files}}, {{ui:BOM}}, {{ui:Shop drawing}}, {{ui:Drawings}}, dan dalam {{ui:More}}: {{ui:Bending}}, {{ui:Weight report by phase}}, {{ui:KISS file for fabrication software}} | Muat turun satu eksport, atau buka helaian lukisan |

Butang dan item menu yang tidak dapat bertindak pada masa ini akan dilorekkan kelabu, dan apabila diletakkan kursor di atasnya ia memberitahu sebabnya. {{ui:End plates}} memerlukan rasuk yang dipilih, {{ui:Base plate}} tiang yang dipilih, {{ui:Similar}} sambungan yang dipilih, {{ui:Shop drawing}} model yang mempunyai bahagian, {{ui:Copy}} anggota atau asas yang dipilih, dan {{ui:Paste}} sesuatu yang telah disalin. Lihat [Salin, tampal dan pendua](topic:copy-paste).

## Panel Model (kiri)

- {{ui:Model}}: {{ui:Name}} model. Ia menamakan setiap fail yang anda simpan atau eksport.
- {{ui:Grids}}: garisan grid dan jaraknya, serta {{ui:Apply grids}}. Lihat [Sediakan grid dan aras](topic:grids-and-levels).
- {{ui:Levels}}: satu baris bagi setiap aras (nama dan aras dalam mm), {{ui:Add level}} dan {{ui:Apply levels}}.
- {{ui:Custom profile}}: buat keratan parametrik anda sendiri. Tertutup sehingga anda membukanya.
- {{ui:Part marks}}: setiap tanda bahagian dalam model dengan profil, panjang dan bilangannya. Klik satu tanda untuk memilih bahagian pertama yang mempunyainya.

{{ui:Grids}}, {{ui:Levels}} dan {{ui:Custom profile}} boleh dilipat: klik tajuknya.

## Paparan (tengah)

Paparan menunjukkan model dalam 3D. Di atasnya, bar paparan mempunyai tiga butang dan satu senarai:

- {{ui:3D}}: pusingkan model dengan bebas.
- {{ui:Plan}}: lihat tepat ke bawah pada satu aras. Senarai aras muncul di sebelah butang. Apa-apa yang lebih 1.5 m di atas aras dipotong supaya anda dapat melihat dan mengklik aras dengan jelas.
- {{ui:Elevation}}: lihat tepat pada satu garisan grid berhuruf (Grid A, Grid B …). Senarai grid berhuruf muncul. Hanya keluli dalam lingkungan 1 m daripada garisan itu ditunjukkan.
- Butang muat di hujung kanan bar paparan memperbesar untuk menunjukkan keseluruhan model.

Titik kecil menandakan setiap persilangan grid pada setiap aras. Semasa alat meletakkan aktif, titik yang paling dekat dengan kursor menyala dan bar status menamakannya, contohnya "A/2 at Level 1". Warna membezakan jenis anggota: tiang, rasuk, tupang dan plat masing-masing mempunyai warnanya sendiri, bolt dan rod warna lain, asas tapak lutsinar dan tetulang dilukis sebagai tiub. Lubang ditunjukkan sebagai palam gelap; potongan hujung dipotong.

Cara memusing, menggelongsor dan memperbesar: [Bergerak dalam paparan 3D](topic:navigate-3d).

Apabila model kosong, paparan menunjukkan senarai ringkas "Start a model". Anda juga boleh menjatuhkan fail model yang disimpan di mana-mana sahaja pada paparan untuk membukanya.

## Panel Properties (kanan)

Apa yang dipaparkan panel ini bergantung pada apa yang anda lakukan, dan tajuknya menyatakannya: "Model", "Place a beam", "Beam b2", "End plate connection", "Base plate", "Footing F1", "3 selected" atau "Paste".

- **Tiada apa-apa dipilih:** ringkasan model (anggota, sambungan, asas, bahagian, tanda, bolt, berat keluli dan tetulang, grid, aras).
- **Alat meletakkan aktif:** pilihan bagi bahagian seterusnya (profil, bahan, kedudukan, putaran, dan bagi tiang {{ui:Up to}}), ringkasan profil yang dipilih, dan borang {{ui:Add by grid}} untuk meletakkan tanpa mengklik dalam paparan.
- **Anggota dipilih:** namanya, profil, bahan, kedudukan, putaran, koordinat kedua-dua hujungnya, tandanya, panjang potongan dan berat, lubang dan potongan hujungnya, serta butang untuk sambungan, lukisan bengkelnya dan {{ui:Delete}}.
- **Sambungan dipilih:** setiap tetapan plat, bolt dan kimpalan, bolt dan kimpalan yang dibuatnya, amarannya, serta {{ui:Apply to similar}}.
- **Asas dipilih:** kedudukan dan saiznya, tikar bawah, bar permulaan, dan tanda bar yang digunakannya.
- **Beberapa perkara dipilih:** berapa banyak anggota bagi setiap jenis, sambungan dan asas, berat keluli mereka, serta {{ui:Copy}}, {{ui:Duplicate}} dan {{ui:Delete}}.
- **Menampal:** apa yang ada pada papan keratan, dan borang untuk menampal mengikut ofset yang ditaip atau pada persilangan grid yang anda pilih daripada senarai.

Medan nombor berkesan apabila anda menekan {{key:Enter}} atau meninggalkan medan. Setiap perubahan ialah satu langkah yang boleh anda buat asal.

## Tab laporan (bawah)

- {{ui:Problems}}: semua yang DetailCraft tidak dapat bina atau mahu anda semak, dengan butang {{ui:Select}} pada setiap baris. Tab memaparkan bilangan dalam kurungan.
- {{ui:Bill of materials}}: bahagian, himpunan, serta bolt dan rod sauh, dengan berat dan pautan {{ui:Download CSV}}. Klik tanda bahagian untuk memilih bahagian itu.
- {{ui:Bending schedule}}: setiap tanda bar dalam setiap asas, dengan pautan {{ui:Download CSV}}.

Apabila satu tab difokuskan, {{key:Left}} dan {{key:Right}} bergerak antara tab.

## Bar status

Bar di sepanjang bahagian bawah mempunyai tiga bahagian: persilangan grid di bawah kursor semasa meletakkan, mesej terkini (apa yang baru berlaku, atau sebab sesuatu ditolak), dan jumlah berjalan bagi bahagian, bolt, berat keluli dan berat tetulang. Apabila sesuatu tindakan seolah-olah tidak berbuat apa-apa, baca mesej di sini dahulu.

Tajuk tab pelayar bermula dengan titik (•) selagi model mempunyai perubahan yang belum anda simpan.

## Pada skrin sempit

Di bawah kira-kira 760 piksel lebar, lajur ditindih: bar alat, paparan, bar status, {{ui:Properties}}, tab laporan, kemudian panel {{ui:Model}} di akhir. Tatal halaman untuk sampai kepadanya. DetailCraft direka untuk skrin desktop atau komputer riba; telefon sesuai untuk melihat, bukan untuk pemerincian.
