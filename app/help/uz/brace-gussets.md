---
title: Tirgak gussetlari
summary: Tirgak uchini gusset plastina bilan ustun yoki toʻsinga ulang: burchaklar va yassi tasmalar boltlanadi, quvurlar kesik orqali payvandlanadi.
keywords: gusset, gusset plastinasi, tirgak, bogʻlash, vertikal tirgak, burchakli tirgak, yassi tasma, bogʻich, HSS tirgak, pichoq plastina, kesikli quvur, ulash
from: 22f6598d
---

Tirgak gussetlari — tirgak tushadigan ustun (yoki toʻsin) ustiga sexda payvandlangan plastina boʻlib, tirgak tekisligida joylashadi. DetailCraft tugunda tirgakni hamma narsadan uzoqroqqa kesadi, gussetni joylashtiradi va oʻlchamini belgilaydi hamda tirgakni unga ulaydi: **burchak** yoki **yassi tasma** bir qator boltlar bilan, **quvur** (kvadrat, toʻrtburchak yoki dumaloq HSS) esa gussetga kiydirilib payvandlanadi.

## Qayerda ishlaydi

- Tirgakning uchi ustun yoki toʻsin chizigʻida (1 mm ichida) joylashgan boʻladi va tirgak shu chiziqqa deyarli parallel emas. Agar tayanch boʻlsa, ustun tayanch hisoblanadi; aks holda toʻsin.
- Gusset tirgak tekisligida va tayanch chizigʻida joylashadi. **Burchak** tekislikda bir qirrasi bilan turishi kerak, **yassi tasma** esa oʻz yuzi bilan: tirgakni ({{ui:Rotation (°)}}) shunday burang. Burchak qirralari tekislikka 45° boʻlsa, DetailCraft buni aytadi va hech narsa qurmaydi.
- Tirgak sifatida I-profil va shveller ulanmaydi.

## Gussetlarni qoʻshish

1. Bir yoki bir nechta tirgakni tanlang.
2. {{ui:Connect}} guruhidagi {{ui:More}} menyusidan {{ui:Gusset}} ni tanlang.
3. Tanlangan tirgaklarning ustun yoki toʻsinga tushadigan va gussetga ega boʻlmagan har bir uchiga gusset qoʻyiladi.

Gussetni (plastinani bosib) tanlang va uning parametrlarini oʻzgartiring. {{ui:Apply to similar (n)}} uni bir xil tirgak va tayanch profilidagi har bir boʻsh tirgak uchiga nusxalaydi.

## DetailCraft nimani hisoblaydi

- **Orqaga kesish.** Tirgak shu uchida burchaklari boʻshaguncha qisqartiriladi: {{ui:Brace clearance}} (25) boʻyicha, tugundagi har bir element boʻyicha (yonida yoki element shu yerda tugasa, uning uchidan tashqarida) va ustun ostidagi tayanch plastina boʻyicha.
- **Boltlar (burchaklar, yassilar).** {{ui:Bolts}} (3 ta) tirgak boʻylab bir qatorda, kesilgan uchidan birinchisi {{ui:Bolt end distance}} (40) masofada, {{ui:Bolt pitch}} (75) qadam bilan. Burchakda ular gusset tekisligidagi qirra orqali oʻtadi, poshnadan {{ui:Bolt gauge}} masofada (0 = qirraning oʻrtasi); yassi tasmada uning markaziy chizigʻida (yoki oraliq boʻyicha undan siljigan holda). Boltlar ushlab turishi = qirra yoki yassi + gusset.
- **Gusset.** Toʻgʻri toʻrtburchak: tayanch yuzidan oxirgi boltdan uchi masofasi qadar tashqariga, boltlarga kerak boʻlgancha tayanch boʻylab. U burchak qirrasining orqasiga (yoki yassi tasma yuziga) tegib turadi. Quvur uchun u quvurning oʻrtasidan oʻtadi, quvurning {{ui:Tube lap on the gusset}} (200) qismi ostida, payvandlar uchun joy bilan.
- **Birikmalar.** Ustun tagida gusset tayanch plastinaga tushiriladi. Toʻsin birikma kesib oʻtganda (toʻsin-ustun burchagiga tirgak koʻtarilganda) gusset toʻsin ostida yoki ustida qoladi. Bu boltlarni yoki bogʻlamni oʻz uchi masofasisiz qoldirsa, DetailCraft ogohlantiradi.
- **Payvandlar.** Gusset va uning tayanchi, ikki tomondan. Quvur va gusset orasida, bogʻlam boʻylab toʻrt chiziq.

## Bilib oling

- Gusset tayanchning yigʻmasiga tegishli (sexda payvandlangan). Tirgak teshiklari burgʻulangan holda yetkaziladi va oʻz NC faylига ega boʻladi.
- Quvurdagi teshik modelda kesilmaydi; [toʻqnashuv tekshiruvi](topic:clash-check) tirgak va uning gussetini chetlab oʻtadi.
- Gusset unga tegib turgan toʻsinga payvandlanmaydi; toʻsin va ustunga birdek payvandlangan burchak gussetlar, faskali burchaklar va Uniform Force Method birikmasining ish nuqtasi tartibi hali qilinmagan.
- DetailCraft gussetni yoki boltlarni loyihalamaydi (mustahkamlik tekshiruvi yoʻq); ogohlantirishlar faqat masofa va yigʻilish haqida.
