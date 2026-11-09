---
title: Ekran boʻylab sayohat
summary: DetailCraft dagi har bir satr, panel va yorliqning ekrandagi nomi va ularning vazifasi.
keywords: ekran, joylashuv, asboblar paneli, panellar, xususiyatlar, holat satri, hisobotlar, interfeys, ui, yorliqlar
from: 94f81073
---

DetailCraft brauzer oynasini ilova paneli ostida toʻldiradi. Yuqoridan pastga: asboblar paneli, soʻng uchta ustun ({{ui:Model}} paneli, koʻrinish, {{ui:Properties}} paneli), soʻng hisobot yorliqlari, en oxirida holat satri.

## Ilova paneli

Tepadagi ingichka satr CadCraft saytiga tegishli, modelga emas. U ilova nomi va versiyasini, {{ui:About DetailCraft}} havolasini, bu yordam uchun {{ui:Help}} (yoki {{key:F1}}) ni, {{ui:Save for offline}} ni, ekran rejimi tugmasini va {{ui:Paper}} / {{ui:Model}} almashtirgichni koʻrsatadi.

- {{ui:Save for offline}} DetailCraft, uning 3D koʻrinishi va bu yordamni brauzeringizda saqlaydi, shuning uchun u ulanishsiz ochiladi. Saqlangandan keyin {{ui:Offline ready}} deb yozadi; keyin uni bosing: {{ui:Qayta saqlash (eng yangi versiyani olish)}} yoki {{ui:Oflayn nusxani oʻchirish}} uchun. Qarang: [Oflaynda ishlash](common:offline).
- {{ui:Paper}} yorugʻ, {{ui:Model}} esa qorongʻi ekran beradi. 3D koʻrinish darhol oʻzgaradi; modelingizda hech narsa oʻzgarmaydi.
- Ekran rejimi tugmasi va {{key:Ctrl+Shift+F}} oddiy, toʻliq ekran va panellari yashirilgan toʻliq ekran orasida almashtiradi. {{key:Ctrl+Shift+F}} har qanday kompyuterda, Mac ham kiradi, Control tugmasidan foydalanadi. Panellar yashirilganda, ularni qaytarish uchun koʻrsatkichni ekranning yuqori chetiga olib boring (yoki unga teging). {{key:Esc}} toʻliq ekrandan chiqaradi.

## Asboblar paneli

Asboblar panelida beshta guruh bor. Har bir tugma ustiga olib borilsa, u nima qilishini va tugmasini koʻrsatadi.

| Guruh | Tugmalar | Nima qiladi |
|---|---|---|
| {{ui:File}} | {{ui:New}}, {{ui:Open}}, {{ui:Import IFC}}, {{ui:Save}}, {{ui:Sample}} | Yangi model boshlash, saqlangan `.detailcraft.json` yoki IFC faylni ochish, modelni saqlash yoki namunaviy karkasni ochish |
| {{ui:Place}} | {{ui:Select}}, {{ui:Beam}}, {{ui:Column}}, {{ui:Brace}}, {{ui:Plate}}, {{ui:Footing}}, {{ui:Stair}} | Koʻrinishdagi keyingi bosish ishlatadigan asbob |
| {{ui:Connect}} | {{ui:End plates}}, {{ui:Base plate}}, va {{ui:More}} ichida: {{ui:Shear tabs}}, {{ui:Splice}}, {{ui:Gusset}}, {{ui:Similar}} | Tanlangan toʻsin, ustun yoki bogʻlamaga ulanish qoʻshish, yoki tanlangan ulanishni shunga oʻxshash har bir boʻgʻinga nusxalash |
| {{ui:Edit}} | {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:More}} | Tahrirlar boʻylab orqaga va oldinga qadamlash; tanlovni nusxalash va qoʻyish. {{ui:More}} menyusi {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}} va {{ui:Select none}} ni ochadi, har biri oʻz tugmasi bilan |
| {{ui:Output}} | {{ui:IFC}}, {{ui:NC files}}, {{ui:BOM}}, {{ui:Shop drawing}}, {{ui:Drawings}}, va {{ui:More}} ichida: {{ui:Bending}}, {{ui:Weight report by phase}}, {{ui:KISS file for fabrication software}} | Eksportni yuklab olish yoki chizma varaqlarini ochish |

Hozir ishlay olmaydigan tugmalar va menyu bandlari xira koʻrinadi, ustiga olib borilganda esa sababini aytadi. {{ui:End plates}} tanlangan toʻsinni, {{ui:Base plate}} tanlangan ustunni, {{ui:Similar}} tanlangan ulanishni, {{ui:Shop drawing}} detalli modelni, {{ui:Copy}} tanlangan element yoki poydevorni, {{ui:Paste}} esa nusxalangan narsani talab qiladi. Qarang: [Nusxalash, qoʻyish va nusxa olish](topic:copy-paste).

## Model paneli (chapda)

- {{ui:Model}}: model {{ui:Name}}. U saqlagan yoki eksport qilgan har bir faylni nomlaydi.
- {{ui:Grids}}: setka chiziqlari va ularning oraliqlari hamda {{ui:Apply grids}}. Qarang: [Setkalar va sathlarni sozlash](topic:grids-and-levels).
- {{ui:Levels}}: har bir sath uchun bitta qator (nomi va balandligi mm da), {{ui:Add level}} va {{ui:Apply levels}}.
- {{ui:Custom profile}}: oʻzingizning parametrik kesimingizni yarating. Ochmaguningizcha yopiq.
- {{ui:Part marks}}: modeldagi har bir detal belgisi, uning profili, uzunligi va soni bilan. Belgini bossangiz, shu belgili birinchi detal tanlanadi.

{{ui:Grids}}, {{ui:Levels}} va {{ui:Custom profile}} yigʻiladi: ularni sarlavhasini bosib oching yoki yigʻing.

## Koʻrinish (oʻrtada)

Koʻrinish modelni 3D da koʻrsatadi. Uning ustidagi koʻrinish paneli uchta tugma va roʻyxatdan iborat:

- {{ui:3D}}: modelni erkin aylantiring.
- {{ui:Plan}}: bitta sathga tepadan qarang. Tugmalar yonida sathlar roʻyxati paydo boʻladi. Sathdan 1.5 m dan yuqorida boʻlgan hamma narsa kesib tashlanadi, shuning uchun sathni aniq koʻrib, bosish mumkin.
- {{ui:Elevation}}: harfli bitta setka chizigʻiga roʻpara qarang (A setka, B setka …). Harfli setkalar roʻyxati paydo boʻladi. Faqat shu chiziqdan 1 m ichidagi poʻlat koʻrsatiladi.
- Koʻrinish paneli oʻng uchidagi moslash tugmasi modelning hammasini koʻrsatish uchun kattalashtiradi.

Kichik nuqtalar har bir sathdagi har bir setka kesishmasini belgilaydi. Joylashtirish asbobi yoqilgan paytda, koʻrsatkichga eng yaqin nuqta yonadi va holat satri uni nomlaydi, masalan "A/2 1-sathda". Ranglar elementlar turlarini ajratadi: ustunlar, toʻsinlar, bogʻlamalar va plastinalarning har biri oʻz rangiga ega, boltlar va ankerlar boshqa rangda, poydevorlar shaffof, armatura esa naychalar sifatida chiziladi. Teshiklar qoraytirilgan tiqinlar, kesimlar esa kesilgan boʻlib koʻrinadi.

Qanday aylantirish, surish va kattalashtirish: [3D koʻrinishda harakatlanish](topic:navigate-3d).

Model boʻsh boʻlsa, koʻrinishda qisqa "Model boshlash" roʻyxati chiqadi. Saqlangan model faylini koʻrinishning istalgan joyiga tashlab ham ochishingiz mumkin.

## Xususiyatlar paneli (oʻngda)

Bu panel nima koʻrsatishi siz nima qilayotganingizga bogʻliq, uning sarlavhasi esa qaysi holat ekanini aytadi: "Model", "Toʻsin joylashtirish", "Toʻsin b2", "Uchlik plastina ulanishi", "Tayanch plastinasi", "Poydevor F1", "3 tanlangan" yoki "Qoʻyish".

- **Hech narsa tanlanmagan:** model xulosasi (elementlar, ulanishlar, poydevorlar, detallar, belgilar, boltlar, poʻlat va armatura ogʻirligi, setkalar, sathlar).
- **Joylashtirish asbobi yoqilgan:** keyingi detal uchun parametrlar (profil, material, joy, aylanish va ustunlar uchun {{ui:Up to}}), tanlangan profil xulosasi va koʻrinishni bosmasdan joylashtirish uchun {{ui:Add by grid}} shakli.
- **Element tanlangan:** uning nomi, profili, materiali, joyi, aylanishi, ikki uchining koordinatalari, belgilari, kesish uzunligi va ogʻirligi, teshiklari va kesimlari, shuningdek ulanishlar, uning ishlab chiqarish chizmasi va {{ui:Delete}} uchun tugmalar.
- **Ulanish tanlangan:** har bir plastina, bolt va payvand sozlamasi, u hosil qiladigan boltlar va payvand, uning ogohlantirishlari va {{ui:Oʻxshashlarga qoʻllash}}.
- **Poydevor tanlangan:** uning joyi va oʻlchami, pastki toʻr, boshlangʻich sterjenlar va u ishlatadigan armatura belgilari.
- **Bir nechta narsa tanlangan:** har bir turdagi elementlar, ulanishlar va poydevorlar soni, ularning poʻlat ogʻirligi, hamda {{ui:Copy}}, {{ui:Duplicate}} va {{ui:Delete}}.
- **Qoʻyish:** buferda nima borligi va kiritilgan siljish boʻyicha yoki roʻyxatdan tanlangan setka kesishmasiga qoʻyish shakllari.

Raqam maydonlari {{key:Enter}} bosilganda yoki maydondan chiqilganda kuchga kiradi. Har bir oʻzgarish bekor qilinadigan bitta qadam.

## Hisobot yorliqlari (pastda)

- {{ui:Problems}}: DetailCraft qura olmagan yoki tekshirishni xohlagan hamma narsa, har bir qatorda {{ui:Select}} tugmasi bilan. Yorliq qavs ichida sonni koʻrsatadi.
- {{ui:Bill of materials}}: detallar, yigʻmalar, boltlar va ankerlar, ularning ogʻirliklari va {{ui:Download CSV}} havolasi. Shu detalni tanlash uchun detal belgisini bosing.
- {{ui:Bending schedule}}: har bir poydevordagi har bir armatura belgisi va {{ui:Download CSV}} havolasi.

Yorliq faollashganda {{key:Left}} va {{key:Right}} yorliqlar orasida oʻtadi.

## Holat satri

Pastdagi satr uch qismdan iborat: joylashtirish paytida koʻrsatkich ostidagi setka kesishmasi, eng soʻnggi xabar (nima yuz berdi yoki nega biror narsa rad etildi) va detallar, boltlar, poʻlat ogʻirligi hamda armatura ogʻirligining jami. Amal hech narsa qilmagandek tuyulsa, avval shu yerdagi xabarni oʻqing.

Model saqlanmagan oʻzgarishlarga ega boʻlganda, brauzer yorligʻi sarlavhasi nuqta (•) bilan boshlanadi.

## Tor ekranda

Taxminan 760 pikseldan tor boʻlsa, ustunlar ustma-ust joylashadi: asboblar paneli, koʻrinish, holat satri, {{ui:Properties}}, hisobot yorliqlari, soʻng oxirida {{ui:Model}} paneli. Ularga yetish uchun sahifani aylantiring. DetailCraft kompyuter yoki noutbuk ekrani uchun moslangan; telefon koʻrish uchun yaroqli, detallash uchun emas.
