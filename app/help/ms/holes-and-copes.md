---
title: Tambah lubang dan potongan hujung
summary: Taip lubang ke dalam web, flens dan plat, dan potong flens pada hujung rasuk, diukur dari hujung potongan bahagian itu.
keywords: lubang, lubang, lubang bolt, potongan hujung, takuk, potong, memotong, gerudi, tebuk, lubang web, lubang flens
from: 33d12398
---

Lubang dan potongan hujung ditaip mengikut kedudukan. Ia tergolong dalam anggota dan bergerak bersamanya.

Lubang yang dibuat oleh sambungan (plat hujung, plat tapak) ditambah untuk anda; anda tidak menaipnya. Ia disenaraikan sebagai "… lubang daripada sambungan (sunting sambungan)".

## Dari mana kedudukan diukur

- **x** berjalan sepanjang bahagian dari **hujung potongannya**: hujung mula selepas mana-mana sambungan telah memotongnya ke belakang. Jadi x = 0 ialah hujung sebenar keluli, bukan titik grid.
- **y** diukur merentasi muka dari pusat keratan:
   - pada **web**: ke atas (positif) atau ke bawah dari separuh kedalaman;
   - pada **flens** atau **plat**: merentasi lebar, dari garis tengah.
- Mula anggota ialah titik pertama yang anda klik semasa meletakkannya. Baris {{ui:Ends (x, y, z mm)}} menunjukkan hujung yang mana.

## Tambah lubang

1. Pilih anggota.
2. Dalam kotak {{ui:Holes}} panel {{ui:Properties}}, pilih {{ui:Face}}: {{ui:Web}}, {{ui:Top flange}} atau {{ui:Bottom flange}} (bagi bentuk I, saluran atau tiub segi empat), atau {{ui:Plate face}} (bagi plat).
3. Taip {{ui:x along (mm)}}, {{ui:y across (mm)}} dan {{ui:Diameter (mm)}}. Borang bermula dengan x 100, y 0, diameter 22.
4. Pilih {{ui:Add hole}}.

Bar status menyatakan "Lubang ditambah. x ialah dari hujung potongan; y dari pusat keratan (web: ke atas, flens/plat: merentasi)." Lubang itu muncul dalam senarai, dan dalam paparan sebagai palam gelap merentasi muka.

Untuk membuang lubang, pilih × di sebelahnya dalam senarai.

Sudut dan tiub bulat belum menerima lubang: kotak {{ui:Holes}} mereka menyatakannya.

:::note
Dalam paparan 3D, lubang dilukis sebagai palam gelap, bukan dipotong melalui keluli. Ia ialah lubang sebenar dalam fail NC, lukisan bengkel dan eksport IFC.
:::

Lubang yang x-nya berada melampaui mana-mana hujung bahagian ditunjukkan dalam tab {{ui:Problems}} sebagai "lubang berada di luar hujung bahagian".

## Tambah potongan hujung

Potongan hujung adalah untuk bentuk I: ia memotong flens atas atau bawah (dan kedalaman web itu) pada satu hujung, supaya rasuk melepasi anggota lain.

1. Pilih anggota bentuk I.
2. Dalam kotak {{ui:Copes}}, pilih {{ui:End}} ({{ui:Start}} atau {{ui:End}}) dan {{ui:Side}} ({{ui:Top}} atau {{ui:Bottom}}).
3. Taip {{ui:Length (mm)}} (sepanjang rasuk dari hujung itu) dan {{ui:Depth (mm)}} (ke bawah dari atas, atau ke atas dari bawah). Borang bermula dengan 100 x 40.
4. Pilih {{ui:Add cope}}.

Paparan menunjukkan potongan hujung dipotong daripada keluli. Senarai membaca, contohnya, "Atas pada mula: 100 x 40". Buangnya dengan ×nya.

Potongan hujung berbentuk segi empat: belum ada jejari pada sudut dalam.

## Cara lubang dan potongan hujung memberi kesan kepada tanda

Dua bahagian hanya mendapat tanda bahagian yang sama jika lubang dan potongan hujung mereka sepadan dalam lingkungan 1 mm, dengan mengambil kira bahagian yang dipusingkan. Menambah lubang pada satu rasuk dalam kumpulan memberinya tanda baharu. Lihat [Peraturan tanda](topic:mark-rules).
