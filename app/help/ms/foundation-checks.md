---
title: Semakan asas
summary: Semak tapak asas, tapak asas gabungan dan rakit pada tanah yang anda terangkan, mendapan, rakit fleksibel atas spring, kumpulan cerucuk dan dinding penahan. Alat bantu untuk jurutera menyemak.
keywords: asas, tapak asas, tapak asas gabungan, rakit, mendapan, modulus tanah dasar, spring, tiang tepi, tiang penjuru, tekanan galas, gelongsor, guling, tebukan, ricihan sehala, lenturan, panjang pembangunan, tetulang minimum, kumpulan cerucuk, dinding penahan, ACI 318-19
from: 6961ad52
---

:::warning
Ini ialah semakan peringkat pertama untuk jurutera menyemak, bukan pengesahan reka bentuk. Tekanan galas yang dibenarkan dan pekali geseran ditentukan oleh anda: DetailCraft tidak mengetahui tanah anda.
:::

Tab {{ui:Foundation}} menyemak tapak asas dalam model berbanding beban tiang yang anda berikan kepadanya.

## Terangkan tanah

Taip {{ui:Allowable bearing pressure}} dan {{ui:Base friction coefficient}}. Kedua-duanya bermula pada 0, bermaksud belum dimasukkan: semakan kemudian menunjukkan tekanan sebagai nota dan tidak menyatakan ia lulus. Untuk mendapan, taip modulus tanah {{ui:Es}} (MPa), nisbah Poisson dan mendapan yang anda benarkan (25 mm sebagai permulaan). Untuk rakit fleksibel, taip modulus tanah dasar {{ui:ks}}. Medan tambakan di atas tapak asas, berat unit tanah, faktor keselamatan untuk gelongsor dan guling (1.5 sebagai permulaan) dan kekuatan alah bar juga terdapat di situ.

## Berikan beban

Setiap tapak asas mempunyai senarai beban tiang. Gunakan {{ui:Add a column load}} dan isi baris perkhidmatan (untuk galas, gelongsor dan guling) dan baris berfaktor (untuk semakan kekuatan): daya menegak P ke bawah, daya mengufuk Vx dan Vy pada bahagian atas tapak asas, momen Mx dan My, kedudukan tiang pada tapak asas dan saiznya.

Atau jalankan tab {{ui:Analysis}} dan tekan {{ui:Take column loads from the Analysis}}: setiap penyokong yang berdiri di atas tapak asas menjadi beban tiang, daripada set perkhidmatan dan set berfaktor yang anda pilih. Momen My positif membebankan sisi +x tapak asas lebih berat; momen Mx positif membebankan sisi −y lebih berat.

## Apa yang disemak

Daripada beban perkhidmatan, dengan berat tapak asas sendiri dan tambakan ditambah:

- **Galas:** tekanan di bawah tapak asas tegar. Dalam sepertiga tengah, seluruh tapak bersentuh; di luarnya, sebahagian tapak terangkat dan puncaknya lebih tinggi. Resultan di luar tapak gagal.
- **Gelongsor:** geseran didarab dengan beban menegak berbanding daya mengufuk.
- **Guling:** jarak resultan dari tepi.
- **Mendapan:** mendapan anjal bagi tekanan purata pada separuh ruang dengan modulus yang anda beri, di tengah dan di penjuru (penyelesaian Timoshenko dan Goodier bagi segi empat fleksibel), berbanding had. Ia ialah had atas bagi tapak asas tegar dan mengabaikan lapisan tanah berkedalaman terhad, kelegaan oleh tanah yang digali dan pengukuhan. Tanpa modulus, ia menunjukkan tekanan sebagai nota.

Daripada beban tiang berfaktor sahaja (ACI 318-19):

- **Lenturan** di muka tiang, dengan tetulang minimum (0.0018 bagi bar 420 MPa) dan bar yang anda lukis.
- **Ricihan sehala** pada jarak d dari muka.
- **Ricihan tebuk** pada d/2 sekeliling setiap tiang, dengan momen tiang. Bagi tiang berhampiran tepi, keratan kritikal dipotong oleh tepi tapak asas (tiga sisi di tepi, dua di penjuru, ACI 318-19 22.6.4.1 dan αs yang lebih kecil dalam Jadual 22.6.5.2), dan momen pada pusat keratan itu sendiri termasuk anjakan beban.
- **Panjang pembangunan** bar melepasi muka tiang, sama ada lurus atau dengan kaitnya.
- **Kedalaman** di atas bar bawah (150 mm).

Tapak asas gabungan atau rakit dianggap tegar, dan ricihan serta momen diperoleh daripada statik pada potongan merentasi lebar penuh.

## Rakit fleksibel di atas spring

Tanda {{ui:Analisis tapak asas ini sebagai rakit fleksibel atas spring}} apabila tapak asas membawa banyak tiang dan tapak tegar terlalu kasar. Tapak asas menjadi plat elemen empat nod di atas katil spring (ks yang anda taip, dikumpulkan pada nod), dengan beban setiap tiang diagihkan ke nod jejak tapaknya sendiri. Jadual kedua memberi tekanan tanah dan mendapan terbesar (dan beza antara yang paling besar dan paling kecil), momen lentur bagi setiap arah beserta tetulang yang diperlukan, tegangan di atas berbanding kekuatan konkrit biasa (tapak asas tiada bar atas), ricihan sehala pada d dari tiang, dan tebukan pada tekanan spring itu sendiri. Jejaring diperhalusi sehingga satu tiang lebar tiga elemen; rakit besar mengambil masa beberapa saat. Berat rakit sendiri dan tanah di atasnya saling membatalkan dan ditinggalkan.

Setiap semakan yang gagal terdapat dalam panel {{ui:Problems}} bersama klausanya.

## Kumpulan cerucuk dan dinding penahan

{{ui:Add a pile group}} meletakkan grid cerucuk di bawah kepala tegar: taip beban dan momen serta apa yang boleh ditanggung oleh satu cerucuk dalam mampatan dan dalam tegangan (nombor reka bentuk cerucuk, bukan tab ini). Tindak balas setiap cerucuk ialah P/n ditambah bahagian momennya (kaedah anjal), dan mampatan terbesar serta sebarang tegangan disemak.

{{ui:Add a retaining wall}} menyemak dinding julur pada tanah timbus rata, setiap meter: tekanan aktif Rankine, guling pada hujung tapak, gelongsor dan tekanan tapak. Tekanan pasif di hadapan hujung tapak diabaikan. Pembantu anda boleh menjalankan semakan yang sama dengan `pile_group_check` dan `retaining_wall_check`.

Kumpulan cerucuk, dinding dan suis rakit disimpan dalam fail model, dan semakan yang gagal terdapat dalam {{ui:Problems}}.
