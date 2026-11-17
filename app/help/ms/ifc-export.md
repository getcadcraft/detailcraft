---
title: Eksport IFC untuk penyelarasan
summary: Tulis fail IFC4 bagi keseluruhan model, keluli, bolt, tapak asas dan tetulang, untuk dikongsi dengan arkitek, jurutera dan perisian lain.
keywords: ifc, ifc4, ifc2x3, bim, eksport, import, import ifc, lubang, bolt, bolt longgar, bukaan, pengikat, penyelarasan, pertukaran model, step, openbim, pertembungan, penonton
from: cfcb0cd6
---

Eksport IFC menulis keseluruhan model sebagai satu fail IFC4 yang boleh dibuka oleh perisian BIM dan penonton IFC.

## Eksport

1. Pilih {{ui:IFC}} dalam kumpulan {{ui:Output}}.
2. Pelayar memuat turun `<name>.ifc`. Bar status menyatakan apa yang dimasukkan, contohnya "IFC4 dieksport: 25 bahagian, 88 pengikat, 7 tapak asas, 132 bar."

Jika model tidak mempunyai bahagian, tapak asas atau bar, bar status menyatakan "Tiada apa-apa untuk dieksport lagi."

## Apa yang ada dalam fail

| Dalam DetailCraft | Dalam fail IFC |
|---|---|
| Setiap aras | Satu tingkat bangunan (IfcBuildingStorey), di bawah satu projek, tapak dan bangunan |
| Grid | IfcGrid dengan paksinya dan labelnya |
| Tiang, rasuk, tupang | IfcColumn, IfcBeam, IfcMember (tupang), setiap satu ialah penyemperitan bentuk profil piawai dengan dimensi sebenarnya |
| Plat, plat hujung, plat tapak | IfcPlate |
| Lubang dan potongan hujung | Bukaan (IfcOpeningElement) dipotong daripada bahagian |
| Satu anggota dan plat yang dikimpal padanya | Himpunan (IfcElementAssembly) ditanda dengan tanda himpunan |
| Bolt dan bolt sauh | IfcMechanicalFastener dengan diameter dan panjang |
| Tapak asas | IfcFooting (tapak pad), dengan teks konkrit sebagai bahannya |
| Setiap bar | IfcReinforcingBar dengan tanda bar, diameter, luas dan panjang, disapu sepanjang garis tengah sebenar dengan lengkok sebenar pada lenturan |

Tag setiap bahagian ialah tanda bahagiannya. Setiap elemen juga membawa set sifat "DetailCraft" dengan tandanya, profil dan beratnya. Setiap elemen berada dalam tingkat tertinggi pada atau di bawah titik terendahnya. Bahan dikumpulkan mengikut gred.

## ID stabil untuk eksport semula

Setiap ID IFC elemen (GlobalId) dikira daripada nama model dan ID elemen itu sendiri dalam model. Eksport model yang sama dua kali dan ID-nya sepadan, supaya perisian yang membandingkan versi boleh mengenal pasti apa yang berubah.

:::warning
Menamakan semula model menukar setiap ID. Kekalkan nama model yang sama antara isu sesuatu projek.
:::

## Semak

Fail IFC DetailCraft dibaca semula oleh pembaca IFC bebas dalam suit ujiannya. Program berbeza dalam cara mereka membaca IFC, jadi buka fail dalam perisian yang digunakan pasukan anda sebelum anda bergantung padanya. App BimCraft CadCraft turut membuka fail IFC.

## Belum ada lagi

- Membawa masuk sambungan, tapak asas dan tetulang dari fail IFC. {{ui:Import IFC}} membawa masuk rasuk, tiang, anggota, plat, grid, aras, lubang, potongan hujung dan bolt, dan menyenaraikan apa yang ditinggalkannya.
- Data analitikal atau analisis struktur.
- Apa-apa selain pandangan rujukan IFC4.

## Import

{{ui:Import IFC}} dalam kumpulan {{ui:Fail}} (atau melepaskan fail `.ifc` ke atas paparan) membuat model baharu daripada fail IFC2X3 atau IFC4:

- **Rasuk, tiang, anggota (tupang) dan plat** yang badannya ialah satu profil yang dipenyemperitkan dan DetailCraft kenali, dipadankan dengan katalog atau disimpan sebagai profil tersuai; **grid** dan **aras** daripada grid dan tingkat fail.
- **Lubang:** setiap bukaan bulat (IfcOpeningElement yang membatalkan bahagian yang masuk) tegak lurus pada salah satu muka bahagian: web atau flange bentuk-I atau saluran, dinding tiub, plat, atau kaki sudut. Lubang melalui kedua-dua dinding tiub masuk sekali sahaja.
- **Potongan hujung:** bukaan segi empat tepat yang mengambil keseluruhan lebar bentuk-I atau saluran dari satu hujung, turun dari atas atau naik dari bawah.
- **Bolt:** setiap IfcMechanicalFastener atau IfcFastener, dengan diameter, panjang, gred dan jenisnya (bolt atau bolt sauh), sebagai **bolt longgar**. Bolt longgar muncul dalam paparan, senarai bahan dan eksport IFC, dan kekal di tempatnya apabila anda mengalihkan anggota. Panel {{ui:Sifat}}, apabila tiada apa yang dipilih, mengira mereka dan mempunyai {{ui:Alih keluar bolt longgar}} untuk apabila anda menambah sambungan sebaliknya.

Laporan menyenaraikan semua yang lain mengikut kelas dengan sebab ia ditinggalkan: dinding dan papak, tapak asas dan bar, lubang berslot, lubang dalam tiub bulat, sambungan (fail IFC membawa plat dan bolt mereka, bukan peraturan yang menghasilkannya).
