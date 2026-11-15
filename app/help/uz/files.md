---
title: Fayllarni ochish, saqlash va eksport qilish
summary: DetailCraft model fayli, u yozadigan har bir eksport, fayllar qayerga boradi va brauzer hamda ulanishga qarab nima farq qilishi.
keywords: ochish, saqlash, eksport, yuklab olish, fayl, json, ifc, nc1, dstv, csv, pdf, zip, formatlar, import
from: 6fbc8e8f
---

DetailCraft oʻzining bitta fayliga ega — model — va beshta eksportga. Har bir saqlash va har bir eksport yuklab olishdir. Hech narsa serverga yuklanmaydi va hech narsa serverda saqlanmaydi.

## Model fayli

DetailCraft modeli `<name>.detailcraft.json` nomi bilan saqlanadi, bu yerda `<name>` — {{ui:Model}} panelidagi model nomi. Unda setkalar, sathlar, elementlar (teshiklar va kesimlar bilan), ulanishlar va ularning sozlamalari, poydevorlar hamda sizning maxsus profillaringiz saqlanadi.

Detallar, belgilar, boltlar, payvandlar va armaturalar saqlanmaydi: DetailCraft ularni modelni har safar ochganda qayta hisoblaydi. Shu sababli model fayli kichik boʻladi.

### Saqlash

1. {{ui:Model}} panelining yuqorisidagi {{ui:Name}} maydoniga nom kiriting.
2. {{ui:File}} guruhida {{ui:Save}} ni tanlang yoki {{key:Mod+S}} ni bosing.
3. Brauzer `<name>.detailcraft.json` ni yuklab oladi. Holat satrida "Saqlandi … (yuklab olindi)" yoziladi va brauzer yorligʻi sarlavhasidagi nuqta yoʻqoladi.

Har bir saqlash yangi yuklab olish boʻladi. Brauzer ochgan faylingizni ustiga yozmaydi; sozlamalariga qarab nomiga raqam qoʻshadi, masalan `Frame (1).detailcraft.json`, yoki qayerga saqlashni soʻraydi. Oʻz versiyalaringizni yuklab olingan fayllarni qayta nomlab saqlang.

:::chromium
Chrome va Edge yuklab olishlarni Downloads jildiga saqlaydi, agar brauzerning yuklab olish sozlamalarida **Ask where to save each file before downloading** yoqilmagan boʻlsa. Har safar jild va fayl nomini tanlashni xohlasangiz, uni yoqing.
:::

:::firefox
Firefox fayllarni Downloads jildiga saqlaydi yoki, agar sozlamalarida **Always ask you where to save files** yoqilgan boʻlsa, har safar soʻraydi.
:::

:::safari
Safari fayllarni Downloads jildiga saqlaydi. Jildni oʻzgartirish uchun **Safari, Settings, General, File download location** ni oching.
:::

### Ochish

1. {{ui:File}} guruhida {{ui:Open}} ni tanlang yoki {{key:Mod+O}} ni bosing.
2. `.detailcraft.json` faylini tanlang.

Yoki faylni {{pick:mac=Finder|windows=File Explorer|linux=fayl boshqaruvchingiz}} dan koʻrinishga sudrab tashlang. Sudrash paytida koʻrinish "Drop a DetailCraft model to open it" deb yozadi: "Ochish uchun DetailCraft modelini tashlang".

Ochilgan modelda saqlanmagan oʻzgarishlar boʻlsa, DetailCraft avval soʻraydi: {{ui:Cancel}}, {{ui:Discard changes}} yoki {{ui:Save first}}.

DetailCraft fayldan foydalanishdan oldin uning har bir maydonini tekshiradi. Foydalanib boʻlmaydigan narsa chetlab oʻtiladi va holat satrida nima ekani yoziladi, masalan "2 members were not valid and left out." — "2 ta element notoʻgʻri edi va chetlab oʻtildi." DetailCraft ning yangi versiyasi bilan saqlangan model yarim notoʻgʻri ochilmasdan, xabar bilan rad etiladi.

### Nimalarni ochadi

Oʻzining model fayllari (`.json`, 50 MB gacha) va IFC fayllari (`.ifc`, IFC2X3 yoki IFC4, 200 MB gacha). IFC fayl ochilganda yoki {{ui:Import IFC}} bilan kiritilganda, u oʻz toʻsinlari, ustunlari, elementlari, plastinalari, setkalari va sathlaridan yangi model boʻladi; teshiklar va kesimlar ularga kesiladi, boltlari esa erkin boltlar sifatida qoʻyiladi. Chetlab oʻtilganlar haqida hisobot yoziladi. Qarang: [IFC eksporti](topic:ifc-export#import). U hali DWG, DXF yoki boshqa detallash dasturining modelini ochmaydi; urinilsa "DetailCraft oʻz modellarini (.detailcraft.json) va IFC fayllarini (.ifc) ochadi." chiqadi.

## Yoʻqolgan ish, soʻnggi fayllar, ish stoli ilovasi

- Model saqlanmagan oʻzgarishlarga ega boʻlganda, DetailCraft nusxasini shu brauzerda saqlaydi. Agar yorliq yoki brauzer saqlashdan oldin toʻxtasa, DetailCraft keyingi ochilganda **Ishingizni tiklaysizmi?** deb soʻraydi: nusxani tiklang yoki qoldiring. Qarang: [Ishingizni tiklash](common:recover).
- Brauzer ruxsat bersa, siz yaqinda ochgan modellar boshlash ekranida roʻyxatda chiqadi; ularni qayta ochish uchun bitta modelni bosing.
- Ish stoli ilovasida {{ui:Save}} modelni ochgan faylingizga qayta yozadi (brauzerda esa nusxa yuklab olinadi), DetailCraft modeli yoki IFC faylini ikki marta bosish uni DetailCraft da ochadi.

## Eksportlar

Barcha eksportlar model nomidan foydalanadi. Ularni {{ui:Output}} guruhida tanlang.

| Tugma | Fayl | Ichida nima bor |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: sathlar, setkalar, har bir poʻlat detal profil ekstruziyasi sifatida teshiklari va kesimlari bilan, yigʻmalar, boltlar va ankerlar, poydevorlar va har bir armatura. Qarang: [IFC ni eksport qilish](topic:ifc-export). |
| {{ui:NC files}} | `<name> NC.zip` | Har bir detal belgisi uchun bitta DSTV `.nc1` fayl. Qarang: [NC fayllarni ustaxonaga yuborish](topic:nc-export). |
| {{ui:BOM}} | `<name> BOM.csv` | Bitta faylda uchta jadval: detallar, yigʻmalar, boltlar va ankerlar. Qarang: [Belgilar va materiallar roʻyxati](topic:marks-and-bom). |
| {{ui:Bending}} | `<name> bending schedule.csv` | Poydevorlardagi har bir armatura belgisi. Qarang: [Poydevorlar va armatura](topic:footings-and-rebar). |
| {{ui:Shop drawing}} | `<name> <mark>.pdf` | `<name> Shop drawings.pdf` har bir detal belgisi uchun bitta varaqni saqlaydi; {{ui:Download this sheet}} hozir koʻrsatilgan varaqni beradi (boshqa oʻlcham tanlamagan boʻlsangiz A3). Qarang: [Ishlab chiqarish chizmalarini tayyorlash](topic:shop-drawings). |
| {{ui:Drawings}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` yoki `.dxf`, bir nechtasi `<name> drawings DWG.zip` (yoki `DXF.zip`) ichida | Tanlagan varaq oʻlchamidagi rejalar, fasadlar va yigʻma chizmalar; DWG va DXF toʻliq oʻlchamda, qogʻozda 1 birlik = 1 mm. Qarang: [Umumiy joylashuv va yigʻma chizmalar](topic:drawings). |

### CSV fayllar haqida

- Ular bayt tartibi belgisi bilan boshlanadi, shuning uchun elektron jadval dasturlari urgʻu belgili harflarni toʻgʻri oʻqiydi.
- `=`, `+`, `-` yoki `@` bilan boshlanadigan (oddiy son boʻlmagan) katak oldiga apostrof qoʻyiladi, shunda elektron jadval uni formula sifatida bajarmaydi.
- Uzunliklar millimetrda, ogʻirliklar kilogrammda.

### PDF haqida

PDF dagi matn standart Helvetica shriftidan foydalanadi. Unda boʻlmagan belgilar (Gʻarbiy Yevropa toʻplamidan tashqari) "?" bilan chop etiladi va holat satri ularning sonini koʻrsatadi.

## Birliklar

DetailCraft hamma joyda millimetrlarda ishlaydi: setkalar, sathlar, koordinatalar, profillar, teshiklar va barcha eksportlar. Profil nomlari oʻzining chop etilgan shaklini saqlaydi (W12x50 AQSh belgisi, oʻlchamlari mm da koʻrsatilsa ham). Hozircha dyuym bilan kiritish yoʻq.

## Onlayn va oflayn

Ochish, saqlash va eksport hammasi brauzeringizda boʻladi, shuning uchun DetailCraft yuklangach, ulanish bilan yoki ulanishsiz bir xil ishlaydi.

Keyinchalik ulanishsiz ishlash uchun, ulanganingizda ilova panelidagi {{ui:Save for offline}} ni tanlang. Tugma sanaydi ("Saving 3 of 20") va keyin {{ui:Offline ready}} deb yozadi. Saqlangan nusxaga 3D grafika kutubxonasi (taxminan 2.6 MB) va bu yordam kiradi, shuning uchun saqlangandan keyin 3D koʻrinish, barcha eksportlar va yordam oflaynda ishlaydi. Tafsilotlar va ulanishni talab qiladigan narsalar: [Oflaynda ishlash](common:offline).

:::offline
Siz oflaynsiz. Ilova panelida {{ui:Offline ready}} koʻrinsa, ochish, saqlash va eksport odatdagidek ishlaydi. Aks holda bu yorliqni ochiq qoldiring, ulanish qaytmaguncha uni qayta yuklamang va modelingizni hozir saqlang.
:::

Bulutli saqlash hali mavjud emas va ish stoli nashrlari hali chiqmagan. `.detailcraft.json` fayllaringizni boshqa ish fayllari kabi zaxiralang. Batafsil: [Fayllaringiz qayerga boradi](common:your-files).

## Saqlanmagan ish

DetailCraft modelni faqat ochiq yorliqda saqlaydi. Agar saqlanmagan oʻzgarishlar bilan yorliqni yopsangiz yoki qayta yuklasangiz, brauzer sahifadan chiqishni soʻraydi; matni brauzerning oʻzidan. {{key:Mod+S}} ni tez-tez bosib saqlang.
