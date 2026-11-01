---
title: Lawatan skrin
summary: Setiap bar, panel dan tab dalam DetailCraft mengikut nama pada skrin, dan kegunaannya.
keywords: skrin, susun atur, bar alat, panel, sifat, bar status, laporan, antara muka, ui, tab
from: 454f74fd
---

DetailCraft mengisi tetingkap pelayar di bawah bar aplikasi. Dari atas ke bawah: bar alat, kemudian tiga lajur (panel {{ui:Model}}, paparan, panel {{ui:Sifat}}), kemudian tab laporan, kemudian bar status.

## Bar aplikasi

Bar nipis di bahagian paling atas tergolong dalam laman CadCraft, bukan model. Ia menunjukkan nama dan versi aplikasi, pautan ke {{ui:Perihal DetailCraft}}, {{ui:Bantuan}} (atau {{key:F1}}) untuk bantuan ini, {{ui:Simpan untuk luar talian}}, butang mod skrin dan suis {{ui:Kertas}} / {{ui:Model}}.

- {{ui:Simpan untuk luar talian}} menyimpan DetailCraft, paparan 3D dan bantuan ini dalam pelayar anda supaya ia dibuka tanpa sambungan. Ia memaparkan {{ui:Sedia untuk luar talian}} sebaik sahaja disimpan; klik kemudian untuk {{ui:Simpan semula (dapatkan versi terkini)}} atau {{ui:Alih keluar salinan luar talian}}. Lihat [Bekerja luar talian](common:offline).
- {{ui:Kertas}} memberi skrin cerah dan {{ui:Model}} skrin gelap. Paparan 3D mengikut serta-merta; tiada apa-apa dalam model anda berubah.
- Butang mod skrin dan {{key:Ctrl+Shift+F}} bertukar secara berkitar antara biasa, skrin penuh, dan skrin penuh dengan bar disembunyikan. {{key:Ctrl+Shift+F}} menggunakan kekunci Ctrl pada setiap komputer, termasuk Mac. Dengan bar disembunyikan, halakan ke tepi atas skrin (atau ketik) untuk memunculkannya semula. {{key:Esc}} keluar daripada skrin penuh.

## Bar alat

Bar alat mempunyai lima kumpulan. Halakan pada butang untuk melihat fungsinya dan kekunci pintasnya.

| Kumpulan | Butang | Fungsi |
|---|---|---|
| {{ui:Fail}} | {{ui:Baharu}}, {{ui:Buka}}, {{ui:Import IFC}}, {{ui:Simpan}}, {{ui:Sampel}} | Mula model, buka `.detailcraft.json` yang disimpan atau fail IFC, simpan satu, atau buka rangka sampel |
| {{ui:Letak}} | {{ui:Pilih}}, {{ui:Rasuk}}, {{ui:Tiang}}, {{ui:Tupang}}, {{ui:Plat}}, {{ui:Tapak asas}}, {{ui:Tangga}} | Alat yang digunakan oleh klik seterusnya dalam paparan |
| {{ui:Sambung}} | {{ui:Plat hujung}}, {{ui:Plat tapak}}, dan dalam {{ui:Lagi}}: {{ui:Tab ricih}}, {{ui:Penyambung}}, {{ui:Plat gusset}}, {{ui:Serupa}} | Tambah sambungan pada rasuk, tiang atau tupang yang dipilih, atau salin sambungan yang dipilih ke setiap sambungan serupa dengannya |
| {{ui:Sunting}} | {{ui:Buat asal}}, {{ui:Buat semula}}, {{ui:Salin}}, {{ui:Tampal}}, {{ui:Lagi}} | Undur dan ulang melalui suntingan; salin pilihan dan tampalkannya. {{ui:Lagi}} membuka menu dengan {{ui:Potong}}, {{ui:Salin}}, {{ui:Tampal}}, {{ui:Tampal di tempat yang sama}}, {{ui:Pendua}}, {{ui:Padam}}, {{ui:Pilih semua}} dan {{ui:Nyahpilih semua}}, setiap satu dengan kekuncinya |
| {{ui:Output}} | {{ui:IFC}}, {{ui:Fail NC}}, {{ui:BOM}}, {{ui:Lukisan bengkel}}, {{ui:Lukisan}}, dan dalam {{ui:Lagi}}: {{ui:Lenturan}}, {{ui:Laporan berat mengikut fasa}}, {{ui:Fail KISS untuk perisian fabrikasi}} | Muat turun eksport, atau buka helaian lukisan |

Butang dan item menu yang tidak boleh bertindak pada masa ini akan dimalapkan, dan halakan pada satu daripadanya untuk melihat sebabnya. {{ui:Plat hujung}} memerlukan rasuk yang dipilih, {{ui:Plat tapak}} tiang yang dipilih, {{ui:Serupa}} sambungan yang dipilih, {{ui:Lukisan bengkel}} bahagian bentuk-I atau plat yang dipilih, {{ui:Salin}} ahli atau tapak asas yang dipilih, dan {{ui:Tampal}} sesuatu yang telah disalin. Lihat [Salin, tampal dan pendua](topic:copy-paste).

## Panel Model (kiri)

- {{ui:Model}}: {{ui:Nama}} model. Ia menamakan setiap fail yang anda simpan atau eksport.
- {{ui:Grid}}: garisan grid dan jaraknya, dan {{ui:Guna grid}}. Lihat [Tetapkan grid dan aras](topic:grids-and-levels).
- {{ui:Aras}}: satu baris bagi setiap aras (nama dan ketinggian dalam mm), {{ui:Tambah aras}} dan {{ui:Guna aras}}.
- {{ui:Profil tersuai}}: buat keratan berparameter anda sendiri. Tertutup sehingga anda membukanya.
- {{ui:Tanda bahagian}}: setiap tanda bahagian dalam model dengan profil, panjang dan bilangannya. Klik satu tanda untuk memilih bahagian pertama yang mempunyainya.

{{ui:Grid}}, {{ui:Aras}} dan {{ui:Profil tersuai}} boleh dilipat: klik tajuknya.

## Paparan (tengah)

Paparan menunjukkan model dalam 3D. Di atasnya, bar paparan mempunyai tiga butang dan satu senarai:

- {{ui:3D}}: pusing mengelilingi model dengan bebas.
- {{ui:Pelan}}: melihat terus ke bawah pada satu aras. Senarai aras muncul di sebelah butang. Apa-apa yang lebih 1.5 m di atas aras dipotong supaya anda dapat melihat dan mengklik aras dengan jelas.
- {{ui:Dongakan}}: melihat terus pada satu garisan grid berhuruf (Grid A, Grid B …). Senarai grid berhuruf muncul. Hanya keluli dalam lingkungan 1 m dari garisan itu ditunjukkan.
- Butang muat di hujung kanan bar paparan membuat zum untuk menunjukkan keseluruhan model.

Titik kecil menandakan setiap persilangan grid pada setiap aras. Semasa alat letakan dihidupkan, titik yang paling dekat dengan penunjuk menyala dan bar status menamakannya, contohnya "A/2 pada Aras 1". Warna membezakan jenis ahli: tiang, rasuk, tupang dan plat masing-masing mempunyai warnanya sendiri, bolt dan batang dengan warna lain, tapak asas lut sinar dan tetulang dilukis sebagai tiub. Lubang ditunjukkan sebagai palam gelap; potongan hujung dipotong.

Cara memusing, memanorama dan membuat zum: [Bergerak di sekitar paparan 3D](topic:navigate-3d).

Apabila model kosong, paparan menunjukkan senarai ringkas "Mula model". Anda juga boleh melepaskan fail model yang disimpan di mana-mana pada paparan untuk membukanya.

## Panel Sifat (kanan)

Apa yang dipaparkan panel ini bergantung pada apa yang anda lakukan, dan tajuknya menyatakan yang mana: "Model", "Letakkan rasuk", "Rasuk b2", "Sambungan plat hujung", "Plat tapak", "Tapak asas F1", "3 dipilih" atau "Tampal".

- **Tiada yang dipilih:** ringkasan model (ahli, sambungan, tapak asas, bahagian, tanda, bolt, berat keluli dan tetulang, grid, aras).
- **Alat letakan dihidupkan:** pilihan bagi bahagian seterusnya (profil, bahan, kedudukan, putaran, dan bagi tiang {{ui:Hingga}}), ringkasan profil yang dipilih, dan borang {{ui:Tambah mengikut grid}} untuk meletakkan tanpa mengklik dalam paparan.
- **Ahli dipilih:** namanya, profil, bahan, kedudukan, putaran, koordinat kedua-dua hujungnya, tandanya, panjang potongan dan berat, lubang dan potongan hujungnya, serta butang untuk sambungan, lukisan bengkelnya dan {{ui:Padam}}.
- **Sambungan dipilih:** setiap tetapan plat, bolt dan kimpalan, bolt dan kimpalan yang dibuatnya, amarannya, dan {{ui:Guna pada yang serupa}}.
- **Tapak asas dipilih:** kedudukan dan saizanya, jejaring bawah, bar penyambung, dan tanda bar yang digunakannya.
- **Beberapa perkara dipilih:** bilangan ahli bagi setiap jenis, sambungan dan tapak asas, berat keluli mereka, serta {{ui:Salin}}, {{ui:Pendua}} dan {{ui:Padam}}.
- **Tampal:** apa yang ada pada papan keratan, dan borang untuk menampal mengikut ofset yang ditaip atau pada persilangan grid yang anda pilih daripada senarai.

Medan nombor berkesan apabila anda tekan {{key:Enter}} atau meninggalkan medan. Setiap perubahan ialah satu langkah yang boleh anda buat asal.

## Tab laporan (bawah)

- {{ui:Masalah}}: segala yang DetailCraft tidak dapat bina atau mahu anda semak, dengan butang {{ui:Pilih}} pada setiap baris. Tab menunjukkan bilangan dalam kurungan.
- {{ui:Senarai bahan}}: bahagian, himpunan, serta bolt dan bolt sauh, dengan berat dan pautan {{ui:Muat turun CSV}}. Klik tanda bahagian untuk memilih bahagian itu.
- {{ui:Jadual lenturan}}: setiap tanda bar dalam setiap tapak asas, dengan pautan {{ui:Muat turun CSV}}.

Apabila tab difokuskan, {{key:Left}} dan {{key:Right}} bergerak antara tab.

## Bar status

Bar di sepanjang bahagian bawah mempunyai tiga bahagian: persilangan grid di bawah penunjuk semasa meletak, mesej terkini (apa yang baru berlaku, atau sebab sesuatu ditolak), dan jumlah berjalan bagi bahagian, bolt, berat keluli dan berat tetulang. Apabila sesuatu tindakan seakan tidak berbuat apa-apa, baca mesej di sini dahulu.

Tajuk tab pelayar bermula dengan titik (•) semasa model mempunyai perubahan yang belum anda simpan.

## Pada skrin sempit

Di bawah lebih kurang 760 piksel lebar, lajur disusun bertindih: bar alat, paparan, bar status, {{ui:Sifat}}, tab laporan, kemudian panel {{ui:Model}} paling akhir. Skrol halaman untuk mencapainya. DetailCraft direka untuk skrin desktop atau komputer riba; telefon sesuai untuk melihat, bukan untuk perincian.
