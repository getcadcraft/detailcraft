---
title: Ekran boʻylab sayohat
summary: DetailCraftdagi har bir panel, yorliq va tabulyator ekrandagi nomi bilan va ularning vazifasi.
keywords: ekran, tartib, asboblar paneli, xususiyatlar, holat satri, hisobotlar, interfeys, ui, yorliqlar
from: 454f74fd
---

DetailCraft ilova panelidan pastdagi brauzer oynasini toʻldiradi. Yuqoridan pastga: asboblar paneli, soʻng uch ustun ({{ui:Model}} paneli, koʻrinish, {{ui:Properties}} paneli), soʻng hisobot yorliqlari va holat satri.

## Ilova paneli

Eng yuqoridagi ingichka panel modelga emas, CadCraft saytiga tegishli. U ilova nomi va versiyasini, {{ui:About DetailCraft}} havolasini, bu yordam uchun {{ui:Help}} ({{key:F1}} bilan), {{ui:Save for offline}} tugmasini, ekran rejimi tugmasini va {{ui:Paper}} / {{ui:Model}} almashtirgichini koʻrsatadi.

- {{ui:Save for offline}} DetailCraftni, uning 3D koʻrinishini va bu yordamni brauzeringizda saqlaydi, shunda u ulanishsiz ochiladi. Saqlangandan keyin u {{ui:Offline ready}} deb yozadi; keyin bosilganda {{ui:Save again (get the newest version)}} yoki {{ui:Remove the offline copy}} tanlovlari chiqadi. Qarang: [Oflaynda ishlash](common:offline).
- {{ui:Paper}} yorugʻ ekran, {{ui:Model}} esa qorongʻi ekran beradi. 3D koʻrinish darhol oʻzgaradi; modelingizdagi hech narsa oʻzgarmaydi.
- Ekran rejimi tugmasi va {{key:Ctrl+Shift+F}} oddiy, toʻliq ekran va panellari yashirilgan toʻliq ekran rejimlari boʻylab aylanadi. {{key:Ctrl+Shift+F}} har qanday kompyuterda, shu jumladan Macda ham Control tugmasini ishlatadi. Panellar yashirilganda, ularni qaytarish uchun koʻrsatkichni ekranning yuqori chetiga olib boring (yoki unga teging). {{key:Esc}} toʻliq ekrandan chiqaradi.

## Asboblar paneli

Asboblar panelida beshta guruh bor. Har bir tugma nima qilishini va uning tugmachasini bilish uchun uning ustiga olib boring.

| Guruh | Tugmalar | Ular nima qiladi |
|---|---|---|
| {{ui:File}} | {{ui:New}}, {{ui:Open}}, {{ui:Import IFC}}, {{ui:Save}}, {{ui:Sample}} | Yangi model boshlash, saqlangan `.detailcraft.json` yoki IFC faylni ochish, modelni saqlash yoki namunali ramani ochish |
| {{ui:Place}} | {{ui:Select}}, {{ui:Beam}}, {{ui:Column}}, {{ui:Brace}}, {{ui:Plate}}, {{ui:Footing}}, {{ui:Stair}} | Koʻrinishdagi keyingi bosish ishlatadigan asbob |
| {{ui:Connect}} | {{ui:End plates}}, {{ui:Base plate}}, va {{ui:More}} ichida: {{ui:Shear tabs}}, {{ui:Splice}}, {{ui:Gusset}}, {{ui:Similar}} | Tanlangan toʻsin, ustun yoki bogʻlamaga birikma qoʻshish, yoki tanlangan birikmani oʻxshash har bir tugunga nusxalash |
| {{ui:Edit}} | {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:More}} | Tahrirlar boʻylab orqaga va oldinga qadam tashlash; tanlovni nusxalash va qoʻyish. {{ui:More}} menyusi {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}} va {{ui:Select none}} bandlarini ochadi, har birida tugmachasi bilan |
| {{ui:Output}} | {{ui:IFC}}, {{ui:NC files}}, {{ui:BOM}}, {{ui:Shop drawing}}, {{ui:Drawings}}, va {{ui:More}} ichida: {{ui:Bending}}, {{ui:Weight report by phase}}, {{ui:KISS file for fabrication software}} | Eksportni yuklab olish yoki chizma varaqlarini ochish |

Tugma va menyu bandlari hozir ishlay olmasa, ular xira boʻladi va ustiga olib borilganda sababi aytiladi. {{ui:End plates}} tanlangan toʻsinni, {{ui:Base plate}} tanlangan ustunni, {{ui:Similar}} tanlangan birikmani, {{ui:Shop drawing}} tanlangan I-shakl yoki plastina detalini, {{ui:Copy}} tanlangan element yoki poydevorni talab qiladi, {{ui:Paste}} esa biror nusxalangan narsani. Qarang: [Nusxalash, qoʻyish va nusxa olish](topic:copy-paste).

## Model paneli (chapda)

- {{ui:Model}}: model {{ui:Name}}. U saqlaydigan yoki eksport qiladigan har bir faylga nom beradi.
- {{ui:Grids}}: setka chiziqlari va ularning oraliqlari, hamda {{ui:Apply grids}}. Qarang: [Setkalar va sathlarni sozlash](topic:grids-and-levels).
- {{ui:Levels}}: har bir sath uchun bitta qator (nomi va balandligi mm da), {{ui:Add level}} va {{ui:Apply levels}}.
- {{ui:Custom profile}}: oʻz parametrik kesimingizni yarating. Ochmaguningizcha yopiq.
- {{ui:Part marks}}: modeldagi har bir detal belgisi, uning profili, uzunligi va soni bilan. Shu belgili birinchi detalni tanlash uchun belgini bosing.

{{ui:Grids}}, {{ui:Levels}} va {{ui:Custom profile}} yigʻiladi: ularni ochish uchun sarlavhalarini bosing.

## Koʻrinish (oʻrtada)

Koʻrinish modelni 3D da koʻrsatadi. Uning ustidagi koʻrinish paneli uchta tugma va bir roʻyxatga ega:

- {{ui:3D}}: modelni erkin aylantirish.
- {{ui:Plan}}: bitta sathga yuqoridan toʻgʻridan-toʻgʻri qarash. Tugmalar yonida sathlar roʻyxati paydo boʻladi. Sathdan 1,5 m dan yuqoridagi hamma narsa kesib tashlanadi, shunda sathni aniq koʻrish va bosish mumkin boʻladi.
- {{ui:Elevation}}: bitta harfli setka chizigʻiga toʻgʻridan-toʻgʻri qarash (A setka, B setka …). Harfli setkalar roʻyxati paydo boʻladi. Faqat shu chiziqdan 1 m atrofidagi poʻlat koʻrsatiladi.
- Koʻrinish panelining oʻng uchidagi moslash tugmasi butun modelni koʻrsatish uchun kattalashtiradi.

Har bir sathdagi har bir setka kesishmasini kichik nuqtalar belgilaydi. Joylashtirish asbobi yoqilgan boʻlsa, koʻrsatkichga eng yaqin nuqta yonadi va holat satrida u nomlanadi, masalan « A/2 at Level 1 ». Ranglar elementlar turlarini ajratadi: ustunlar, toʻsinlar, bogʻlamalar va plastinalarning har biri oʻz rangiga ega, boltlar va ankerli sterjenlar boshqa rangda, poydevorlar shaffof, armatura esa trubka sifatida chiziladi. Teshiklar qora tiqinlar sifatida koʻrinadi; kesmalar kesilgan boʻladi.

Qanday aylantirish, surish va kattalashtirish: [3D koʻrinishda harakatlanish](topic:navigate-3d).

Model boʻsh boʻlsa, koʻrinishda qisqa « Modelni boshlash » roʻyxati koʻrinadi. Shuningdek, saqlangan model faylini koʻrinishning istalgan joyiga tashlab ochishingiz mumkin.

## Xususiyatlar paneli (oʻngda)

Bu panelda nima koʻrsatilishi siz nima qilayotganingizga bogʻliq; sarlavhasi buni aytadi: « Model », « Toʻsin joylashtirish », « Toʻsin b2 », « Uchlik plastina birikmasi », « Tayanch plastina », « Poydevor F1 », « 3 ta tanlangan » yoki « Qoʻyish ».

- **Hech narsa tanlanmagan:** modelning xulosasi (elementlar, birikmalar, poydevorlar, detallar, belgilar, boltlar, poʻlat va armatura ogʻirligi, setkalar, sathlar).
- **Joylashtirish asbobi yoqilgan:** keyingi qism uchun variantlar (profil, material, joylashuv, aylanish, ustunlar uchun {{ui:Up to}}), tanlangan profil xulosasi va {{ui:Add by grid}} shakli — koʻrinishda bosmasdan joylashtirish uchun.
- **Element tanlangan:** uning nomi, profili, materiali, joylashuvi, aylanishi, ikki uchining koordinatalari, belgilari, kesilgan uzunligi va ogʻirligi, teshiklari va kesmalari, birikmalar va uning ishlab chiqarish chizmasi uchun tugmalar hamda {{ui:Delete}}.
- **Birikma tanlangan:** har bir plastina, bolt va payvand sozlamasi, u hosil qiladigan boltlar va payvand, uning ogohlantirishlari va {{ui:Apply to similar}}.
- **Poydevor tanlangan:** uning joylashuvi va oʻlchami, pastki armatura, boshlangʻich sterjenlar va ishlatadigan armatura belgilari.
- **Bir nechta narsa tanlangan:** har bir turdagi elementlar, birikmalar va poydevorlar soni, ularning poʻlat ogʻirligi va {{ui:Copy}}, {{ui:Duplicate}} hamda {{ui:Delete}}.
- **Qoʻyish:** {{ui:Clipboard}} dagi narsa va kiritilgan siljish boʻyicha yoki roʻyxatdan tanlangan setka kesishmasiga qoʻyish shakllari.

Raqamli maydonlar {{key:Enter}} bosilganda yoki maydondan chiqilganda kuchga kiradi. Har bir oʻzgarish bekor qilinadigan bitta qadam.

## Hisobot yorliqlari (pastda)

- {{ui:Problems}}: DetailCraft qura olmagan yoki tekshirishingizni xohlagan hamma narsa, har bir qatorda {{ui:Select}} tugmasi bilan. Yorliq qavs ichida sonini koʻrsatadi.
- {{ui:Bill of materials}}: detallar, yigʻmalar, boltlar va ankerli sterjenlar, ogʻirliklar va {{ui:Download CSV}} havolasi bilan. Oʻsha detalni tanlash uchun detal belgisini bosing.
- {{ui:Bending schedule}}: har bir poydevordagi har bir armatura belgisi, {{ui:Download CSV}} havolasi bilan.

Yorliq faollashganda {{key:Left}} va {{key:Right}} yorliqlar orasida harakatlaydi.

## Holat satri

Pastdagi satr uch qismdan iborat: joylashtirish paytida koʻrsatkich ostidagi setka kesishmasi, soʻnggi xabar (nima sodir boʻldi yoki nega rad etildi) va detallar, boltlar, poʻlat ogʻirligi hamda armatura ogʻirligining yigʻma hisobi. Harakat hech narsa qilmaganga oʻxshasa, avval shu yerdagi xabarni oʻqing.

Brauzer yorligʻi sarlavhasi model saqlanmagan oʻzgarishlarga ega boʻlganda nuqta (•) bilan boshlanadi.

## Tor ekran

Taxminan 760 pikseldan tor ekranlarda ustunlar bir-birining ustiga joylashadi: asboblar paneli, koʻrinish, holat satri, {{ui:Properties}}, hisobot yorliqlari, soʻng oxirida {{ui:Model}} paneli. Ularga yetish uchun sahifani aylantiring. DetailCraft kompyuter yoki noutbuk ekrani uchun moslangan; telefon faqat koʻrish uchun yaroqli, detallashtirish uchun emas.
