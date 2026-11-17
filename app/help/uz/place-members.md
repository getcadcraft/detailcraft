---
title: Ustunlar, toʻsinlar va bogʻlamalarni joylashtirish
summary: Profil, material va joylashuvni tanlang, soʻng poʻlat elementlarni joylashtirish uchun setka kesishmalarini bosing yoki ularni qoʻlda kiriting.
keywords: ustun, toʻsin, bogʻlama, element, joylashtirish, profil, material, aylanish, joylashuv, ofset, qoʻshish, setka boʻyicha qoʻshish
from: d6db0dc1
---

Elementlar setka kesishmalariga joylashtiriladi: ustun bitta kesishmaga, toʻsin yoki bogʻlama ikki kesishma orasiga. Avval [setkalar va sathlarni](topic:grids-and-levels) sozlang.

## Asbob va uning sozlamalarini tanlash

1. {{ui:Joylashtirish}} guruhida {{ui:Ustun}} ({{key:C}}), {{ui:Toʻsin}} ({{key:B}}) yoki {{ui:Bogʻlama}} ({{key:R}}) ni tanlang.
2. Oʻngdagi {{ui:Xususiyatlar}} paneli "Ustun joylashtirish" (yoki toʻsin, yoki bogʻlama) boʻladi va keyingi element uchun sozlamalarni koʻrsatadi:
   - {{ui:Profil}}: roʻyxatdan tanlang. Oʻlchamlar katalog boʻyicha guruhlangan (W shakllar, kanallar, burchaklar, HSS, IPE, HEA, HEB, UB, UC, PFC, EA, UEA, SHS, RHS, CHS va sizning maxsus profillaringiz). Qarang: [Profil katalogi](topic:profile-catalog).
   - {{ui:Material}}: A992, A36, A572 Gr 50, A500 Gr C, S235, S275 yoki S355.
   - {{ui:Joylashuv}}: kesim ikki nuqta orasidagi chiziqda qayerda turishi: {{ui:Poʻlatning yuqori qirrasi chiziqda}}, {{ui:Chiziqqa markazlangan}} yoki {{ui:Pastki qirra chiziqda}}.
   - {{ui:Aylanish (°)}}: kesimni elementning oʻz oʻqi atrofida buradi.
   - {{ui:Gacha}} (faqat ustunlar uchun): {{ui:Keyingi yuqori sath}}, yoki sath nomi.
3. Parametrlar ostida {{ui:Profil}} qutisi tanlangan kesimning oʻlchamlarini, yuzasini, metriga massasini va u kelgan katalogni koʻrsatadi.

Standart qiymatlar: ustunlar uchun W12x50 A992 (markazlangan), toʻsinlar uchun W16x26 A992 ({{ui:Poʻlatning yuqori qirrasi chiziqda}}), bogʻlamalar uchun HSS6x6x1/4 A500 Gr C (markazlangan). Parametrlar siz ularni oʻzgartirmaguningizcha saqlanadi.

## Bosish orqali joylashtirish

### Ustun

1. {{ui:Reja}} ni tanlang va ustun boshlanadigan sathni tanlang.
2. {{ui:Ustun}} ni tanlang.
3. Koʻrsatkichni kesishmaga yaqinlashtiring. Eng yaqin nuqta yonadi va holat satri uni nomlaydi.
4. Bosing. Ustun shu sathdan keyingi yuqori sathgacha (yoki {{ui:Gacha}} sathigacha) boradi. Holat satri masalan shunday deydi: "A/1 dagi ustun W12x50, 1-sathdan 2-sathgacha."
5. Koʻproq joylashtirish uchun bosishda davom eting. Tugagach {{key:Esc}} ni bosing.

Agar bosgan sathingizdan yuqorida sath boʻlmasa, holat satri shunday deydi: "Ustun yetishi uchun 2-sathdan yuqorida sath yoʻq. Avval sath qoʻshing."

### Toʻsin

1. {{ui:Reja}} ni tanlang va toʻsin sathini tanlang.
2. {{ui:Toʻsin}} ni tanlang.
3. Birinchi kesishmani bosing. Holat satri shunday deydi: "A/1 dan, 2-sathda. Endi ikkinchi uchini bosing (Esc bekor qiladi)." Koʻrsatkich bilan uzilgan chiziq harakatlanadi.
4. Ikkinchi kesishmani bosing. Toʻsin paydo boʻladi.
5. Keyingi toʻsinni boshlash uchun yana bosing yoki {{key:Esc}} ni bosing.

Birinchi bosishdan keyingi {{key:Esc}} faqat shu nuqtani bekor qiladi; ikkinchi {{key:Esc}} asbobni oʻchiradi.

### Bogʻlama

Bogʻlama turli sathdagi ikki kesishma orasida boradi, shuning uchun uni {{ui:Fasad}} da joylashtirish eng oson.

1. {{ui:Fasad}} ni tanlang va bogʻlama joylashgan harfli setka chizigʻini tanlang.
2. {{ui:Bogʻlama}} ni tanlang.
3. Pastki uchini, soʻng yuqori uchini bosing.

Fasadlar faqat harfli setka chiziqlari uchun mavjud. Raqamli chiziq boʻylab (A dan B gacha) ramkadagi bogʻlama uchun {{ui:3D}} yoki quyidagi {{ui:Toʻr boʻyicha qoʻshish}} shaklidan foydalaning.

:::touch
Sensorli ekranda kesishmaga yaqin teging: teg qisqa masofadagi eng yaqin nuqtani tanlaydi va yaqin nuqta yoʻq boʻlsa hech narsa qilmaydi. Tegguncha yoritish yoʻq, shuning uchun har bir tegdan keyin holat satri xabarini tekshiring. Bir barmoq bilan sudrash joylashtirish oʻrniga koʻrinishni aylantiradi yoki suradi.
:::

## Setka boʻyicha joylashtirish, bosmasdan

Har bir joylashtirish asbobida {{ui:Xususiyatlar}} paneli pastida {{ui:Toʻr boʻyicha qoʻshish}} shakli bor. U faqat klaviatura bilan ishlaydi va 3D koʻrinishni talab qilmaydi.

1. Asbobni tanlang, masalan {{ui:Toʻsin}}.
2. {{ui:Toʻr boʻyicha qoʻshish}} da {{ui:Toʻrdan (harf)}}, {{ui:Toʻrdan (raqam)}} va {{ui:Sathdan}} ni tanlang.
3. {{ui:Toʻrgacha (harf)}}, {{ui:Toʻrgacha (raqam)}} va {{ui:Sathgacha}} ni tanlang.
4. {{ui:Qoʻshish}} ni tanlang.

Ustun yoki poydevor uchun shaklda faqat bitta nuqta boʻladi: {{ui:Toʻr (harf)}}, {{ui:Toʻr (raqam)}} va {{ui:Sath}}.

## Joylashtirilgandan keyin elementni oʻzgartirish

1. {{key:Esc}} ni bosing (yoki {{ui:Tanlash}}, {{key:V}} ni tanlang) va elementni bosing.
2. {{ui:Xususiyatlar}} panelida {{ui:Nom}}, {{ui:Profil}}, {{ui:Material}}, {{ui:Joylashuv}} yoki {{ui:Aylanish (°)}} ni oʻzgartiring.
3. Elementni koʻchirish uchun {{ui:Uchlari (x, y, z mm)}} ostida {{ui:Boshlanish}} yoki {{ui:Tugash}} ning x, y va z qiymatlarini tahrirlang. Har bir uchning setka nomi uning ostida koʻrinadi, yoki setkadan tashqarida boʻlsa, koordinatalari.

Har bir oʻzgarish — bitta qaytarish qadami. Maydonlar ostida elementning {{ui:Qism belgisi}}, {{ui:Yigʻma}}, {{ui:Kesish uzunligi}}, {{ui:Vazn}} (yalpi: teshiklar va kesimlar chegirilmaydi) va profil qaysi katalogdan kelganini koʻrasiz.

Elementlarni hali sudrab yoki massiv qilib boʻlmaydi. Unga oʻxshash boshqa element yasash uchun uni nusxalang va qoʻying yoki nusxa oling ({{key:Mod+D}}): qarang: [Nusxalash, qoʻyish va nusxa olish](topic:copy-paste).

## Elementni oʻchirish

Uni tanlang va {{key:Delete}} yoki {{key:Backspace}} ni bosing, yoki {{ui:Oʻchirish}} ni tanlang. Unga bogʻliq ulanishlar ham ketadi. {{key:Mod+Z}} hammasini qaytaradi.

## Bilib oling

- **Ustun qaysi tomonga qaraydi.** {{ui:Aylanish (°)}} 0 da ustunning qanotlari x boʻylab, qoʻshni raqamli setka chiziqlariga qarab turadi. 1 dan 2 gacha boʻlgan toʻsin qanotga biriktiriladi; A dan B gacha boʻlgan toʻsin tanachaga biriktiriladi. Uchki plastinalar faqat qanotlarga quriladi, shuning uchun toʻsinlaringiz A dan B gacha boʻlsa, bu ustunlarga 90 aylanish bering.
- **Sathdagi toʻsinlar** standart {{ui:Poʻlatning yuqori qirrasi chiziqda}} sozlamasida uning ostida osilib turadi. Agar sathlaringiz element oʻqlari boʻlsa, {{ui:Chiziqqa markazlangan}} ni tanlang.
- **Ustunlar sathdan sathgacha boradi.** Ikki qavat orqali oʻtadigan ustun uchun {{ui:Gacha}} ni yuqoriroq sathga oʻrnating.
- **Qiyalik toʻsinlarga** ruxsat beriladi (uchlarini turli sathlarda tanlang), lekin ularga uchki plastinalar hali qurilmaydi.

Keyingi qadam: [Toʻsinlarni uchki plastinalar bilan ustunlarga ulash](topic:end-plates).
