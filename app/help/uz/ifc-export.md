---
title: Muvofiqlashtirish uchun IFC eksport qilish
summary: Butun modelni IFC4 faylga yozing: poʻlat, boltlar, poydevorlar va armatura. Arxitektorlar, muhandislar va boshqa dasturlar bilan ulashish uchun.
keywords: ifc, ifc4, ifc2x3, bim, eksport, import, ifc import qilish, teshiklar, boltlar, boʻsh boltlar, ochiqliklar, mahkamlagichlar, muvofiqlashtirish, model almashinuvi, step, openbim, toʻqnashuv, koʻrish dasturi
from: cfcb0cd6
---

IFC eksport butun modelni bitta IFC4 fayl sifatida yozadi, uni BIM dasturlari va IFC koʻrish dasturlari ochishi mumkin.

## Eksport

1. {{ui:Output}} guruhidagi {{ui:IFC}} ni tanlang.
2. Brauzer `<name>.ifc` faylni yuklab oladi. Holat satrida nimalar kirganini koʻrsatadi, masalan: "IFC4 eksport qilindi: 25 ta detal, 88 ta mahkamlagich, 7 ta poydevor, 132 ta sterjen."

Agar modelda detal, poydevor yoki sterjen boʻlmasa, holat satrida "Hali eksport qilinadigan hech narsa yoʻq." deyiladi.

## Faylda nimalar bor

| DetailCraftda | IFC faylda |
|---|---|
| Har bir sath | Bino qavati (IfcBuildingStorey), bitta loyiha, maydon va bino ostida |
| Setkalar | Oʻqlari va belgilari bilan IfcGrid |
| Ustunlar, toʻsinlar, tirgaklar | IfcColumn, IfcBeam, IfcMember (tirgak); har biri standart profil shaklining haqiqiy oʻlchamlari boʻyicha ekstruziya |
| Plastinalar, uchlik plastinalar, tayanch plastinalar | IfcPlate |
| Teshiklar va kesiklar | Detaldan kesilgan teshiklar (IfcOpeningElement) |
| Element va unga payvandlangan plastinalar | Yigʻma (IfcElementAssembly), yigʻma belgisi bilan |
| Boltlar va langar sterjenlari | Diametri va uzunligi bilan IfcMechanicalFastener |
| Poydevorlar | IfcFooting (tagliklik poydevor), beton matni material sifatida |
| Har bir sterjen | IfcReinforcingBar: sterjen belgisi, diametri, yuzasi va uzunligi bilan, haqiqiy markaziy chiziq boʻylab, burilishlarda haqiqiy yoylar bilan |

Har bir detalning tegi uning detal belgisi. Har bir element, shuningdek, belgilari, profili va ogʻirligi bilan "DetailCraft" xususiyatlar toʻplamiga ega. Har bir element oʻzining eng pastki nuqtasidan pastda yoki unga teng boʻlgan eng yuqori qavatda turadi. Materiallar sinfi boʻyicha guruhlanadi.

## Qayta eksport uchun barqaror identifikatorlar

Har bir elementning IFC identifikatori (GlobalId) model nomi va elementning modeldagi oʻz identifikatoridan hisoblanadi. Bir modelni ikki marta eksport qilsangiz, identifikatorlar mos keladi, shuning uchun versiyalarni solishtiruvchi dasturlar nima oʻzgarganini koʻra oladi.

:::warning
Modelni qayta nomlash har bir identifikatorni oʻzgartiradi. Loyiha nashrlari orasida model nomini bir xil saqlang.
:::

## Tekshirish

DetailCraftʼning IFC fayllari test toʻplamidagi mustaqil IFC oʻquvchi orqali qayta oʻqiladi. Dasturlar IFC ni turlicha oʻqiydi, shuning uchun unga tayanishdan oldin faylni jamoangiz ishlatadigan dasturda oching. CadCraftʼning BimCraft ilovasi ham IFC fayllarini ochadi.

## Hali yoʻq

- Birikmalar, poydevorlar va armaturani IFC fayldan olib kelish. {{ui:Import IFC}} toʻsinlar, ustunlar, tirgaklar, plastinalar, setkalar, sathlar, teshiklar, kesiklar va boltlarni olib keladi hamda qoldirilganlar roʻyxatini beradi.
- Analitik yoki konstruktiv hisob maʼlumotlari.
- IFC4 standart koʻrinishidan boshqa narsa.

## Import

{{ui:File}} guruhidagi {{ui:Import IFC}} (yoki koʻrinishga `.ifc` faylni tashlash) IFC2X3 yoki IFC4 faylidan yangi model yaratadi:

- **Toʻsinlar, ustunlar, tirgaklar (tirgaklar) va plastinalar**, agar tanasi DetailCraft biladigan bitta ekstruziya qilingan profildan iborat boʻlsa; katalogga moslangan yoki oʻz profili sifatida saqlangan; **setkalar** va **sathlar** faylning setka va qavatlaridan.
- **Teshiklar:** kiritilgan detalning yuzlaridan biriga perpendikulyar boʻlgan har bir dumaloq ochiqlik (IfcOpeningElement): I-profil yoki shvellerning tanachasi yoki flanesi, quvurning devorlari, plastina, burchakning qirralari. Quvurning ikki devori orqali oʻtgan teshik bir marta kiradi.
- **Kesiklar:** I-profil yoki shvellerning toʻliq kengligini bir uchidan, yuqoridan pastga yoki pastdan yuqoriga egallagan toʻrtburchak ochiqlik.
- **Boltlar:** har bir IfcMechanicalFastener yoki IfcFastener, diametri, uzunligi, sinfi va turi (bolt yoki langar sterjeni) bilan, **boʻsh bolt** sifatida. Boʻsh boltlar koʻrinishda, bill of materials va IFC eksportda koʻrinadi va siz elementlarni surganingizda oʻz joyida qoladi. Hech narsa tanlanmagan {{ui:Properties}} paneli ularni sanaydi va birikmalarni qoʻshganingizda {{ui:Remove loose bolts}} tugmasi bilan oʻchirish mumkin.

Hisobotda qolgan hamma narsa sinflar boʻyicha, qoldirilish sababi bilan koʻrsatiladi: devorlar va plitalar, poydevorlar va sterjenlar, teshik ochiqlar, quvurdagi teshiklar, birikmalar (IFC fayl ularning plastinalari va boltlarini olib keladi, lekin ularni hosil qilgan qoidani emas).
