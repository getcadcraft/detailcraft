---
title: DetailCraft sozlamalari
summary: Yangi elementlarni AQSh yoki Yevropa shakllari sifatida boshlang, Nusxa olish nusxani qanchaga siljitishini tanlang, nusxalar ulanishlarini olib-olmasligini va 3D koʻrinishda boltlarni koʻrsatish yoki yashirishni tanlang.
keywords: sozlamalar, afzalliklar, varaq oʻlchami, qogʻoz oʻlchami, chizmalar, parametrlar, poʻlat, aisc, en, yevropa, aqsh shakllari, metrik shakllar, standart profil, sinf, s355, a992, nusxa olish siljishi, qoʻyish siljishi, ulanishlarni nusxalash, boltlar, langar sterjenlari, boltlarni yashirish, tiklash
from: e46cea57
---

{{ui:Sozlamalar}} ni ilova panelidagi tishli gʻildirak yoki {{key:Mod+,}} bilan oching. Birinchi yorliq, {{ui:DetailCraft}}, shu ilovaga tegishli sozlamalarni saqlaydi; {{ui:Umumiy}} barcha CadCraft ilovalari uchun umumiy sozlamalarni (mavzu, asboblar paneli, panellar) saqlaydi. DetailCraft sozlamalari faqat ilovada mavjud: ularni shu yerda oʻzgartirasiz, ular darhol kuchga kiradi va bu brauzer ularni eslab qoladi. Ular model faylingizda saqlanmaydi.

## Yangi elementlar

Qaysi profil va sinflardan joylashtirish vositalari boshlanishi:

| Vosita | AQSh shakllari (AISC), A992 | Yevropa shakllari (EN), S355 |
|---|---|---|
| {{ui:Toʻsin}} | W16x26, A992 | IPE300, S355 |
| {{ui:Ustun}} | W12x50, A992 | HEB200, S355 |
| {{ui:Bogʻlama}} | HSS6x6x1/4, A500 Gr C | HEA160, S355 |
| {{ui:Plastina}} | A36 | S355 |

AQSh shakllari boshlanish nuqtasi. Yevropa tanlovi bogʻlamalar uchun HEA160 ishlatadi, chunki DetailCraft ning EN katalogida hali kovak kesimlar yoʻq ([Profil katalogi](topic:profile-catalog)). Joylashtirish vositasi yoqilgan paytda keyingi detal uchun istalgan profil va sinfni {{ui:Xususiyatlar}} panelida tanlashingiz mumkin. Modelda allaqachon bor elementlar oʻz profil va sinfini saqlaydi.

## Nusxa olish va qoʻyish

- **Siljish (mm)**: x, y va z. {{ui:Nusxa olish}} ({{key:Mod+D}}) nusxani asldan shuncha uzoqlashtiradi va {{ui:Siljitish boʻyicha qoʻyish (mm, asldan)}} shakli u bilan boshlanadi. U 6000, 0, 0 dan boshlanadi: raqamlangan toʻrlar boʻylab bitta 6 m oraliq. Uni oʻz oraligʻingizga moslang yoki qavatni yuqoriga nusxalash uchun z dagi sath balandligiga.
- **{{ui:Uchlik va tayanch plastinalarni elementlari bilan birga nusxalash}}** (boshida yoqilgan): ulanish nusxa bilan faqat unga ulangan har bir element nusxalanganda keladi. Ulanishsiz elementlar va poydevorlarni nusxalash uchun uni oʻchiring, masalan, nusxada boshqa ulanishni sinab koʻrish uchun.

[Nusxalash, qoʻyish va nusxa olish](topic:copy-paste) ga qarang.

## 3D koʻrinish

**Boltlar va langar sterjenlarini koʻrsatish** (boshida yoqilgan). Ularni koʻrinishda yashirish uchun oʻchiring va gavjum birikmaning teshiklari va plastinalarini koʻring. Yashirin boltlarni bosib boʻlmaydi; ulanishni tanlash uchun plastinani bosing. Materiallar roʻyxati, chizmalar va har bir eksport hali ham har bir boltni va sterjenni oʻz ichiga oladi.

## Burchak koʻrsatkichi

3D koʻrinish burchagida nima koʻrinishi: **Koʻrinish kubi** (boshlangʻich; yuqori oʻngda — qaraladigan yoʻnalish uchun yuz, qirra yoki burchakni bosing, aylantirish uchun uni torting, modelni aylantirish uchun uning kompas halqasini torting), **Oʻq belgisi** (pastki chapda kichik X, Y, Z belgisi, koʻrinish bilan birga aylanadi: X qizil, Y yashil, Z koʻk) yoki **Yoʻq**. Faqat {{ui:3D}} da; {{ui:Reja}} va {{ui:Fasad}} ikkalasini ham koʻrsatmaydi. [Koʻrinish kubi](topic:view-cube) ga qarang.

## Tiklash

Dialog pastidagi {{ui:DetailCraft sozlamalarini tiklash}} bularni boshlangʻich holatga qaytaradi (AQSh shakllari, siljish 6000, 0, 0, ulanishlar nusxalangan, boltlar koʻrsatilgan), {{ui:Umumiy}} sozlamalari bilan birga.

## Chizmalar

**Varaq oʻlchami**: varaq chizmalari va ishlab chiqarish chizmalari albom yoʻnalishida chiziladi: A4, A3 (boshlangʻich), A2, A1, ANSI B, ANSI C yoki ANSI D. {{ui:Chizmalar}} va ishlab chiqarish chizmasi oynalarida xuddi shu roʻyxat bor. [Umumiy joylashuv va yigʻma chizmalar](topic:drawings) ga qarang.

## Armatura

- **ASTM armatura nomlari**: #3 dan #11 gacha, yoki xuddi shu armaturalar uchun yumshoq metrik #10 dan #36 gacha.
- **Egish jadvali shakl kodlari**: DetailCraft ning S, L, U; ACI 315 turlari; yoki BS 8666 shakl kodlari. [Armatura maʼlumotnomasi](topic:rebar-reference) ga qarang.

## Tanlash uchun sudrash

**Toʻrtburchak** (avvalgidek) yoki **Erkin kontur**: erkin chiziq, sudrash paytida {{key:Space}} ichkarida, tegish va toʻsiq oʻrtasida almashtiradi. [Oyna bilan tanlash](topic:select-and-change#select-with-a-window) ga qarang.
