---
title: Montaj rejasi va video
summary: Kranni va uning yuk jadvalini kiriting, har bir koʻtarishni bosqichlar tartibida jadval boʻyicha tekshirilgan holda koʻring va har qanday telefonda oflaynda ijro etiladigan montaj videosini saqlang.
keywords: montaj, kran, koʻtarish, yuk jadvali, radius, sigʻim, bogʻlash, ketma-ketlik, video, animatsiya, telefon, oflayn, koʻtarish rejasi
from: fa7b0133
---

{{ui:Montaj}} yorligʻi modelni montaj buyurtmasiga aylantiradi va har bir koʻtarishni siz tasvirlagan kran bilan tekshiradi. U siz kiritgan raqamlardan rejalashtiradi. Bu koʻtarish rejasi emas: uni boʻlaklovchi va kran operatori tuzadi.

## Kranni tasvirlash

{{ui:Kran qoʻshish}} ni tanlang, soʻng toʻldiring:

- **Kran markazi X va Y:** kran turgan joy, millimetrda.
- **Eng yuqori ilgak:** ilgak koʻtarilishi mumkin boʻlgan eng yuqori balandlik, millimetrda. 0 hech qanday chegara tekshirilmasligini bildiradi.
- **Ilgak bloki va bogʻlash jadvalda emas:** jadvalingiz buni allaqachon hisobga olmagan boʻlsa, yuk qoʻshilishidan oldin jadvaldan olinadigan kilogramm.
- **Yuk jadvali:** har qatorda bitta, radius metrda, soʻng sigʻim kilogrammda. Qatorlarni kranning oʻz jadvalidan nusxalang.

Yuk jadvali yuk jadvali kabi oʻqiladi: radius uchun koʻrsatilgan sigʻim oʻsha radiusgacha amal qiladi. Ikki qator orasidagi radiusdagi yuk **uzoqroq** qatorning sigʻimini oladi, ularning orasidagi qiymatni hech qachon emas. Birinchi qator ichida birinchi qatorning sigʻimi amal qiladi. Oxirgi qatordan keyin kran umuman koʻtara olmaydi. Koʻtarish uchun hisoblanadigan radius — olish radiusi va qoʻyish radiusidan kattasi.

Ikkinchi kran xuddi shunday qoʻshiladi. Har bir koʻtarish sizning zaxirangiz doirasida uni olib keta oladigan birinchi kranga beriladi.

## Reja nima qiladi

- Har bir yigʻma uchun bitta koʻtarish: tirgak uchlik plastinalari bilan, ustun tayanch plastinasi bilan, zinapoya.
- Tartib avval bosqichlar, soʻng daraja boʻyicha: ustunlar, ular koʻtargan tirgaklar, boʻgʻinlar, plastinalar, zinapoyalar. Qism oʻzini ushlab turadigan narsadan oldin hech qachon koʻtarilmaydi.
- Har bir koʻtarish oʻz ogʻirligini (modelning umumiy ogʻirligi, plus {{ui:Har bir ogʻirlikka qoʻshilgan bogʻlash}}), radiusini, jadvalning qanday ulushidan foydalanishini va boshlanish daqiqasini koʻrsatadi.
- {{ui:Koʻtarish uchun jadvalning ruxsat etilgan qismi}} sizning xavfsizlik zaxirangizdir. Undan yuqori koʻtarish **Zaxiradan oshdi** deb belgilanadi; jadvaldan yuqorisi **Jadvaldan oshdi**; jadvalning oxirgi radiusidan tashqarisi **Jadval chegarasidan oʻtdi**; va ilgakdan baland qism **Ilgak juda past**.

Teshiklar va kesmalar ogʻirlikdan ayirilmaydi, boltlar esa bogʻlash foizi bilan qoplanadi.

## Muammolar

Har bir koʻtarish — zaxiradan oshgan, jadvaldan oshgan, juda baland yoki oʻzini ushlab turadigan narsadan oldin oʻrnatilgan — {{ui:Muammolar}} panelida chiqadi. Uni ushlab turadigan ulanishi boʻlmagan tirgak vaqtinchalik tayanch talab qiladigan sifatida roʻyxatlanadi.

## Videoni saqlash

{{ui:Videoni saqlash}} bitta HTML fayl yozadi. Uni istalgan brauzerda oching, telefonda ham, tarmoqsiz va hisobsiz: ijro etish va toʻxtatish, paneldagi istalgan daqiqaga surish, barmoq bilan modelni aylantirish, zoom uchun ikki barmoq bilan siqish. Izohda har bir koʻtarish, uning ogʻirligi, radiusi va jadval ulushi nomlanadi. Model oddiy qutilar sifatida chiziladi: u tartibni va koʻtarishlarni koʻrsatadi, haqiqiy profillarni emas.

Xuddi shu jadval {{ui:CSV}} tugmasi bilan CSV sifatida saqlanadi. Kran va jadval model faylida saqlanadi, va har bir oʻzgarish bitta bekor qilish qadami.
