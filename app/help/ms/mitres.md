---
title: Sambungan mitre
summary: Sambungkan dua ahli bentuk I yang bertemu pada sudut: kedua-dua hujung dipotong pada satah yang membahagi dua sudut, dengan plat hujung, bolt dan pengejang jika anda mahu.
keywords: mitre, miter, sambungan mitre, lutut, haunch, bingkai portal, bubungan, sudut, potongan sudut, potongan serong, plat hujung, plat hujung berbolt, pengejang, sambung
from: cd8380d4
---

Mitre menyambungkan dua ahli bentuk I yang hujungnya bertemu pada sudut, seperti lutut bingkai portal, bubungan, atau dua rasuk yang membelok sudut dalam pelan. DetailCraft memotong kedua-dua hujung pada satah yang membahagi dua sudut antara keduanya, supaya dua permukaan potongan sepadan. Jika anda mahu, ia menambah plat hujung pada setiap hujung yang dipotong, membolt dua plat bersama, dan meletakkan sepasang pengejang badan dalam setiap ahli.

## Di mana ia berfungsi

- Dua **bentuk I** (IPE, HEA, HEB, W dan seumpamanya) yang **hujungnya bertemu pada nod yang sama**. Mana-mana ahli boleh dilukis dalam mana-mana arah.
- Sudut antara ahli mestilah sekurang-kurangnya 15°. Ahli yang sebaris ditolak: gunakan [sambatan](topic:splices).
- Potongan biasa (tanpa plat) berfungsi walau bagaimana ahli bertemu. **Plat hujung** memerlukan dua ahli bertemu dalam satah badan mereka, seperti pada lutut portal atau bubungan. Dua rasuk yang membelok sudut dalam pelan bertemu dalam satah sayap mereka, jadi mereka hanya mendapat potongan biasa.
- Ahli bersaiz berbeza disambungkan, tetapi dengan amaran: permukaan potongan mereka tidak sepadan.

## Tambah mitre

1. Pilih dua ahli: klik satu, kemudian {{key:Shift}}+klik yang satu lagi.
2. Pilih {{ui:Mitre}} dalam menu {{ui:Lagi}} kumpulan {{ui:Sambung}}. Kotak dialog Mitre dibuka.
3. Tetapkan medan bernombor. Lukisan di sebelahnya dibuat daripada nombor anda semasa anda menaip, dan bulatan bernombornya menunjukkan apa yang ditetapkan oleh setiap medan.
4. Pilih {{ui:Tambah mitre}}. Jika anda memilih lebih daripada dua ahli, setiap sambungan bebas antara mereka menerima mitre yang sama.

Untuk menukar mitre kemudian, pilih ia (klik salah satu plat) dan pilih {{ui:Kotak dialog mitre dengan pratonton}} dalam panel kanan, atau ubah tetapannya di situ secara langsung. Potongan biasa tidak mempunyai plat untuk diklik: pilih dua ahlinya dan pilih {{ui:Mitre}} sekali lagi, dan kotak dialog dibuka pada mitre itu. {{ui:Guna pada yang serupa (n)}} menyalinnya ke setiap sambungan bebas antara ahli bagi dua profil yang sama pada sudut yang sama.

## Medan bernombor (mm)

| No. | Tetapan | Lalai | Fungsinya |
|---|---|---|---|
| 1 | Jurang antara plat (atau hujung potongan) | 0 | Jurang bersih pada sambungan. Setiap sisi memegang separuh daripadanya |
| 2 | Plat hujung, ketebalan plat | hidup, 20 | Plat hujung dikimpal sekeliling setiap hujung yang dipotong. Nyahtanda untuk potongan biasa |
| 3 | Baris bolt, jarak baris, gauge, baris luar | 4, 0, 0, mati | Jarak 0 menyebarkan baris sama rata antara sayap. Gauge 0 = separuh lebar plat, sekurang-kurangnya 2.4 × lubang. Baris luar masuk ke sambungan plat melepasi sayap luar |
| 4 | Plat melepasi sayap luar | 0 | Sejauh mana plat sampai melepasi sayap luar, sepanjang potongan |
| 5 | Plat melepasi sayap dalam | 0 | Sama pada bahagian dalam |
| 6 | Pengejang badan, jarak melepasi potongan | mati, 50 | Sepasang dalam setiap ahli, kedua-dua sisi badan, tegak lurus kepada ahli, sejauh ini melepasi hujung jauh potongannya |
| 7 | Ketebalan pengejang | 10 | |

Di bawah {{ui:Bolt}}: diameter bolt, lubang, gred dan elaun panjang (20, 22, A325, 30), seperti untuk plat hujung. Di bawah {{ui:Plat dan kimpalan}}: lebar plat (0 = lebar sayap), saiz kimpalan fillet (8) dan bahan plat (A36).

## Apa yang anda dapat

- **Potongan.** Hujung setiap ahli dipotong pada satahnya. Panjangnya dalam senarai, lukisan dan fail NC ialah **panjang keseluruhan**, dari hujung segi empatnya ke titik terjauh potongan.
- **Plat** tergolong dalam ahlinya sendiri: himpunan setiap ahli ialah ahli itu, plat hujungnya dan pengejangnya. Bolt ialah bolt tapak bagi sambungan: senarai bahan mengira sekali, dan lukisan himpunan setiap ahli menyenaraikannya sebagai bolt longgar.
- **Lukisan** menunjukkan hujung condong dan plat; lukisan bengkel bagi ahli mitre mencatatkan sudut setiap potongan daripada tegak.
- **Fail NC** (DSTV) membawa sudut potongan serong dalam pengepala, seperti yang diminta piawaian, dan kontur yang mengikut potongan. Semak dalam pemapar NC bengkel anda sebelum memotong, seperti untuk setiap fail NC.
- **IFC** memangkas penyemperitan setiap ahli mengikut satah potongannya, supaya program lain menunjukkan potongan sebenar.
- **Tanda:** ahli mitre ialah bahagian yang berbeza daripada ahli potongan segi empat dengan panjang yang sama. Dua ahli dengan potongan yang sama berkongsi tanda, seperti dua kasau bubungan.

## Perkara yang perlu diketahui

- Mitre kekal hidup. Alih atau ubah saiz mana-mana ahli, dan potongan, plat serta bolt mengikutinya. Padam mana-mana ahli dan mitre hilang, dan hujung ahli yang satu lagi kembali segi empat.
- Amaran menggunakan minimum EN 1993-1-8 yang sama seperti sambungan lain (jarak hujung dan tepi 1.2 × lubang, jarak pic 2.2 × lubang, gauge 2.4 × lubang), serta baris bolt yang terlalu dekat dengan sayap, plat yang lebih sempit daripada sayap dan pengejang tanpa ruang.
- Nilai ini ialah nilai permulaan, bukan reka bentuk. DetailCraft tidak menyemak kekuatan sambungan, dan ia tidak membuat haunch, mitre dikimpal dengan kimpalan hujung, atau pengejang yang sebaris dengan sayap ahli yang satu lagi.
