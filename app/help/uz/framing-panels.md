---
title: Yogʻoch va yengil poʻlat karkasli panellar
summary: Yogʻoch yoki yengil poʻlat karkasli devor, pol va tom panellarini har bir boʻlak, kesish roʻyxati, sex chizmasi va sotib olinadigan material bilan yarating.
keywords: karkas, yogʻoch, taxta, yengil poʻlat, sovuq shakllantirilgan, stoyka, lag, stropila, tirgak, asosiy stoyka, yordamchi stoyka, qisqa stoyka, kesish roʻyxati, sex chizmasi, panel
from: 3e38ffb9
---

{{ui:Karkas}} yorligʻi siz tavsiflagan panellarni karkaslaydi va qurilish brigadasi hamda yogʻoch doʻkoni soʻraydigan narsalarni beradi. Panellar model faylida saqlanadi.

:::warning
Oʻlchamlar, oraliq va tirgaklar sizniki. DetailCraft bu oraliqdagi stoykaning shu devorni koʻtarishini yoki tirgakning shu oʻyiqni qoplashini tekshirmaydi: bu sizning kodingizning jadvallari va muhandisingizning ishi.
:::

## Panel qoʻshish

{{ui:Devor qoʻshish}}, {{ui:Pol qoʻshish}} yoki {{ui:Tom qoʻshish}} ni tanlang, soʻng oʻlchamlarni millimetrda, materialni (yogʻoch yoki yengil poʻlat) va element oʻlchamini kiriting. Yogʻoch oʻlchamlari nominal nomlari va ularning silliqlangan oʻlchamlari bilan (2×4 — 38 × 89 mm). Poʻlat stoykalar chuqurlik va qalinlik boʻyicha nomlanadi, masalan `C92-1.2`.

## Devorlar

Devorda pastki plastina, bir yoki bir nechta yuqori plastina (poʻlat uchun bitta relsa), chetki stoykalar, siz bergan oraliqda stoykalar va har bir oʻyiq uchun: ikkita asosiy stoyka, ikkita yordamchi stoyka, tanlagan oʻlcham va qatlamda tirgak hamda tirgak ustidagi qisqa stoykalar (deraza tokchasi ostida ham). Har bir oʻyiqqa chap uchidan masofasini, kengligini va tagpoldan oʻlchangan xom oʻyigʻining yuqori hamda pastki nuqtalarini bering; eshikning pastki qismi 0 ga teng.

## Pollar va tomlar

Pol — kengligi boʻylab balkalari va oraliq boʻylab, ikki uchida boʻylama chekka balkalar hamda agar belgilasangiz, oraliq oʻrtasida bloklash. Tom paneli — fronton: siz bergan oraliqda bir juft stropila (ularning uzunligiga qiya boʻylab tomning chiqib turishi kiradi) va tokcha taxtasi.

## Nima olasiz

Har bir panel oʻz boʻlaklarini masshtabda chizilgan chizmada, har bir boʻlak belgilangan holda, belgi boʻyicha kesish roʻyxati va jami bilan koʻrsatadi. {{ui:Sotib olinadigan material}} jadvali barcha panellarning kesimlarini standart uzunlikdagi taxtalarga joylaydi — har bir taxta uchun kesimlarni joylashtiradigan eng qisqa uzunlik. {{ui:Sex chizmasini saqlash (SVG)}} chizmani yozadi; {{ui:CSV}} tugmasi barcha kesish roʻyxatlarini va material roʻyxatini yozadi.

## Panelni modelga joylashtirish

Har bir panel ostida uning qayerga borishini kiriting (x, y, z millimetrda va burchak), keyin {{ui:Elementlar sifatida joylashtirish}} ni bosing: har bir boʻlak modelning elementiga aylanadi, oʻz oʻlchamidagi silliqlangan kesim va material ogʻirligi bilan (yogʻoch uchun taxminan 500 kg/m³, stoykalar uchun poʻlat). Devor pastki chap uchidan burchak boʻylab yuradi, pastki qismi z da; polning balkalari ostki yuzasi z da yotadi; tomning fronton koʻrinishi burchak boʻylab yuradi, z esa yuqori plastinka tepasida boʻladi. Har bir tirgak qatlami yonma-yon turgan element boʻladi. Yana bosilsa, avval joylashtirilganlar almashtiriladi; {{ui:Joylashtirilgan elementlarni olib tashlash}} ularni chiqarib tashlaydi, har biri bitta bekor qilish qadami. Tahlil bu elementlarni hisobga olmaydi: ular poʻlat karkas elementlari emas.

## PDF varaqlar

{{ui:PDF varaqlar}} har bir panel uchun bitta A3 sahifani saqlaydi: masshtabdagi panel, har bir boʻlak belgilangan, umumiy oʻlchamlar, kesish roʻyxati va sarlavha chizigʻi.

{{ui:Muammolar}} panelidagi muammolar: devor chetiga yoki boshqa oʻyiqqa juda yaqin oʻyiq, yuqori plastinkalar ostiga sigʻmaydigan tirgak, eng uzun standart materialdan uzunroq boʻlak.

{{ui:Muammolar}} paneli, shuningdek, devor panellari va betonli devorlar uchun **Interfeyslar (LOD 350)** ni koʻrsatadi: devor chetidan yoki tepasidan oʻtib ketadigan oʻyiq, bir-biriga kesishadigan ikki oʻyiq va chegaralovchi sterjensiz 1000 mm dan kengroq betonli devor oʻyigʻi. Bular maslahatdir, BimCraft auditi bajaradigan qoidalarning oʻzi; kenglik CadCraft ning boshlangʻich qiymati, standart emas.
