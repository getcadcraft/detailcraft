---
title: Armatura bilan poydevorlarni joylashtirish
summary: Toʻgʻri burchakli yakka poydevorlarni pastki toʻr va chiqib turuvchi sterjenlar bilan joylashtiring, ularni tekshiring va egish jadvalini yuklab oling.
keywords: poydevor, yakka poydevor, armatura, sterjenlar, toʻr, chiqib turuvchi sterjenlar, ankerlar, egish jadvali, sterjenlar roʻyxati, beton, ilgaklar, himoya qatlami
from: 41a048be
---

Bu mavzu toʻgʻri burchakli yakka poydevorlar haqida. Balkalar, ustunlar, plitalar va devorlar [Temirbetonni batafsil](topic:reinforced-concrete) boʻlimida. Har bir poydevorda ikki yoʻnalishda pastki toʻr boʻladi va xohlasangiz, undan tik chiqib turadigan chiqib turuvchi sterjenlar qoʻyiladi. Sterjenlar AQSh oʻlchamlari boʻyicha #3 dan #11 gacha.

## Poydevorni joylashtirish

1. {{ui:Reja}} ni tanlang va poydevor yuqorisining sathini koʻrsating.
2. {{ui:Joylashtirish}} guruhidagi {{ui:Poydevor}} ni tanlang yoki {{key:F}} tugmasini bosing.
3. Poydevorni {{ui:Xususiyatlar}} panelida sozlang (pastga qarang) yoki standart qiymatlarni qoldiring.
4. Setka kesishmasini bosing. Poydevor shu nuqtaga markazlanadi, yuqorisi sathda boʻladi. Holat satrida masalan, "Poydevor 2000 x 2000 x 600 A/1 ostida." deb chiqadi.

Shuningdek, panelning pastidagi {{ui:Toʻr boʻyicha qoʻshish}} shaklidan ham foydalanishingiz mumkin.

Poydevor koʻrinishda chiziladi, shunda uning sterjenlarini koʻrish mumkin; sterjenlar qattiq quvur sifatida chiziladi.

## Poydevor sozlamalari

| Parametr | Standart | Izoh |
|---|---|---|
| Uzunlik L (mm) | 2000 | x boʻylab; 300 dan 50000 gacha |
| Kenglik B (mm) | 2000 | y boʻylab; 300 dan 50000 gacha |
| Balandlik H (mm) | 600 | 150 dan 10000 gacha |
| Beton | 4000 psi | Matn, IFC eksportda chop etiladi |

**Pastki toʻr**

| Parametr | Standart | Izoh |
|---|---|---|
| Uzun sterjenlar | #5 | L boʻylab yoʻnalgan sterjenlar, pastki qator |
| Oraliq (mm) | 250 | Ruxsat etilgan eng katta oraliq; sterjenlar shu yoki undan zich teng taqsimlanadi |
| Qisqa sterjenlar | #5 | B boʻylab yoʻnalgan, uzun sterjenlar ustiga qoʻyiladi |
| Oraliq (mm) | 250 | Yuqoridagidek |
| Himoya qatlami (mm) | 75 | Har bir yuzda sof himoya qatlami |
| Uchidagi ilgaklar | Yoqilgan | Har bir toʻr sterjenining ikki uchini standart 90° ilgak bilan yuqoriga buradi (shakl U); oʻchirilsa, toʻgʻri sterjenlar boʻladi (shakl S) |

**Chiqib turuvchi sterjenlar**

| Parametr | Standart | Izoh |
|---|---|---|
| Chiqib turuvchi sterjenlar | Yoqilgan | Chiqib turuvchi sterjenlarsiz poydevor uchun oʻchiring |
| Sterjen | #6 | |
| Sterjenlar L boʻylab / Sterjenlar B boʻylab | 2 / 2 | Poydevor markazida joylashgan sterjenlar toʻri |
| Oraliq L boʻylab / Oraliq B boʻylab | 250 / 250 | Sterjen markazlari orasida |
| Yuqoriga chiqish | 600 | Sterjenlar poydevor yuqorisidan qancha chiqib turishi |
| Pastdagi ilgak | Yoqilgan | Tashqariga qaratilgan 90° ilgak, toʻrga tayanadi (shakl L) |

Maydonlar ostida DetailCraft ilgak oyogʻini koʻrsatadi, masalan: "Ilgak oyogʻi #5 uchun: 254 mm tashqi oʻlchamda."

## Joylashtirilgan poydevorni oʻzgartirish

Poydevorni tanlang (uning betonini ustundan uzoqroqda bosing yoki sterjenlaridan birini). Sizga xuddi shu maydonlar, shuningdek {{ui:Markaz x}}, {{ui:Markaz y}}, {{ui:Yuqori z}} va {{ui:Aylanish (°)}} chiqadi. Ularning pastida shu poydevor sterjenlarining belgilari, soni va uzunliklari hamda beton hajmi kubometrda koʻrsatilgan jadval chiqadi.

Har bir oʻzgartirish saqlanishdan oldin tekshiriladi. Qurib boʻlmaydigan oʻzgartirish rad etiladi va holat satrida sababi koʻrsatiladi, masalan: "Himoya qatlami bu poydevorda sterjenlar uchun joy qoldirmaydi.", "Poydevor himoya qatlami ichida ikki qator sterjen uchun juda yupqa." yoki "Chiqib turuvchi sterjenlar 75 mm himoya qatlami bilan poydevor ichiga sigʻmaydi."

Qurish mumkin, lekin koʻrib chiqish kerak boʻlgan oʻzgartirishlar poydevor ostida va {{ui:Muammolar}} yorligʻida keltiriladi:

- "#11 sterjenlar 59.6 mm da 35.8 mm dan kam sof masofa qoldiradi (ACI 318-19 25.2.1)." Sterjenlar orasidagi sof masofa kamida sterjen diametriga va kamida 25.4 mm ga teng boʻlishi kerak.
- "#5 ilgaklar 254 mm chuqurlik talab qiladi; himoya qatlami ichiga faqat 150 mm sigʻadi." Ilgak oyoqlari shu sababli qisqartiriladi va ular endi standart ilgak boʻlmaydi.
- "Chiqib turuvchi ilgaklar himoya qatlamiga kiradi."
- "Chiqib turuvchi sterjenlar minimal sof oraliqdan yaqinroq joylashgan."

## Sterjen belgilari va egish jadvali

Bir xil sterjenlar (bir xil oʻlcham, shakl va millimetrgacha aniq oʻlchamlar) barcha poydevorlar boʻylab bitta sterjen belgisini oladi. Belgilar `<sterjen raqami>F<n>` shaklida yoziladi: 5F1, 5F2 — #5 sterjenlar uchun, 6F1 — birinchi #6 sterjen va hokazo. Bir xil oʻlcham, beton, toʻr va chiqib turuvchi sterjenlarga ega poydevorlar bitta poydevor belgisini oladi: F1, F2 …

1. Pastdagi {{ui:Egish jadvali}} yorligʻini oching. Har bir qator bitta sterjen belgisi: oʻlcham, shakl, A, B va C oʻlchamlar, soni, kesish uzunligi, umumiy uzunlik, metriga massa, har birining ogʻirligi, umumiy ogʻirlik va sterjen nima uchun ishlatilishi.
2. Yorliqdagi {{ui:CSV ni yuklab olish}} ni tanlang yoki {{ui:Chiqish}} guruhining {{ui:Yana}} menyusidagi {{ui:Egish}} ni tanlang — `<nom> bending schedule.csv` fayli uchun.

Shakllar DetailCraft ning oʻz kodlari boʻlib, standart emas: S — toʻgʻri, L — bir egilish, U — ikki egilish. Oʻlchamlar tashqi-tashqi; kesish uzunligi egilishlar orqali aniq markaziy chiziq uzunligi. Qarang: [Armatura maʼlumotnomasi](topic:rebar-reference).

## DetailCraft tekshirmaydigan narsalar

- Rivojlanish va ulanish uzunliklari, shuningdek chiqib turuvchi sterjenlarning ustundagi uchun yetarli uzunlikda ekanligi.
- Sof oraliq qoidasining agregat oʻlchamiga oid qismi (u aralashmani bilmaydi).
- Undagi ustun yoki tayanch plastinkasi bilan bogʻliq hamma narsa: poydevor va poʻlat alohida.

Shuningdek qarang: [Hali qurilmagan](topic:not-built-yet).
