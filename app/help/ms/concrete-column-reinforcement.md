---
title: Tetulangkan tiang konkrit segi empat tepat
summary: Contoh kerja untuk memerinci tiang konkrit segi empat tepat dalam DetailCraft: letakkan, beri bar memanjang dan tali, baca semakan, sambungan bertindih di atasnya dan tanda bar, dan lukis helaian bengkelnya.
keywords: tiang konkrit, tiang segi empat tepat, tetulangan tiang, bar memanjang, bar tegak, tali, sengkang, tali silang, sambungan bertindih, sambungan, bar permulaan, nisbah keluli tiang, 1 peratus, 8 peratus, jarak tali, ACI 318-19 25.7.2, EN 1992-1-1 9.5, lukisan bengkel, tanda bar, 8C1, 3C2
from: aee2a3ca
---

Topik ini membawa satu tiang persegi dari tiada kepada perincian yang disemak, dilukis dan dijadualkan. Peraturan umum untuk rasuk, papak dan dinding ada dalam [Memerinci konkrit bertetulang](topic:reinforced-concrete); ini ialah bahagian tiang, dengan nombor yang boleh anda hasilkan semula.

:::warning
DetailCraft memerinci bar yang anda berikan kepadanya. Ia tidak mereka bentuknya. Bar di bawah ialah nilai permulaan untuk contoh ini, bukan cadangan: jurutera rekod memilih saiz, bilangan dan jarak.
:::

## Apa itu tiang di sini

Tiang segi empat tepat mempunyai lebar (sepanjang x tempatannya) dan kedalaman merentas (sepanjang y tempatannya), penutup bersih ke tali, bar memanjang pada setiap muka dan tali tertutup. Memutarnya memutar keseluruhan; muka kekal sebagai "muka lebar" dan "muka kedalaman".

- Bar memanjang diberi sebagai bilangan pada muka lebar dan bilangan pada muka kedalaman. Bar sudut dikira pada kedua-duanya, jadi 3 dan 3 menjadi 8 bar; 4 dan 4 menjadi 12.
- Tali ialah segi empat tepat tertutup dengan dua cangkuk pada satu sudut, 135° atau 90°. Tali pertama berada pada jarak tetap di atas lantai (dan di bawah yang seterusnya), zon hujung mempunyai jarak yang lebih rapat, bahagian tengah lebih luas.
- Apa yang dilakukan bar di bahagian atas: diteruskan dan disambung bertindih dengan bar di atas, dilentur masuk dengan cangkuk 90° ke dalam lantai, atau berhenti di bawah bahagian atas.

## Tiang yang dikerjakan

Tiang 400 × 400 mm, 3600 mm antara lantai di atas dan lantai di bawah, bar memanjang #8, tali #3, penutup bersih 40 mm, f'c 28 MPa, fy 420 MPa, ACI 318-19, dalaman.

1. Buka tab {{ui:Konkrit}} dan tetapkan garis grid dan aras yang disokong tiang (panel kiri).
2. Dalam {{ui:Tambah mengikut grid}}, pilih {{ui:Tiang konkrit}}, pilih persilangan grid dan dua aras, tetapkan {{ui:Lebar (mm)}} dan {{ui:Kedalaman merentas (mm)}} kepada 400 dan pilih {{ui:Tambah}}.
3. Dalam panel {{ui:Sifat}} tetapkan:
   - {{ui:Selimut bersih (mm)}} 40;
   - {{ui:Bar memanjang}} #8, {{ui:Bar pada muka lebar}} 3, {{ui:Bar pada muka kedalaman}} 3;
   - {{ui:Tali}} #3, {{ui:Cangkuk}} 135°, {{ui:Jarak antara (mm)}} 300, {{ui:Panjang zon hujung (mm)}} 600, {{ui:Jarak dalam zon hujung (mm)}} 150, {{ui:Yang pertama dari muka (mm)}} 50;
   - {{ui:Bar di bahagian atas}} {{ui:Teruskan dan sambung bertindih dengan bar di atas}}.

Setiap perubahan ialah satu langkah buat asal.

### Apa yang anda dapat

| Bahagian | Hasil |
|---|---|
| Bar memanjang | 8 bar #8 (cincin 3 × 3), setiap satu panjang 4375 mm: tiang 3600 mm ditambah sambungan bertindih 775 mm di atasnya |
| Sambungan bertindih | 757 mm diperlukan untuk sambungan bertindih mampatan (ACI 318-19 25.5.5.1, fy 420), 775 mm disediakan: keperluan dibundarkan ke atas kepada 25 mm yang seterusnya |
| Tali | 17 tali #3, setiap satu dengan panjang potong kira-kira 1359 mm, berjarak 150 mm dalam dua zon hujung 600 mm dan 300 mm di antaranya |
| Nisbah keluli | 2.5 % daripada keratan kasar (had 1 % hingga 8 %, ACI 318-19 10.6.1.1) |
| Jarak bersih bar | 112 mm (perlu sekurang-kurangnya 40 mm, ACI 318-19 25.2.3) |
| Jarak tali | 300 mm (dibenarkan 400 mm: yang terkecil daripada 16 diameter bar, 48 diameter tali dan sisi yang lebih kecil, ACI 318-19 25.7.2.1) |
| Saiz tali | #3 (dibenarkan sehingga 9.5 mm, ACI 318-19 25.7.2.2) |

Semua ini ada dalam senarai {{ui:Semakan}} elemen; sambungan bertindih juga ada dalam {{ui:Sambungan bertindih dan penambatan}}.

## Tali silang

Dengan satu tali perimeter, hanya bar sudut yang dipegang. ACI 318-19 25.7.2.3 membenarkan bar tengah pada muka tidak disokong jika ia berada dalam 150 mm bersih daripada bar sudut. Dengan 3 bar pada muka, seperti di atas, itu dipenuhi. Dengan 4 atau lebih bar pada muka ia tidak dipenuhi, dan DetailCraft menyatakannya sebagai amaran ({{ui:Semakan}} dan {{ui:Masalah}}): "tali silang" diperlukan. **Tali silang belum dilukis lagi**: tambahkannya dalam lukisan secara manual, atau pilih bar yang kurang pada muka.

Bagi EN 1992-1-1, DetailCraft menyemak saiz bar (sekurang-kurangnya 8 mm), bilangan bar (sekurang-kurangnya 4), luas keluli (0.2 % hingga 4 % keratan), jarak bersih dan jarak pautan (9.5.2 dan 9.5.3).

## Sambungan bertindih, tapak asas dan tiang di bawah

- Di mana **tapak asas model berdiri di bawah tiang**, tiang bersambung bertindih dengan bar permulaan tapak asas, dan sambungan bertindihnya turut disemak.
- Di mana **tiang lain model berdiri di bawahnya**, ia bersambung bertindih dengan bar tiang itu.
- Berikan {{ui:Panjang sambungan bertindih (mm, 0 = mengikut keperluan)}} sendiri untuk menggantikan; yang lebih pendek daripada yang diperlukan ialah masalah dan ditandai * dalam jadual.
- Sambungan bertindih mampatan digunakan secara lalai ({{ui:Sambungan bertindih mampatan}} dalam tetapan); pilih {{ui:Sambungan bertindih tegangan}} apabila tiang boleh berada dalam tegangan.

## Tanda, jadual dan helaian bengkel

Bar yang serupa berkongsi satu tanda: bar memanjang tiang di atas ialah 8C1, talinya 17C2 (nombor dahulu, kemudian huruf jenis C untuk tiang dan nombor berjalan). Ia muncul dalam tab {{ui:Jadual lenturan}}, dengan panjang potong dan berat, dan dalam CSV daripada {{ui:Output}} › {{ui:Lagi}} › {{ui:Lenturan}}.

Pilih {{ui:Lukisan bengkel}} bersebelahan tiang untuk helaian dengan tiang dalam dongakan (setiap bar, tandanya, zon tali dan sambungan bertindih didimensikan) dan keratan di tengah, diikuti oleh helaian pelenturan bar. Simpan {{ui:Helaian ini sebagai PDF}}.

## Apa yang tidak dibuat ini

- Tiang bulat dan spiral, dan tiang yang tidak segi empat tepat: belum dibina.
- Tali sudut dan tali silang dalam keratan, dan perincian seismik (bab 18 ACI 318-19): belum dibina.
- Sambungan pada kedudukan yang anda pilih, atau berselang-seli: semua bar bersambung bertindih pada satu keratan.
- Sama ada bar cukup untuk beban: itu reka bentuk jurutera.
