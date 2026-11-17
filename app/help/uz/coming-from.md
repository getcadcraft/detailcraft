---
title: Boshqa detallashtirish dasturlaridan oʻtish
summary: Toʻliq detallashtirish paketining odatlari DetailCraft ga qanday mos kelishi va tajribali detallashtiruvchilarni chalgʻitadigan farqlar.
keywords: oʻtish, koʻchirish, tanish, ish oqimi, taqqoslash, farqlar, raqamlash, komponentlar, katalog, chizmalar, odatlar
from: 39639a5d
---

Agar siz Tekla Structures da detallashtirsangiz, DetailCraft ning koʻp qismi tanish tuyuladi: setkalar, sathlar, katalogdan profillar, qismlar va yigʻmalar, ulanmalar, raqamlash, NC fayllar, IFC. Miqyos juda boshqacha: Tekla Structures toʻliq ishlab chiqarish tizimi, DetailCraft esa bir nechta ishni oxirigacha bajaradigan kichik, endigina ishlab chiqilgan brauzer ilovasi. Bu sahifa sizning odatlaringiz qayerda saqlanishini va qayerda saqlanmasligini koʻrsatadi.

:::tip
Agar qoʻllaringiz Tekla Structures lentasini bilsa, {{ui:Sozlamalar}} › {{ui:DetailCraft}} › {{ui:Menyular, tugmalar va sichqoncha}} boʻlimida {{ui:Poʻlat lenta}} menyu uslubini tanlang: Modelash, Detallashtirish, Tahrirlash, Chizmalar, Ishlab chiqarish va Koʻrinish yorliqlari, oʻrta tugma esa suradi. Agar AutoCAD dan kelgan boʻlsangiz va buyruqlarni yozishni yoqtirsangiz, {{ui:Klassik chizmachilik}} buyruqlar qatorini qoʻshadi (BEAM, COLUMN, ENDPLATE, ZOOM …). Qarang: [Menyular, tugmalar va sichqoncha](topic:menus-keys-and-mouse).
:::

## Tezkor xarita

| Sizga odatiy | DetailCraft da |
|---|---|
| Koordinatalar bilan setkalarni dialogda yaratish | Chap panelda {{ui:Setkalar}}: yorliqlar va chiziqlar orasidagi masofalar, mutlaq koordinatalar emas. Raqamlangan chiziqlar bir yoʻnalishda, harflangan chiziqlar boshqa yoʻnalishda ketadi |
| Sathlar setka Z koordinatalari sifatida | Alohida {{ui:Sathlar}} roʻyxati, har bir qatorda nomi va balandligi, {{ui:Sathlarni qoʻllash}} bilan qoʻllanadi |
| Snaplar bilan istalgan joyda nuqtalarni tanlash | Bosishlar faqat setka kesishmalariga tortiladi. Setka tashqarisidagi nuqtalar qismning {{ui:Uchlari (x, y, z mm)}} ga kiritiladi |
| Ustun, toʻsin va plastina buyruqlari | {{ui:Ustun}} ({{key:C}}), {{ui:Toʻsin}} ({{key:B}}), {{ui:Bogʻlama}} ({{key:R}}), {{ui:Plastina}} ({{key:P}}), {{ui:Poydevor}} ({{key:F}}) |
| Qism xususiyatlari dialogi (qismni ikki marta bosish) | Bir marta bosing: oʻng tomondagi {{ui:Xususiyatlar}} paneli doim faol; dialog yoki Oʻzgartirish va Qoʻllash tugmasi yoʻq |
| Joylashuv tekislikda, aylanish va chuqurlik sozlamalari | {{ui:Joylashuv}} (poʻlat yuqorisi, markazda yoki chiziq boʻyicha pastda) va {{ui:Aylanish (°)}}. Alohida gorizontal siljishlar yoʻq |
| Profil katalogi | 2,311 ta nashr etilgan oʻlchamlar roʻyxati (AISC W, S, C, L, HSS, Quvur; Yevropa IPE, HEA, HEB, UPN; UK UB, UC, PFC, EA, UEA, SHS, RHS, CHS va sovuq shakllantirilgan boʻsh profillar), shuningdek parametrik plastinalar va sizning {{ui:Maxsus profil}} kesimlaringiz |
| Material katalogi | Roʻyxatdagi yetti sinf: A992, A36, A572 Gr 50, A500 Gr C, S235, S275, S355 |
| Ulanma komponenti va uning dialogi | Toʻsinni tanlang, {{ui:Uchlik plastinalar}} ni tanlang. Sozlamalar {{ui:Xususiyatlar}} panelida chiqadi. Faqat ikkita ulanma bor (uchlik plastina ustun tokchasiga, tayanch plastina) |
| Avtomatik ulanish yoki qoʻshma tugunni oʻxshash tugunlarga nusxalash | Ulanmani tanlang, {{ui:Oʻxshashlarga qoʻllash (n)}} ni tanlang |
| Seriya va boshlangʻich raqamlar bilan raqamlash | Buyruq yoʻq: belgilar har bir oʻzgarishdan keyin oʻzi yangilanadi, qatʼiy prefikslar c, b, br, p va C, B, BR, P bilan |
| Bolt va teshik dialoglari | Teshiklar yuz va joy boʻyicha kiritiladi. Boltlar faqat ulanmalardan keladi |
| Kesish, moslashtirish va koʻpburchakli kesish vositalari | Kesiklar (cope) yuqorida yoki pastda, ikki uchida, faqat I-profillarda. Ulanma qisqartirishlari avtomatik |
| Hisobotlar va shablonlar | Pastdagi yorliqlarda uchta qatʼiy hisobot va CSV yuklab olish |
| Chizma yaratish va chizmalar roʻyxati | Har bir qism belgisi uchun bitta ishlab chiqarish chizmasi, hammasi bir vaqtda yaratiladi, oldindan koʻriladi, keyin bitta PDF yoki varaq-varaq yuklanadi. Hech narsa saqlanmaydi yoki tahrirlanmaydi |
| NC fayl eksporti | {{ui:NC fayllar}}: har bir qism belgisi uchun bitta DSTV fayl, faqat I-profillar va plastinalar, zipda |
| IFC eksporti | {{ui:IFC}}: butun modelning IFC4, armatura bilan |
| Har qanday beton qismdagi armatura | Armatura faqat toʻrtburchak plita poydevorlarda, AQSh armatura oʻlchamlari, pastki toʻr va startyor sterjenlar bilan |
| Loyiha papkasida saqlangan, koʻp foydalanuvchili model | Yuklab olingan bitta `.detailcraft.json` fayli. Bitta foydalanuvchi, sizning kompyuteringizda |
| Bekor qilish tarixi | {{key:Mod+Z}} va {{key:Mod+Y}}, 200 gacha qadam, boshqa modelni ochguncha yoki yaratguncha saqlanadi |

## Odamlarni chalgʻitadigan farqlar

### Belgilar oʻzgarib ketadi

Raqamlash bosqichi yoʻq. Belgilar har bir oʻzgarishdan keyin qayta hisoblanadi, shuning uchun ular doim dolzarb, ammo qayta raqamlanishi ham mumkin: ustun qoʻshing va kechagi c3 endi c4 boʻlishi mumkin. Eski belgilarni saqlash uchun "raqamlash tarixi" yoʻq. Modelni tugating, keyin BOM, NC fayllar va ishlab chiqarish chizmalarini bitta saqlangan fayldan birga chiqaring.

### Oʻrta tugma kattalashtiradi, surmaydi

3D koʻrinishda: chap tugmani sudrash aylantiradi, oʻng tugmani sudrash suradi, gʻildirak kattalashtiradi, oʻrta tugma bilan sudrash ham kattalashtiradi. {{key:Shift}} ni bosib turib chap tugmani sudrash ham suradi. Gʻildirak koʻrinish markaziga qarab kattalashtiradi, koʻrsatgichga emas. Aylanish markazini tanlash yoʻq: model koʻrinish markazi atrofida aylanadi. Qarang: [3D koʻrinish boʻylab harakatlanish](topic:navigate-3d).

### Ustunlar standart holatda bir tomonga qaraydi

Aylanish 0 da ustunning tokchalari raqamlangan setka yoʻnalishi boʻylab qaraydi. Harflangan setka chiziqlari orasida oʻtadigan toʻsinlar stenkaga kiradi, uchlik plastinalar esa u yerda rad etiladi ("Ustun stenkasiga kiradigan toʻsinlar hali qurilmagan"). Ulanmalarni qoʻshishdan oldin bu ustunlarni 90° ga buring.

### Fasadlar faqat harflangan chiziqlarda

{{ui:Fasad}} faqat harflangan setka chiziqlari boʻylab qaraydi. Raqamlangan chiziqlar boʻylab koʻrinishlar, saqlangan koʻrinishlar va ish tekisliklari yoʻq. Raqamlangan chiziqlardagi ramkalar uchun {{ui:3D}} yoki {{ui:Toʻr boʻyicha qoʻshish}} dan foydalaning.

### Tanlash, nusxalash va koʻchirish

Bir nechta qismni {{key:Shift}}+bosish yoki {{key:Mod+A}} bilan tanlang, soʻng ularni nusxalang, kesing, qoʻying (setka kesishmasiga, yozilgan siljishda yoki joyida) va dublikatlang, ulanmalar bilan birga ([Nusxalash, qoʻyish va dublikatlash](topic:copy-paste)). Oyna boʻyicha tanlash, tanlash filtri, koʻchirish, aks ettirish yoki massiv yoʻq, xususiyatlar esa {{ui:Xususiyatlar}} panelida bir vaqtda bitta element boʻyicha oʻzgartiriladi.

### Setkalar elementlarni olib yurmaydi

Setka oraligʻini oʻzgartirganingizda elementlar oʻz koordinatalarini saqlaydi; setka chiziqlari bilan hech narsa koʻchmaydi. Poʻlatni joylashtirishdan oldin setkani oʻzgartiring yoki keyin har bir elementning uchi koordinatalarini tahrirlang.

### Ulanmalar loyihalanmaydi

Ikki ulanma siz bergan raqamlar boʻyicha plastinalar, teshiklar, boltlar va payvandlarni joylashtiradi. Hech qanday loyiha tekshiruvi yoʻq, faqat chekka va masofa ogohlantirishlari (EN 1993-1-8 3.3-jadvaldan).

### Teshiklar 3D koʻrinishda kesilmaydi

Teshiklar qora tiqinlar sifatida koʻrinadi. Ular NC fayllar, ishlab chiqarish chizmalari va IFC faylida haqiqiy teshiklardir. Kesiklar koʻrinishda kesiladi.

### Vaznlar umumiy (brutto)

Poʻlat vazni teshiklar yoki kesiklar uchun ayirilmaydi, bolt vazni esa kiritilmagan.

### Faqat millimetrlar

Hamma narsa millimetrda kiritiladi va koʻrsatiladi, hatto AISC shakllari uchun ham. Profil nomlari nashr etilgan shaklini saqlaydi (W12x50, HSS6x6x1/4).

### Boshqariladigan chizmalar yoʻq

Chizmalar roʻyxati, chizma muharriri, umumiy joylashuv yoki yigʻma chizmalar yoʻq. Ishlab chiqarish chizmasi soʻralganda yaratiladi va yuklab olinadi; uni oʻzgartirish uchun modelni oʻzgartiring va qayta yarating.

### U brauzerda ishlaydi

Saqlash fayl yuklab oladi. Brauzer oʻzi uchun saqlab qoʻygan klaviatura yorliqlaridan foydalanib boʻlmaydi. Modellaringiz hech qachon kompyuteringizdan chiqmaydi: qarang: [Fayllaringiz qayerga boradi](common:your-files).

## Hozirgi dasturingizda davom ettiradigan ishlar

Hozircha DetailCraft kichik ramkalar, gʻoyani tekshirish, oʻqitish yoki oddiy toʻsin va ustun ishlari uchun NC fayllar hamda ishlab chiqarish chizmalarini tayyorlash uchun mos. Murakkab ulanmalarni, umumiy joylashuv chizmalarini, oʻrnatish chizmalarini, koʻp foydalanuvchili loyihalarni va [Hali qurilmagan](topic:not-built-yet) roʻyxatidagi hamma narsani hozir ishlatayotgan dasturingizda qoldiring.
