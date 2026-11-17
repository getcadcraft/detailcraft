---
title: NC fayllarni sexga yuborish
summary: Har bir qism belgisi uchun DSTV NC fayllarini (I-shakllar, kanallar, burchaklar, HSS, plastinalar) eksport qiling, zip qilib oling va ular stanokka yetib borishidan oldin tekshiring.
keywords: nc, nc1, dstv, cnc, stanok, toʻsin liniyasi, teshik liniyasi, plastinani kesish, eksport, tayyorlash, zip
from: 598b6091
---

DetailCraft har bir qism belgisi uchun bitta DSTV NC fayl (`.nc1`) yozadi — I-shakllar, kanallar, burchaklar, toʻrtburchak va dumaloq HSS hamda plastinalar uchun — va ularni bitta zip arxivga jamlaydi. Toʻsin liniyalari va plastina stanoklari bu fayllarni arralash, teshish va kesish uchun oʻqiydi.

## Eksport

1. Avval {{ui:Muammolar}} yorligʻini tozalang: qurilmagan ulanish teshik qoʻshmaydi.
2. Modelni saqlang ({{key:Mod+S}}), shunda NC fayllar saqlangan modelga mos boʻladi.
3. {{ui:Output}} guruhida {{ui:NC files}} ni tanlang.
4. Brauzer `<name> NC.zip` faylini yuklab oladi. Holat satrida fayllar soni va yozilmagan qism belgilari (kesimli burchak yoki kesimli dumaloq truba) koʻrsatiladi.

Zip ichida har bir fayl qism belgisi bilan nomlanadi: `b1.nc1`, `c1.nc1`, `p1.nc1` … Zip siqilmagan va istalgan zip vositasi bilan ochiladi.

Agar modelda qismlar boʻlmasa, holat satri buni aytadi.

## Har bir faylda nima bor

- **Sarlavha (ST):** model nomi buyurtma sifatida, qism belgisi chizma va qism sifatida, qismning bosqichi yoki 1-bosqich, poʻlat markasi, miqdor, profil va uning oʻlchamlari, metriga massa va metriga boʻyalgan yuza. Arra kesimlari toʻgʻri burchakli boʻladi.
- **Tashqi konturlar (AK):** tanacha konturi, undagi kesimlar oʻyiqlari bilan, va har bir qanot konturi kesim uni olib tashlagan joyda qisqartirilgan.
- **Teshiklar (BO):** har bir teshik yuzi, joylashuvi va diametri bilan, shu jumladan uchki plastinalar va tayanch plastinalar yasagan teshiklar.

Maydonma-maydon, yuzlar va koordinata qoidalari boʻyicha: [NC fayl maydonlari](topic:nc1-fields).

## Nima yozilmaydi

- Kesimli burchaklar va kesimli dumaloq trubalar: NC fayl yoʻq. Ularning belgilari holat satrida koʻrsatiladi.
- Dumaloq trubalardagi teshiklar (DetailCraft ularni yasamaydi).
- Qiyalik kesimlari, ichki konturlar, qism belgilari (chizib belgilash) va toʻgʻri burchakdan boshqa arra burchaklari.
- Uzun teshiklar (DetailCraft faqat dumaloq teshiklarga ega).

## Ishlab chiqarishdan oldin tekshiring

DetailCraft NC fayllari oʻzining test toʻplami tomonidan qayta oʻqib tekshiriladi, ammo ular sizning sexingizdagi stanoklarda sinab koʻrilmagan.

1. Fayllarni sexingizdagi NC koʻrish dasturi yoki stanok dasturida oching va ularni ishchi chizmalar bilan solishtiring.
2. Partiyani ishga tushirishdan oldin har bir turdan bitta qismni stanokda tekshiring.
3. Dasturingiz qanot y-koordinatalarini va kanallarning yuzlarini qanday oʻqishini tekshiring: DetailCraft qanot y ni orqa qirradan oʻlchaydi va kanallarni standart chizmada koʻrsatilganidek orqasi bilan yotqizadi (qarang: [NC fayl maydonlari](topic:nc1-fields#faces-and-coordinates)).
