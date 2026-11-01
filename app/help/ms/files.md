---
title: Buka dan simpan fail, serta eksport
summary: Fail model DetailCraft, setiap eksport yang dihasilkannya, tempat fail disimpan, dan perbezaan mengikut pelayar dan sambungan.
keywords: buka, simpan, eksport, muat turun, fail, json, ifc, nc1, dstv, csv, pdf, zip, format, import
from: bd715ea3
---

DetailCraft mempunyai satu fail sendiri, iaitu model, dan lima eksport. Setiap simpanan dan setiap eksport ialah muat turun. Tiada apa-apa dimuat naik, dan tiada apa-apa disimpan pada pelayan.

## Fail model

Model DetailCraft disimpan sebagai `<name>.detailcraft.json`, dengan `<name>` ialah nama model dalam panel {{ui:Model}}. Ia menyimpan grid, aras, ahli (dengan lubang dan potongan hujungnya), sambungan dan tetapannya, tapak asas serta profil tersuai anda.

Bahagian, tanda, bolt, kimpalan dan bar tidak disimpan: DetailCraft mengira semula semuanya daripada model setiap kali ia dibuka. Itulah sebabnya fail model kecil.

### Simpan

1. Taip nama dalam medan {{ui:Nama}} di bahagian atas panel {{ui:Model}}.
2. Pilih {{ui:Simpan}} dalam kumpulan {{ui:Fail}}, atau tekan {{key:Mod+S}}.
3. Pelayar memuat turun `<name>.detailcraft.json`. Bar status menunjukkan "Disimpan … (dimuat turun)", dan titik di permulaan tajuk tab pelayar hilang.

Setiap simpanan ialah muat turun baharu. Pelayar tidak menimpa fail yang anda buka; bergantung pada tetapannya, ia menambah nombor pada nama, seperti `Frame (1).detailcraft.json`, atau bertanya di mana hendak disimpan. Simpan versi anda sendiri dengan menamakan semula muat turun tersebut.

:::chromium
Chrome dan Edge menyimpan ke folder Muat Turun anda melainkan **Tanya di mana hendak simpan setiap fail sebelum muat turun** dihidupkan dalam tetapan muat turun pelayar. Hidupkannya jika anda mahu memilih folder dan nama fail setiap kali.
:::

:::firefox
Firefox menyimpan ke folder Muat Turun anda, atau bertanya setiap kali jika **Sentiasa tanya saya di mana hendak simpan fail** dihidupkan dalam tetapannya.
:::

:::safari
Safari menyimpan ke folder Muat Turun anda. Untuk menukar folder, buka **Safari, Tetapan, Umum, Lokasi muat turun fail**.
:::

### Buka

1. Pilih {{ui:Buka}} dalam kumpulan {{ui:Fail}}, atau tekan {{key:Mod+O}}.
2. Pilih fail `.detailcraft.json`.

Atau seret fail dari {{pick:mac=Finder|windows=File Explorer|linux=pengurus fail anda}} dan lepaskan ke paparan. Paparan menunjukkan "Lepaskan model DetailCraft untuk membukanya" semasa anda menyeret.

Jika model yang dibuka mempunyai perubahan yang belum disimpan, DetailCraft bertanya dahulu: {{ui:Batal}}, {{ui:Buang perubahan}} atau {{ui:Simpan dahulu}}.

DetailCraft menyemak setiap medan fail sebelum menggunakannya. Apa-apa yang tidak boleh digunakan akan ditinggalkan dan bar status menyatakannya, contohnya "2 ahli tidak sah dan ditinggalkan." Model yang disimpan oleh DetailCraft yang lebih baharu ditolak dengan mesej dan tidak dibuka separuh betul.

### Apa yang dibuka

Fail model sendiri (`.json`, sehingga 50 MB) dan fail IFC (`.ifc`, IFC2X3 atau IFC4, sehingga 200 MB). Fail IFC, sama ada dibuka atau dibawa masuk dengan {{ui:Import IFC}}, menjadi model baharu bagi rasuk, tiang, ahli, plat, grid dan aras, dengan lubang dan potongan hujung dipotong di dalamnya dan bolt-nya sebagai bolt berasingan; satu laporan menyenaraikan apa yang ditinggalkan. Lihat [Eksport IFC](topic:ifc-export#import). Ia belum membuka DWG, DXF atau model mana-mana program perincian lain; percubaan menunjukkan "DetailCraft membuka model sendiri (.detailcraft.json) dan fail IFC (.ifc)."

## Kerja yang hilang, fail terkini, aplikasi desktop

- Semasa model mempunyai perubahan yang belum anda simpan, DetailCraft menyimpan salinan dalam pelayar ini. Jika tab atau pelayar berhenti sebelum anda menyimpan, kali seterusnya anda membuka DetailCraft ia bertanya **Pulihkan kerja anda?**: pulihkan salinan itu, atau biarkan. Lihat [Pulihkan kerja anda](common:recover).
- Model yang baru-baru ini anda buka disenaraikan pada skrin mula apabila pelayar membenarkan DetailCraft membukanya semula; klik satu untuk membukanya semula.
- Dalam aplikasi desktop, {{ui:Simpan}} menulis semula model ke fail yang anda buka (dalam pelayar ia memuat turun salinan), dan klik dua kali pada model DetailCraft atau fail IFC membukanya dalam DetailCraft.

## Eksport

Semua eksport menggunakan nama model. Pilih dalam kumpulan {{ui:Output}}.

| Butang | Fail | Kandungan |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: tingkat, grid, setiap bahagian keluli sebagai penyemperitan profil dengan lubang dan potongan hujungnya, himpunan, bolt dan bolt sauh, tapak asas dan setiap bar. Lihat [Eksport IFC](topic:ifc-export). |
| {{ui:Fail NC}} | `<name> NC.zip` | Satu fail DSTV `.nc1` bagi setiap tanda bahagian. Lihat [Hantar fail NC ke bengkel](topic:nc-export). |
| {{ui:BOM}} | `<name> BOM.csv` | Tiga jadual dalam satu fail: bahagian, himpunan, dan bolt serta bolt sauh. Lihat [Tanda dan senarai bahan](topic:marks-and-bom). |
| {{ui:Lenturan}} | `<name> bending schedule.csv` | Setiap tanda bar dalam tapak asas. Lihat [Tapak asas dan tetulang](topic:footings-and-rebar). |
| {{ui:Lukisan bengkel}} | `<name> <mark>.pdf` | Satu helaian (A3 melainkan anda pilih saiz lain) bagi bahagian yang dipilih (bentuk-I dan plat). Lihat [Buat lukisan bengkel](topic:shop-drawings). |
| {{ui:Lukisan}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` atau `.dxf`, beberapa dalam `<name> drawings DWG.zip` (atau `DXF.zip`) | Pelan, dongakan dan lukisan himpunan pada saiz helaian yang anda pilih; DWG dan DXF pada saiz penuh, 1 unit = 1 mm pada kertas. Lihat [Lukisan susun atur umum dan himpunan](topic:drawings). |

### Nota fail CSV

- Fail ini bermula dengan tanda susunan bait supaya program hamparan membaca aksara bertanda dengan betul.
- Sel yang bermula dengan `=`, `+`, `-` atau `@` (dan bukan nombor biasa) diberi tanda petik tunggal di hadapan, supaya hamparan tidak pernah menjalankannya sebagai formula.
- Panjang dalam milimeter dan berat dalam kilogram.

### Nota PDF

Teks dalam PDF menggunakan fon Helvetica standard. Aksara yang tiada padanya (di luar set Eropah Barat) dicetak sebagai "?", dan bar status memberitahu anda berapa banyak.

## Unit

DetailCraft menggunakan milimeter sepanjang masa: grid, aras, koordinat, profil, lubang dan setiap eksport. Nama profil kekal dalam bentuk yang diterbitkan (W12x50 ialah penetapan AS walaupun dimensinya ditunjukkan dalam mm). Belum ada input imperial.

## Dalam talian dan luar talian

Membuka, menyimpan dan mengeksport semuanya berlaku dalam pelayar anda, jadi ia berfungsi sama ada dengan atau tanpa sambungan selepas DetailCraft dimuatkan.

Untuk menggunakan DetailCraft tanpa sambungan kemudian, pilih {{ui:Simpan untuk luar talian}} dalam bar aplikasi semasa anda dalam talian. Butang itu mengira ke atas ("Menyimpan 3 daripada 20") dan kemudian memaparkan {{ui:Sedia untuk luar talian}}. Salinan yang disimpan termasuk pustaka grafik 3D (kira-kira 2.6 MB) dan bantuan ini, jadi sebaik sahaja ia disimpan, paparan 3D, setiap eksport dan bantuan semuanya berfungsi luar talian. Butiran, dan apa yang masih memerlukan sambungan: [Bekerja luar talian](common:offline).

:::offline
Anda luar talian. Jika bar aplikasi menunjukkan {{ui:Sedia untuk luar talian}}, membuka, menyimpan dan mengeksport berfungsi seperti biasa. Jika tidak, kekalkan tab ini terbuka, jangan muat semula sehingga anda kembali dalam talian, dan simpan model anda sekarang.
:::

Simpanan awan belum tersedia, dan belum ada binaan desktop. Sandarkan fail `.detailcraft.json` anda seperti anda menyandarkan mana-mana fail kerja lain. Lagi dalam [Di mana fail anda pergi](common:your-files).

## Kerja yang belum disimpan

DetailCraft menyimpan model hanya dalam tab yang terbuka. Jika anda menutup atau memuat semula tab dengan perubahan yang belum disimpan, pelayar bertanya sama ada hendak meninggalkan halaman; ayatnya ialah ayat pelayar itu sendiri. Simpan dengan {{key:Mod+S}} dengan kerap.
