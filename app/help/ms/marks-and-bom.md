---
title: Semak tanda dan senarai bahan
summary: Baca tanda bahagian dan tanda himpunan yang DetailCraft berikan kepada setiap bahagian, semak senarai bahan, dan muat turunnya sebagai CSV.
keywords: tanda, penomboran, tanda bahagian, tanda himpunan, tanda kepingan, bom, senarai bahan, senarai bolt, berat, csv
from: caa2ee80
---

DetailCraft menanda model dengan sendirinya. Tiada arahan penomboran dan tiada apa untuk dijalankan: selepas setiap perubahan, ia menentukan bahagian mana yang merupakan keping keluli yang sama dan memberinya satu tanda.

## Di mana tanda ditunjukkan

- Senarai {{ui:Tanda bahagian}} dalam panel {{ui:Model}}: setiap tanda dengan profil, panjang dan kiraannya. Klik satu untuk memilih bahagian pertama dengan tanda itu.
- Panel {{ui:Sifat}} bagi anggota yang dipilih (dan senarai **Tanda bahagian** dalam panel kiri): {{ui:Tanda bahagian}} dan {{ui:Himpunan}}. Tajuk panel juga membawa tanda, contohnya "Rasuk b1".
- Tab {{ui:Senarai bahan}}, CSV, nama fail NC, lukisan bengkel dan eksport IFC (sebagai tag setiap elemen).

## Bagaimana bahagian ditanda

- **Tanda bahagian:** c untuk tiang, b untuk rasuk, br untuk tupang, st untuk rasuk tangga, p untuk plat (termasuk plat hujung dan plat tapak). Kemudian nombor: c1, c2, b1, p1 … Apabila bahagian berada dalam lebih daripada satu fasa, nombor fasa datang dahulu, contohnya 2-b1.
- **Tanda himpunan:** C, B, BR atau P. Himpunan ialah anggota utama dan plat yang dikimpal padanya, seperti rasuk dengan dua plat hujungnya, atau tiang dengan plat tapaknya.
- Dua bahagian berkongsi tanda apabila mempunyai profil, bahan dan panjang potong yang sama, serta lubang dan potongan hujung yang sama, semuanya dalam 1 mm, walaupun satu dipusing hujung ke hujung atau terbalik berbanding yang lain.
- Penomboran bermula dengan tiang, kemudian rasuk, tupang dan plat; dalam setiap kumpulan, mengikut nama profil, kemudian yang terpanjang dahulu.

Peraturan penuh, termasuk pusingan yang dikira untuk saluran dan sudut: [Peraturan tanda](topic:mark-rules).

:::warning
Tanda dikira semula selepas setiap perubahan, jadi ia boleh dinomborkan semula. Menambah bahagian, menukar profil atau menambah lubang boleh menggerakkan b3 kepada b4. Anggap tanda sebagai muktamad hanya apabila model siap, dan buat BOM, fail NC dan lukisan bengkel daripada model yang disimpan yang sama.
:::

## Baca senarai bahan

Buka tab {{ui:Senarai bahan}} di bahagian bawah. Ia mempunyai tiga jadual.

**Bahagian**, dengan jumlah berat keluli dalam tajuk:

| Lajur | Maksud |
|---|---|
| Tanda bahagian | Klik untuk memilih bahagian pertama dengan tanda ini |
| Jenis | rasuk, tiang, tupang, rasuk tangga atau plat |
| Profil | Contohnya W16x26 atau PL20x180 |
| Bahan | Gred yang anda tetapkan |
| Panjang (mm) | Panjang potong, selepas sambungan |
| Kiraan | Berapa banyak |
| Berat seunit (kg) | Jisim profil per meter × panjang |
| Jumlah berat (kg) | Berat seunit × kiraan |

Baris terakhir memberikan jumlah kiraan dan berat.

**Himpunan:** setiap tanda himpunan, bahagian utamanya, semua bahagiannya (contohnya "b1 + p1 + p1"), kiraan, berat seunit dan jumlah berat.

**Bolt dan bolt sauh:** dikumpulkan mengikut jenis, diameter, panjang dan gred, dengan kiraan.

:::note
Berat ialah berat kasar: lubang dan potongan hujung tidak ditolak. Bolt, nat, washer dan kimpalan tidak termasuk dalam berat keluli.
:::

## Muat turun

Pilih {{ui:Muat turun CSV}} dalam tab itu, atau {{ui:BOM}} dalam kumpulan {{ui:Output}}. Fail `<name> BOM.csv` memegang tiga jadual satu demi satu, setiap satu di bawah tajuknya, dengan baris kosong antara. Ia dibuka dalam mana-mana program hamparan.

## Semak sebelum hantar

1. Buka tab {{ui:Masalah}} dan kosongkan setiap baris. Sambungan yang tidak dapat dibina tidak menambah plat, lubang atau bolt, jadi BOM akan kurang.
2. Cari tanda yang tidak anda jangka. Dua rasuk yang anda sangka sama tetapi dengan tanda berbeza biasanya berbeza kerana lubang, potongan hujung atau panjang potong; pilih setiap satu dan bandingkan.
3. Simpan model, kemudian buat setiap eksport daripada keadaan yang disimpan itu.
