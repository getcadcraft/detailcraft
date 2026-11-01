---
title: DetailCraft bilan boshlash
summary: DetailCraft hozir nima qilishi, uni qanday ochish va setkalardan bitta ishlab chiqarish chizmasigacha birinchi modelni oʻn daqiqada yaratish.
keywords: boshlash, birinchi model, kirish, poʻlat detallashtirish, armatura, tez boshlash, qoʻllanma, umumiy koʻrinish
from: 3682c0d8
---

DetailCraft — CadCraft oilasiga kiruvchi poʻlat va armatura detallashtirish ilovasi. Siz setkalar va sathlarda poʻlat ramaning 3D modelini quriasiz, uni bogʻlaysiz va sexga kerak boʻladigan narsalarni olasiz: detal va yigʻma belgilari, materiallar roʻyxati, bitta detalning ishlab chiqarish chizmasi (PDF), DSTV NC fayllari, IFC modeli va poydevorlar uchun armatura jadvali.

Bu erta versiya. U bir nechta narsani sinchkovlik bilan bajaradi, hammasini birdaniga emas. Haqiqiy ish rejalashtirishdan oldin [Hali qurilmagan narsalar](topic:not-built-yet) bilan tanishing.

## Hozir nima qiladi

- Millimetrda kiritiladigan setkalar va sathlar.
- Nashr etilgan profil katalogidan ustunlar, toʻsinlar, bogʻlamalar va plastinalar (AISC W, S, C, L, HSS va Pipe; Yevropa IPE, HEA, HEB va UPN), hamda sizning parametrik profillaringiz.
- Ikkita birikma: toʻsin flanetsidan ustun flanetsigacha boltli uchlik plastina va 4 ta ankerli sterjenli ustun tayanch plastinasi. Ularning har birini oʻxshash har bir tugunga nusxalash mumkin.
- Holatiga qarab kiritilgan teshiklar va kesmalar.
- Pastki armatura qatlami va boshlangʻich sterjenlari bilan toʻrtburchak plitasimon poydevorlar.
- Har bir oʻzgarishdan keyin oʻzi yangilanadigan detal va yigʻma belgilari.
- Eksportlar: IFC4, DSTV NC fayllari (I-shakllar va plastinalar), CSV koʻrinishidagi materiallar roʻyxati, CSV koʻrinishidagi armatura jadvali va bitta detalning ishlab chiqarish chizmasi PDF.

## DetailCraftni ochish

1. DetailCraftni kompyuter brauzerida oching: Chrome, Edge, Firefox yoki Safari. Qarang: [Brauzerlar va kompyuterlar](common:browsers).
2. Ekran toʻlishini kuting. Pastdagi holat satrida « Tayyor. Namunani oching yoki setkalar va sathlarni oʻrnating hamda elementlarni joylashtira boshlang. » yoziladi.

Model koʻrinishi 3D grafika (WebGL) talab qiladi. Agar ekran oʻrtasida « Bu brauzer 3D grafikani (WebGL) ishga tushira olmadi » yozilsa, qarang: [Muammolarni bartaraf etish](topic:troubleshooting#the-3d-view-is-missing).

:::note
Modellaringiz kompyuteringizda qoladi. Modelni ochish brauzerda oʻqiladi, saqlash esa faylni yuklab oladi. Hech narsa yuklanmaydi. Bulutli saqlash hali mavjud emas. Qarang: [Fayllaringiz qayerga boradi](common:your-files). Keyinroq ulanishsiz ishlash uchun onlayn holatda bir marta ilova panelidagi {{ui:Save for offline}} ni tanlang; qarang: [Oflaynda ishlash](common:offline).
:::

:::offline
Siz oflaynsiz. DetailCraft faqat oldindan oflayn foydalanish uchun saqlangan boʻlsa ulanishsiz ishlaydi: ilova panelidagi {{ui:Save for offline}} tugmasi {{ui:Offline ready}} deb yozadi. Qarang: [Oflaynda ishlash](common:offline).
:::

## Avval namunani koʻring

DetailCraft nima yasashini koʻrishning eng tez usuli — namuna rama.

1. Asboblar panelining {{ui:File}} guruhidan {{ui:Sample}} ni tanlang.
2. Koʻrinishda ikki oraliqli rama paydo boʻladi: tayanch plastinali olti ustun, uchlik plastinali toʻrtta toʻsin, bitta bogʻlama va armaturali yetti poydevor.
3. Toʻsinni bosing. Oʻngdagi {{ui:Properties}} paneli uning detal belgisi, kesilgan uzunligi, ogʻirligi va uchlik plastinalar ochgan teshiklarni koʻrsatadi.
4. Pastdagi {{ui:Bill of materials}} yorligʻini oching — har bir detal belgisi uning soni va ogʻirligi bilan koʻrinadi.

[Namuna ramani koʻrib chiqish](topic:sample-model) qoʻllanmasi uni qismma-qism tushuntiradi.

## Birinchi modelingiz

Yangi modelda 1 dan 3 gacha raqamli va A dan B gacha harfli setkalar bor, qadami 6000 mm; hamda ikki sath: 0 da Sath 1 va 4000 da Sath 2.

1. {{ui:New}} ni tanlang. Joriy modelda oʻzgarishlar boʻlsa, DetailCraft avval ularni saqlashni soraydi.
2. Koʻrinish ustidagi {{ui:Plan}} ni tanlang. Yonidagi sathlar roʻyxatida Sath 1 tanlanadi.
3. Asboblar panelida {{ui:Column}} ni tanlang yoki {{key:C}} tugmasini bosing.
4. A/1 setka kesishmasini bosing. Sath 1 dan Sath 2 gacha W12x50 ustun paydo boʻladi. Holat satrida u qayerga joylashgani yoziladi.
5. Yana uchtasini qoʻyish uchun B/1, A/2 va B/2 ni bosing.
6. Sathlar roʻyxatidan Sath 2 ni tanlang, soʻng {{ui:Beam}} ni yoki {{key:B}} tugmasini bosing.
7. A/1 ni, soʻng A/2 ni bosing. W16x26 toʻsin ikki ustun uchini ulaydi, uning poʻlat yuqori qismi sathda boʻladi.
8. {{key:Esc}} ni bosib {{ui:Select}} ga qayting, soʻng toʻsinni bosing.
9. {{ui:Connect}} guruhidan {{ui:End plates}} ni tanlang. Ikki uchiga ham boltli uchlik plastina qoʻyiladi, toʻsin mos boʻlishi uchun qisqartiriladi va birinchi uchlik plastina endi tanlangan boʻladi.
10. Toʻsinni yana bosing.
11. {{ui:Output}} guruhidan {{ui:Shop drawing}} ni tanlang. Toʻsinning ishlab chiqarish chizmasi oldindan koʻrinishi ochiladi. {{ui:Download PDF}} ni tanlang.
12. Modelni saqlash uchun {{key:Mod+S}} ni bosing. Brauzer `Untitled.detailcraft.json` faylini yuklab oladi.

Saqlashdan oldin yuqori chapdagi {{ui:Name}} maydonida modelni qayta nomlang, shunda fayl va har bir eksport uning nomini oladi.

## Keyingi qadamlar

- [Ekran boʻylab sayohat](topic:workspace)
- [Setkalar va sathlarni sozlash](topic:grids-and-levels)
- [3D koʻrinishda harakatlanish](topic:navigate-3d) — sichqoncha, sensorli panel yoki sensorli ekran bilan
- [Boshqa detallashtirish dasturlaridan oʻtish](topic:coming-from), agar siz katta detallashtirish paketini bilsangiz
- [Ushbu yordamdan foydalanish](common:help)
