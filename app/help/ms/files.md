---
title: Buka, simpan dan eksport fail
summary: Fail model DetailCraft, setiap eksport yang dihasilkannya, lokasi fail disimpan, dan perbezaan mengikut pelayar dan sambungan.
keywords: buka, simpan, eksport, muat turun, fail, json, ifc, nc1, dstv, csv, pdf, zip, format, import
from: 6fbc8e8f
---

DetailCraft mempunyai satu fail sendiri, iaitu model, dan lima eksport. Setiap simpanan dan setiap eksport ialah muat turun. Tiada apa-apa dimuat naik, dan tiada apa-apa disimpan pada pelayan.

## Fail model

Model DetailCraft disimpan sebagai `<name>.detailcraft.json`, dengan `<name>` ialah nama model dalam panel {{ui:Model}}. Fail ini mengandungi grid, aras, anggota (dengan lubang dan potongan hujung), sambungan dan tetapannya, asas tapak dan profil tersuai anda.

Bahagian, tanda, bolt, kimpalan dan bar tidak disimpan: DetailCraft mengira semula semuanya daripada model setiap kali ia dibuka. Itulah sebabnya fail model bersaiz kecil.

### Simpan

1. Taip nama dalam medan {{ui:Name}} di bahagian atas panel {{ui:Model}}.
2. Pilih {{ui:Save}} dalam kumpulan {{ui:File}}, atau tekan {{key:Mod+S}}.
3. Pelayar memuat turun `<name>.detailcraft.json`. Bar status memaparkan "Saved … (downloaded)", dan titik di permulaan tajuk tab pelayar hilang.

Setiap simpanan ialah muat turun baharu. Pelayar tidak menimpa fail yang anda buka; bergantung pada tetapannya, ia menambah nombor pada nama, contohnya `Frame (1).detailcraft.json`, atau bertanya di mana hendak disimpan. Simpan versi anda sendiri dengan menamakan semula muat turun tersebut.

:::chromium
Chrome dan Edge menyimpan ke folder Muat turun anda melainkan **Ask where to save each file before downloading** dihidupkan dalam tetapan muat turun pelayar. Hidupkannya jika anda mahu memilih folder dan nama fail setiap kali.
:::

:::firefox
Firefox menyimpan ke folder Muat turun anda, atau bertanya setiap kali jika **Always ask you where to save files** dihidupkan dalam tetapannya.
:::

:::safari
Safari menyimpan ke folder Muat turun anda. Untuk menukar folder, buka **Safari, Settings, General, File download location**.
:::

### Buka

1. Pilih {{ui:Open}} dalam kumpulan {{ui:File}}, atau tekan {{key:Mod+O}}.
2. Pilih fail `.detailcraft.json`.

Atau seret fail dari {{pick:mac=Finder|windows=File Explorer|linux=pengurus fail anda}} dan lepaskannya pada paparan. Paparan memaparkan "Drop a DetailCraft model to open it" semasa anda menyeret.

Jika model yang dibuka mempunyai perubahan yang belum disimpan, DetailCraft bertanya dahulu: {{ui:Cancel}}, {{ui:Discard changes}} atau {{ui:Save first}}.

DetailCraft menyemak setiap medan fail sebelum menggunakannya. Apa-apa yang tidak dapat digunakan akan ditinggalkan dan bar status memaklumkan apa, contohnya "2 members were not valid and left out." Model yang disimpan oleh DetailCraft yang lebih baharu akan ditolak dengan mesej, dan tidak dibuka separuh betul.

### Apa yang dibuka

Fail model sendiri (`.json`, sehingga 50 MB) dan fail IFC (`.ifc`, IFC2X3 atau IFC4, sehingga 200 MB). Fail IFC, sama ada dibuka atau dibawa masuk dengan {{ui:Import IFC}}, menjadi model baharu bagi rasuk, tiang, anggota, plat, grid dan arasnya, dengan lubang dan potongan hujung dipotong padanya dan bolt-bolt sebagai bolt berasingan; satu laporan menyenaraikan apa yang ditinggalkan. Lihat [Eksport IFC](topic:ifc-export#import). Ia belum membuka DWG, DXF atau model mana-mana program pemerincian lain; percubaan memaparkan "DetailCraft opens its own models (.detailcraft.json) and IFC files (.ifc)."

## Kerja yang hilang, fail terkini, aplikasi desktop

- Selagi model mempunyai perubahan yang belum anda simpan, DetailCraft menyimpan satu salinan dalam pelayar ini. Jika tab atau pelayar berhenti sebelum anda menyimpan, kali seterusnya anda membuka DetailCraft ia bertanya **Pulihkan kerja anda?**: pulihkan salinan itu, atau lepaskannya. Lihat [Pulihkan kerja anda](common:recover).
- Model yang baru anda buka disenaraikan pada skrin permulaan apabila pelayar membenarkan DetailCraft membukanya semula; klik satu untuk membukanya semula.
- Dalam aplikasi desktop, {{ui:Save}} menulis semula model ke fail yang anda buka (dalam pelayar ia memuat turun salinan), dan klik dua kali pada model DetailCraft atau fail IFC akan membukanya dalam DetailCraft.

## Eksport

Semua eksport menggunakan nama model. Pilih dalam kumpulan {{ui:Output}}.

| Butang | Fail | Kandungannya |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: storeys, grid, setiap bahagian keluli sebagai penolakan profil dengan lubang dan potongan hujungnya, himpunan, bolt dan rod sauh, asas tapak dan setiap bar. Lihat [Eksport IFC](topic:ifc-export). |
| {{ui:NC files}} | `<name> NC.zip` | Satu fail DSTV `.nc1` bagi setiap tanda bahagian. Lihat [Hantar fail NC ke bengkel](topic:nc-export). |
| {{ui:BOM}} | `<name> BOM.csv` | Tiga jadual dalam satu fail: bahagian, himpunan, dan bolt serta rod sauh. Lihat [Tanda dan senarai bahan](topic:marks-and-bom). |
| {{ui:Bending}} | `<name> bending schedule.csv` | Setiap tanda bar dalam asas tapak. Lihat [Asas tapak dan tetulang](topic:footings-and-rebar). |
| {{ui:Shop drawing}} | `<name> <mark>.pdf` | `<name> Shop drawings.pdf` memuatkan satu helaian bagi setiap tanda bahagian; {{ui:Download this sheet}} memberi helaian yang dipaparkan (A3 melainkan anda memilih saiz lain). Lihat [Buat lukisan bengkel](topic:shop-drawings). |
| {{ui:Drawings}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` atau `.dxf`, beberapa dalam `<name> drawings DWG.zip` (atau `DXF.zip`) | Pelan, dongakan dan lukisan himpunan pada saiz helaian yang anda pilih; DWG dan DXF pada saiz penuh, 1 unit = 1 mm pada kertas. Lihat [Lukisan susun atur dan himpunan am](topic:drawings). |

### Nota tentang fail CSV

- Fail bermula dengan tanda susunan bait supaya program hamparan membaca aksara berdiakritik dengan betul.
- Sel yang bermula dengan `=`, `+`, `-` atau `@` (dan bukan nombor biasa) diberi tanda petik tunggal di hadapan, supaya hamparan tidak pernah menjalankannya sebagai formula.
- Panjang dalam milimeter dan berat dalam kilogram.

### Nota tentang PDF

Teks dalam PDF menggunakan fon Helvetica standard. Aksara yang tiada padanya (di luar set Eropah Barat) dicetak sebagai "?", dan bar status memberitahu anda berapa banyak.

## Unit

DetailCraft berfungsi dalam milimeter sepanjang masa: grid, aras, koordinat, profil, lubang dan setiap eksport. Nama profil dikekalkan dalam bentuk yang diterbitkan (W12x50 ialah penamaan AS walaupun dimensinya ditunjukkan dalam mm). Belum ada input imperial.

## Dalam talian dan luar talian

Membuka, menyimpan dan mengeksport semuanya berlaku dalam pelayar anda, jadi ia berfungsi sama dengan atau tanpa sambungan selepas DetailCraft dimuatkan.

Untuk menggunakan DetailCraft tanpa sambungan kemudian, pilih {{ui:Save for offline}} dalam bar aplikasi semasa anda dalam talian. Butang itu mengira ("Saving 3 of 20") dan kemudian memaparkan {{ui:Offline ready}}. Salinan yang disimpan termasuk pustaka grafik 3D (kira-kira 2.6 MB) dan bantuan ini, jadi setelah disimpan, paparan 3D, setiap eksport dan bantuan semuanya berfungsi luar talian. Butiran, dan apa yang masih memerlukan sambungan: [Bekerja secara luar talian](common:offline).

:::offline
Anda sedang luar talian. Jika bar aplikasi memaparkan {{ui:Offline ready}}, membuka, menyimpan dan mengeksport berfungsi seperti biasa. Jika tidak, biarkan tab ini terbuka, jangan muat semula sehingga anda kembali dalam talian, dan simpan model anda sekarang.
:::

Simpanan awan belum tersedia, dan belum ada binaan desktop. Sandarkan fail `.detailcraft.json` anda sama seperti anda menyandarkan mana-mana fail kerja lain. Maklumat lanjut dalam [Di mana fail anda disimpan](common:your-files).

## Kerja yang belum disimpan

DetailCraft hanya menyimpan model dalam tab yang dibuka. Jika anda menutup atau memuat semula tab dengan perubahan yang belum disimpan, pelayar bertanya sama ada hendak meninggalkan halaman; ayatnya ialah ayat pelayar sendiri. Simpan dengan {{key:Mod+S}} kerap.
