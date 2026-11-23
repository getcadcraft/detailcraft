---
title: Elementlar tutashgan joylarda payvandlarni tekshirish
summary: Loyihalash tekshiruvidan soʻng, har bir elementni boshqa element yoki tayanch bilan tutashgan joyda uning atrofidagi burchakli va uchma-uch payvandlarni AISC 360-16 J bobi yoki EN 1993-1-8 boʻyicha sinang va qaysi payvand guruhi eng koʻp ishlatilayotganini hamda qaysi kombinatsiya ostida ekanini koʻring. Muhandis koʻrib chiqquncha yordamchi vosita.
keywords: payvand, payvandlar, payvand tekshiruvi, burchakli payvand, uchma-uch payvand, toʻliq kirish, AISC 360, EN 1993-1-8, payvand guruhi, foydalanish darajasi, utilisation, utilization, qarshilik, tugun, birikma, konstruktiv, muhandis
from: e8eebbe6
---

Tahlil yorlig'idagi {{ui:Payvand tekshiruvlari}} bloki, {{ui:Loyihalash tekshiruvlari}} ostida, oxirgi yechilgan ramkaning kuchlarini va siz yaratgan mustahkamlik kombinatsiyalarini oladi hamda har bir tugunda, elementlar tutashgan yoki tayanchda turgan joyda, har bir element atrofidagi payvandni sinaydi.

:::warning
Bu **muhandis koʻrib chiqquncha yordamchi vosita**. U kesim atrofida tortilgan, bitta guruh sifatida qaraladigan payvandni ramkaning oʻz uchi kuchlaridan tekshiradi. U ishlab chiqarish chizmalaringizdagi payvandlarning oʻlchamini yoki uzunligini oʻqimaydi, boltlar, plastinalar, tayanch bosimi, blok kesish yoki ajralishni tekshirmaydi. Natijalari tasdiqlash muhri emas.
:::

## Ishga tushirish

1. {{ui:Tahlil}} yorlig'ida ramkani yeching, {{ui:Loyihalash tekshiruvlari}} da {{ui:Loyihalash normasi}} ni tanlang, soʻng {{ui:Kombinatsiyalarni yaratish}} ni bosing (payvand tekshiruvi xuddi shu mustahkamlik kombinatsiyalarini talab qiladi).
2. {{ui:Payvand tekshiruvlari}} da {{ui:Burchak katet (mm, 0 = devor, eng koʻpi 8)}} ni belgilang. 0 katet profilning ingichka devoriga mos kelishini bildiradi, lekin 8 mm dan oshmaydi. AISC normasi ostida {{ui:Payvand metali mustahkamligi F_EXX (MPa)}} payvand metalining mustahkamligi (482.6 MPa — E70 elektrod). EN 1993 ostida poʻlat markasi payvand metalining mustahkamligi va korrelyatsiya koeffitsiyentini beradi.
3. {{ui:Payvandlarni tekshirish}} tugmasini bosing.

Jadvalning har bir qatori bitta payvand guruhi (elementning tugun uchi). Raqamlar: uning boshqaruvchi tekshiruvining **foydalanish darajasi**, holati (oʻtadi yoki oʻtmaydi), hamda qaysi tekshiruv va band qaysi kombinatsiyada boshqarganligi. Tekshiruv baho bera olmagan guruh raqam oʻrniga sababini koʻrsatadi (poʻlat markasi yoʻq, EN 1993-1-8 4.1-jadvalida bu marka uchun korrelyatsiya koeffitsiyenti yoʻq, bu kesimda payvand yoʻq).

Katetni yoki payvand metalini oʻzgartirish yoki modelni tahrirlash jadvalni tozalaydi: u eski qiymatlar uchun edi. {{ui:Payvandlarni tekshirish}} ni yana bosing.

## Nima tekshiriladi

- **ASCE 7 + AISC 360:** burchakli payvand metali (yuklamaning payvandga burchagi hisobga olinadi, J2.4), asosiy metallning kesishda uzilishi (J4.2) va toʻliq kirishli uchma-uch payvandlar (J2.5-jadval).
- **EN 1990 + EN 1993:** burchakli payvandlar EN 1993-1-8 4.5.3.3 soddalashtirilgan usuli bo'yicha va uchma-uch payvandlar 4.7.1 bo'yicha.
- Minimal va maksimal katet hamda minimal uzunlik bo'yicha detallashtirish ogohlantirishlari, solishtirilgan qiymat bilan.

Payvand guruhi chiziqli kesim sifatida qaraladi va elastik vektor usuli bilan yuklanadi: payvandning har bir qismi elementning o'q kuchi, ikkala kesish kuchi, burilish va ikkala egilish momentidan kuchni oladi, vektor sifatida qo'shiladi.

## Tekshirilmaydigan narsalar

Qisman kirishli payvandlar, qiyshiq burchakli payvandlar, tiqin va yoriq payvandlari, uzilgan payvandlar, oniy markaz usuli, EN yoʻnalish usuli, charchash va asosiy metallning blok kesishi qurilmagan. Ba'zi standart doimiylari standartlardan yozilgan va hali bosma nusxa bilan solishtirilmagan; hisobot har bir raqam qayerdan olinganini sanab oʻtadi ({{ui:Hisobot (PDF)}} tekshiruvdan soʻng payvand jadvallarini oladi). Qarang: [Elementlarni tekshirish](topic:design-checks) va [Hali qurilmagan](topic:not-built-yet).
