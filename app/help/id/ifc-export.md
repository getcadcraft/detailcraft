---
title: Ekspor IFC untuk koordinasi
summary: Tulis berkas IFC4 dari seluruh model, baja, baut, fondasi, dan tulangan, untuk dibagikan ke arsitek, insinyur, dan perangkat lunak lain.
keywords: ifc, ifc4, ifc2x3, bim, ekspor, impor, impor ifc, lubang, baut, baut lepas, bukaan, pengencang, koordinasi, pertukaran model, step, openbim, benturan, penampil
from: cfcb0cd6
---

Ekspor IFC menulis seluruh model sebagai satu berkas IFC4 yang dapat dibuka oleh perangkat lunak BIM dan penampil IFC.

## Ekspor

1. Pilih {{ui:IFC}} di grup {{ui:Output}}.
2. Peramban mengunduh `<name>.ifc`. Bilah status menjelaskan apa saja yang disertakan, misalnya "IFC4 diekspor: 25 part, 88 pengencang, 7 fondasi, 132 tulangan."

Jika model tidak memiliki part, fondasi, atau tulangan, bilah status menampilkan "Belum ada yang bisa diekspor."

## Isi berkas

| Di DetailCraft | Di berkas IFC |
|---|---|
| Setiap level | Sebuah lantai bangunan (IfcBuildingStorey), di bawah satu proyek, tapak, dan bangunan |
| Grid | IfcGrid dengan sumbu dan labelnya |
| Kolom, balok, bresing | IfcColumn, IfcBeam, IfcMember (bresing), masing-masing berupa ekstrusi bentuk profil standar dengan dimensi aslinya |
| Pelat, pelat ujung, pelat dasar | IfcPlate |
| Lubang dan coak | Bukaan (IfcOpeningElement) yang dipotong dari part |
| Sebuah batang dan pelat yang dilas padanya | Rakitan (IfcElementAssembly) yang diberi tag tanda rakitan |
| Baut dan baut angkur | IfcMechanicalFastener dengan diameter dan panjang |
| Fondasi | IfcFooting (fondasi pad), dengan teks beton sebagai materialnya |
| Setiap batang tulangan | IfcReinforcingBar dengan tanda tulangan, diameter, luas, dan panjangnya, disapu sepanjang sumbu tengah yang sebenarnya dengan lengkung nyata di tikungan |

Tag setiap part adalah tanda part-nya. Setiap elemen juga membawa set properti "DetailCraft" dengan tandanya, profil, dan beratnya. Setiap elemen berada di lantai tertinggi yang berada pada atau di bawah titik terendahnya. Material dikelompokkan menurut grade.

## ID stabil untuk ekspor ulang

ID IFC (GlobalId) setiap elemen dihitung dari nama model dan id elemen itu sendiri di dalam model. Ekspor model yang sama dua kali menghasilkan ID yang sama, sehingga perangkat lunak yang membandingkan versi dapat mengetahui apa yang berubah.

:::warning
Mengganti nama model mengubah setiap ID. Pertahankan nama model yang sama di antara terbitan sebuah proyek.
:::

## Periksa

Berkas IFC DetailCraft dibaca kembali oleh pembaca IFC independen dalam rangkaian pengujiannya. Perangkat lunak berbeda dalam membaca IFC, jadi bukalah berkas di perangkat lunak yang dipakai tim Anda sebelum Anda mengandalkannya. Aplikasi BimCraft dari CadCraft juga membuka berkas IFC.

## Belum tersedia

- Mengimpor sambungan, fondasi, dan tulangan dari berkas IFC. {{ui:Import IFC}} membawa balok, kolom, batang, pelat, grid, level, lubang, coak, dan baut, serta mendaftar apa yang ditinggalkannya.
- Data analitis atau analisis struktur.
- Apa pun selain tampilan referensi IFC4.

## Impor

{{ui:Import IFC}} di grup {{ui:File}} (atau menjatuhkan berkas `.ifc` ke tampilan) membuat model baru dari berkas IFC2X3 atau IFC4:

- **Balok, kolom, batang (bresing), dan pelat** yang badannya berupa satu profil ekstrusi yang dikenali DetailCraft, dicocokkan dengan katalog atau disimpan sebagai profil kustom; **grid** dan **level** dari grid dan lantai berkas.
- **Lubang:** setiap bukaan bundar (IfcOpeningElement yang melubangi part yang masuk) tegak lurus terhadap salah satu muka part: badan atau sayap profil I atau kanal, dinding tabung, pelat, atau kaki siku. Lubang yang menembus kedua dinding tabung hanya masuk sekali.
- **Coak:** bukaan persegi panjang yang mengambil seluruh lebar profil I atau kanal dari satu ujung, turun dari atas atau naik dari bawah.
- **Baut:** setiap IfcMechanicalFastener atau IfcFastener, dengan diameter, panjang, grade, dan jenisnya (baut atau baut angkur), sebagai **baut lepas**. Baut lepas tampil di tampilan, daftar material, dan ekspor IFC, serta tetap di tempatnya saat Anda memindahkan batang. Panel {{ui:Properties}}, saat tidak ada yang dipilih, menghitungnya dan memiliki {{ui:Remove loose bolts}} untuk saat Anda menambahkan sambungan sebagai gantinya.

Laporan mendaftar semua yang lain menurut kelas beserta alasan ditinggalkannya: dinding dan pelat lantai, fondasi dan tulangan, lubang berceruk, lubang pada tabung bundar, dan sambungan (berkas IFC membawa pelat dan bautnya, bukan aturan yang membuatnya).
