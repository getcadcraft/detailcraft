---
title: Belgilash qoidalari
summary: Ikki qism yoki ikki yigʻma qachon bir belgini ulashishi, belgilar qanday raqamlanishi va poydevor hamda armatura belgilari qanday ishlashi.
keywords: belgilar, raqamlash, qism belgisi, yigʻma belgisi, detal belgisi, prefiks, tolerans, bir xil qismlar, armatura belgilari, poydevor belgilari
from: ce02c98e
---

DetailCraft har bir oʻzgarishdan keyin har bir belgini qayta hisoblaydi. Hech narsa saqlanmaydi, shuning uchun belgilar har doim modelning hozirgi holatini ifodalaydi. Ulardan qanday foydalanish haqida [Belgilarni va materiallar roʻyxatini tekshirish](topic:marks-and-bom) boʻlimiga qarang.

## Qism belgilari

Ikki qism qism belgisini ulashadi, agar quyidagilarning hammasi mos kelsa:

1. Qism turi (toʻsin, ustun, bogʻlama yoki plastina).
2. Profil nomi (katta-kichik harf farqlanmaydi).
3. Material (katta-kichik harf farqlanmaydi).
4. Kesish uzunligi, 1 mm ichida.
5. Har bir teshik: yuzi, boʻylama va koʻndalang joylashuvi, 1 mm ichida, diametri esa 0.1 mm ichida.
6. Har bir kesim: uchi, tomoni, uzunligi va chuqurligi, 1 mm ichida.

Elementning {{ui:Nom}} i hisobga olinmaydi. Modeldagi joylashuvi, aylanishi va qanday chizilgani ham hisobga olinmaydi, agar qismning oʻzi bir xil boʻlsa.

### Teskari aylantirilgan qismlar

Qism oʻz kesimini oʻziga moslaydigan barcha aylantirish usullarida solishtiriladi. Ulardan biri uni boshqa qismga mos qilsa, ular bir belgini ulashadi.

| Shakl | Hisobga olinadigan aylantirishlar |
|---|---|
| I-shakllar, toʻgʻri burchakli HSS, plastinalar | Uchini almashtirish (vertikal oʻq atrofida), uchini almashtirish (gorizontal oʻq atrofida) va oʻz uzunligi boʻylab teskari aylantirish |
| Kanallar | Faqat gorizontal oʻq atrofida uchini almashtirish, shunda devor bir tomonda qoladi |
| Burchaklar, dumaloq HSS | Yoʻq: qoʻyilgandek solishtiriladi |

Shunday qilib, chap uchi yaqinida teshigi bor toʻsin, oʻng uchi yaqinida xuddi shunday teshigi bor toʻsinga mos keladi; bir tokchasida teshiklari boʻlgan ustun, ikkinchi tokchasida xuddi shunday teshiklari boʻlgan ustunga mos keladi.

### Raqamlash

| Turi | Qism prefiksi | Yigʻma prefiksi |
|---|---|---|
| Ustun | c | C |
| Toʻsin | b | B |
| Bogʻlama | br | BR |
| Plastina (joylashtirilgan, uchlik plastina yoki tayanch plastina) | p | P |

Belgilar har bir prefiks ichida 1 dan raqamlanadi. Tartib: avval ustunlar, soʻng toʻsinlar, bogʻlamalar va plastinalar; tur ichida profil nomi boʻyicha tabiiy tartibda (W8x10 W12x26 dan oldin); soʻng uzunroq qismlar birinchi.

Raqamlash shu tartibga amal qilgani uchun bitta qismni qoʻshish yoki oʻzgartirish boshqalarning raqamini siljitishi mumkin.

## Yigʻma belgilari

- Boshqa qismga payvandlanmagan har bir qism oʻz yigʻmasining asosiy qismi hisoblanadi.
- Uchlik plastinalar oʻz toʻsiniga, tayanch plastinalar esa oʻz ustuniga payvandlanadi, shuning uchun ular oʻsha elementning yigʻmasiga kiradi.
- Ikki yigʻma bir belgini ulashadi, agar ularning asosiy qismlari qism belgisini ulashsa va biriktirilgan qismlari bir xil joylarda bir xil belgilarga ega boʻlsa (1 mm ichida), asosiy qism uchun ruxsat etilgan aylantirishlar bilan birga.
- Yigʻma prefiksi asosiy qismga ergashadi: ikkita uchlik plastinali toʻsin B yigʻmasi hisoblanadi.

{{ui:Plastina}} asbobi bilan joylashtirgan plastinalar hech narsaga payvandlanmaydi, shuning uchun har biri oʻz P yigʻmasi boʻladi.

## Poydevor belgilari

Bir xil uzunlik, kenglik, chuqurlik, beton tavsifi, pastki toʻr va boshlangʻich sterjenlarga ega poydevorlar bir belgini ulashadi: F1, F2 … joylashtirilgan tartibda. Joylashuv va aylanish hisobga olinmaydi.

## Armatura belgilari

Bir xil oʻlcham, shakl va A, B, C oʻlchamlariga ega (millimetrgacha yaxlitlangan) sterjenlar barcha poydevorlar boʻylab bitta belgini ulashadi. Belgi sterjen raqami, F, va har bir sterjen oʻlchami uchun hisoblagichdan iborat: 5F1, 5F2, 6F1. Kvadrat poydevorning uzun va qisqa tomon sterjenlari bir xil sterjen boʻlib, bitta belgini ulashadi; jadvalning {{ui:Nima uchun ishlatiladi}} ustuni ikkala foydalanishni ham koʻrsatadi.
