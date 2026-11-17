---
title: Menu, kekunci dan tetikus
summary: Pilih gaya menu yang sepadan dengan cara anda sudah bekerja, berikan mana-mana arahan kekunci sendiri, alihkan arahan antara tab reben, dan tetapkan apa yang dilakukan roda dan butang tetikus.
keywords: gaya menu, menu, reben, bar alat, bar arahan, pintasan papan kekunci, kekunci, sesuaikan, tetapkan semula kekunci, ikat semula kekunci, tetikus, roda, songsangkan, arah zum, butang tengah, butang kanan, pan, orbit, eksport, import, bertukar, biasa, lukisan klasik, reben keluli
from: 4132c6e5
---

Arahan DetailCraft adalah sama tanpa mengira cara anda mencapainya. **Gaya menu** hanya menentukan di mana ia berada di skrin, apa namanya di sana dan kekunci yang menjalankannya. Pilih satu dalam {{ui:Tetapan}} ({{key:Mod+,}}) › {{ui:DetailCraft}} › {{ui:Menu, kekunci dan tetikus}}; perubahan berkuat kuasa serta-merta, dan pelayar ini mengingatinya.

## Tiga gaya

| Gaya | Apa yang anda dapat |
|---|---|
| {{ui:DetailCraft}} | Bar alat DetailCraft sendiri ({{ui:Fail}}, Letak, {{ui:Sambung}}, {{ui:Sunting}}, {{ui:Output}}) dan kekunci huruf tunggalnya: {{key:V}} pilih, {{key:B}} rasuk, {{key:C}} tiang, {{key:R}} tupang, {{key:P}} plat, {{key:F}} tapak asas, {{key:S}} tangga. Permulaan. |
| {{ui:Lukisan klasik}} | Untuk orang yang menaip arahan: reben kecil ({{ui:Laman utama}}, {{ui:Pandangan}}, {{ui:Output}}) dan baris arahan. Taip BEAM, COLUMN, BRACE, PLATE, FOOTING, STAIR, ENDPLATE, BASEPLATE, SHEARTAB, SPLICE, GUSSET, U (buat asal), ZOOM, PLAN, 3D, DRAWINGS, NC atau HELP dan tekan {{key:Enter}}; {{key:Enter}} tanpa apa-apa mengulang arahan terakhir, {{key:Esc}} mengosongkannya. Mula menaip di mana-mana dan huruf pergi ke baris arahan. Butang tengah melakukan pan; dalam 3D, {{key:Shift}} dan butang tengah mengorbit. |
| {{ui:Reben keluli}} | Tab mengikut cara program perincian keluli menyusunnya: {{ui:Pemodelan}} (ahli, konkrit, tangga), {{ui:Perincian}} (sambungan), {{ui:Sunting}}, {{ui:Lukisan}} (lukisan dan laporan), {{ui:Fabrikasi}} (fail NC, IFC) dan {{ui:Pandangan}}, dengan menu {{ui:Fail}} dan butang pantas di sebelah kanan. Kekunci huruf tunggal kekal. Butang tengah melakukan pan; dalam 3D butang kiri mengorbit. |

Setiap gaya mengekalkan {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+D}} dan {{key:Mod+A}}. Reben juga memuatkan {{ui:3D}}, {{ui:Pelan}}, {{ui:Dongakan}} dan {{ui:Muat}} bagi bar pandangan.

:::tip
Kekunci yang tergolong dalam susun atur DetailCraft tetapi telah diberikan arahan lain oleh gaya anda tidak berbuat apa-apa, dan baris status menyatakan ke mana arahannya pergi ("Dalam Reben keluli saya, Tiang ialah Ctrl+Alt+C"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} dan anak panah sentiasa mengekalkan maksudnya, dan semasa ahli sedang separuh diletakkan atau salinan mengikut penunjuk, huruf kepunyaan DetailCraft.
:::

## Jadikan milik anda

1. Pilih gaya yang paling hampir dengan apa yang anda mahu, kemudian klik {{ui:Sesuaikan…}}.
2. Pada {{ui:Kekunci dan menu}}, cari arahan (kotak carian membantu). {{ui:Tambah kekunci}} dan tekan kekunci, atau dua kekunci berturutan untuk kekunci dua huruf. Klik kekunci untuk membuangnya.
3. Dengan reben, {{ui:Tempat ia berada}} mengalihkan arahan ke tab dan panel lain, ke menu {{ui:Fail}}, atau ke {{ui:Kekunci sahaja}}.
4. Pada {{ui:Tetikus}}, tetapkan roda, butang yang melakukan pan pelan dan dongakan, dan apa yang dilakukan setiap butang dalam pandangan 3D.
5. Beri nama dan klik {{ui:Simpan}}.

Menyimpan gaya terbina dalam mencipta salinan anda sendiri ("Reben keluli saya"); yang terbina dalam tidak pernah berubah. Kekunci yang diberikan kepada dua arahan dipaparkan dalam merah dan mesti diperbetulkan sebelum anda boleh menyimpan.

## Tetikus

- **Roda tetikus**: {{ui:Skrol ke atas mengezum masuk}} (permulaan) atau {{ui:Skrol ke atas mengezum keluar}}, dan betapa pantas. Cubitan pad sentuh sentiasa zum mengikut arah jari anda bergerak.
- **Pan pelan dan dongakan dengan**: butang tengah, butang kanan, atau kedua-duanya. Dengan alat Pilih, butang kiri sentiasa melukis tetingkap pilihan.
- **Seret dalam pandangan 3D**: {{ui:Setiap pandangan sendiri}} mengekalkan butang DetailCraft (kiri mengorbit, tengah zum, kanan pan). Atau tetapkan setiap butang untuk mengorbit, pan, zum atau tiada apa-apa; {{key:Shift}} dengan butang yang mengorbit atau pan menukar kedua-duanya antara satu sama lain.

## Bawa bersama anda

{{ui:Eksport}} menyimpan gaya yang sedang digunakan sebagai fail `.ccinput.json` kecil; {{ui:Import…}} menambahnya, dari komputer lain atau rakan sekerja. Fail yang diimport hanya boleh merujuk arahan sendiri DetailCraft: apa-apa lain di dalamnya dibuang dan dikira dalam baris status. {{ui:Padam gaya ini}} membuang satu gaya milik anda sendiri.

:::note
Tetapan ini kekal dalam pelayar ini. {{ui:Gunakan gaya ini dalam setiap aplikasi}} di bawah kad gaya menjadikan setiap aplikasi dibuka dalam gaya yang sepadan (bar alat sendiri, reben atau Lukisan klasik), dengan perubahan yang anda buat dalam setiap aplikasi. DetailCraft tiada gaya bar menu: apabila bar menu aplikasi lain dipilih untuk setiap aplikasi, DetailCraft mengekalkan bar alatnya sendiri.
:::

Berkaitan: [Kekunci dan tetikus](topic:keyboard) · [Tetapan DetailCraft](topic:settings) · [Datang daripada perisian perincian lain](topic:coming-from)
