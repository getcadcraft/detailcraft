---
title: Bosqichlar
summary: Modelni bosqichlarga ajrating (oʻrnatish ketma-ketligi yoki yetkazib berishlar), har bir bosqichni koʻrsating yoki yashiring, qismlarni bosqichga joylang va belgilarni har bir bosqich boʻyicha raqamlang.
keywords: bosqich, bosqichlar, bosqichlar paneli, oʻrnatish ketma-ketligi, yetkazib berish, partiya, ketma-ketlik, bosqichni yashirish, bosqichni koʻrsatish, filtr, raqamlash, belgi prefiksi, har bir bosqich
from: bae506f5
---

Bosqich — birgalikda tayyorlanadigan, yetkaziladigan yoki oʻrnatiladigan qismlar guruhi: oʻrnatish ketma-ketligi, yetkazib berish, partiya. Har bir element va poydevor bitta bosqichda boʻladi. Ulanish oʻzining asosiy elementi bosqichida boʻladi: uchki plastinaning toʻsini, tayanch plastinaning ustuni. Yangi model bitta bosqichga ega.

## Bosqichlar paneli

{{ui:Bosqichlar}} boʻlimi {{ui:Model}} panelida barcha bosqichlarni roʻyxatlaydi:

- belgilash katakchasi bosqichni koʻrinishda koʻrsatadi yoki yashiradi;
- raqam va nomni kiritish mumkin (boʻsh boʻlsa "2-bosqich" va hokazo);
- unda nechta qism borligi;
- {{ui:×}} tugmasi bosqichni oʻchiradi. Faqat boʻsh bosqichni oʻchirish mumkin: avval uning qismlarini boshqa bosqichga koʻchiring.

{{ui:Bosqich qoʻshish}} keyingi raqamni qoʻshadi va uni yangi qismlar joylashadigan bosqich qiladi.

## Qismlarni bosqichga joylash

- **Yangi qismlar:** {{ui:Yangi qismlar joylashadi}} bundan keyin joylashtiradigan har bir element va poydevor tushadigan bosqichni tanlaydi.
- **Bitta qism:** uni tanlang va {{ui:Xususiyatlar}} panelida {{ui:Bosqich}} ni oʻzgartiring.
- **Koʻp qism:** ularni tanlang (oyna, {{key:Shift}}+bosish, {{key:Mod+A}}) va {{ui:Xususiyatlar}} panelining yuqorisida {{ui:Bosqich}} ni oʻzgartiring. Ular turli bosqichlarda boʻlsa, **Turlicha** deb koʻrsatiladi. Bitta oʻzgarish — bitta qaytarish qadami.

Nusxalar nusxa olingan qismning bosqichini saqlaydi, hatto boshqa modelga qoʻyilganda ham (bosqich u yerga qoʻshiladi).

## Bosqichlarni koʻrsatish va yashirish

Yashirilgan bosqich koʻrinishda chizilmaydi, bosib boʻlmaydi yoki tanlash oynasiga tushmaydi, va {{key:Mod+A}} uni chetda qoldiradi. Biroq u hali ham materiallar roʻyxatida, hisobotlarda, chizmalarda va har bir eksportda boʻladi. Yashirish faqat koʻrinish uchun: u saqlanmaydi va uni qaytarib boʻlmaydi.

## Bosqich boʻyicha belgilar

Agar **Bosqich boʻyicha belgilarni raqamlash** yoqilgan boʻlsa (u dastlab yoqilgan) va qismlar bir necha bosqichda boʻlsa, har bir bosqich oʻz-oʻzidan raqamlanadi va uning belgilari bosqich raqami bilan boshlanadi: qism belgilari 1-b1, 2-b1, yigʻma belgilari 2-B1, poydevorlar 2-F1. Turli bosqichlardagi ikkita bir xil toʻsin turli belgilarga ega boʻladi, chunki ular turli vaqtda tayyorlanadi va joʻnatiladi. Bitta bosqich ishlatilsa, belgilarda prefiks boʻlmaydi. Uni oʻchiring — butun modelni yagona deb raqamlash uchun, shunda bir xil qismlar bosqichidan qat'iy nazar bitta belgiga ega boʻladi.

Bosqich IFC eksportiga yoziladi (xususiyatlar toʻplami DetailCraft, Bosqich).

:::note
Bosqichli modellar DetailCraft fayl formati 2 da saqlanadi. DetailCraft 0.3 relizi ularni ocha olmaydi; bu versiya eski fayllarni ochadi, barcha qismlar 1-bosqichga qoʻyiladi.
:::
