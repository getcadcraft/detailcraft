---
title: DetailCraft bilan boshlash
summary: DetailCraft hozir nima qila olishi, uni qanday ochish va setkalar hamda sathlardan tortib ishlab chiqarish chizmasigacha boʻlgan birinchi model — taxminan oʻn daqiqada.
keywords: boshlash, birinchi model, kirish, poʻlat detallash, armatura, tez boshlash, qoʻllanma, umumiy koʻrinish
from: e4f16bbe
---

DetailCraft — CadCraft oilasidagi poʻlat va armatura detallash ilovasi. Siz poʻlat karkasning 3D modelini setkalar va sathlarda yaratasiz, uni ulaysiz va ishlab chiqarish uchun kerak boʻlgan narsalarni olasiz: detal va yigʻma belgilari, materiallar roʻyxati, alohida detallar uchun ishlab chiqarish chizmalari, DSTV NC fayllari, IFC modeli va poydevorlar uchun egish jadvali.

Bu erta versiya. U bir nechta ishni ehtiyotkorlik bilan bajaradi, hammasini bir vaqtda emas. Haqiqiy ish rejalashtirishdan oldin [Hali tayyor emas](topic:not-built-yet) boʻlimini oʻqing.

## Hozir nima qila oladi

- Millimetrda kiritiladigan setkalar va sathlar.
- Nashr etilgan profil katalogidan ustunlar, toʻsinlar, bogʻlamalar va plastinalar (AISC W, S, C, L, HSS va Pipe; Yevropa IPE, HEA, HEB va UPN; Buyuk Britaniya UB, UC, PFC, EA, UEA, SHS, RHS va CHS), shuningdek sizning parametrik profillaringiz.
- Ikkita ulanish: toʻsindan ustun flanesigacha boltlangan uchlik plastina va toʻrtta ankerli ustun tayanch plastinasi. Ularning har biri oʻxshash har bir boʻgʻinga nusxalanishi mumkin.
- Teshiklar va kesimlar joyi boʻyicha kiritiladi.
- Pastki toʻr va boshlangʻich sterjenlari bilan toʻrtburchak poydevorlar.
- Har bir oʻzgarishdan keyin oʻzi yangilanadigan detal va yigʻma belgilari.
- Eksportlar: IFC4, DSTV NC fayllari (I-shakllar va plastinalar), materiallar roʻyxati CSV koʻrinishida, egish jadvali CSV koʻrinishida va bitta detalning ishlab chiqarish chizmasi PDF.

## DetailCraft ni ochish

1. DetailCraft ni kompyuter brauzerida oching: Chrome, Edge, Firefox yoki Safari. Qarang: [Brauzerlar va kompyuterlar](common:browsers).
2. Ekran toʻlguncha kuting. Pastdagi holat satrida yoziladi: "Tayyor. Namunani oching yoki setkalar va sathlarni belgilab, elementlarni joylashtirishni boshlang."

Model koʻrinishi 3D grafikani (WebGL) talab qiladi. Agar ekran oʻrtasida "Bu brauzer 3D grafikani (WebGL) ishga tushira olmadi" yozilsa, qarang: [Muammolarni bartaraf etish](topic:troubleshooting#the-3d-view-is-missing).

:::note
Modellaringiz kompyuteringizda qoladi. Modelni ochish uni brauzerda oʻqiydi, saqlash esa faylni yuklab oladi. Hech narsa serverga yuklanmaydi. Bulutli saqlash hali mavjud emas. Qarang: [Fayllaringiz qayerga boradi](common:your-files). Keyinchalik ulanishsiz DetailCraft dan foydalanish uchun, ulanganingizda bir marta ilova panelidagi {{ui:Save for offline}} ni tanlang; qarang: [Oflaynda ishlash](common:offline).
:::

:::offline
Siz oflaynsiz. DetailCraft ulanishsiz faqat oldindan oflayn foydalanish uchun saqlangan boʻlsa ishlaydi: ilova panelidagi {{ui:Save for offline}} tugmasi {{ui:Offline ready}} deb yozadi. Qarang: [Oflaynda ishlash](common:offline).
:::

## Avval namunaga qarang

DetailCraft nimalar yasashini koʻrishning eng tez yoʻli — namunaviy karkas.

1. Asboblar panelining {{ui:File}} guruhida {{ui:Sample}} ni tanlang.
2. Koʻrinishda ikki oraliqli karkas paydo boʻladi: tayanch plastinali oltita ustun, uchlik plastinali toʻrtta toʻsin, bitta bogʻlama va armaturali yetti poydevor.
3. Toʻsinni bosing. Oʻngdagi {{ui:Properties}} paneli uning detal belgisini, kesish uzunligini, ogʻirligini va uchlik plastinalar ochgan teshiklarni koʻrsatadi.
4. Pastdagi {{ui:Bill of materials}} yorligʻini oching — har bir detal belgisi soni va ogʻirligi bilan.

[Namunaviy karkasni koʻrib chiqish](topic:sample-model) qoʻllanmasi har bir qismni bosqichma-bosqich tushuntiradi.

## Birinchi modelingiz

Yangi modelda 1 dan 3 gacha setkalar A dan B gacha 6000 mm da va ikki sath bor: 1-sath 0 da, 2-sath 4000 da.

1. {{ui:New}} ni tanlang. Joriy modelda oʻzgarishlar boʻlsa, DetailCraft avval ularni saqlashni soʻraydi.
2. Koʻrinish ustida {{ui:Plan}} ni tanlang. Yonidagi sathlar roʻyxati 1-sathni tanlaydi.
3. Asboblar panelida {{ui:Column}} ni tanlang yoki {{key:C}} ni bosing.
4. A/1 setka kesishmasini bosing. 1-sathdan 2-sathgacha W12x50 ustun paydo boʻladi. Holat satri uning qayerga qoʻyilganini aytadi.
5. B/1, A/2 va B/2 ni bosib, yana uchtasini joylashtiring.
6. Sathlar roʻyxatida 2-sathni tanlang, soʻng {{ui:Beam}} ni yoki {{key:B}} ni bosing.
7. A/1 ni, keyin A/2 ni bosing. W16x26 toʻsin ikkita ustun uchini bogʻlaydi, poʻlatning yuqori sathi sathda boʻladi.
8. {{key:Esc}} ni bosing — {{ui:Select}} ga qaytish uchun, soʻng toʻsinni bosing.
9. {{ui:Connect}} guruhida {{ui:End plates}} ni tanlang. Ikkala uchida boltlangan uchlik plastinalar paydo boʻladi, toʻsin oʻlchamiga moslab qisqaradi va birinchi uchlik plastina endi tanlangan boʻladi.
10. Toʻsinni yana bosing.
11. {{ui:Output}} guruhida {{ui:Shop drawing}} ni tanlang. Toʻsinning ishlab chiqarish chizmasi oldindan koʻrinishi ochiladi. {{ui:Download PDF}} ni tanlang.
12. Modelni saqlash uchun {{key:Mod+S}} ni bosing. Brauzer `Untitled.detailcraft.json` ni yuklab oladi.

Saqlashdan oldin modelni chap yuqoridagi {{ui:Name}} maydonida qayta nomlang, shunda fayl va har bir eksport uning nomini oladi.

## Keyingi qadamlar

- [Ekranning koʻrinishi](topic:workspace)
- [Setkalar va sathlarni sozlash](topic:grids-and-levels)
- [3D koʻrinishda harakatlanish](topic:navigate-3d), sichqoncha, sensorli panel yoki sensorli ekran bilan
- [Boshqa detallash dasturlaridan oʻtish](topic:coming-from), agar katta detallash paketini bilsangiz
- [Ushbu yordamdan foydalanish](common:help)
