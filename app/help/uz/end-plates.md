---
title: Tirgaklarni uchlik plastinalar bilan ustunlarga ulash
summary: Tirgak ustun polkasi yoki tanasi bilan tutashgan joyga boltli uchlik plastina qoʻshing, plastina, boltlar va payvandni sozlang va xuddi shunga oʻxshash har bir birikmaga nusxalang.
keywords: uchlik plastina, endplate, moment ulanish, boltli ulanish, birikma, boltlar, payvand, choʻzilgan uchlik plastina, tekis, oʻxshash, ulanishni nusxalash, komponent
from: 21e028b2
---

Uchlik plastina ulanishi plastinani tirgak uchiga payvandlaydi va uni ustun polkasi yoki tanasiga bolt bilan biriktiradi. DetailCraft plastinani joylashtiradi, tirgakni orqaga kesadi, plastina va ustun polkasiga mos teshiklar ochadi, boltlar va payvandni qoʻshadi hamda chekka masofalari va oraliqlarini tekshiradi.

:::warning
DetailCraft ulanishlarni loyihalamaydi. Sozlamalar oʻzgartirish uchun boshlangʻich qiymatlardir; mustahkamlik hech narsa bilan tekshirilmaydi. Chekka va oraliq ogohlantirishlari EN 1993-1-8 3.3-jadvalining minimumlaridan foydalanadi, ular siz ishlaydigan qoidalardan farq qilishi mumkin.
:::

## Nimani ulash mumkin

- **Sath** tirgak (ikkala uchi bir balandlikda), vertikal (aylanishi 0), I-shakldagi profil bilan.
- **Vertikal** I-shakldagi ustunning **polkasi** yoki **tanasi**ga, unga tik.
- Tirgak uchi ustun chizigʻida, ustunning pastki va yuqori qismi orasida turishi kerak.

Qiyshiq yoki qiya tirgaklar va I-shakl boʻlmagan kesimlar sabab bilan rad etiladi: ular uchun [qirqish plastinalaridan](topic:shear-tabs) foydalaning. Tanada plastina va tirgak polkalari ustun polkalari orasiga sigʻishi kerak; DetailCraft sigʻmasa ogohlantiradi.

:::tip
0 aylanishda ustun polkalari raqamlangan toʻr yoʻnalishi (x) boʻylab qaraydi. A dan B gacha boʻlgan tirgak tanaga uchrashadi va tanaga uchlik plastina oladi.
:::

## Tirgakka uchlik plastinalar qoʻshish

1. {{ui:Tanlash}} ({{key:V}}) ni tanlang va tirgakni bosing.
2. {{ui:Ulash}} guruhida {{ui:Uchlik plastinalar}} ni yoki {{ui:Xususiyatlar}} panelida {{ui:Uchi plastinalarini qoʻshish}} ni tanlang.
3. Ustun polkasi yoki tanasi bilan tekis uchrashadigan tirgakning har bir boʻsh uchi plastina oladi. Holat satri "2 ta uchlik plastina qoʻshildi. Plastinasini, boltlarini va payvandini oʻzgartirish uchun bittasini tanlang; Oʻxshash uni shunga oʻxshash birikmalarga nusxalaydi." deydi.
4. Birinchi yangi uchlik plastina tanlanadi va uning sozlamalari {{ui:Xususiyatlar}} panelida boʻladi.

Agar hech narsa boʻlmasa, holat satrini oʻqing:

- "Bu tirgak ustun chizigʻida tugamaydi. Uchlik plastinalar vertikal ustunga uchraydigan tirgak uchiga qoʻyiladi."
- "Bu tirgak ustunga burchak ostida yoki qiya tutashadi: uchlik plastinalar tik va tekis birikmalar uchun. {{ui:Qirqish plastinalari}} dan foydalaning."
- "Ikkala uchida allaqachon ulanishlar bor."

## Plastina, boltlar va payvandni oʻzgartirish

Ulanishni tanlash uchun uchlik plastinani (yoki uning boltlaridan birini) bosing. {{ui:Plastina, boltlar va payvand (mm)}} ostida:

| Sozlama | Boshlangʻich | Nima qiladi |
|---|---|---|
| Plastina qalinligi | 20 | Plastinaning qalinligi; shuningdek tirgak polkadan tashqariga qancha orqaga kesilishi |
| Plastina kengligi | 180 | Birikma boʻylab kengligi |
| Tirgak ustidagi choʻzilma | 0 | Yuqori polka ustida; 0 dan katta boʻlsa choʻzilgan uchlik plastina hosil qiladi |
| Tirgak ostidagi choʻzilma | 0 | Pastki polka ostida |
| Bolt diametri | 20 | Nominal bolt oʻlchami |
| Teshik diametri | 22 | Plastinada va ustun polkasidagi teshik zazori |
| Bolt sinfi | A325 | Matn; materiallar roʻyxatida chop etiladi |
| Bolt qatorlari | 4 | Ikki boltdan iborat qatorlar, plastina balandligi markazida |
| Qatorlar qadami | 75 | Qatorlar orasidagi vertikal masofa |
| Oraliq | 100 | Bir qatordagi ikki bolt orasidagi gorizontal masofa |
| Bolt uzunligi zahirasi | 30 | Gayka, shayba va rezba uchun ushlashga qoʻshiladi; quyiga qarang |
| Burchak payvand oʻlchami | 8 | Tirgak uchi atrofida hamma tomondan |
| Plastina materiali | A36 | Matn |

Sozlamalar ostida ulanish nimani hosil qilishini koʻrasiz:

- {{ui:Boltlar}}: masalan "8 × 20 × 70 A325 (ushlash 36.2)".
- {{ui:Payvand}}: oʻlchami, joyi va uzunligi.
- {{ui:Plastina}}: oʻlchami va detal belgisi.

### Raqamlar qanday hisoblanadi

- Tirgak ustun chuqurligining yarmiga orqaga kesiladi (tanada: tana qalinligining yarmi) va plastina qalinligi qoʻshiladi, shunda plastina yuzada turadi.
- Plastina balandligi tirgak chuqurligi va ikkita choʻzilmadir.
- Bolt uzunligi = ushlash (plastina qalinligi + ustun polkasi yoki tana qalinligi) + zahira, 5 mm ga yuqoriga yaxlitlangan.
- Koʻrsatilgan payvand uzunligi tirgak kesimining perimetridir.

### Ogohlantirishlar

Ulanish baribir quriladi, lekin bular uning ostida va {{ui:Muammolar}} yorligʻida paydo boʻladi:

- Bolt qatorlari yoki boltlar plastina chetiga teshik diametrining 1,2 barobaridan yaqinroq.
- Qatorlar qadami teshik diametrining 2,2 barobaridan kam yoki oraliq 2,4 barobaridan kam.
- Teshiklar ustun tanasiga yoki uning burchak yumaloqligiga kirib ketadi yoki ustun polkasidan chiqib ketadi.
- Plastina ustun polkasidan kengroq yoki (tanada) polkalar orasidagi boʻshliqdan kengroq; tirgak polkalari ular orasiga sigʻmaydi.
- Bolt qatori tirgak polkasiga juda yaqin, yoki oraliq tirgak tanasi va uning payvandiga nisbatan juda tor.

## Xuddi shunday har bir birikmaga nusxalash

1. Sozlagan ulanishingizni tanlang.
2. {{ui:Xususiyatlar}} panelida {{ui:Oʻxshashlarga qoʻllash (n)}} ni tanlang yoki {{ui:Ulash}} guruhining {{ui:Yana}} menyusida {{ui:Oʻxshash}}. Qavs ichidagi raqam nechta birikma olishini koʻrsatadi.
3. Bir xil tirgak profili va ustun profiliga ega, tirgak bir xil turdagi yuzaga (polka yoki tana) kiradigan, hali ulanishi boʻlmagan har bir birikma xuddi shu sozlamalar bilan nusxa oladi. Holat satri nechta ekanini koʻrsatadi.

Nusxalar mustaqil: keyin birini oʻzgartirish boshqalarni oʻzgartirmaydi. Allaqachon ulanishi bor birikmalarga tegilmaydi; ularni almashtirmoqchi boʻlsangiz, avval oʻchiring.

## Koʻchirish va oʻchirish

Ulanishlar har safar model oʻzgarganda sozlamalaridan qayta yaratiladi, shuning uchun tirgak yoki ustunni koʻchirish yoki oʻlchamini oʻzgartirish uning uchlik plastinalarini ham olib yuradi. Agar oʻzgarish birikma endi mos kelmasligini bildirsa, ulanish modelda qoladi va {{ui:Muammolar}} yorligʻi sababini aytadi, masalan "Tirgak uchi endi ustun chizigʻida emas."

Ulanishni oʻchirish uchun uni tanlang va {{key:Delete}} ni bosing. Tirgakni yoki ustunni oʻchirish ularning ulanishlarini ham oʻchiradi.

Keyingisi: [Tayanch plastinalari va ankerli sterjenlarni qoʻshish](topic:base-plates).
