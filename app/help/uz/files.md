---
title: Fayllarni ochish, saqlash va eksport qilish
summary: DetailCraft model fayli, u yozadigan har bir eksport, fayllar qayerga joylanishi va brauzer hamda ulanishga qarab farqlar.
keywords: ochish, saqlash, eksport, yuklab olish, fayl, json, ifc, nc1, dstv, csv, pdf, zip, formatlar, import
from: bd715ea3
---

DetailCraft oʻzining bitta fayl turiga ega — model — va beshta eksportga. Har bir saqlash va har bir eksport yuklab olish hisoblanadi. Hech narsa yuklanmaydi va hech narsa serverda saqlanmaydi.

## Model fayli

DetailCraft modeli `<name>.detailcraft.json` nomi bilan saqlanadi, bu yerda `<name>` — {{ui:Model}} panelidagi model nomi. Unda setkalar, sathlar, elementlar (teshiklari va kesmalari bilan), birikmalar va ularning sozlamalari, poydevorlar hamda sizning maxsus profillaringiz saqlanadi.

Detallar, belgilar, boltlar, payvandlar va armatura saqlanmaydi: DetailCraft ularni model har ochilganda modeldan qayta hisoblaydi. Shu sababli model fayli kichik boʻladi.

### Saqlash

1. {{ui:Model}} panelining yuqori qismidagi {{ui:Name}} maydoniga nom kiriting.
2. {{ui:File}} guruhida {{ui:Save}} ni tanlang yoki {{key:Mod+S}} tugmasini bosing.
3. Brauzer `<name>.detailcraft.json` faylini yuklab oladi. Holat satrida « Saqlandi … (yuklab olindi) » yoziladi va brauzer yorligʻi sarlavhasi boshidagi nuqta yoʻqoladi.

Har bir saqlash yangi yuklab olish boʻladi. Brauzer ochgan faylingizning ustiga yozmaydi; sozlamalariga qarab nomiga raqam qoʻshadi, masalan `Frame (1).detailcraft.json`, yoki qayerga saqlashni soʻraydi. Oʻz versiyalaringizni yuklab olingan fayllarni qayta nomlash orqali saqlab qoʻying.

:::chromium
Chrome va Edge fayllarni Yuklab olishlar papkasiga saqlaydi, agar brauzerning yuklab olish sozlamalarida **Har bir faylni yuklashdan oldin qayerga saqlashni soʻrash** yoqilgan boʻlmasa. Papkani va fayl nomini har safar tanlamoqchi boʻlsangiz, uni yoqing.
:::

:::firefox
Firefox fayllarni Yuklab olishlar papkasiga saqlaydi yoki, agar sozlamalarida **Fayllarni qayerga saqlashni har doim soʻrash** yoqilgan boʻlsa, har safar soʻraydi.
:::

:::safari
Safari fayllarni Yuklab olishlar papkasiga saqlaydi. Papkani oʻzgartirish uchun **Safari, Sozlamalar, Umumiy, Fayl yuklab olish joyi** ni oching.
:::

### Ochish

1. {{ui:File}} guruhida {{ui:Open}} ni tanlang yoki {{key:Mod+O}} tugmasini bosing.
2. `.detailcraft.json` faylini tanlang.

Yoki faylni {{pick:mac=Finder|windows=File Explorer|linux=fayl menejeringiz}} dan sudrab koʻrinishga tashlang. Sudrash paytida koʻrinishda « Ochish uchun DetailCraft modelini tashlang » yoziladi.

Ochiq modelda saqlanmagan oʻzgarishlar boʻlsa, DetailCraft avval soraydi: {{ui:Cancel}}, {{ui:Discard changes}} yoki {{ui:Save first}}.

DetailCraft faylning har bir maydonini ishlatishdan oldin tekshiradi. Foydalanib boʻlmaydigan narsalar chetlab oʻtiladi va holat satri nima ekanini aytadi, masalan « 2 ta element yaroqsiz edi va chetlab oʻtildi. » Yangiroq DetailCraft tomonidan saqlangan model rad etiladi va xabar koʻrsatiladi, yarim toʻgʻri ochilmaydi.

### Nimani ochadi

Oʻzining model fayllari (`.json`, 50 MB gacha) va IFC fayllari (`.ifc`, IFC2X3 yoki IFC4, 200 MB gacha). IFC fayl ochilganda yoki {{ui:Import IFC}} bilan kiritilganda, u oʻz toʻsinlari, ustunlari, elementlari, plastinalari, setkalari va sathlari bilan yangi model boʻladi; teshiklar va kesmalar ularga kesiladi, boltlari esa erkin boltlar sifatida qoladi. Chetlab oʻtilgan narsalar haqida hisobot chiqadi. Qarang: [IFC eksporti](topic:ifc-export#import). DWG, DXF yoki boshqa detallashtirish dasturining modelini hali ochmaydi; urinilganda « DetailCraft oʻz modellarini (.detailcraft.json) va IFC fayllarni (.ifc) ochadi. » degan xabar chiqadi.

## Yoʻqolgan ish, oxirgi fayllar, ish stoli ilovasi

- Saqlanmagan oʻzgarishlari bor model nusxasini DetailCraft shu brauzerda saqlab turadi. Agar saqlashdan oldin yorliq yoki brauzer toʻxtab qolsa, DetailCraft keyingi ochilishda **Ishingizni tiklaysizmi?** deb soraydi: nusxani tiklang yoki qoldiring. Qarang: [Ishni tiklash](common:recover).
- Oxirgi ochilgan modellar, agar brauzer ularni qayta ochishga ruxsat bersa, boshlangʻich ekranda roʻyxatlanadi; qayta ochish uchun birini bosing.
- Ish stoli ilovasida {{ui:Save}} modelni ochgan faylingizga qayta yozadi (brauzerda esa nusxa yuklab olinadi). DetailCraft modeli yoki IFC faylini ikki marta bosish uni DetailCraftda ochadi.

## Eksportlar

Barcha eksportlar model nomidan foydalanadi. Ularni {{ui:Output}} guruhida tanlang.

| Tugma | Fayl | Unda nima bor |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: sathlar, setkalar, har bir poʻlat detal teshiklari va kesmalari bilan profil ekstruziyasi sifatida, yigʻmalar, boltlar va ankerli sterjenlar, poydevorlar va har bir armatura. Qarang: [IFC eksporti](topic:ifc-export). |
| {{ui:NC files}} | `<name> NC.zip` | Har bir detal belgisi uchun bitta DSTV `.nc1` fayli. Qarang: [NC fayllarni sexga yuborish](topic:nc-export). |
| {{ui:BOM}} | `<name> BOM.csv` | Bitta faylda uchta jadval: detallar, yigʻmalar, boltlar va ankerli sterjenlar. Qarang: [Belgilar va materiallar roʻyxati](topic:marks-and-bom). |
| {{ui:Bending}} | `<name> bending schedule.csv` | Poydevorlardagi har bir armatura belgisi. Qarang: [Poydevorlar va armatura](topic:footings-and-rebar). |
| {{ui:Shop drawing}} | `<name> <mark>.pdf` | Tanlangan detal (I-shakllar va plastinalar) uchun bitta varaq (boshqa oʻlcham tanlamagan boʻlsangiz A3). Qarang: [Ishlab chiqarish chizmasini yaratish](topic:shop-drawings). |
| {{ui:Drawings}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` yoki `.dxf`, bir nechtasi `<name> drawings DWG.zip` (yoki `DXF.zip`) ichida | Tanlagan varaq oʻlchamidagi reja, fasad va yigʻma chizmalar; DWG va DXF toʻliq oʻlchamda, qogʻozda 1 birlik = 1 mm. Qarang: [Umumiy joylashuv va yigʻma chizmalar](topic:drawings). |

### CSV fayllar haqida

- Ular bayt tartibi belgisi bilan boshlanadi, shuning uchun elektron jadval dasturlari aksentli harflarni toʻgʻri oʻqiydi.
- `=`, `+`, `-` yoki `@` bilan boshlanadigan (oddiy son boʻlmagan) katakka oldiga apostrof qoʻyiladi, shuning uchun elektron jadval uni formula sifatida bajarmaydi.
- Uzunliklar millimetrda, ogʻirliklar kilogrammda.

### PDF haqida

PDF matni standart Helvetica shriftidan foydalanadi. Unda boʻlmagan belgilar (Gʻarbiy Yevropa toʻplamidan tashqari) « ? » sifatida chop etiladi, holat satri esa ularning sonini koʻrsatadi.

## Birliklar

DetailCraft hamma joyda millimetrda ishlaydi: setkalar, sathlar, koordinatalar, profillar, teshiklar va barcha eksportlar. Profil nomlari oʻzining nashr etilgan shaklini saqlaydi (W12x50 — AQSh belgilanishi, oʻlchamlari esa mm da koʻrsatilgan). Hozircha imperial birliklarda kiritish yoʻq.

## Onlayn va oflayn

Ochish, saqlash va eksport qilish hammasi brauzeringizda bajariladi, shuning uchun DetailCraft yuklangach ular ulanish bilan yoki ulanishsiz bir xil ishlaydi.

DetailCraftdan keyinroq ulanishsiz foydalanish uchun onlayn holatda ilova panelidagi {{ui:Save for offline}} ni tanlang. Tugma sanashni koʻrsatadi (« 3 / 20 saqlanmoqda ») va keyin {{ui:Offline ready}} deb yozadi. Saqlangan nusxaga 3D grafika kutubxonasi (taxminan 2,6 MB) va bu yordam kiradi, shuning uchun saqlangandan keyin 3D koʻrinish, barcha eksportlar va yordam oflaynda ishlaydi. Tafsilotlar va ulanishni talab qiladigan narsalar: [Oflaynda ishlash](common:offline).

:::offline
Siz oflaynsiz. Agar ilova panelida {{ui:Offline ready}} koʻrsatilsa, ochish, saqlash va eksport odatdagidek ishlaydi. Aks holda bu yorliqni ochiq qoldiring, ulanish tiklanmaguncha uni qayta yuklamang va modelingizni hozir saqlang.
:::

Bulutli saqlash hali mavjud emas va ish stoli versiyalari hali yoʻq. `.detailcraft.json` fayllaringizni boshqa ish fayllari kabi zaxiralang. Batafsil: [Fayllaringiz qayerga boradi](common:your-files).

## Saqlanmagan ish

DetailCraft modelni faqat ochiq yorliqda saqlaydi. Agar saqlanmagan oʻzgarishlar bilan yorliqni yopsangiz yoki qayta yuklasangiz, brauzer sahifani tark etishni soraydi; matni brauzerning oʻziniki boʻladi. {{key:Mod+S}} ni tez-tez bosib saqlang.
